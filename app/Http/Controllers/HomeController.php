<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Client;
use App\Models\PortfolioImage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('public/home', [
            'posts' => Post::with('category')->latest()->take(3)->get(),
            'clients' => Client::all(),
            'portfolioItems' => PortfolioImage::all(),
        ]);
    }
}
