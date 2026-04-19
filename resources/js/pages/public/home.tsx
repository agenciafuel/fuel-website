import { Head } from '@inertiajs/react';
import SiteHeader from '@/components/home/site-header';
import HeroSection from '@/components/home/hero-section';
import AboutSection from '@/components/home/about-section';
import PortfolioSection from '@/components/home/portfolio-section';
import ServicesSection from '@/components/home/services-section';
import BlogSection from '@/components/home/blog-section';
import ClientsSection from '@/components/home/clients-section';
import ManifestoSection from '@/components/home/manifesto-section';
import Footer from '@/components/footer';

interface HomeProps {
    posts: any[];
    clients: any[];
    portfolioItems: any[];
}

export default function Home({ posts, clients, portfolioItems }: HomeProps) {
    return (
        <>
            <Head title="Fuel — Seu desafio é o nosso combustível">
                <meta
                    name="description"
                    content="Fuel Agency — 10 anos transformando desafios em resultados. Embalagens, sites, tráfego pago, campanhas, branding e social media."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <SiteHeader />

            <main className="overflow-x-hidden bg-black">
                <HeroSection />
                <AboutSection />
                <PortfolioSection items={portfolioItems} />
                <ServicesSection />
                <BlogSection posts={posts} />
                <ClientsSection clients={clients} />
                <ManifestoSection />
                <Footer />
            </main>
        </>
    );
}
