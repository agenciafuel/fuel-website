import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ImageUpload from '@/components/ui/image-upload';

export default function Form({ item, categories }: any) {
    const { data, setData, post, processing, errors } = useForm({
        title: item?.title || '',
        category_id: item?.category_id || '',
        short_description: item?.short_description || '',
        description: item?.description || '',
        content: item?.content || '',
        image: null as File | null,
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
            <div className="flex h-full flex-1 flex-col gap-6 p-6 text-white">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">{item ? "Editar Post" : "Novo Post"}</h1>
                        <p className="mt-1 text-sm text-gray-400">{item ? 'Atualize as informações do post' : 'Preencha os campos para criar um novo post'}</p>
                    </div>
                    <Link href="/admin/posts">
                        <Button variant="outline" className="border-white/10 text-gray-300 hover:bg-white/5">
                            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
                            Voltar
                        </Button>
                    </Link>
                </div>

                <form onSubmit={submit} className="flex max-w-4xl flex-col gap-6 rounded-xl border border-white/10 bg-[#111] p-6">
                    <div className="grid gap-5 md:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                            <Label className="text-gray-300">Título do Post</Label>
                            <Input
                                value={data.title}
                                onChange={e => setData('title', e.target.value)}
                                className="border-white/10 bg-white/5 text-white placeholder:text-gray-600"
                                placeholder="Ex: Como criar uma marca memorável"
                            />
                            {errors.title && <span className="text-xs text-red-400">{errors.title}</span>}
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <Label className="text-gray-300">Categoria</Label>
                            <select
                                className="flex h-9 w-full rounded-md border border-white/10 bg-white/5 px-3 py-1 text-base text-white shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E30613] [&>option]:bg-[#111]"
                                value={data.category_id}
                                onChange={e => setData('category_id', e.target.value)}
                            >
                                <option value="">Nenhuma Categoria</option>
                                {categories.map((c: any) => (
                                    <option key={c.id} value={c.id}>{c.title}</option>
                                ))}
                            </select>
                            {errors.category_id && <span className="text-xs text-red-400">{errors.category_id}</span>}
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label className="text-gray-300">Descrição Curta <span className="text-gray-600">(aparece nos cards)</span></Label>
                        <Input
                            value={data.short_description}
                            onChange={e => setData('short_description', e.target.value)}
                            className="border-white/10 bg-white/5 text-white placeholder:text-gray-600"
                            placeholder="Breve resumo do post..."
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label className="text-gray-300">SEO Description <span className="text-gray-600">(meta tag)</span></Label>
                        <Input
                            value={data.description}
                            onChange={e => setData('description', e.target.value)}
                            className="border-white/10 bg-white/5 text-white placeholder:text-gray-600"
                            placeholder="Descrição para mecanismos de busca..."
                        />
                    </div>

                    <ImageUpload
                        label={`Imagem de Capa ${item ? '(deixe em branco para manter a atual)' : ''}`}
                        value={data.image}
                        onChange={(file) => setData('image', file)}
                        currentImage={item?.image}
                        error={errors.image}
                        hint="Recomendado: 1600x900px (16:9)"
                    />

                    <div className="flex flex-col gap-1.5">
                        <Label className="text-gray-300">Conteúdo <span className="text-gray-600">(Markdown ou HTML)</span></Label>
                        <textarea
                            className="min-h-[350px] w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-white shadow-sm placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E30613]"
                            value={data.content}
                            onChange={e => setData('content', e.target.value)}
                            placeholder={"# Título\n\nEscreva o conteúdo do post aqui...\n\n## Subtítulo\n\nUse markdown para formatar."}
                        />
                        {errors.content && <span className="text-xs text-red-400">{errors.content}</span>}
                    </div>

                    <div className="flex items-center gap-3 border-t border-white/5 pt-5">
                        <Button type="submit" disabled={processing} className="bg-[#E30613] font-bold text-white hover:bg-[#c00510]">
                            {processing ? 'Salvando...' : (item ? 'Salvar Alterações' : 'Criar Post')}
                        </Button>
                        <Link href="/admin/posts">
                            <Button type="button" variant="ghost" className="text-gray-400 hover:text-white">Cancelar</Button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}
