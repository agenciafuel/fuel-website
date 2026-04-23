<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteSettingController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/settings/Index', [
            'settings' => SiteSetting::allCached(),
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'phone'          => 'nullable|string|max:50',
            'whatsapp'       => 'nullable|string|max:50',
            'cnpj'           => 'nullable|string|max:30',
            'company_name'   => 'nullable|string|max:255',
            'address_line_1' => 'nullable|string|max:255',
            'address_line_2' => 'nullable|string|max:255',
            'address_line_3' => 'nullable|string|max:255',
            'youtube_url'    => 'nullable|url|max:500',
            'instagram_url'  => 'nullable|url|max:500',
            'facebook_url'   => 'nullable|url|max:500',
            'linkedin_url'   => 'nullable|url|max:500',
        ]);

        SiteSetting::setMany($validated);

        return redirect()->back()->with('success', 'Configurações salvas com sucesso!');
    }
}
