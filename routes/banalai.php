<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Banalai/Index');
});

Route::get('/products', function () {
    return Inertia::render('Banalai/Products');
});

Route::get('/pricing', function () {
    return Inertia::render('Banalai/Pricing');
});

Route::get('/about', function () {
    return Inertia::render('Banalai/About');
});

Route::get('/support', function () {
    return Inertia::render('Banalai/Supoort');
});

Route::get('/register', function () {
    return Inertia::render('Banalai/Register');
});

Route::get('/login', function () {
    return Inertia::render('Banalai/Login');
});
