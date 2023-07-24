<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::get('/signup', [AuthController::class, 'showSignupForm'])->name('signup.show');
Route::post('/signup', [AuthController::class, 'processSignup'])->name('signup.process');

