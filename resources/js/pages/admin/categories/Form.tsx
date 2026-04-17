import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Form({ item }: any) {
    const { data, setData, post, put, processing, errors } = useForm({
        title: item?.title || '',
        description: item?.description || '',
    });

    const submit = (e: any) => {
        e.preventDefault();
        if (item) {
            put(`/admin/categories/${item.id}`);
        } else {
            post('/admin/categories');
        }
    };

    return (
        <>
            <Head title={item ? "Editar Categoria" : "Nova Categoria"} />
            <div className="flex h-full flex-1 flex-col gap-4 p-4 text-white">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">{item ? "Editar Categoria" : "Nova Categoria"}</h1>
                    <Link href="/admin/categories">
                        <Button variant="outline">Voltar</Button>
                    </Link>
                </div>
                <form onSubmit={submit} className="flex flex-col gap-4 rounded-xl border border-sidebar-border bg-[#111] p-6 max-w-xl">
                    <div>
                        <Label>Título (e SEO Title)</Label>
                        <Input value={data.title} onChange={e => setData('title', e.target.value)} />
                        {errors.title && <div className="text-red-500 text-sm mt-1">{errors.title}</div>}
                    </div>
                    <div>
                        <Label>Descrição (SEO Description)</Label>
                        <Input value={data.description} onChange={e => setData('description', e.target.value)} />
                        {errors.description && <div className="text-red-500 text-sm mt-1">{errors.description}</div>}
                    </div>
                    <Button type="submit" disabled={processing} className="w-fit">{item ? 'Salvar Alterações' : 'Criar Categoria'}</Button>
                </form>
            </div>
        </>
    );
}

Form.layout = (page: any) => page;
