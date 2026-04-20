import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollX, setScrollX] = useState(0);

    const words = [
        { text: 'seu ', italic: false, bold: false, color: 'white' },
        { text: 'desafio ', italic: true, bold: false, color: 'white' },
        { text: ' é ', italic: false, bold: false, color: 'white' },
        { text: 'o nosso ', italic: false, bold: true, color: 'white' },
        { text: 'combustível ', italic: false, bold: true, color: 'white' },
    ];


    const repeatedWords = [...words, ...words, ...words, ...words, ...words, ...words];

    useEffect(() => {
        let animationId: number;
        let position = 0;
        const speed = 1.2;

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
        <section id="hero" className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden bg-black z-10">

            <div className="absolute inset-0 z-10">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                >
                    <source src="/assets/VIDEO_HOME_SITE-NOVO.mp4" type="video/mp4" />
                </video>
            </div>


            <div className="absolute bottom-20 left-0 z-20 w-full">
                <div className="relative flex w-full items-center overflow-hidden pb-6 md:pb-10 lg:pb-14">
                    <div
                        ref={scrollRef}
                        className="flex whitespace-nowrap"
                        style={{ transform: `translateX(${scrollX}px)` }}
                    >
                        {repeatedWords.map((word, index) => (
                            <span
                                key={index}
                                className={`mr-4 md:mr-6 lg:mr-10 font-roboto text-[68px] md:text-[80px] lg:text-[120px] xl:text-[187px] leading-none tracking-tight ${word.italic ? 'italic font-light' : ''} ${word.bold ? 'font-bold' : 'font-light'}`}
                                style={{ color: word.color }}
                            >
                                {word.text.trim()}
                            </span>
                        ))}
                    </div>
                </div>
            </div>


            <div className="absolute -bottom-6 left-5 z-20 md:-bottom-8">
                <span className="font-roboto text-[10px] tracking-[0.15em] text-white md:text-[11px]">
                    role para baixo
                </span>
            </div>

            {/* Transição suave para a próxima seção */}
            <div className="absolute bottom-0 left-0 z-30 h-32 w-full bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
    );
}
