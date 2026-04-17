import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export default function Index({ data }: any) {
    const { delete: destroy } = useForm();
    return (
        <>
            <Head title="Clients" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4 text-white">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Clientes e Parceiros</h1>
                    <Link href="/admin/clients/create">
                        <Button>Novo</Button>
                    </Link>
                </div>
                <div className="rounded-xl border border-sidebar-border bg-[#111]">
                    <table className="w-full text-left font-roboto">
                        <thead>
                            <tr className="border-b border-sidebar-border text-sm text-gray-400">
                                <th className="p-4">Imagem</th>
                                <th className="p-4">Título</th>
                                <th className="p-4">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item: any) => (
                                <tr key={item.id} className="border-b border-sidebar-border last:border-0 hover:bg-white/5">
                                    <td className="p-4">
                                        {item.image && <img src={`/storage/${item.image}`} className="h-10 invert object-contain" alt="" />}
                                    </td>
                                    <td className="p-4">{item.title}</td>
                                    <td className="p-4 flex gap-2">
                                        <Link href={`/admin/clients/${item.id}/edit`}>
                                            <Button variant="outline" size="sm">Editar</Button>
                                        </Link>
                                        <Button variant="destructive" size="sm" onClick={() => {
                                            if (confirm('Tem certeza?')) destroy(`/admin/clients/${item.id}`);
                                        }}>
                                            Excluir
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

Index.layout = (page: any) => page;
