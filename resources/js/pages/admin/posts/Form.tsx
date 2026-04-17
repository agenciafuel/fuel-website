import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Form({ item, categories }: any) {
    const { data, setData, post, processing, errors } = useForm({
        title: item?.title || '',
        category_id: item?.category_id || '',
        short_description: item?.short_description || '',
        description: item?.description || '',
        content: item?.content || '',
        image: null,
        _method: item ? 'PUT' : 'POST'
    });

    const submit = (e: any) => {
        e.preventDefault();
        if (item) {
            post(`/admin/posts/${item.id}`);
        } else {
            post('/admin/posts');
        }
    };

    return (
        <>
            <Head title={item ? "Editar Post" : "Novo Post"} />
            <div className="flex h-full flex-1 flex-col gap-4 p-4 text-white">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">{item ? "Editar Post" : "Novo Post"}</h1>
                    <Link href="/admin/posts">
                        <Button variant="outline">Voltar</Button>
                    </Link>
                </div>
                <form onSubmit={submit} className="flex flex-col gap-6 rounded-xl border border-sidebar-border bg-[#111] p-6 max-w-4xl">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label>Título do Post</Label>
                            <Input value={data.title} onChange={e => setData('title', e.target.value)} />
                            {errors.title && <div className="text-red-500 text-sm mt-1">{errors.title}</div>}
                        </div>
                        <div>
                            <Label>Categoria</Label>
                            <select 
                                className="flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:focus-visible:ring-neutral-300 [&>option]:bg-[#111]"
                                value={data.category_id} 
                                onChange={e => setData('category_id', e.target.value)}
                            >
                                <option value="">Nenhuma Categoria</option>
                                {categories.map((c: any) => (
                                    <option key={c.id} value={c.id}>{c.title}</option>
                                ))}
                            </select>
                            {errors.category_id && <div className="text-red-500 text-sm mt-1">{errors.category_id}</div>}
                        </div>
                    </div>
                    
                    <div>
                        <Label>Short Description (Aparece no card inferior)</Label>
                        <Input value={data.short_description} onChange={e => setData('short_description', e.target.value)} />
                    </div>

                    <div>
                        <Label>SEO Description (Meta Tag)</Label>
                        <Input value={data.description} onChange={e => setData('description', e.target.value)} />
                    </div>

                    <div>
                        <Label>Imagem de Capa {item ? '(deixe em branco se não quiser trocar)' : ''}</Label>
                        <Input type="file" onChange={e => setData('image', (e.target as any).files[0])} accept="image/*" className="text-white" />
                        {errors.image && <div className="text-red-500 text-sm mt-1">{errors.image}</div>}
                    </div>

                    <div>
                        <Label>Conteúdo (Opcionalmente em código Markdown ou HTML para ficar idêntico ao original)</Label>
                        <textarea 
                            className="flex w-full rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 min-h-[300px] font-mono whitespace-pre-wrap"
                            value={data.content} 
                            onChange={e => setData('content', e.target.value)}
                            placeholder="# Titulo&#10;&#10;Use markdown aqui..."
                        />
                        {errors.content && <div className="text-red-500 text-sm mt-1">{errors.content}</div>}
                    </div>

                    <Button type="submit" disabled={processing} className="w-fit">{item ? 'Salvar Alterações' : 'Criar Post'}</Button>
                </form>
            </div>
        </>
    );
}

Form.layout = (page: any) => page;
