import { Box, Container, Heading, Text, Flex, Link, Card, TextField, Button, TextArea } from "@radix-ui/themes";
import { LandingNav } from "@/components/landing/nav";
import { LandingFooter } from "@/components/landing/footer";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: "Get in touch with Meerkat Sentry support team. We're here to help with any questions or concerns.",
};

export default function ContactPage() {
    return (
        <Flex direction="column" style={{ minHeight: '100vh' }}>
            <LandingNav />
            <Box style={{ flex: 1 }}>
                <Container size="3" py="9">
                    <Flex direction="column" gap="6" align="center">
                        <Flex direction="column" gap="3" align="center" style={{ textAlign: 'center' }}>
                            <Heading size="8">Contact Us</Heading>
                            <Text size="4" color="gray" style={{ maxWidth: '600px' }}>
                                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </Text>
                        </Flex>

                        <Card style={{ width: '100%', maxWidth: '600px' }}>
                            <Flex direction="column" gap="5" p="6">
                                <Flex direction="column" gap="4">
                                    <Flex align="center" gap="2">
                                        <EnvelopeClosedIcon width="20" height="20" />
                                        <Heading size="5">Email Us</Heading>
                                    </Flex>
                                    <Text>
                                        For support, questions, or feedback, please email us at:
                                    </Text>
                                    <Link href="mailto:info@meerkatsentry.co" size="5" weight="bold">
                                        info@meerkatsentry.co
                                    </Link>
                                </Flex>

                                <Box style={{ borderTop: '1px solid var(--gray-a5)', paddingTop: '20px' }}>
                                    <Flex direction="column" gap="3">
                                        <Heading size="4">Quick Contact Topics</Heading>
                                        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
                                            <li>Technical support and troubleshooting</li>
                                            <li>Billing and account questions</li>
                                            <li>Feature requests and suggestions</li>
                                            <li>Partnership opportunities</li>
                                            <li>General inquiries</li>
                                        </ul>
                                    </Flex>
                                </Box>

                                <Box style={{ borderTop: '1px solid var(--gray-a5)', paddingTop: '20px' }}>
                                    <Flex direction="column" gap="3">
                                        <Heading size="4">Response Time</Heading>
                                        <Text>
                                            We typically respond to all inquiries within 24-48 hours during business days.
                                            For urgent matters, please mention "URGENT" in your subject line.
                                        </Text>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Card>
                    </Flex>
                </Container>
            </Box>
            <LandingFooter />
        </Flex>
    );
}
