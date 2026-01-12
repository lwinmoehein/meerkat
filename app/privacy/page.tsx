import { Box, Container, Heading, Text, Flex, Link, Card } from "@radix-ui/themes";
import { LandingNav } from "@/components/landing/nav";
import { LandingFooter } from "@/components/landing/footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: "Privacy policy for Meerkat Sentry - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
    return (
        <Flex direction="column" style={{ minHeight: '100vh' }}>
            <LandingNav />
            <Box style={{ flex: 1 }}>
                <Container size="3" py="9">
                    <Flex direction="column" gap="6">
                        <Heading size="8">Privacy Policy</Heading>
                        <Text color="gray">Last updated: January 13, 2026</Text>

                        <Card>
                            <Flex direction="column" gap="4" p="5">
                                <Heading size="5">1. Information We Collect</Heading>
                                <Text>
                                    We collect information you provide directly to us when you create an account,
                                    including your email address and the URLs you choose to monitor.
                                </Text>
                            </Flex>
                        </Card>

                        <Card>
                            <Flex direction="column" gap="4" p="5">
                                <Heading size="5">2. How We Use Your Information</Heading>
                                <Text>
                                    We use the information we collect to:
                                </Text>
                                <ul style={{ marginLeft: '20px' }}>
                                    <li>Provide, maintain, and improve our services</li>
                                    <li>Send you notifications about changes to monitored websites</li>
                                    <li>Respond to your comments and questions</li>
                                    <li>Monitor and analyze trends and usage</li>
                                </ul>
                            </Flex>
                        </Card>

                        <Card>
                            <Flex direction="column" gap="4" p="5">
                                <Heading size="5">3. Information Sharing</Heading>
                                <Text>
                                    We do not sell, trade, or rent your personal information to third parties.
                                    We may share your information only in the following circumstances:
                                </Text>
                                <ul style={{ marginLeft: '20px' }}>
                                    <li>With your consent</li>
                                    <li>To comply with legal obligations</li>
                                    <li>To protect our rights and safety</li>
                                </ul>
                            </Flex>
                        </Card>

                        <Card>
                            <Flex direction="column" gap="4" p="5">
                                <Heading size="5">4. Data Security</Heading>
                                <Text>
                                    We implement appropriate technical and organizational measures to protect
                                    your personal information against unauthorized access, alteration, or destruction.
                                </Text>
                            </Flex>
                        </Card>

                        <Card>
                            <Flex direction="column" gap="4" p="5">
                                <Heading size="5">5. Your Rights</Heading>
                                <Text>
                                    You have the right to access, update, or delete your personal information
                                    at any time through your account settings.
                                </Text>
                            </Flex>
                        </Card>

                        <Card>
                            <Flex direction="column" gap="4" p="5">
                                <Heading size="5">6. Contact Us</Heading>
                                <Text>
                                    If you have any questions about this Privacy Policy, please contact us at{' '}
                                    <Link href="mailto:info@meerkatsentry.co">info@meerkatsentry.co</Link>
                                </Text>
                            </Flex>
                        </Card>
                    </Flex>
                </Container>
            </Box>
            <LandingFooter />
        </Flex>
    );
}
