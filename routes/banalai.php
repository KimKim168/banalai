<?php

use App\Http\Controllers\BanalaiFrontPageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [BanalaiFrontPageController::class, 'index']);

Route::get('/products', [BanalaiFrontPageController::class, 'products']);

Route::get('/pricing', [BanalaiFrontPageController::class, 'pricing']);

Route::get('/about', [BanalaiFrontPageController::class, 'about']);

Route::get('/support', [BanalaiFrontPageController::class, 'support']);


Route::get('/banalai_register', function () {
    return Inertia::render('Banalai/Register');
});

Route::get('/banalai_login', function () {
    return Inertia::render('Banalai/BanalaiLogin');
});
