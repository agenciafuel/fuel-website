<?php

namespace Database\Seeders;

use App\Models\SiteSetting;
use Illuminate\Database\Seeder;

class SiteSettingsSeeder extends Seeder
{
    public function run(): void
    {
        $defaults = [
            'phone'           => '+55 18 3908 9288',
            'whatsapp'        => '',
            'cnpj'            => '24.693.652/0001-26',
            'company_name'    => 'Rubens Uer Torossian Torres Junior - ME',
            'address_line_1'  => 'Rua José Leite, 76 - Jardim Bongiovani',
            'address_line_2'  => 'Centro, 19053 240',
            'address_line_3'  => 'Pres. Prudente / SP - Brasil',
            'youtube_url'     => '',
            'instagram_url'   => '',
            'facebook_url'    => '',
            'linkedin_url'    => '',
        ];

        foreach ($defaults as $key => $value) {
            SiteSetting::firstOrCreate(['key' => $key], ['value' => $value]);
        }
    }
}
