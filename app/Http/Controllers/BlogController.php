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
        
        $posts = $query->get();

        return Inertia::render('public/blog', [
            'posts' => $posts,
            'categories' => Category::withCount('posts')->get(),
            'currentCategory' => $categorySlug,
        ]);
    }

    public function show(string $slug)
    {
        $post = Post::with('category')->where('slug', $slug)->firstOrFail();
        $post->content = $post->content ? \Illuminate\Support\Str::markdown($post->content) : null;

        $relatedPosts = Post::with('category')
            ->where('id', '!=', $post->id)
            ->when($post->category_id, function ($q) use ($post) {
                $q->where('category_id', $post->category_id);
            })
            ->latest()
            ->take(3)
            ->get();

        return Inertia::render('public/blog-post', [
            'post' => $post,
            'relatedPosts' => $relatedPosts,
            'categories' => Category::withCount('posts')->get(),
        ]);
    }

    public function category(string $slug)
    {
        $category = Category::where('slug', $slug)->firstOrFail();
        $posts = Post::with('category')
            ->where('category_id', $category->id)
            ->latest()
            ->get();

        return Inertia::render('public/blog-category', [
            'category' => $category,
            'posts' => $posts,
            'categories' => Category::withCount('posts')->get(),
        ]);
    }
}
