<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ExchangeController;
use App\Http\Controllers\Api\SkillController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| SkillSwap API Routes
|--------------------------------------------------------------------------
|
| Public routes: login/register, list users, view profile, search.
| Protected routes (require Sanctum token): profile update, skills, exchanges.
|
*/

// --- Auth ---
Route::post('/auth/login', [AuthController::class, 'loginOrRegister']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/auth/me',     [AuthController::class, 'me']);
    Route::post('/auth/logout', [AuthController::class, 'logout']);
});

// --- Users (public) ---
Route::get('/users',         [UserController::class, 'index']);
Route::get('/users/search',  [UserController::class, 'search']);
Route::get('/users/{user}',  [UserController::class, 'show']);

// --- Users (protected) ---
Route::middleware('auth:sanctum')->group(function () {
    Route::put('/users/{user}',       [UserController::class, 'update']);
    Route::post('/users/{user}/photo', [UserController::class, 'uploadPhoto']);

    // Skills
    Route::post('/users/{user}/skills',            [SkillController::class, 'store']);
    Route::put('/users/{user}/skills/{skill}',     [SkillController::class, 'update']);
    Route::delete('/users/{user}/skills/{skill}',  [SkillController::class, 'destroy']);

    // Exchanges
    Route::get('/exchanges',           [ExchangeController::class, 'index']);
    Route::post('/exchanges',          [ExchangeController::class, 'store']);
    Route::put('/exchanges/{exchange}', [ExchangeController::class, 'update']);
});
