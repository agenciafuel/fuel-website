import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ImageUpload from '@/components/ui/image-upload';

export default function Form({ item }: any) {
    const { data, setData, post, processing, errors } = useForm({
        title: item?.title || '',
        image: null as File | null,
        _method: item ? 'PUT' : 'POST'
    });

    const submit = (e: any) => {
        e.preventDefault();
        if (item) {
            post(`/admin/clients/${item.id}`);
        } else {
            post('/admin/clients');
        }
    };

    return (
        <>
            <Head title={item ? "Editar Cliente" : "Novo Cliente"} />
            <div className="flex h-full flex-1 flex-col gap-6 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">{item ? "Editar Cliente" : "Novo Cliente"}</h1>
                        <p className="mt-1 text-sm text-muted-foreground">{item ? 'Atualize os dados do cliente' : 'Adicione um novo logo de cliente ou parceiro'}</p>
                    </div>
                    <Link href="/admin/clients">
                        <Button variant="outline" className="border-border text-muted-foreground hover:bg-accent">
                            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
                            Voltar
                        </Button>
                    </Link>
                </div>
                <form onSubmit={submit} className="flex max-w-xl flex-col gap-5 rounded-xl border border-border bg-card p-6">
                    <div className="flex flex-col gap-1.5">
                        <Label className="text-muted-foreground">Nome do Cliente <span className="text-muted-foreground/50">(opcional)</span></Label>
                        <Input
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            className="border-border bg-muted/50 text-foreground placeholder:text-muted-foreground/50"
                            placeholder="Ex: Oak Berry"
                        />
                        {errors.title && <span className="text-xs text-red-500">{errors.title}</span>}
                    </div>

                    <ImageUpload
                        label={`Logo do Cliente ${item ? '(deixe em branco para manter o atual)' : ''}`}
                        value={data.image}
                        onChange={(file) => setData('image', file)}
                        currentImage={item?.image}
                        error={errors.image}
                        hint="Preferencialmente PNG com fundo transparente"
                    />

                    <div className="flex items-center gap-3 border-t border-border pt-5">
                        <Button type="submit" disabled={processing} className="bg-[#E30613] font-bold text-white hover:bg-[#c00510]">
                            {processing ? 'Salvando...' : (item ? 'Salvar Alterações' : 'Criar Cliente')}
                        </Button>
                        <Link href="/admin/clients">
                            <Button type="button" variant="ghost" className="text-muted-foreground hover:text-foreground">Cancelar</Button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}
