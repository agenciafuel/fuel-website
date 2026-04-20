import { useEffect, useRef, useState } from 'react';
import ParallaxGota from '@/components/home/parallax-gota';

export default function ClientsSection({ clients: dynamicClients = [] }: { clients?: any[] }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollX, setScrollX] = useState(0);

    useEffect(() => {
        let animationId: number;
        let position = 0;
        const speed = 0.6; // Velocidade da rolagem

        const animate = () => {
            if (window.innerWidth < 1024 && scrollRef.current) {
                position -= speed;
                const totalWidth = scrollRef.current.scrollWidth / 2;
                if (Math.abs(position) >= totalWidth) {
                    position = 0;
                }
                setScrollX(position);
            } else {
                setScrollX(0);
            }
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, []);

    const baseClients = dynamicClients.map((client) => ({
        src: client.image ? (client.image.startsWith('/assets') || client.image.startsWith('http') ? client.image : `/storage/${client.image}`) : '/assets/clientes/1.png',
        alt: client.title,
    }));

    const clients = [...baseClients];

    if (clients.length === 0) return null;
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

                    <div className="relative overflow-hidden lg:w-1/2">
                        <div 
                            ref={scrollRef}
                            className="flex whitespace-nowrap lg:grid lg:grid-cols-3 lg:gap-7 lg:whitespace-normal"
                            style={{ 
                                transform: window.innerWidth < 1024 ? `translateX(${scrollX}px)` : 'none' 
                            }}
                        >
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
                </div>


                <div className="flex flex-col gap-5 lg:w-1/2 lg:pt-2">
                        <h2 className="font-roboto text-[36px] leading-none! font-bold text-white md:text-[48px] lg:text-[70px] xl:text-[100px]">
                            <strong className="text-white">clientes</strong>
                            <br />
                            <span className="font-light italic">
                                &{' '}
                                <span className="text-fuel-red">
                                    parceiros
                                </span>
                            </span>
                        </h2>

                        <p className="font-roboto text-[10px] leading-relaxed text-white md:text-[12px] lg:text-sm xl:text-xl">
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
                                className="inline-flex items-center rounded-full bg-fuel-bg-red px-6 py-2.5 font-roboto text-[10px] font-bold tracking-wide text-white transition-all duration-300 hover:bg-fuel-bg-red md:text-sm lg:text-base xl:text-xl"
                            >
                                fale conosco
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
