import { Head, Link } from '@inertiajs/react';
import SiteHeader from '@/components/home/site-header';
import ParallaxGota from '@/components/home/parallax-gota';
import Footer from '@/components/footer';

export default function BlogPost({ post, relatedPosts = [], categories = [] }: any) {
    const formatDate = (dateValue: string) => {
        if (!dateValue || !dateValue.includes('-')) return dateValue;
        const d = new Date(dateValue);
        return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`;
    };

    const imageUrl = post.image
        ? (post.image.startsWith('http') || post.image.startsWith('/assets') ? post.image : `/storage/${post.image}`)
        : '/assets/banner-home.png';

    return (
        <>
            <Head title={`Fuel — ${post.title.replace(/\n/g, ' ')}`}>
                <meta name="description" content={post.description || post.short_description || ''} />
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

                    <article
                        className="relative flex min-h-[300px] w-full flex-col justify-end overflow-hidden rounded-[20px] bg-[#1a1a1a] bg-cover bg-center p-6 md:min-h-[450px] lg:min-h-[600px] md:rounded-[40px] md:p-14 lg:p-16"
                        style={{
                            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.4) 100%), url("${imageUrl}")`,
                        }}
                    >
                        <div className="relative z-10 w-full lg:w-[80%]">
                            {post.category && (
                                <Link
                                    href={`/blog/categoria/${post.category.slug}`}
                                    className="mb-4 inline-block rounded-full bg-[#E30613]/20 px-4 py-1.5 font-roboto text-[10px] font-bold text-[#E30613] transition-colors hover:bg-[#E30613]/30 md:text-xs"
                                >
                                    {post.category.title}
                                </Link>
                            )}
                            <h1 className="font-roboto text-[22px] leading-[1.1] font-bold text-white md:text-[50px] lg:text-[75px]" dangerouslySetInnerHTML={{__html: post.title.replace(/\n/g, '<br />')}} />
                            <div className="mt-3 md:mt-4">
                                <span className="font-roboto text-[10px] text-white/90 md:text-[16px] lg:text-[20px]">
                                    <span className="font-bold text-white">{formatDate(post.created_at)}</span>{' '}
                                    - publicado por <span className="font-bold text-white">fuel</span>
                                </span>
                            </div>
                        </div>
                    </article>

                    <div className="mt-10 flex flex-col gap-10 md:mt-16 lg:flex-row lg:gap-16">
                        <div className="flex-1">
                            {post.content && (
                                <div className="font-roboto text-[12px] leading-[2] text-[#c9c9c9] md:text-[14px] lg:text-[16px] text-justify md:text-left markdown-body" dangerouslySetInnerHTML={{__html: post.content}} />
                            )}

                            {!post.content && post.short_description && (
                                <p className="font-roboto text-[12px] leading-[2] text-[#c9c9c9] md:text-[14px] lg:text-[16px]">
                                    {post.short_description}
                                </p>
                            )}
                        </div>

                        <aside className="flex w-full flex-col text-right lg:w-[220px] lg:shrink-0 lg:pt-0">
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
                                {categories.map((category: any) => (
                                    <li key={category.id}>
                                        <Link
                                            href={`/blog/categoria/${category.slug}`}
                                            className={`font-roboto text-[9px] hover:text-white transition-colors md:text-[13px] lg:text-[15px] ${post.category_id === category.id ? 'text-white font-bold' : 'text-fuel-red'}`}
                                        >
                                            {category.title}
                                            {category.posts_count !== undefined && (
                                                <span className="ml-1 text-gray-600">({category.posts_count})</span>
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </aside>
                    </div>

                    {relatedPosts.length > 0 && (
                        <div className="mt-14 md:mt-20">
                            <h3 className="mb-6 font-roboto text-[18px] font-bold text-white md:mb-8 md:text-[28px] lg:text-[34px]">
                                <span className="font-bold">posts </span>
                                <span className="font-light text-fuel-red italic">relacionados</span>
                            </h3>
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                                {relatedPosts.map((item: any, index: number) => (
                                    <Link key={index} href={`/blog/${item.slug}`} className={`block hover:opacity-90 transition-opacity ${index > 1 ? 'hidden md:block' : ''}`}>
                                        <article
                                            className="relative flex min-h-[140px] w-full flex-col justify-end overflow-hidden rounded-[20px] bg-[#1a1a1a] bg-cover bg-center p-4 md:min-h-[200px] lg:rounded-[30px] lg:p-8"
                                            style={{
                                                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.1) 60%), url("${item.image?.includes('http') || item.image?.startsWith('/assets') ? item.image : (item.image ? '/storage/' + item.image : '/assets/banner-home.png')}")`,
                                            }}
                                        >
                                            <div className="relative z-10 w-full">
                                                <h3 className="font-roboto text-[11px] leading-[1.2] font-bold text-white md:text-[14px] lg:text-[16px]" dangerouslySetInnerHTML={{__html: item.title.replace(/\n/g, '<br />')}} />
                                                <div className="mt-3 text-right">
                                                    <span className="font-roboto text-[10px] font-bold text-white md:text-[11px]">
                                                        leia <span className="text-fuel-red">+</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <Footer />
            </main>
        </>
    );
}
