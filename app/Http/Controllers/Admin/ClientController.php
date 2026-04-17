<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/clients/Index', [
            'data' => Client::latest()->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/clients/Form');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'nullable|string|max:255',
            'image' => 'required|image',
        ]);
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('clients', 'public');
        }
        Client::create($validated);
        return redirect()->route('admin.clients.index');
    }

    public function edit(Client $client)
    {
        return Inertia::render('admin/clients/Form', [
            'item' => $client
        ]);
    }

    public function update(Request $request, Client $client)
    {
        $validated = $request->validate([
            'title' => 'nullable|string|max:255',
            'image' => 'nullable|image',
        ]);
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('clients', 'public');
        }
        $client->update($validated);
        return redirect()->route('admin.clients.index');
    }

    public function destroy(Client $client)
    {
        $client->delete();
        return redirect()->route('admin.clients.index');
    }
}
