import ParallaxGota from "./parallax-gota";

export default function PortfolioSection({ items = [] }: { items?: any[] }) {
    const portfolioItems = items.map(item => ({
        src: item.image ? (item.image.startsWith('/assets') || item.image.startsWith('http') ? item.image : `/storage/${item.image}`) : '/assets/portfolio/1.png',
        alt: item.title,
    }));

    if (portfolioItems.length === 0) return null;

    return (
        <section
            id="portfolio"
            className="relative overflow-visible bg-black py-14 pb-[20%]! md:py-22 lg:py-28"
        >
            <ParallaxGota
                src="/assets/gotas/portfolio/gota.png"
                speed={-0.1}
                className="absolute z-30 w-16 right-[5%] top-[5%] md:w-32 md:right-[40%] md:top-[20%] lg:w-[100px] lg:top-[10%]"
            />
            <ParallaxGota
                src="/assets/gotas/portfolio/gota-2.png"
                speed={0.08}
                className="absolute z-30 w-[150px] -bottom-[10%] -left-[10%] md:left-[60%] md:top-[20%] md:w-64 lg:left-[22%] lg:top-[60%] lg:w-[200px]"
            />

            <div className="relative z-10 w-full">
                <div className="mx-auto mb-8 w-full max-w-7xl px-5 md:mb-12 md:px-12 lg:px-20">
                    <h2 className="font-roboto text-[26px] leading-[1.15] font-bold text-white md:text-[36px] lg:text-[136px]">
                        <span className="font-bold">nosso </span>
                        <span className="font-light text-[#c30f2b] italic">
                            trabalho
                        </span>
                    </h2>
                </div>

                <div className="relative w-full">
                    <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-20 w-8 bg-gradient-to-r from-black to-transparent md:w-16 lg:w-32" />

                    <div className="no-scrollbar flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-8 md:gap-6 lg:gap-8 lg:px-10">
                        {portfolioItems.map((item, index) => (
                            <div
                                key={index}
                                className="group relative aspect-[3/4] w-[45vw] shrink-0 snap-center overflow-hidden rounded-[20px] bg-[#1a1a1a] sm:w-[45vw] md:w-[35vw] md:rounded-[40px] lg:w-[23vw]"
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                            </div>
                        ))}
                    </div>
                    <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-20 w-8 bg-gradient-to-l from-black to-transparent md:w-16 lg:w-32" />
                </div>
            </div>
        </section>
    );
}
