import { usePage } from '@inertiajs/react';

export default function Footer() {
    const { siteSettings } = usePage<{ siteSettings: Record<string, string> }>().props;
    const s = siteSettings || {};

    return (
        <section id="cta" className="relative flex flex-col justify-end overflow-hidden bg-black pb-6 pt-16 md:pt-28 lg:pt-36">
            <div className="relative z-20 mx-auto w-full max-w-7xl px-5 md:px-12 lg:px-20">
                <div className="flex w-full flex-col items-start gap-8 md:flex-row md:items-start md:justify-between">
                    <div className="w-full text-right md:max-w-3xl md:text-left">
                        <h2 className="font-roboto text-[36px] leading-[1] text-white md:text-[40px] lg:text-[50px] xl:text-[66px]">
                            <span className="font-bold text-white">adoraríamos <br className='md:hidden'/> trabalhar</span>
                            <br />
                            <span className="font-light italic text-fuel-red">com você <br className='md:hidden'/>  e seu time.</span>
                        </h2>
                    </div>

                    <div className="hidden shrink-0 md:block">
                        <div className="flex flex-col gap-2 pt-4 text-right text-white md:text-sm lg:text-base xl:text-lg">
                            <span>{s.phone || '+55 18 3908 9288'}</span>
                            <span>{s.address_line_1 || 'Rua José Leite, 76 - Jardim Bongiovani'}</span>
                            <span>{s.address_line_2 || 'Centro, 19053 240'}</span>
                            <span>{s.address_line_3 || 'Pres. Prudente / SP - Brasil'}</span>
                            <span>{s.company_name || 'Rubens Uer Torossian Torres Junior - ME'}</span>
                            {s.cnpj && <span>CNPJ: {s.cnpj}</span>}
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-end md:mt-12 md:justify-start">
                    <a
                        href="#contato"
                        className="inline-flex items-center rounded-full bg-fuel-bg-red px-2 py-2 font-roboto text-[10px] font-bold tracking-wide text-white transition-all duration-300 hover:bg-fuel-bg-red md:px-6 md:py-3 md:text-sm lg:text-base xl:text-xl lg:px-8"
                    >
                       envie uma mensagem
                    </a>
                </div>


                <div className="mt-12 md:hidden">
                    <div className="flex flex-col gap-1 font-roboto text-[9px] leading-[1.6] text-white">
                        <span>{s.phone || '+55 18 3908 9288'}</span>
                        <span>{s.address_line_1 || 'Rua José Leite, 76 - Jardim Bongiovani'}, {s.address_line_2 || '19053 240'}</span>
                        <span>{s.address_line_3 || 'Pres. Prudente / SP - Brasil'}</span>
                        <span>{s.company_name || 'Rubens Uer Torossian Torres Junior - ME'}</span>
                        {s.cnpj && <span>CNPJ: {s.cnpj}</span>}
                        <a href="#" className="mt-2 text-white hover:underline">
                            Acesse nossa Política de Privacidade
                        </a>
                    </div>
                </div>
            </div>


            <div className="relative z-20 mx-auto mt-12 items-end flex w-full max-w-7xl  gap-10 px-5 md:mt-24 md:flex-row md:items-end md:justify-between md:px-12 lg:px-20">

                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                    <div className="flex flex-col md:block">
                        <span className="font-roboto text-[10px] font-bold text-white md:text-sm lg:text-sm xl:text-lg">se inscreva</span>
                        <span className="font-roboto text-[10px] font-light text-fuel-red italic md:ml-1 md:text-sm lg:text-sm xl:text-lg">nos nossos canais</span>
                    </div>
                    <div className="mt-1 flex gap-4 md:mt-0">

                        <a href={s.youtube_url || '#'} aria-label="YouTube" className="text-white hover:opacity-70" target={s.youtube_url ? '_blank' : undefined} rel={s.youtube_url ? 'noopener noreferrer' : undefined}>
                            <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </a>

                        <a href={s.instagram_url || '#'} aria-label="Instagram" className="text-white hover:opacity-70" target={s.instagram_url ? '_blank' : undefined} rel={s.instagram_url ? 'noopener noreferrer' : undefined}>
                            <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                        </a>

                        <a href={s.facebook_url || '#'} aria-label="Facebook" className="text-white hover:opacity-70" target={s.facebook_url ? '_blank' : undefined} rel={s.facebook_url ? 'noopener noreferrer' : undefined}>
                            <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>

                        <a href={s.linkedin_url || '#'} aria-label="LinkedIn" className="text-white hover:opacity-70" target={s.linkedin_url ? '_blank' : undefined} rel={s.linkedin_url ? 'noopener noreferrer' : undefined}>
                            <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                    </div>
                </div>


                <div className="flex items-center gap-2 pt-4 lg:pt-0">
                    <span className="font-roboto text-[7px] md:text-xs lg:text-sm xl:text-lg text-white">
                        criado e desenvolvido por <span className="font-bold text-white">@agencia.fuel</span>
                    </span>
                    <img  src='/gota-vermelha.png' alt="Gota vermelha" className="w-4 md:w-5 lg:w-6"/>
                </div>
            </div>
        </section>
    );
}
