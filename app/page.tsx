import { Box, Flex } from "@radix-ui/themes";
import { LandingNav } from "@/components/landing/nav";
import { LandingHero } from "@/components/landing/hero";
import { LandingFeatures } from "@/components/landing/features";
import { LandingHowItWorks } from "@/components/landing/how-it-works";
import { LandingCTA } from "@/components/landing/cta";
import { LandingFooter } from "@/components/landing/footer";

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
