import { Head, Link } from '@inertiajs/react';
import SiteHeader from '@/components/home/site-header';
import ParallaxGota from '@/components/home/parallax-gota';

export default function Blog({ posts = [], categories = [], currentCategory = null }: any) {
    const mainPost = posts.length > 0 ? posts[0] : null;
    const secondaryPosts = posts.length > 1 ? posts.slice(1) : [];

    const formatDate = (dateValue: string) => {
        if (!dateValue || !dateValue.includes('-')) return dateValue;
        const d = new Date(dateValue);
        return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`;
    };

    return (
        <>
            <Head title="Fuel — Nosso Blog">
                <meta name="description" content="Nosso Blog - Fuel Agency" />
            </Head>

            {/* Site Header */}
            <SiteHeader />

            <main className="relative overflow-hidden bg-black pb-14 pt-28 md:pb-22 md:pt-36 lg:pb-28 lg:pt-48 min-h-screen">
                {/* Background elements */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full flex justify-center items-center">
                    <img
                        src="/assets/sobre/fuel-lettering.png"
                        alt=""
                        aria-hidden="true"
                        className="opacity-40 w-auto h-[120%] -translate-y-10 object-cover lg:object-contain"
                    />
                </div>

                {/* Parallax gotas */}
                <ParallaxGota
                    src="/assets/gotas/sobre/gota-center.png"
                    speed={0.1}
                    className="absolute top-[8%] right-[30%] z-10 w-[30px] md:w-[45px] lg:w-[60px]"
                />
                <ParallaxGota
                    src="/assets/gotas/sobre/gota-left.png"
                    speed={-0.08}
                    className="absolute top-[12%] right-[15%] z-10 w-[50px] md:w-[80px] lg:w-[120px]"
                />
                <ParallaxGota
                    src="/assets/gotas/sobre/gota-left-blur.png"
                    speed={-0.12}
                    className="absolute top-[40%] -left-[10%] z-10 w-[200px] opacity-70 md:w-[350px] lg:w-[500px]"
                />
                <ParallaxGota
                    src="/assets/gotas/sobre/gota-left.png"
                    speed={0.05}
                    className="absolute bottom-[20%] left-[30%] z-10 w-[20px] md:w-[30px] lg:w-[40px]"
                />

                <div className="relative z-20 mx-auto max-w-7xl px-5 md:px-12 lg:px-20">
                    {/* Page title */}
                    <div className="mb-8 md:mb-12">
                        <h1 className="font-roboto text-[40px] leading-[1.15] font-bold text-white md:text-[80px] lg:text-[136px]">
                            <span className="font-bold">nosso </span>
                            <span className="font-light text-[#E30613] italic">
                                blog
                            </span>
                        </h1>
                    </div>

                    {/* Main post */}
                    {mainPost && (
                        <Link href={`/blog/${mainPost.slug}`}>
                            <article
                                className="relative flex min-h-[300px] w-full flex-col justify-end overflow-hidden rounded-[20px] bg-[#1a1a1a] bg-cover bg-center p-6 md:min-h-[450px] lg:min-h-[600px] md:rounded-[40px] md:p-14 lg:p-16"
                                style={{
                                    backgroundImage:
                                        `linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.4) 100%), url("${mainPost.image?.includes('http') ? mainPost.image : (mainPost.image ? '/storage/' + mainPost.image : '/assets/banner-home.png')}")`,
                                }}
                            >
                                {/* Main Content */}
                                <div className="relative z-10 w-full lg:w-[80%]">
                                    <h2 className="font-roboto text-[22px] leading-[1.1] font-bold text-white md:text-[50px] lg:text-[75px]" dangerouslySetInnerHTML={{__html: mainPost.title.replace(/\n/g, '<br />')}}>
                                    </h2>
                                    <div className="mt-3 md:mt-4">
                                        <span className="font-roboto text-[10px] text-white/90 md:text-[16px] lg:text-[20px]">
                                            <span className="font-bold text-white">{formatDate(mainPost.created_at)}</span>{' '}
                                            - publicado por <span className="font-bold text-white">fuel</span>
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    )}

                    {/* Body Content */}
                    {mainPost && (
                        <div className="mt-8 md:mt-16 w-full lg:w-[90%]">
                            <div className="font-roboto text-[11px] leading-[1.8] text-[#c9c9c9] md:text-[14px] lg:text-[16px] text-justify md:text-left markdown-body" dangerouslySetInnerHTML={{__html: mainPost.content || mainPost.description || mainPost.short_description}} />
                        </div>
                    )}

                    {/* Grid & Categories layout */}
                    <div className="mt-10 flex flex-row items-start justify-between gap-4 md:mt-14 md:gap-12 lg:mt-20">
                        {/* Left: small cards grid */}
                        <div className="grid w-[60%] grid-cols-1 gap-4 md:w-[65%] md:grid-cols-2 md:gap-8 lg:w-[65%]">
                            {secondaryPosts.map((item: any, index: number) => (
                                <Link key={index} href={`/blog/${item.slug}`}>
                                    <article
                                        className={`relative flex min-h-[140px] w-full flex-col justify-end overflow-hidden rounded-[20px] bg-[#1a1a1a] bg-cover bg-center p-4 md:min-h-[220px] md:p-6 lg:rounded-[30px] hover:opacity-90 transition-opacity`}
                                        style={{
                                            backgroundImage:
                                                `linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.1) 60%), url("${item.image?.includes('http') ? item.image : (item.image ? '/storage/' + item.image : '/assets/banner-home.png')}")`,
                                        }}
                                    >
                                        <div className="relative z-10 w-full">
                                            <h3 className="font-roboto text-[11px] leading-[1.2] font-bold text-white md:text-[15px] lg:text-[18px]" dangerouslySetInnerHTML={{__html: item.title.replace(/\n/g, '<br />')}}>
                                            </h3>
                                            <div className="mt-3 text-right">
                                                <span className="font-roboto text-[10px] font-bold text-white md:text-[13px]">
                                                    leia <span className="text-[#E30613]">+</span>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                            
                            {secondaryPosts.length === 0 && (
                                <p className="text-white">Nenhum outro post encontrado.</p>
                            )}

                            {/* Carregar mais (Mobile inside Left column) */}
                            <div className="mt-2 flex justify-start md:hidden">
                                <button className="font-roboto text-[10px] font-bold text-white transition-opacity hover:opacity-80">
                                    <span className="italic">carregar </span>
                                    <span className="text-[#E30613] italic">- postagens</span>
                                </button>
                            </div>
                        </div>

                        {/* Right: Categories */}
                        <aside className="flex w-[35%] flex-col text-right md:w-[25%] lg:pt-0">
                            <h4 className="mb-4 font-roboto text-[14px] font-bold text-white md:mb-6 md:text-[28px] lg:mb-8 lg:text-[34px]">
                                Categorias
                            </h4>
                            <ul className="flex flex-col gap-2 md:gap-4 lg:gap-5">
                                <li>
                                    <Link
                                        href="/blog"
                                        className={`font-roboto text-[9px] hover:text-white transition-colors md:text-[13px] lg:text-[15px] ${!currentCategory ? 'text-white font-bold' : 'text-[#E30613]'}`}
                                    >
                                        Todos
                                    </Link>
                                </li>
                                {categories.map((category: any) => (
                                    <li key={category.id}>
                                        <Link
                                            href={`/blog?category=${category.slug}`}
                                            className={`font-roboto text-[9px] hover:text-white transition-colors md:text-[13px] lg:text-[15px] ${currentCategory === category.slug ? 'text-white font-bold' : 'text-[#E30613]'}`}
                                        >
                                            {category.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </aside>
                    </div>

                    {/* Carregar mais (Desktop centered) */}
                    <div className="mt-14 hidden justify-center md:flex lg:mt-24">
                        <button className="font-roboto text-[14px] font-bold text-white md:text-[16px] lg:text-[18px] transition-opacity hover:opacity-80">
                            <span className="italic">carregar </span>
                            <span className="text-[#E30613] italic">- postagens</span>
                        </button>
                    </div>
                </div>

                {/* Footer Section specific for Blog page / or matching the design */}
                <footer className="relative z-20 mx-auto mt-20 max-w-7xl px-5 pb-10 md:mt-32 md:px-12 lg:px-20">
                    <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
                        <div className="flex flex-col items-start gap-4 md:gap-6">
                            <h2 className="font-roboto text-[32px] leading-none font-bold text-white md:text-[45px] lg:text-[60px]">
                                adorariamos trabalhar
                                <br />
                                <span className="font-light text-[#E30613] italic">com você e seu time.</span>
                            </h2>
                            <button className="rounded-full bg-[#E30613] px-6 py-2.5 font-roboto text-[11px] font-bold text-white transition-colors hover:bg-red-700 md:text-[13px]">
                                envie uma mensagem
                            </button>
                        </div>
                        <div className="flex flex-col text-left md:text-right font-roboto text-[10px] text-white/70 md:text-[12px] leading-[1.6]">
                            <span>+55 18 3928-4555</span>
                            <span>Rua Tenente Nicolau Maffei, 1190</span>
                            <span>Centro, 19010-250</span>
                            <span>Pres. Prudente / SP - Brasil</span>
                        </div>
                    </div>

                    <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:mt-20 md:flex-row lg:mt-28">
                        <div className="flex items-center gap-4">
                            <span className="font-roboto text-[10px] text-white/80 md:text-[12px]">
                                <span className="font-bold text-white">se inscreva</span>{' '}
                                <span className="font-light italic">nos nossos canais</span>
                            </span>
                            <div className="flex gap-3">
                                {/* YouTube */}
                                <a href="#" aria-label="YouTube" className="text-white hover:opacity-70">
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                                </a>
                                {/* Instagram */}
                                <a href="#" aria-label="Instagram" className="text-white hover:opacity-70">
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                                </a>
                                {/* Facebook */}
                                <a href="#" aria-label="Facebook" className="text-white hover:opacity-70">
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                </a>
                                {/* LinkedIn */}
                                <a href="#" aria-label="LinkedIn" className="text-white hover:opacity-70">
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                </a>
                            </div>
                        </div>
                        <div className="font-roboto text-[10px] text-white/50 md:text-[11px] flex items-center gap-2">
                            criado e desenvolvido por <span className="font-bold text-white">@agencia.fuel</span>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
}
