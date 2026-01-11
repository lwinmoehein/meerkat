import '@radix-ui/themes/styles.css';
import './globals.css'
import { Theme } from '@radix-ui/themes';
import { SessionProvider } from "next-auth/react"

import type { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
    title: {
        template: '%s | MeerkatSentry',
        default: 'MeerkatSentry - Silent Web Monitor',
    },
    description: "Meerkat silently watches your favorite websites for changes, so you don't have to. Receive notifications via Email, Discord, or Slack instantly.",
    keywords: ['web monitor', 'change detection', 'website alerts', 'monitoring tool'],
    icons: {
        icon: '/meerkat.png',
        apple: '/meerkat.png',
        shortcut: '/meerkat.png',
    },
    openGraph: {
        title: 'MeerkatSentry - Silent Web Monitor',
        description: "Get instant alerts when web pages change.",
        images: ['/meerkat.png'],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MeerkatSentry',
        description: "Get instant alerts when web pages change.",
        images: ['/meerkat.png'],
    },
};

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body>
                <Theme accentColor="green" appearance={"dark"}>
                    {children}
                </Theme>
            </body>
        </html>
    );
}
