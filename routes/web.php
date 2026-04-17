<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

use App\Http\Controllers\HomeController;
use App\Http\Controllers\BlogController;

Route::get('/home', [HomeController::class, 'index'])->name('home2');
Route::get('/blog', [BlogController::class, 'index'])->name('blog');
Route::inertia('/404', 'public/not-found')->name('404');

Route::middleware(['auth', 'verified'])->prefix('admin')->group(function () {
    Route::get('/', function() { return redirect()->route('admin.posts.index'); })->name('dashboard');
    Route::resource('categories', \App\Http\Controllers\Admin\CategoryController::class, ['as' => 'admin']);
    Route::resource('posts', \App\Http\Controllers\Admin\PostController::class, ['as' => 'admin']);
    Route::resource('clients', \App\Http\Controllers\Admin\ClientController::class, ['as' => 'admin']);
    Route::resource('portfolio', \App\Http\Controllers\Admin\PortfolioController::class, ['as' => 'admin']);
});

require __DIR__.'/settings.php';
