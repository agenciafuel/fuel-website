import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export default function Index({ data }: any) {
    const { delete: destroy } = useForm();
    return (
        <>
            <Head title="Categorias" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6 text-white">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Categorias</h1>
                        <p className="mt-1 text-sm text-gray-400">{data.length} categoria{data.length !== 1 ? 's' : ''}</p>
                    </div>
                    <Link href="/admin/categories/create">
                        <Button className="bg-[#E30613] font-bold text-white hover:bg-[#c00510]">
                            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                            Nova Categoria
                        </Button>
                    </Link>
                </div>

                <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111]">
                    <table className="w-full text-left font-roboto">
                        <thead>
                            <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-gray-500">
                                <th className="px-5 py-4">Título</th>
                                <th className="px-5 py-4">Slug</th>
                                <th className="px-5 py-4">Posts</th>
                                <th className="px-5 py-4 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item: any) => (
                                <tr key={item.id} className="border-b border-white/5 transition-colors last:border-0 hover:bg-white/[0.03]">
                                    <td className="px-5 py-4 font-medium">{item.title}</td>
                                    <td className="px-5 py-4 text-sm text-gray-500">{item.slug}</td>
                                    <td className="px-5 py-4">
                                        <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-white/5 px-2 text-xs font-medium text-gray-300">
                                            {item.posts_count ?? 0}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link href={`/admin/categories/${item.id}/edit`}>
                                                <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
                                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() => { if (confirm('Tem certeza que deseja excluir esta categoria?')) destroy(`/admin/categories/${item.id}`); }}
                                                className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-red-500/10 hover:text-red-400"
                                            >
                                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {data.length === 0 && (
                                <tr><td colSpan={4} className="px-5 py-12 text-center text-gray-500">Nenhuma categoria cadastrada ainda.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
