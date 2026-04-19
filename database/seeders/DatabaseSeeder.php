<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Post;
use App\Models\Client;
use App\Models\PortfolioImage;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Admin User
        User::firstOrCreate(
            ['email' => 'admin@fuel.com'],
            [
                'name' => 'Admin Fuel',
                'password' => Hash::make('password'),
            ]
        );

        // Categorias
        $categories = [
            'Branding', 'Performance', 'Gestão de Tráfego', 'Marca', 
            'Marketing', 'Redação', 'Social Media', 'Website'
        ];
        
        $categoryModels = [];
        foreach ($categories as $cat) {
            $categoryModels[] = Category::firstOrCreate([
                'title' => $cat,
                'slug' => \Illuminate\Support\Str::slug($cat)
            ]);
        }

        // Posts
        $postsData = [
            [
                'title' => "Como funcionam\n as etapas para\n desenvolvimento\n de um site",
                'short_description' => 'sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo',
                'description' => 'Guia completo de desenvolvimento.',
                'image' => 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=2000',
                'content' => "# Título Principal\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.\n\n## Subtítulo\n\nRisus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ],
            [
                'title' => "O poder do\n branding na sua\n empresa",
                'short_description' => 'O branding é a alma da sua empresa. Descubra como construir uma marca memorável e se conectar com o público certo.',
                'description' => 'Aprenda sobre branding.',
                'image' => 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800',
                'content' => "# O poder do branding\n\nO branding é a alma da sua empresa. Descubra como construir uma marca memorável e se conectar com o público certo.\n\n## Por que branding importa?\n\nUma marca forte é o alicerce de qualquer negócio de sucesso. Ela comunica valores, cria conexão emocional e diferencia você da concorrência.\n\n## Elementos essenciais\n\n- **Logo** — A identidade visual primária\n- **Paleta de cores** — Transmite emoções e personalidade\n- **Tipografia** — Define o tom da comunicação\n- **Tom de voz** — A personalidade da marca em palavras",
            ],
            [
                'title' => "Tráfego pago:\n como investir\n do jeito certo",
                'short_description' => 'Aumente as vendas do seu negócio sem queimar dinheiro, entenda o funil de tráfego pago hoje.',
                'description' => 'Dicas de tráfego pago.',
                'image' => 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800',
                'content' => "# Tráfego Pago: Guia Completo\n\nAumente as vendas do seu negócio sem queimar dinheiro. Entenda o funil de tráfego pago e pare de desperdiçar investimento.\n\n## O que é tráfego pago?\n\nTráfego pago é quando você investe dinheiro em plataformas de anúncios (Google Ads, Meta Ads, etc.) para atrair visitantes ao seu site ou landing page.\n\n## Dicas fundamentais\n\n1. Defina seu público-alvo com precisão\n2. Comece com orçamentos pequenos e escale\n3. Teste múltiplos criativos (A/B testing)\n4. Monitore o ROI diariamente",
            ],
            [
                'title' => "Estratégias de\n marketing 2026",
                'short_description' => 'Fique de olho nas novas tendências de IA para o ano de 2026.',
                'description' => 'Aprenda marketing 2026.',
                'image' => 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800',
                'content' => "# Estratégias de Marketing para 2026\n\nO marketing digital está em constante evolução. Fique de olho nas novas tendências de IA para não ficar para trás.\n\n## Tendências em destaque\n\n- **IA Generativa** — Criação de conteúdo automatizada\n- **Marketing conversacional** — Chatbots e assistentes\n- **Vídeo curto** — TikTok e Reels dominam\n- **Personalização extrema** — Cada cliente é único\n\n## Como se preparar\n\nInvista em ferramentas de IA, capacite sua equipe e mantenha-se atualizado com as novidades do mercado.",
            ]
        ];

        foreach ($postsData as $index => $postData) {
            $postData['slug'] = \Illuminate\Support\Str::slug(str_replace("\n", " ", $postData['title']));
            $postData['category_id'] = $categoryModels[$index % count($categoryModels)]->id;
            Post::firstOrCreate(['slug' => $postData['slug']], $postData);
        }

        // Clients
        for ($i = 1; $i <= 9; $i++) {
            Client::firstOrCreate([
                'title' => 'Cliente ' . $i,
                'image' => '/assets/clientes/' . $i . '.png'
            ]);
        }

        // Portfolio
        $portfolioData = [
            ['title' => 'Oak Berry Campaign', 'image' => '/assets/portfolio/4.png'],
            ['title' => 'Peptaris Branding', 'image' => '/assets/portfolio/1.png'],
            ['title' => 'Projeto N', 'image' => '/assets/portfolio/2.png'],
            ['title' => 'Spring League Social', 'image' => '/assets/portfolio/3.png'],
        ];

        foreach ($portfolioData as $pi) {
            PortfolioImage::firstOrCreate(['title' => $pi['title']], $pi);
        }
    }
}
