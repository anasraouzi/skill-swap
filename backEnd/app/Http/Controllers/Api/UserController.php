<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * List all users with their skills.
     */
    public function index(): JsonResponse
    {
        $users = User::with('skills')->orderBy('created_at')->get();

        return response()->json(['users' => UserResource::collection($users)]);
    }

    /**
     * Search users by skill name (offre).
     * GET /api/users/search?q=Python
     */
    public function search(Request $request): JsonResponse
    {
        $query = trim($request->string('q'));

        $users = User::with('skills')
            ->whereHas('skills', function ($q) use ($query) {
                $q->where('type', 'offre')
                  ->where('name', 'like', "%{$query}%");
            })
            ->when(auth()->check(), fn($q) => $q->where('id', '!=', auth()->id()))
            ->orderBy('created_at')
            ->get();

        return response()->json(['users' => UserResource::collection($users)]);
    }

    /**
     * Return a single user profile.
     */
    public function show(int $user): JsonResponse
    {
        $user = User::with('skills')->findOrFail($user);

        return response()->json(['user' => new UserResource($user)]);
    }

    /**
     * Update the authenticated user's profile.
     */
    public function update(UpdateUserRequest $request, int $user): JsonResponse
    {
        $userModel = User::findOrFail($user);

        $data = $request->only(['bio']);

        if ($request->has('nom')) {
            $nom = trim($request->nom);
            $data['name']   = $nom;
            $data['avatar'] = strtoupper(
                implode('', array_map(fn($p) => $p[0], explode(' ', $nom)))
            );
        }

        $userModel->update($data);
        $userModel->load('skills');

        return response()->json(['user' => new UserResource($userModel)]);
    }

    /**
     * Upload a profile photo.
     * POST /api/users/{user}/photo
     */
    public function uploadPhoto(Request $request, int $user): JsonResponse
    {
        $request->validate([
            'photo' => ['required', 'image', 'max:2048'],
        ]);

        if ($request->user()->id !== $user) {
            return response()->json(['message' => 'Forbidden.'], 403);
        }

        $userModel = User::findOrFail($user);

        $path = $request->file('photo')->store("photos/{$user}", 'public');
        $userModel->update(['photo_path' => $path]);
        $userModel->load('skills');

        return response()->json(['user' => new UserResource($userModel)]);
    }
}
