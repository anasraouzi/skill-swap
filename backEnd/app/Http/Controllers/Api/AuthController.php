<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    /**
     * Login or auto-register by name + email.
     * Matches the frontend "enter name + email to join" flow.
     */
    public function loginOrRegister(LoginRequest $request): JsonResponse
    {
        $user = User::with('skills')->firstOrCreate(
            ['email' => strtolower($request->email)],
            [
                'name'   => trim($request->nom),
                'avatar' => strtoupper(
                    implode('', array_map(fn($p) => $p[0], explode(' ', trim($request->nom))))
                ),
                'password' => bcrypt(Str::random(32)),
            ]
        );

        $user->load('skills');

        $token = $user->createToken('skillswap-token')->plainTextToken;

        return response()->json([
            'token' => $token,
            'user'  => new UserResource($user),
        ]);
    }

    /**
     * Return the authenticated user's profile.
     */
    public function me(Request $request): JsonResponse
    {
        $user = $request->user()->load('skills');

        return response()->json(['user' => new UserResource($user)]);
    }

    /**
     * Revoke the current token (logout).
     */
    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logged out successfully.']);
    }
}
