import { Head, Link } from '@inertiajs/react';
import SiteHeader from '@/components/home/site-header';
import ParallaxGota from '@/components/home/parallax-gota';
import Footer from '@/components/footer';

export default function BlogCategory({ category, posts = [], categories = [] }: any) {
    const formatDate = (dateValue: string) => {
        if (!dateValue || !dateValue.includes('-')) return dateValue;
        const d = new Date(dateValue);
        return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`;
    };

    return (
        <>
            <Head title={`Fuel — ${category.title}`}>
                <meta name="description" content={category.description || `Posts sobre ${category.title} - Fuel Agency`} />
            </Head>

            <SiteHeader />

            <main className="relative overflow-hidden bg-black pb-14 pt-28 md:pb-22 md:pt-36 lg:pb-28 lg:pt-48 min-h-screen z-20">
                <div className="absolute inset-0 z-10 pointer-events-none flex justify-center items-center opacity-40">
                    <img
                        src="/assets/sobre/fuel-lettering.png"
                        alt=""
                        aria-hidden="true"
                        className="w-[250%] md:w-full lg:w-full h-auto object-contain -translate-y-10"
                    />
                </div>

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
                    <div className="mb-6 md:mb-8">
                        <Link href="/blog" className="inline-flex items-center gap-2 font-roboto text-[11px] text-gray-400 transition-colors hover:text-white md:text-sm">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
                            voltar para o blog
                        </Link>
                    </div>

                    <div className="mb-8 md:mb-12">
                        <h1 className="font-roboto text-[40px] leading-[1.15] font-bold text-white md:text-[80px] lg:text-[136px]">
                            <span className="font-light text-fuel-red italic">{category.title}</span>
                        </h1>
                        {category.description && (
                            <p className="mt-4 font-roboto text-[12px] text-gray-400 md:text-[14px] lg:text-lg">
                                {category.description}
                            </p>
                        )}
                        <p className="mt-2 font-roboto text-[11px] text-gray-500 md:text-sm">
                            {posts.length} post{posts.length !== 1 ? 's' : ''} encontrado{posts.length !== 1 ? 's' : ''}
                        </p>
                    </div>

                    <div className="flex flex-row items-start justify-between gap-4 md:gap-12">
                        <div className="grid w-[60%] grid-cols-1 gap-4 md:w-[65%] md:grid-cols-2 md:gap-8 lg:w-[65%]">
                            {posts.map((item: any, index: number) => (
                                <Link key={index} href={`/blog/${item.slug}`}>
                                    <article
                                        className="relative flex min-h-[140px] w-full flex-col justify-end overflow-hidden rounded-[20px] bg-[#1a1a1a] bg-cover bg-center p-4 md:min-h-[220px] md:p-6 lg:rounded-[30px] hover:opacity-90 transition-opacity"
                                        style={{
                                            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.1) 60%), url("${item.image?.includes('http') || item.image?.startsWith('/assets') ? item.image : (item.image ? '/storage/' + item.image : '/assets/banner-home.png')}")`,
                                        }}
                                    >
                                        <div className="relative z-10 w-full">
                                            <h3 className="font-roboto text-[11px] leading-[1.2] font-bold text-white md:text-[15px] lg:text-[18px]" dangerouslySetInnerHTML={{__html: item.title.replace(/\n/g, '<br />')}} />
                                            <div className="mt-2 flex items-center justify-between">
                                                <span className="font-roboto text-[9px] text-gray-400 md:text-[11px]">
                                                    {formatDate(item.created_at)}
                                                </span>
                                                <span className="font-roboto text-[10px] font-bold text-white md:text-[13px]">
                                                    leia <span className="text-fuel-red">+</span>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}

                            {posts.length === 0 && (
                                <p className="font-roboto text-[12px] text-gray-500 md:text-[14px]">Nenhum post encontrado nesta categoria.</p>
                            )}
                        </div>

                        <aside className="flex w-[35%] flex-col text-right md:w-[25%] lg:pt-0">
                            <h4 className="mb-4 font-roboto text-[14px] font-bold text-white md:mb-6 md:text-[28px] lg:mb-8 lg:text-[34px]">
                                Categorias
                            </h4>
                            <ul className="flex flex-col gap-2 md:gap-4 lg:gap-5">
                                <li>
                                    <Link
                                        href="/blog"
                                        className="font-roboto text-[9px] text-fuel-red hover:text-white transition-colors md:text-[13px] lg:text-[15px]"
                                    >
                                        Todos
                                    </Link>
                                </li>
                                {categories.map((cat: any) => (
                                    <li key={cat.id}>
                                        <Link
                                            href={`/blog/categoria/${cat.slug}`}
                                            className={`font-roboto text-[9px] hover:text-white transition-colors md:text-[13px] lg:text-[15px] ${category.slug === cat.slug ? 'text-white font-bold' : 'text-fuel-red'}`}
                                        >
                                            {cat.title}
                                            {cat.posts_count !== undefined && (
                                                <span className="ml-1 text-gray-600">({cat.posts_count})</span>
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </aside>
                    </div>
                </div>

                <Footer />
            </main>
        </>
    );
}
