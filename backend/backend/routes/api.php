<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/projects', [App\Http\Controllers\Api\ProjectController::class, 'index']);
Route::post('/projects', [App\Http\Controllers\Api\ProjectController::class, 'store']);
Route::get('/projects/{id}', [App\Http\Controllers\Api\ProjectController::class, 'show']);
Route::put('/projects/{id}', [App\Http\Controllers\Api\ProjectController::class, 'update']);
Route::delete('/projects/{id}', [App\Http\Controllers\Api\ProjectController::class, 'destroy']);        
