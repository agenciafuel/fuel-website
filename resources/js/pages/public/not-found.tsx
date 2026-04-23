import { Head, Link, usePage } from '@inertiajs/react';
import SiteHeader from '@/components/home/site-header';
import ParallaxGota from '@/components/home/parallax-gota';

export default function NotFound() {
    const { siteSettings } = usePage<{ siteSettings: Record<string, string> }>().props;
    const s = siteSettings || {};

    const socialLinks = [
        { label: 'YouTube', url: s.youtube_url || '#', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
        { label: 'Instagram', url: s.instagram_url || '#', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' },
        { label: 'Facebook', url: s.facebook_url || '#', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
        { label: 'LinkedIn', url: s.linkedin_url || '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    ];

    return (
        <>
            <Head title="Fuel — Erro 404">
                <meta name="description" content="Página não encontrada" />
            </Head>

            <SiteHeader />

            <main className="relative flex min-h-screen flex-col overflow-hidden bg-black pb-10 pt-32 md:pt-48">
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full flex justify-start items-center">
                    <img
                        src="/assets/sobre/fuel-lettering.png"
                        alt=""
                        aria-hidden="true"
                        className="opacity-60 w-[150%] max-w-none md:w-[120%] lg:w-full object-cover lg:object-contain"
                    />
                </div>

                <ParallaxGota
                    src="/assets/gotas/sobre/gota-left-blur.png"
                    speed={-0.1}
                    className="absolute top-[30%] -left-[15%] z-10 w-[250px] opacity-80 md:w-[450px] lg:w-[600px] pointer-events-none"
                />
                <ParallaxGota
                    src="/assets/gotas/sobre/gota-center.png"
                    speed={0.08}
                    className="absolute top-[10%] right-[35%] z-10 w-[20px] md:w-[30px] lg:w-[40px] pointer-events-none"
                />
                <ParallaxGota
                    src="/assets/gotas/sobre/gota-left.png"
                    speed={-0.05}
                    className="absolute top-[50%] right-[20%] z-10 w-[60px] md:w-[90px] lg:w-[120px] pointer-events-none"
                />

                <div className="relative z-20 flex flex-1 flex-col mx-auto w-full max-w-7xl px-5 md:px-12 lg:px-20">
                    <div className="flex flex-1 flex-col justify-center">
                        <div className="max-w-[850px] space-y-8 md:space-y-12">
                            <h1 className="font-roboto text-[60px] leading-none font-bold text-white md:text-[100px] lg:text-[136x]">
                                <span className="font-bold">erro </span>
                                <span className="font-light text-fuel-red italic">
                                    404
                                </span>
                            </h1>

                            <p className="font-roboto text-[10px] leading-[2] text-[#e0e0e0] md:text-[13px] lg:text-lg lg:leading-[2]">
                                erro 404 ("Not Found") é uma resposta HTTP padrão indicando que o navegador se conectou ao servidor, mas a página específica solicitada não foi encontrada. Geralmente causado por URLs digitadas incorretamente, links quebrados, páginas excluídas ou movidas, é um erro comum que pode ser resolvido com uma atualização da página (F5) ou verificação do endereço.
                            </p>

                            <div>
                                <Link
                                    href="/home"
                                    className="inline-block rounded-full bg-fuel-bg-red px-6 py-3 font-roboto text-[12px] font-bold text-white transition-all hover:bg-fuel-bg-red md:px-8 md:py-3.5 md:text-[14px]"
                                >
                                    voltar para home
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 flex w-full flex-col justify-end gap-10 pb-6 md:mt-24 md:flex-row md:items-end md:justify-between lg:mt-32">
                        <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-4">
                            <div className="flex flex-col md:block">
                                <span className="font-roboto text-[14px] font-bold text-white md:text-lg">se inscreva</span>
                                <span className="font-roboto text-[14px] font-light text-fuel-red italic md:ml-1 md:text-lg">nos nossos canais</span>
                            </div>
                            <div className="mt-2 flex gap-4 md:mt-0">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.url}
                                        aria-label={link.label}
                                        className="text-white hover:opacity-70"
                                        target={link.url !== '#' ? '_blank' : undefined}
                                        rel={link.url !== '#' ? 'noopener noreferrer' : undefined}
                                    >
                                        <svg className="h-5 w-5 md:h-4 md:w-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d={link.icon} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="font-roboto text-[11px] text-white md:text-lg">
                                criado e desenvolvido por <span className="font-bold text-white">@agencia.fuel</span>
                            </span>
                            <svg className="h-6 w-6 text-fuel-red" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 21.5c-4.14 0-7.5-3.36-7.5-7.5 0-3.3 3.96-8.94 6.7-12.4.4-.5 1.2-.5 1.6 0 2.74 3.46 6.7 9.1 6.7 12.4 0 4.14-3.36 7.5-7.5 7.5z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
