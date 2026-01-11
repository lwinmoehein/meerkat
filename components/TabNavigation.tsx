"use client"

import { usePathname, useRouter } from "next/navigation";
import { TabNav } from "@radix-ui/themes";
import { HomeIcon } from "@radix-ui/react-icons";

const links = [
    {
        name: 'Web Pages',
        href: '/home',
        icon: HomeIcon
    },
    {
        name: 'Notifications',
        href: '/home/notifications/1',
        icon: HomeIcon
    },
    {
        name: 'Settings',
        href: '/home/settings',
        icon: null,
    }
];
export function TabNavigation() {
    const pathname = usePathname()
    const router = useRouter()


    const linkItems = links.map((link, index) =>
        <TabNav.Link key={index} href={link.href} active={link.href === pathname}>
            {link.name}
        </TabNav.Link>
    );

    return (
        <TabNav.Root>
            {linkItems}
        </TabNav.Root>
    )
}