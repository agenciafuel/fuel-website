import ParallaxGota from '@/components/home/parallax-gota';

export default function AboutSection() {
    return (
        <section
            id="sobre"
            className="relative overflow-visible bg-black py-16 md:py-28 lg:py-36"
        >
            <img
                src="/assets/sobre/fuel-lettering.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 z-[5] h-auto w-full -translate-y-[20%]"
            />


            <ParallaxGota
                src="/assets/gotas/sobre/gota-center-blur.png"
                speed={0.08}
                className="hidden xl:block pointer-events-none absolute z-10 w-[300px] -top-[10%] left-[-10%] md:w-[600px] md:-top-[20%] md:left-[15%] lg:-top-[25%] lg:left-[20%]"
            />
            <ParallaxGota
                src="/assets/gotas/sobre/gota-left-blur.png"
                speed={-0.1}
                className="hidden xl:block pointer-events-none absolute z-10 w-[50vw] bottom-[-15%] left-[-20%] md:w-[400px] md:-bottom-[15%] md:left-[0%] lg:w-[300px] lg:-bottom-[20%]"
            />
            <ParallaxGota
                src="/assets/gotas/sobre/gota-right-blur.png"
                speed={-0.12}
                className="pointer-events-none absolute z-10 hidden w-48 right-[0%] top-[40%] xl:block md:w-[300px] md:top-[45%] lg:top-[50%]"
            />
            <ParallaxGota
                src="/assets/gotas/sobre/gota-left.png"
                speed={-0.08}
                className="absolute z-30 hidden w-24 top-[30%] left-[5%] md:block md:w-32 md:top-[15%] md:left-[8%] lg:w-[150px] lg:top-[37%] lg:left-[10%]"
            />
            <ParallaxGota
                src="/assets/gotas/sobre/gotas.png"
                speed={0.1}
                className="absolute z-30 w-[120px] -top-[2%] -right-[5%] md:w-64 md:-top-[12%] md:right-[20%] lg:w-[300px] lg:-top-[12%] lg:right-[27%]"
            />
            <ParallaxGota
                src="/assets/gotas/sobre/gota-center.png"
                speed={-0.05}
                className="absolute z-30 w-[30px] top-[75%] left-[30%] md:w-16 md:top-[46%] md:left-[50%] lg:w-[60px] lg:top-[39%] lg:left-[55%]"
            />

            <div className="relative z-20 mx-auto max-w-7xl px-5 md:px-12 lg:px-20">
                <div className="relative flex min-h-[380px] w-full flex-col justify-center md:min-h-0 md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-16">
                    

                    <div className="absolute left-[-5%] top-[15%] z-10 w-[55%] pointer-events-none md:pointer-events-auto md:relative md:left-auto md:top-auto md:mr-auto md:w-auto md:flex-shrink-0">
                        <img
                            src="/assets/gota-10-anos.png"
                            alt="10 anos de Fuel"
                            className="h-auto w-full md:w-[260px] lg:w-[360px] xl:w-[480px]"
                        />
                    </div>

                    <div className="relative z-20 flex w-full flex-col items-end text-right md:w-full md:max-w-2xl">
                        <h2 className="flex flex-col items-end gap-1 font-roboto text-[36px] leading-[0.9] text-white md:gap-0 md:text-[48px] lg:text-[80px] xl:text-[136px]">
                            <div className="flex gap-2 lg:flex-col lg:gap-0">
                                <span className="font-bold">seus</span> 
                                <span className="font-light italic text-white">desafios</span>
                            </div>
                            <span className="font-bold pt-1 md:pt-0">nosso</span>
                            <span className="font-light italic text-fuel-red">
                                combustível
                            </span>
                        </h2>

                        <div className="mt-8 w-[65%] md:mt-12 md:w-full">
                            <p className="font-roboto text-base text-[#e0e0e0] md:text-[18px] lg:text-[24px] xl:text-4xl">
                                10 anos de{' '}
                                <span className="font-bold text-white">
                                    energia intensa
                                </span>
                            </p>
                        </div>

                        <p className="mt-3 w-[65%] font-roboto text-[10px] leading-[1.6] text-white/90 md:mt-6 md:w-full md:max-w-md md:text-[11px] lg:text-sm xl:text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco.
                        </p>

                        <div className="mt-5 w-[65%] flex justify-end md:mt-8 md:w-full">
                            <a
                                href="#contato"
                                className="inline-block rounded-full bg-fuel-bg-red px-5 py-2 font-roboto text-[10px] font-bold text-white transition-colors hover:bg-fuel-bg-red md:px-6 md:py-2.5 md:text-sm"
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
