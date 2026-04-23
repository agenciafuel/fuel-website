<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class SiteSetting extends Model
{
    protected $fillable = ['key', 'value'];

    /**
     * Get all settings as a cached key-value array.
     */
    public static function allCached(): array
    {
        return Cache::rememberForever('site_settings', function () {
            return static::pluck('value', 'key')->toArray();
        });
    }

    /**
     * Get a single setting value with optional default.
     */
    public static function getValue(string $key, ?string $default = null): ?string
    {
        $settings = static::allCached();
        return $settings[$key] ?? $default;
    }

    /**
     * Set a single setting value and clear cache.
     */
    public static function setValue(string $key, ?string $value): void
    {
        static::updateOrCreate(['key' => $key], ['value' => $value]);
        Cache::forget('site_settings');
    }

    /**
     * Set multiple settings at once and clear cache.
     */
    public static function setMany(array $settings): void
    {
        foreach ($settings as $key => $value) {
            static::updateOrCreate(['key' => $key], ['value' => $value]);
        }
        Cache::forget('site_settings');
    }
}
