import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export default function Index({ data }: any) {
    const { delete: destroy } = useForm();
    return (
        <>
            <Head title="Clientes" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">Clientes e Parceiros</h1>
                        <p className="mt-1 text-sm text-muted-foreground">{data.length} cliente{data.length !== 1 ? 's' : ''} cadastrado{data.length !== 1 ? 's' : ''}</p>
                    </div>
                    <Link href="/admin/clients/create">
                        <Button className="bg-[#E30613] font-bold text-white hover:bg-[#c00510]">
                            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                            Novo Cliente
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {data.map((item: any) => (
                        <div key={item.id} className="group relative flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-border/80">
                            <div className="flex h-20 w-full items-center justify-center">
                                {item.image ? (
                                    <img
                                        src={item.image.startsWith('http') || item.image.startsWith('/assets') ? item.image : `/storage/${item.image}`}
                                        className="h-12 max-w-full object-contain dark:brightness-0 dark:invert"
                                        alt={item.title || ''}
                                    />
                                ) : (
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                                    </div>
                                )}
                            </div>
                            <span className="text-center text-xs text-muted-foreground line-clamp-1">{item.title || 'Sem título'}</span>

                            <div className="absolute inset-0 flex items-center justify-center gap-2 rounded-xl bg-background/80 opacity-0 transition-opacity group-hover:opacity-100">
                                <Link href={`/admin/clients/${item.id}/edit`}>
                                    <button className="rounded-lg bg-accent p-2 text-foreground transition-colors hover:bg-accent/80">
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
                                    </button>
                                </Link>
                                <button
                                    onClick={() => { if (confirm('Tem certeza?')) destroy(`/admin/clients/${item.id}`); }}
                                    className="rounded-lg bg-red-600/80 p-2 text-white transition-colors hover:bg-red-600"
                                >
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {data.length === 0 && (
                    <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border py-16 text-muted-foreground">
                        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                        <p>Nenhum cliente cadastrado ainda.</p>
                    </div>
                )}
            </div>
        </>
    );
}
