<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index(Request $request)
    {
        $categorySlug = $request->query('category');
        
        $query = Post::with('category')->latest();
        
        if ($categorySlug) {
            $query->whereHas('category', function ($q) use ($categorySlug) {
                $q->where('slug', $categorySlug);
            });
        }
        
        $posts = $query->get()->map(function ($post) {
            $post->content = $post->content ? \Illuminate\Support\Str::markdown($post->content) : null;
            return $post;
        });

        return Inertia::render('public/blog', [
            'posts' => $posts,
            'categories' => Category::all(),
            'currentCategory' => $categorySlug,
        ]);
    }
}
