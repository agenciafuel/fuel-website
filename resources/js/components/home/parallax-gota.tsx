import { useParallax } from '@/hooks/use-parallax';

interface ParallaxGotaProps {
    src: string;
    speed: number;
    className?: string;
    alt?: string;
}

export default function ParallaxGota({ src, speed, className = '', alt = 'Gota decorativa' }: ParallaxGotaProps) {
    const { ref, offset } = useParallax(speed * 1.4);

    return (
        <img
            ref={ref}
            src={src}
            alt={alt}
            className={`pointer-events-none absolute will-change-transform ${className}`}
            style={{ transform: `translateY(${offset}px)` }}
            loading="lazy"
        />
    );
}
