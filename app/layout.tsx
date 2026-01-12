import '@radix-ui/themes/styles.css';
import './globals.css'
import { Theme } from '@radix-ui/themes';
import { SessionProvider } from "next-auth/react"

import type { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
    title: {
        template: '%s | Meerkat Sentry',
        default: 'Meerkat Sentry - Website Change Detection & Monitoring Tool',
    },
    description: "Meerkat Sentry is a powerful website monitoring tool that tracks changes on web pages and sends instant notifications. Monitor job listings, price drops, content updates, and more. Get alerts via email when your tracked pages change. Free web monitoring made simple.",
    keywords: [
        'web monitor',
        'website monitoring',
        'change detection',
        'website alerts',
        'page monitoring',
        'content tracking',
        'job alert tracker',
        'price monitoring',
        'webpage watcher',
        'notification tool',
        'website change detector',
        'automated monitoring'
    ],
    authors: [{ name: 'Meerkat Sentry' }],
    creator: 'Meerkat Sentry',
    publisher: 'Meerkat Sentry',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: '/',
        title: 'Meerkat Sentry - Website Change Detection & Monitoring',
        description: "Never miss important website updates. Meerkat monitors web pages for changes and sends instant email notifications. Track job posts, prices, content updates and more. Free to start.",
        siteName: 'Meerkat Sentry',
        images: [
            {
                url: '/meerkat.png',
                width: 1200,
                height: 630,
                alt: 'Meerkat Sentry - Website Monitoring Tool',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Meerkat Sentry - Website Change Detection & Monitoring',
        description: "Monitor web pages for changes and get instant email alerts. Track job listings, prices, and content updates automatically.",
        images: ['/meerkat.png'],
        creator: '@meerkat_sentry',
    },
    verification: {
        // Add your verification codes when available
        // google: 'your-google-verification-code',
        // yandex: 'your-yandex-verification-code',
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
