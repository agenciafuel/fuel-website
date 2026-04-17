import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Form({ item }: any) {
    const { data, setData, post, processing, errors } = useForm({
        title: item?.title || '',
        image: null,
        _method: item ? 'PUT' : 'POST'
    });

    const submit = (e: any) => {
        e.preventDefault();
        if (item) {
            post(`/admin/portfolio/${item.id}`);
        } else {
            post('/admin/portfolio');
        }
    };

    return (
        <>
            <Head title={item ? "Editar" : "Nova Imagem"} />
            <div className="flex h-full flex-1 flex-col gap-4 p-4 text-white">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">{item ? "Editar Portfólio" : "Nova Imagem p/ Portfólio"}</h1>
                    <Link href="/admin/portfolio">
                        <Button variant="outline">Voltar</Button>
                    </Link>
                </div>
                <form onSubmit={submit} className="flex flex-col gap-4 rounded-xl border border-sidebar-border bg-[#111] p-6 max-w-xl">
                    <div>
                        <Label>Título (opcional)</Label>
                        <Input value={data.title} onChange={e => setData('title', e.target.value)} />
                        {errors.title && <div className="text-red-500 text-sm mt-1">{errors.title}</div>}
                    </div>
                    <div>
                        <Label>Imagem (ex: 400x500px) {item ? '(deixe em branco se não quiser trocar)' : ''}</Label>
                        <Input type="file" onChange={e => setData('image', (e.target as any).files[0])} accept="image/*" className="text-white" />
                        {errors.image && <div className="text-red-500 text-sm mt-1">{errors.image}</div>}
                    </div>
                    <Button type="submit" disabled={processing} className="w-fit">{item ? 'Salvar Alterações' : 'Criar'}</Button>
                </form>
            </div>
        </>
    );
}

Form.layout = (page: any) => page;
