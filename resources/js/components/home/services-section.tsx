import { useEffect, useRef, useState } from 'react';
import ParallaxGota from './parallax-gota';

export default function ServicesSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollX, setScrollX] = useState(0);

    const services = [
        'embalagens',
        'sites',
        'tráfego pago',
        'campanhas',
        'branding',
        'social media',
        'embalagens',
        'sites',
        'tráfego pago',
        'campanhas',
        'branding',
        'social media',
        'embalagens',
        'sites',
        'tráfego pago',
        'campanhas',
        'branding',
        'social media',
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
        <section
            id="especialidades"
            className="relative flex h-[60vh] md:h-[90vh] w-full flex-col justify-center overflow-visible z-20"
        >


            <ParallaxGota
                src="/assets/gotas/especialidades/gota-blur-2.png"
                speed={-0.1}
                className="absolute z-30 w-24 -top-[15%] right-0 md:w-32 md:-top-[20%] lg:-top-[20%] lg:w-[200px]"
            />
            <ParallaxGota
                src="/assets/gotas/especialidades/gota.png"
                speed={0.08}
                className="absolute z-30 w-[80px] -bottom-[15%] left-[40%] md:w-64 md:-bottom-[20%] md:left-[60%] lg:-bottom-[10%] lg:left-[52%] lg:w-[100px]"
            />
            <ParallaxGota
                src="/assets/gotas/especialidades/gota-blur-1.png"
                speed={-0.12}
                className="absolute z-30 w-[200px] top-[10%] -left-[10%] md:w-[450px] md:bottom-[35%] md:left-[15%] lg:-bottom-[16%] lg:w-[350px]"
            />


            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/especialidades-bg.png"
                    alt=""
                    className="h-full w-full object-cover opacity-80"
                    aria-hidden="true"
                />
            </div>


            <div className="relative z-10 flex w-full flex-col justify-center bg-fuel-bg-red py-8 md:py-14">

                <div className="mx-auto w-full max-w-7xl px-5 md:px-12 lg:px-20">
                    <span className="block font-roboto text-[12px] italic text-white/90 md:text-[28px]">
                        especialidades
                    </span>
                </div>


                <div className="relative flex w-full items-center overflow-hidden">
                    <div
                        ref={scrollRef}
                        className="flex whitespace-nowrap"
                        style={{ transform: `translateX(${scrollX}px)` }}
                    >
                        {services.map((service, index) => (
                            <span
                                key={index}
                                className="mx-3 font-roboto text-[40px] font-bold tracking-tight text-white md:mx-4 md:text-[70px] lg:text-[137px]"
                            >
                                {service}
                                <span className="mx-3 text-white md:mx-4">
                                    /
                                </span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
