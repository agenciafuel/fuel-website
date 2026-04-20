<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;



use App\Http\Controllers\HomeController;
use App\Http\Controllers\BlogController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/blog', [BlogController::class, 'index'])->name('blog');
Route::get('/blog/categoria/{slug}', [BlogController::class, 'category'])->name('blog.category');
Route::get('/blog/{slug}', [BlogController::class, 'show'])->name('blog.show');
Route::inertia('/404', 'public/not-found')->name('404');

Route::middleware(['auth', 'verified'])->prefix('admin')->group(function () {
    Route::get('/', function () {
        return redirect()->route('admin.posts.index'); })->name('dashboard');
    Route::resource('categories', \App\Http\Controllers\Admin\CategoryController::class, ['as' => 'admin']);
    Route::resource('posts', \App\Http\Controllers\Admin\PostController::class, ['as' => 'admin']);
    Route::resource('clients', \App\Http\Controllers\Admin\ClientController::class, ['as' => 'admin']);
    Route::resource('portfolio', \App\Http\Controllers\Admin\PortfolioController::class, ['as' => 'admin']);
});

require __DIR__ . '/settings.php';
