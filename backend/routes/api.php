<?php

use App\Http\Controllers\usuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/usuarios',[usuarioController::class, 'index']);
Route::get('/usuarios/{id}',[usuarioController::class, 'show']);
Route::post('/usuarios',[usuarioController::class, 'store']);
//Route::put('/usuarios/{id}',[usuarioController::class, 'edit']);
Route::put('/usuarios/{id}',[usuarioController::class, 'updateStatu']);
Route::delete('/usuarios/{id}',[usuarioController::class, 'destroy']);
