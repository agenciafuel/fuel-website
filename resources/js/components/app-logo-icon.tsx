import type { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            {...props}
            src="/assets/logo-fuel.png"
            alt="Fuel"
            className={`h-6 w-auto brightness-0 dark:brightness-0 dark:invert ${props.className || ''}`}
        />
    );
}
