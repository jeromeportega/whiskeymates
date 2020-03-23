<?php

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

Route::prefix('v1')->group(function () {
    Route::prefix('user')->group(function () {
        Route::post('create', 'API\UserController@create');
        Route::post('login', 'API\Auth\LoginController@login');
    });

    Route::prefix('user')->middleware('auth:api')->group(function () {
        Route::get('/', 'API\UserController@index');
    });

    Route::prefix('whiskey')->middleware('auth:api')->group(function () {
        Route::post('/', 'API\WhiskeyController@create');
    });
});
