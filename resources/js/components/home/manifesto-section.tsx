import ParallaxGota from '@/components/home/parallax-gota';

export default function ManifestoSection() {
    return (
        <section id="manifesto" className="relative overflow-visible bg-[#e90728] py-16 md:py-28 lg:py-36 z-20">

            <img
                src="/assets/manifesto/fuel-lettering.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-0 z-20 h-[100%] w-auto -translate-y-[40%]"
            />


            <ParallaxGota
                src="/assets/gotas/manifesto/gota.png"
                speed={-0.1}
                className="absolute z-30 w-16 left-[5%] top-[45%] md:w-32 md:bottom-[20%] md:left-[15%] md:top-auto lg:bottom-[38%] lg:left-[22%] lg:w-[140px]"
            />
            <ParallaxGota
                src="/assets/gotas/manifesto/gotas.png"
                speed={0.08}
                className="absolute z-30 w-[140px] -top-[6%] right-[5%] md:left-[60%] md:right-auto md:-top-[20%] md:w-64 lg:-top-[15%] lg:left-[52%] lg:w-[350px]"
            />
            <ParallaxGota
                src="/assets/gotas/manifesto/gota-blur.png"
                speed={-0.12}
                className="absolute z-30 w-[200px] bottom-[10%] -right-[10%] md:right-[0%] md:top-[35%] md:bottom-auto md:w-[450px] lg:top-[8%] lg:w-[350px]"
            />


            <div className="relative z-20 mx-auto max-w-7xl px-5 md:px-12 lg:px-20">

                <div className="max-w-4xl flex flex-col gap-4">
                    <h2 className="text-[28px]">manifesto</h2>
                    <p className="font-roboto text-[14px] text-white/85 md:text-[18px] lg:text-[55px] leading-none!">
                        Quando sua comunicação
                        precisa de ajuda, é ai que a fuel
                        se faz necessaria. <strong>Seus desafios,
                            sua duvida, sua paixão, seu tesão,
                            sua cara, sua marca, sua vontade,
                            sua verdade é o nosso</strong>
                    </p>
                </div>
            </div>


            <div className="relative z-10 mt-14 overflow-hidden md:mt-20">
                <p className="font-roboto whitespace-nowrap text-[52px] font-black uppercase leading-none tracking-tighter text-white md:text-[110px] lg:text-[170px] xl:text-[314px]">
                    FUEL COMBUSTÍVEL COMBUSTÍVEL
                </p>
            </div>
        </section>
    );
}
