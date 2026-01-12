import { Box, Container, Heading, Text, Flex, Link, Card } from "@radix-ui/themes";
import { LandingNav } from "@/components/landing/nav";
import { LandingFooter } from "@/components/landing/footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: "Terms of Service for Meerkat Sentry - Read our terms and conditions for using our website monitoring service.",
};

export default function TermsPage() {
    return (
        <Flex direction="column" style={{ minHeight: '100vh' }}>
            <LandingNav />
            <Box style={{ flex: 1 }}>
                <Container size="3" py="9">
                    <Flex direction="column" gap="6">
                        <Heading size="8">Terms of Service</Heading>
                        <Text color="gray">Last updated: January 13, 2026</Text>

                        <Card>
                            <Flex direction="column" gap="4" p="5">
                                <Heading size="5">1. Acceptance of Terms</Heading>
                                <Text>
                                    By accessing and using Meerkat Sentry, you accept and agree to be bound by
                                    the terms and provisions of this agreement.
                                </Text>
                            </Flex>
                        </Card>

                        <Card>
                            <Flex direction="column" gap="4" p="5">
                                <Heading size="5">2. Use of Service</Heading>
                                <Text>
                                    You agree to use Meerkat Sentry only for lawful purposes and in accordance
                                    with these Terms. You agree not to:
                                </Text>
                                <ul style={{ marginLeft: '20px' }}>
                                    <li>Monitor websites without proper authorization</li>
                                    <li>Use the service to violate any applicable laws or regulations</li>
                                    <li>Attempt to interfere with or disrupt the service</li>
                                    <li>Use the service for any fraudulent or malicious purposes</li>
                                </ul>
                            </Flex>
                        </Card>

                        <Card>
                            <Flex direction="column" gap="4" p="5">
                                <Heading size="5">3. Account Responsibilities</Heading>
                                <Text>
                                    You are responsible for maintaining the confidentiality of your account
                                    credentials and for all activities that occur under your account.
                                </Text>
                            </Flex>
                        </Card>

                        <Card>
                            <Flex direction="column" gap="4" p="5">
                                <Heading size="5">4. Service Availability</Heading>
                                <Text>
                                    We strive to provide reliable service but do not guarantee that the service
                                    will be uninterrupted or error-free. We reserve the right to modify or
                                    discontinue the service at any time.
                                </Text>
                            </Flex>
                        </Card>

                        <Card>
                            <Flex direction="column" gap="4" p="5">
                                <Heading size="5">5. Limitation of Liability</Heading>
                                <Text>
                                    Meerkat Sentry shall not be liable for any indirect, incidental, special,
                                    consequential, or punitive damages resulting from your use of the service.
                                </Text>
                            </Flex>
                        </Card>

                        <Card>
                            <Flex direction="column" gap="4" p="5">
                                <Heading size="5">6. Termination</Heading>
                                <Text>
                                    We may terminate or suspend your account at any time for violation of these
                                    Terms or for any other reason at our sole discretion.
                                </Text>
                            </Flex>
                        </Card>

                        <Card>
                            <Flex direction="column" gap="4" p="5">
                                <Heading size="5">7. Changes to Terms</Heading>
                                <Text>
                                    We reserve the right to modify these Terms at any time. Continued use of
                                    the service after changes constitutes acceptance of the modified Terms.
                                </Text>
                            </Flex>
                        </Card>

                        <Card>
                            <Flex direction="column" gap="4" p="5">
                                <Heading size="5">8. Contact Information</Heading>
                                <Text>
                                    For questions about these Terms, please contact us at{' '}
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
