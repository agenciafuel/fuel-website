import { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';

const menuItems = [
    { label: 'sobre nós', href: '#sobre' },
    { label: 'nosso trabalho', href: '#portfolio' },
    { label: 'especialidades', href: '#especialidades' },
    { label: 'nosso blog', href: '#blog' },
    { label: 'clientes & parceiros', href: '#clientes' },
    { label: 'manifesto', href: '#manifesto' },
    { label: 'trabalhe conosco', href: '#contato' },
];

const socialLinks = [
    { icon: 'youtube', href: '#' },
    { icon: 'instagram', href: '#' },
    { icon: 'facebook', href: '#' },
    { icon: 'linkedin', href: '#' },
];

export default function SiteHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        
        // Se não estiver na home, redireciona para a home com a âncora
        if (window.location.pathname !== '/') {
            router.visit('/' + href);
            return;
        }

        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>

            <header
                className={`fixed top-0 left-0 z-[100] w-full transition-all duration-300 ${isScrolled && !isOpen
                    ? 'bg-black/80 backdrop-blur-md'
                    : 'bg-transparent'
                    }`}
            >
                <div className="flex items-center justify-between px-5 py-4 md:px-10 md:py-5 lg:px-20 lg:py-6">

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="cursor-pointer relative z-[110] flex flex-col justify-center items-end gap-[6px] md:gap-[8px] w-[26px] h-[26px]"
                        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                    >
                        <span
                            className={`block h-[2px] w-[22px] md:w-[26px] bg-white transition-all duration-300 origin-center ${isOpen ? 'translate-y-[4px] rotate-45 md:translate-y-[5px]' : ''
                                }`}
                        />
                        <span
                            className={`block h-[2px] w-[22px] md:w-[26px] bg-white transition-all duration-300 origin-center ${isOpen ? '-translate-y-[4px] -rotate-45 md:-translate-y-[5px]' : ''
                                }`}
                        />
                    </button>


                    <div className="relative z-[110] flex items-center gap-2">
                        <img src="/assets/logo-fuel.png" alt="Logo Fuel" className={isOpen ? 'hidden' : ''} />
                    </div>
                </div>
            </header>


            <div
                className={`fixed inset-0 z-[99] flex flex-col justify-between bg-fuel-bg-red transition-all duration-500 ease-in-out ${isOpen
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
                    }`}
            >

                <nav className="mt-20 flex-1 px-5 md:mt-24 md:px-10 lg:mt-28 lg:px-20">
                    <ul className="flex flex-col gap-1 md:gap-2">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => handleNavClick(item.href)}
                                    className={`cursor-pointer font-roboto text-[32px] font-bold leading-none text-white transition-opacity duration-200 hover:opacity-70 md:text-[40px] lg:text-[60px] xl:text-[83px] ${isOpen
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-4 opacity-0'
                                        }`}
                                    style={{
                                        transitionDelay: isOpen ? `${index * 50 + 100}ms` : '0ms',
                                    }}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>


                <div className="flex items-end lg:items-center justify-between lg:justify-end lg:gap-10 px-5 pb-6 md:px-10 md:pb-8 lg:px-20 lg:pb-10">

                    <div className="flex lg:flex-row flex-col lg:items-center gap-4 md:gap-6">
                        <span className="font-roboto text-[10px] text-white md:text-sm lg:text-lg text-left">
                            <span className="font-bold">se inscreva</span>{' '} <br className='lg:hidden'/>
                            <span className="font-light italic">nos nossos canais</span>
                        </span>
                        <div className="flex items-center gap-3 md:gap-4">

                            <a href="#" className="text-white transition-opacity hover:opacity-70" aria-label="YouTube">
                                <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>

                            <a href="#" className="text-white transition-opacity hover:opacity-70" aria-label="Instagram">
                                <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                                </svg>
                            </a>

                            <a href="#" className="text-white transition-opacity hover:opacity-70" aria-label="Facebook">
                                <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>

                            <a href="#" className="text-white transition-opacity hover:opacity-70" aria-label="LinkedIn">
                                <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>


                    <a
                        href="#contato"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('#contato');
                        }}
                        className="rounded-full bg-white px-5 py-2.5 font-roboto text-[11px] font-bold text-fuel-red transition-opacity hover:opacity-90 md:px-6 md:py-3 md:text-sm lg:text-base xl:text-lg"
                    >
                        envie uma mensagem
                    </a>
                </div>
            </div>
        </>
    );
}
