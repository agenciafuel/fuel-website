import ParallaxGota from '@/components/home/parallax-gota';

export default function ClientsSection({ clients: dynamicClients = [] }: { clients?: any[] }) {
    const clients = dynamicClients.length > 0 ? dynamicClients.map((client) => ({
        src: client.image ? (client.image.startsWith('/assets') || client.image.startsWith('http') ? client.image : `/storage/${client.image}`) : '/assets/clientes/1.png',
        alt: client.title,
    })) : Array.from({ length: 9 }, (_, i) => ({
        src: `/assets/clientes/${i + 1}.png`,
        alt: `Cliente ${i + 1}`,
    }));

    return (
        <section
            id="clientes"
            className="relative overflow-hidden bg-black py-14 md:py-22 lg:py-28"
        >

            <ParallaxGota
                src="/assets/gotas/clientes/gota.png"
                speed={0.12}
                className="top-[5%] right-[15%] z-10 w-[40px] md:w-[100px]"
            />

            <div className="relative z-20 mx-auto max-w-7xl px-5 md:px-12 lg:px-20">
                <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:gap-16">

                    <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-7 md:overflow-visible md:px-0 lg:w-1/2">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="flex w-[25vw] shrink-0 snap-center items-center justify-center rounded-lg p-2 transition-opacity duration-300 hover:opacity-100 sm:w-[20vw] md:w-auto md:p-4"
                            >
                                <img
                                    src={client.src}
                                    alt={client.alt}
                                    className="h-auto w-[40px] brightness-0 invert transition-opacity duration-300 hover:opacity-100 md:w-[60px] lg:w-[70px]"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>


                    <div className="flex flex-col gap-5 lg:w-1/2 lg:pt-2">
                        <h2 className="font-roboto text-[32px] leading-none! font-bold text-white md:text-[36px] lg:text-[100px]">
                            <strong className="text-white">clientes</strong>
                            <br />
                            <span className="font-light italic">
                                &{' '}
                                <span className="text-[#c30f2b]">
                                    parceiros
                                </span>
                            </span>
                        </h2>

                        <p className="font-roboto text-[11px] leading-relaxed text-[#c9c9c9] md:text-[14px] lg:text-xl">
                            Com quase uma década de experiência, sabemos que
                            marketing de verdade vai muito além de curtidas ou
                            tráfego pago. É planejamento, posicionamento,
                            conexão com o público e entrega de valor. Somos a
                            engrenagem criativa por trás de marcas que se
                            destacam e estamos prontos para ir além!
                        </p>

                        <div className="pt-2">
                            <a
                                href="#contato"
                                className="inline-flex items-center rounded-full bg-[#e90728] px-6 py-2.5 font-roboto text-[10px] font-bold tracking-wide text-white transition-all duration-300 hover:bg-[#c8061f] md:text-xl"
                            >
                                veja no portfólio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
