import ParallaxGota from '@/components/home/parallax-gota';
import { Link } from '@inertiajs/react';

export default function BlogSection({ posts = [] }: { posts?: any[] }) {
    const mainPost = posts.length > 0 ? posts[0] : null;
    const secondaryPosts = posts.length > 1 ? posts.slice(1, 4) : [];

    if (!mainPost) return null;

    const formatDate = (dateValue: string) => {
        if (!dateValue || !dateValue.includes('-')) return dateValue;
        const d = new Date(dateValue);
        return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`;
    };

    return (
        <section
            id="blog"
            className="relative overflow-hidden bg-black py-14 md:py-22 lg:py-28"
        >


            <ParallaxGota
                src="/assets/gotas/portfolio/gota.png"
                speed={-0.08}
                className="absolute z-30 w-16 -top-[2%] right-[5%] md:w-24 md:right-[15%] md:top-[5%] lg:w-[80px]"
            />

            <div className="relative z-20 mx-auto max-w-7xl px-5 md:px-12 lg:px-20">

                <div className="mb-8 md:mb-12">
                    <h2 className="font-roboto text-[26px] leading-[1.15] font-bold text-white md:text-[36px] lg:text-[136px]">
                        <span className="font-bold">nosso </span>
                        <span className="font-light text-[#c30f2b] italic">
                            blog
                        </span>
                    </h2>
                </div>


                <Link href={`/blog/${mainPost.slug}`}>
                    <article
                        className="relative flex min-h-[450px] w-full flex-col justify-center overflow-hidden rounded-[30px] bg-[#1a1a1a] bg-cover bg-center p-8 md:min-h-[550px] md:rounded-[40px] md:p-14 lg:p-20"
                        style={{
                            backgroundImage:
                                `linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.85) 100%), url("${mainPost.image?.includes('http') || mainPost.image?.startsWith('/assets') ? mainPost.image : (mainPost.image ? '/storage/' + mainPost.image : '/assets/banner-home.png')}")`,
                        }}
                    >

                        <div className="absolute top-8 right-8 md:top-10 md:right-14 lg:top-20 lg:right-20">
                            <span className="font-roboto text-[12px] text-white md:text-2xl">
                                <span className="font-bold">{formatDate(mainPost.created_at)}</span> - publicado
                                por <span className="font-bold">fuel</span>
                            </span>
                        </div>


                        <div className="relative z-10 w-full lg:w-[65%]">
                            <h3 className="font-roboto text-[32px] leading-none font-bold text-white md:text-[45px] lg:text-[75px]" dangerouslySetInnerHTML={{__html: mainPost.title.replace(/\n/g, '<br />')}} />
                            <p className="mt-6 font-roboto text-[12px] text-white md:text-xl">
                                {mainPost.short_description}
                            </p>
                            <span className="group mt-6 inline-block font-roboto text-[14px] font-bold text-white md:text-[16px]">
                                <span className="underline decoration-white underline-offset-4">
                                    leia
                                </span>{' '}
                                <span className="text-[#E30613]">+</span>
                            </span>
                        </div>
                    </article>
                </Link>


                {secondaryPosts.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 gap-4 md:mt-6 md:grid-cols-3 md:gap-6">
                        {secondaryPosts.map((item: any, index) => (
                            <Link key={index} href={`/blog/${item.slug}`} className={`block hover:opacity-90 transition-opacity ${index > 1 ? 'hidden md:block' : ''}`}>
                                <article
                                    className={`relative flex min-h-[160px] w-full flex-col justify-end overflow-hidden rounded-[20px] bg-[#1a1a1a] bg-cover bg-center p-4 md:min-h-[200px] lg:rounded-[30px] lg:p-8`}
                                    style={{
                                        backgroundImage:
                                            `linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.4) 100%), url("${item.image?.includes('http') || item.image?.startsWith('/assets') ? item.image : (item.image ? '/storage/' + item.image : '/assets/banner-home.png')}")`,
                                    }}
                                >
                                    <div className="relative z-10 w-full">
                                        <h3 className="font-roboto text-[11px] leading-[1.2] font-bold text-white md:text-[14px] lg:text-[16px]" dangerouslySetInnerHTML={{__html: item.title.replace(/\n/g, '<br />')}} />
                                        <div className="mt-3 text-right">
                                            <span className="font-roboto text-[10px] font-bold text-white md:text-[11px]">
                                                leia <span className="text-[#E30613]">+</span>
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
