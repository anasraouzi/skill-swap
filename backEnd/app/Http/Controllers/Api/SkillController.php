<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSkillRequest;
use App\Http\Requests\UpdateSkillRequest;
use App\Http\Resources\SkillResource;
use App\Http\Resources\UserResource;
use App\Models\Skill;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class SkillController extends Controller
{
    /**
     * Add a skill to a user.
     */
    public function store(StoreSkillRequest $request, int $user): JsonResponse
    {
        $userModel = User::findOrFail($user);

        $skill = $userModel->skills()->create($request->only('type', 'name'));

        $userModel->load('skills');

        return response()->json([
            'skill' => new SkillResource($skill),
            'user'  => new UserResource($userModel),
        ], 201);
    }

    /**
     * Rename an existing skill.
     */
    public function update(UpdateSkillRequest $request, int $user, int $skill): JsonResponse
    {
        $skillModel = Skill::where('user_id', $user)->findOrFail($skill);

        $skillModel->update($request->only('name'));

        $userModel = User::with('skills')->findOrFail($user);

        return response()->json([
            'skill' => new SkillResource($skillModel),
            'user'  => new UserResource($userModel),
        ]);
    }

    /**
     * Remove a skill.
     */
    public function destroy(UpdateSkillRequest $request, int $user, int $skill): JsonResponse
    {
        Skill::where('user_id', $user)->findOrFail($skill)->delete();

        $userModel = User::with('skills')->findOrFail($user);

        return response()->json(['user' => new UserResource($userModel)]);
    }
}
