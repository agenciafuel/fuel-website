<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PortfolioImage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/portfolio/Index', [
            'data' => PortfolioImage::latest()->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/portfolio/Form');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'nullable|string|max:255',
            'image' => 'required|image',
        ]);
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('portfolio', 'public');
        }
        PortfolioImage::create($validated);
        return redirect()->route('admin.portfolio.index');
    }

    public function edit(PortfolioImage $portfolio)
    {
        return Inertia::render('admin/portfolio/Form', [
            'item' => $portfolio
        ]);
    }

    public function update(Request $request, PortfolioImage $portfolio)
    {
        $validated = $request->validate([
            'title' => 'nullable|string|max:255',
            'image' => 'nullable|image',
        ]);
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('portfolio', 'public');
        }
        $portfolio->update($validated);
        return redirect()->route('admin.portfolio.index');
    }

    public function destroy(PortfolioImage $portfolio)
    {
        $portfolio->delete();
        return redirect()->route('admin.portfolio.index');
    }
}
