import { Link } from '@inertiajs/react';
import { FileText, Image, Settings, Tag, Users } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroup,
    SidebarGroupLabel,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';
import { useCurrentUrl } from '@/hooks/use-current-url';

const mainNavItems: NavItem[] = [
    {
        title: 'Posts',
        href: '/admin/posts',
        icon: FileText,
    },
    {
        title: 'Categorias',
        href: '/admin/categories',
        icon: Tag,
    },
    {
        title: 'Clientes',
        href: '/admin/clients',
        icon: Users,
    },
    {
        title: 'Portfólio',
        href: '/admin/portfolio',
        icon: Image,
    },
];

export function AppSidebar() {
    const { isCurrentUrl } = useCurrentUrl();

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />

                <SidebarGroup className="mt-auto px-2 py-0">
                    <SidebarGroupLabel>Sistema</SidebarGroupLabel>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                asChild
                                isActive={isCurrentUrl('/admin/settings')}
                                tooltip={{ children: 'Configurações' }}
                            >
                                <Link href="/admin/settings" prefetch>
                                    <Settings />
                                    <span>Configurações</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
