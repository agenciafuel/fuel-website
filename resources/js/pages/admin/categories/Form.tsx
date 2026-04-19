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
            <div className="flex h-full flex-1 flex-col gap-6 p-6 text-white">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">{item ? "Editar Categoria" : "Nova Categoria"}</h1>
                        <p className="mt-1 text-sm text-gray-400">{item ? 'Atualize os dados da categoria' : 'Crie uma nova categoria para organizar os posts'}</p>
                    </div>
                    <Link href="/admin/categories">
                        <Button variant="outline" className="border-white/10 text-gray-300 hover:bg-white/5">
                            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
                            Voltar
                        </Button>
                    </Link>
                </div>
                <form onSubmit={submit} className="flex max-w-xl flex-col gap-5 rounded-xl border border-white/10 bg-[#111] p-6">
                    <div className="flex flex-col gap-1.5">
                        <Label className="text-gray-300">Título da Categoria</Label>
                        <Input
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            className="border-white/10 bg-white/5 text-white placeholder:text-gray-600"
                            placeholder="Ex: Marketing Digital"
                        />
                        {errors.title && <span className="text-xs text-red-400">{errors.title}</span>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <Label className="text-gray-300">Descrição <span className="text-gray-600">(SEO)</span></Label>
                        <Input
                            value={data.description}
                            onChange={e => setData('description', e.target.value)}
                            className="border-white/10 bg-white/5 text-white placeholder:text-gray-600"
                            placeholder="Descrição para mecanismos de busca..."
                        />
                        {errors.description && <span className="text-xs text-red-400">{errors.description}</span>}
                    </div>
                    <div className="flex items-center gap-3 border-t border-white/5 pt-5">
                        <Button type="submit" disabled={processing} className="bg-[#E30613] font-bold text-white hover:bg-[#c00510]">
                            {processing ? 'Salvando...' : (item ? 'Salvar Alterações' : 'Criar Categoria')}
                        </Button>
                        <Link href="/admin/categories">
                            <Button type="button" variant="ghost" className="text-gray-400 hover:text-white">Cancelar</Button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}
