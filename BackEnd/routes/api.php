<?php

use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/create-post', [PostController::class, 'create']);
Route::get('/all-post', [PostController::class, 'index']);
Route::get('/edit-post/{id}', [PostController::class, 'edit']);
Route::put('/update-post/{id}', [PostController::class, 'update']);
Route::delete('/delete-post/{id}', [PostController::class, 'delete']);
Route::get('/view-post/{id}', [PostController::class, 'view']);
