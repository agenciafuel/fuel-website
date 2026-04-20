import { Head, Link } from '@inertiajs/react';
import SiteHeader from '@/components/home/site-header';
import ParallaxGota from '@/components/home/parallax-gota';
import Footer from '@/components/footer';

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
             

                <div className="relative z-20 mx-auto max-w-7xl px-5 md:px-12 lg:px-20">
                    <div className="mb-8 md:mb-12">
                        <h1 className="font-roboto text-[36px] leading-[1.15] font-bold text-white md:text-[48px] lg:text-[80px] xl:text-[136px]">
                            <span className="font-bold">nosso </span>
                            <span className="font-light text-fuel-red italic">
                                blog
                            </span>
                        </h1>
                    </div>

                    {mainPost && (
                        <Link href={`/blog/${mainPost.slug}`}>
                            <article
                                className="relative flex min-h-[300px] w-full flex-col justify-end overflow-hidden rounded-[20px] bg-[#1a1a1a] bg-cover bg-center p-6 md:min-h-[450px] lg:min-h-[600px] md:rounded-[40px] md:p-14 lg:p-16"
                                style={{
                                    backgroundImage:
                                        `linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.4) 100%), url("${mainPost.image?.includes('http') || mainPost.image?.startsWith('/assets') ? mainPost.image : (mainPost.image ? '/storage/' + mainPost.image : '/assets/banner-home.png')}")`,
                                }}
                            >
                                <div className="relative z-10 w-full lg:w-[80%]">
                                    <h2 className="font-roboto text-[22px] leading-[1.1] font-bold text-white md:text-[36px] lg:text-[50px] xl:text-[75px]" dangerouslySetInnerHTML={{__html: mainPost.title.replace(/\n/g, '<br />')}} />
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

                    <div className="mt-10 flex flex-row items-start justify-between gap-4 md:mt-14 md:gap-12 lg:mt-20">
                        <div className="grid w-[60%] grid-cols-1 gap-4 md:w-[65%] md:grid-cols-2 md:gap-8 lg:w-[65%]">
                            {secondaryPosts.map((item: any, index: number) => (
                                <Link key={index} href={`/blog/${item.slug}`}>
                                    <article
                                        className={`relative flex min-h-[140px] w-full flex-col justify-end overflow-hidden rounded-[20px] bg-[#1a1a1a] bg-cover bg-center p-4 md:min-h-[220px] md:p-6 lg:rounded-[30px] hover:opacity-90 transition-opacity`}
                                        style={{
                                            backgroundImage:
                                                `linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.1) 60%), url("${item.image?.includes('http') || item.image?.startsWith('/assets') ? item.image : (item.image ? '/storage/' + item.image : '/assets/banner-home.png')}")`,
                                        }}
                                    >
                                        <div className="relative z-10 w-full">
                                            <h3 className="font-roboto text-[11px] leading-[1.2] font-bold text-white md:text-[15px] lg:text-[18px]" dangerouslySetInnerHTML={{__html: item.title.replace(/\n/g, '<br />')}} />
                                            <div className="mt-3 text-right">
                                                <span className="font-roboto text-[10px] font-bold text-white md:text-[13px]">
                                                    leia <span className="text-fuel-red">+</span>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                            
                            {secondaryPosts.length === 0 && posts.length <= 1 && (
                                <p className="font-roboto text-[12px] text-gray-500 md:text-[14px]">Nenhum outro post encontrado.</p>
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
                                        className={`font-roboto text-[9px] hover:text-white transition-colors md:text-[13px] lg:text-[15px] ${!currentCategory ? 'text-white font-bold' : 'text-fuel-red'}`}
                                    >
                                        Todos
                                    </Link>
                                </li>
                                {categories.map((category: any) => (
                                    <li key={category.id}>
                                        <Link
                                            href={`/blog/categoria/${category.slug}`}
                                            className={`font-roboto text-[9px] hover:text-white transition-colors md:text-[13px] lg:text-[15px] ${currentCategory === category.slug ? 'text-white font-bold' : 'text-fuel-red'}`}
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
                </div>

                <Footer />
            </main>
        </>
    );
}
