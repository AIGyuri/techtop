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
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ReviewController;
use App\Http\Middleware\UserIsAdmin;
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
})->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
});

Route::middleware(UserIsAdmin::class)->group(function () {
    Route::get('/brands', [BrandController::class, 'index'])->name('brands');
    // Route::get('/users', [UserController::class, 'index'])->name('users');
    Route::get('/orders', [OrderController::class, 'index'])->name('orders');
    Route::get('/orders-items', [OrderItemController::class, 'index'])->name('orders-items');

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/dashboard/product/create', [ProductController::class, 'create'])->name('products.create');
    Route::post('/dashboard/product', [ProductController::class, 'store'])->name('products.store');
    Route::get('/dashboard/product/{id}', [ProductController::class, 'edit'])->name('edit');
    Route::put('/dashboard/product/{id}', [ProductController::class, 'update'])->name('products.update');
    Route::delete('/products/{id}', [ProductController::class, 'destroy'])->name('destroy');

    Route::get('/dashboard/reviews', [ReviewController::class, 'index'])->name('dashboard.reviews');
});

Route::get('/about', [AboutController::class, 'index'])->name('about.index');
Route::get('/products', [ProductController::class, 'index'])->name('products');
Route::get('/products/{id}', [ProductController::class, 'show'])->name('product');
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');
Route::post('/reviews', [ReviewController::class, 'store'])->name('reviews.store');

require __DIR__ . '/auth.php';
