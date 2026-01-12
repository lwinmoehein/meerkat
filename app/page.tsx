import { Box, Flex } from "@radix-ui/themes";
import { LandingNav } from "@/components/landing/nav";
import { LandingHero } from "@/components/landing/hero";
import { LandingFeatures } from "@/components/landing/features";
import { LandingHowItWorks } from "@/components/landing/how-it-works";
import { LandingCTA } from "@/components/landing/cta";
import { LandingFooter } from "@/components/landing/footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    description: "Monitor web pages for changes and receive instant email notifications. Track job listings, price changes, content updates and more with Meerkat Sentry - the free website monitoring tool.",
    openGraph: {
        title: 'Meerkat Sentry - Never Miss Website Updates',
        description: "Get instant email alerts when web pages change. Monitor jobs, prices, and content automatically.",
        images: ['/meerkat.png'],
    },
};

export default function LandingPage() {
    return (
        <Flex direction="column" style={{ minHeight: '100vh' }}>
            <LandingNav />
            <Box style={{ flex: 1 }}>
                <Flex direction="column" gap="9" pb="9" pt="8">
                    <LandingHero />
                    <LandingHowItWorks />
                    <LandingFeatures />
                    <LandingCTA />
                </Flex>
            </Box>
            <LandingFooter />
        </Flex>
    );
}
