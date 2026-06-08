<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreExchangeRequest;
use App\Http\Requests\UpdateExchangeRequest;
use App\Http\Resources\ExchangeResource;
use App\Models\Exchange;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ExchangeController extends Controller
{
    /**
     * List all exchanges involving the authenticated user.
     */
    public function index(Request $request): JsonResponse
    {
        $userId = $request->user()->id;

        $exchanges = Exchange::with(['requester.skills', 'target.skills'])
            ->where('requester_id', $userId)
            ->orWhere('target_id', $userId)
            ->orderByDesc('created_at')
            ->get();

        return response()->json(['exchanges' => ExchangeResource::collection($exchanges)]);
    }

    /**
     * Propose a new skill exchange.
     */
    public function store(StoreExchangeRequest $request): JsonResponse
    {
        $existing = Exchange::where('requester_id', $request->user()->id)
            ->where('target_id', $request->target_id)
            ->first();

        if ($existing) {
            return response()->json([
                'message'  => 'Exchange request already exists.',
                'exchange' => new ExchangeResource($existing->load(['requester.skills', 'target.skills'])),
            ], 409);
        }

        $exchange = Exchange::create([
            'requester_id' => $request->user()->id,
            'target_id'    => $request->target_id,
            'message'      => $request->message,
        ]);

        $exchange->load(['requester.skills', 'target.skills']);

        return response()->json(['exchange' => new ExchangeResource($exchange)], 201);
    }

    /**
     * Accept or reject an exchange request.
     * Only the target user can update the status.
     */
    public function update(UpdateExchangeRequest $request, int $exchange): JsonResponse
    {
        $exchangeModel = Exchange::findOrFail($exchange);

        if ($exchangeModel->target_id !== $request->user()->id) {
            return response()->json(['message' => 'Only the target user can respond to this request.'], 403);
        }

        $exchangeModel->update(['status' => $request->status]);
        $exchangeModel->load(['requester.skills', 'target.skills']);

        return response()->json(['exchange' => new ExchangeResource($exchangeModel)]);
    }
}
