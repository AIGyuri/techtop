<?php

use App\Http\Controllers\BrandController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderItemController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/brands', [BrandController::class, 'index'])->name('brands');

Route::get('/products', [ProductController::class, 'index'])->name('products');

Route::get('/products/{id}', [ProductController::class, 'show'])->name('product');

Route::get('/users', [UserController::class, 'index'])->name('users');

Route::get('/orders', [OrderController::class, 'index'])->name('orders');

Route::get('/orders-items', [OrderItemController::class, 'index'])->name('orders-items');

Route::get('/cart', [CartController::class, 'index'])->name('cart.index');

Route::get('/about', [AboutController::class, 'index'])->name('about.index');


require __DIR__ . '/auth.php';
