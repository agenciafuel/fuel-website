import ParallaxGota from '@/components/home/parallax-gota';
import { useEffect, useRef, useState } from 'react';

export default function ManifestoSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollX, setScrollX] = useState(0);

    const texts = [
        'COMBUSTÍVEL COMBUSTÍVEL',
        'COMBUSTÍVEL COMBUSTÍVEL',
        'COMBUSTÍVEL COMBUSTÍVEL',
        'COMBUSTÍVEL COMBUSTÍVEL',
    ];

    useEffect(() => {
        let animationId: number;
        let position = 0;
        const speed = 0.8;

        const animate = () => {
            position -= speed;
            if (scrollRef.current) {
                const totalWidth = scrollRef.current.scrollWidth / 2;
                if (Math.abs(position) >= totalWidth) {
                    position = 0;
                }
            }
            setScrollX(position);
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, []);
    return (
        <section id="manifesto" className="relative overflow-visible bg-fuel-bg-red py-16 md:py-28 lg:py-36 z-20">

            <img
                src="/assets/manifesto/fuel-lettering.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-0 z-20 h-[100%] w-auto -translate-y-[40%]"
            />


            <ParallaxGota
                src="/assets/gotas/manifesto/gota.png"
                speed={-0.1}
                className="absolute z-30 w-7 left-[5%] top-[45%] md:w-32 md:bottom-[20%] md:left-[15%] md:top-auto lg:bottom-[38%] lg:left-[22%] lg:w-[140px]"
            />
            <ParallaxGota
                src="/assets/gotas/manifesto/gotas.png"
                speed={0.08}
                className="absolute z-30 w-[140px] -top-[6%] right-[5%] md:left-[60%] md:right-auto md:-top-[20%] md:w-64 lg:-top-[15%] lg:left-[52%] lg:w-[350px]"
            />
            <ParallaxGota
                src="/assets/gotas/manifesto/gota-blur.png"
                speed={-0.12}
                className="absolute z-30 w-[150px] -bottom-[20%] -right-[10%] md:right-[0%] md:top-[45%] md:bottom-auto md:w-[150px] lg:top-[8%] lg:w-[350px]"
            />


            <div className="relative z-20 mx-auto max-w-7xl px-5 md:px-12 lg:px-20">

                <div className="max-w-4xl flex flex-col gap-4">
                    <h2 className="text-base md:text-[18px] lg:text-[22px] xl:text-[28px] text-white">manifesto</h2>
                    <p className="font-roboto text-lg text-white md:text-[22px] lg:text-[36px] xl:text-[55px] leading-none!">
                        Quando sua comunicação
                        precisa de ajuda, é ai que a fuel
                        se faz necessaria. <strong>Seus desafios,
                            sua duvida, sua paixão, seu tesão,
                            sua cara, sua marca, sua vontade,
                            sua verdade é o nosso</strong>
                    </p>
                </div>
            </div>


            <div className="relative z-10 mt-14 flex w-full overflow-hidden md:mt-20">
                <div
                    ref={scrollRef}
                    className="flex whitespace-nowrap"
                    style={{ transform: `translateX(${scrollX}px)` }}
                >
                    {texts.map((text, index) => (
                        <p
                            key={index}
                            className="mr-8 font-roboto whitespace-nowrap text-[110px] font-black uppercase leading-none tracking-tighter text-white md:mr-16 md:text-[120px] lg:mr-24 lg:text-[170px] xl:mr-32 xl:text-[314px]"
                        >
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
