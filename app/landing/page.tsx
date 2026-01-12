import '@radix-ui/themes/styles.css';
import { Box, Flex, Text, Heading, Button, Card, Grid } from "@radix-ui/themes";
import { BellIcon, EyeOpenIcon, RocketIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { LandingNav } from "@/components/landing/nav";

export default function LandingPage() {
    return (
        <Box>
            {/* Navigation */}
            <LandingNav />

            {/* Hero Section */}
            <Box style={{ padding: '80px 16px', textAlign: 'center' }}>
                <Flex direction="column" align="center" gap="6" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Heading size="9" weight="bold">
                        Monitor Web Pages, Get Notified
                    </Heading>

                    <Text size="5" style={{ maxWidth: '600px', opacity: 0.8 }}>
                        Stay ahead of changes on your favorite websites. Meerkat watches for you and sends instant notifications when content updates.
                    </Text>

                    <Flex gap="4" style={{ marginTop: '16px' }}>
                        <Link href="/register">
                            <Button size="4">
                                <RocketIcon width="20" height="20" />
                                Start Monitoring Free
                            </Button>
                        </Link>
                        <Link href="/login">
                            <Button size="4" variant="outline">Sign In</Button>
                        </Link>
                    </Flex>
                </Flex>
            </Box>

            {/* Features Section */}
            <Box style={{ padding: '64px 16px' }}>
                <Flex direction="column" align="center" gap="8" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <Flex direction="column" align="center" gap="3" style={{ textAlign: 'center' }}>
                        <Heading size="8" weight="bold">
                            Everything you need to stay informed
                        </Heading>
                        <Text size="4" style={{ opacity: 0.7, maxWidth: '600px' }}>
                            Powerful features to help you track changes across all your important web pages
                        </Text>
                    </Flex>

                    <Grid columns={{ initial: '1', md: '3' }} gap="6" width="100%">
                        <Card>
                            <Flex direction="column" gap="4" p="5">
                                <EyeOpenIcon width="32" height="32" />
                                <Heading size="5" weight="bold">Real-time Monitoring</Heading>
                                <Text style={{ opacity: 0.7 }}>
                                    Track changes on any webpage in real-time. Get notified the moment content updates.
                                </Text>
                            </Flex>
                        </Card>

                        <Card>
                            <Flex direction="column" gap="4" p="5">
                                <BellIcon width="32" height="32" />
                                <Heading size="5" weight="bold">Instant Notifications</Heading>
                                <Text style={{ opacity: 0.7 }}>
                                    Receive instant alerts when your monitored pages change. Never miss an update.
                                </Text>
                            </Flex>
                        </Card>

                        <Card>
                            <Flex direction="column" gap="4" p="5">
                                <LightningBoltIcon width="32" height="32" />
                                <Heading size="5" weight="bold">Smart Tag Matching</Heading>
                                <Text style={{ opacity: 0.7 }}>
                                    Define custom tags to track specific content. Get notified only for changes that matter.
                                </Text>
                            </Flex>
                        </Card>
                    </Grid>
                </Flex>
            </Box>

            {/* CTA Section */}
            <Box style={{ padding: '64px 16px' }}>
                <Flex direction="column" align="center" gap="6" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <Heading size="8" weight="bold">Ready to start monitoring?</Heading>
                    <Text size="4" style={{ opacity: 0.8, maxWidth: '600px' }}>
                        Join thousands of users who trust Meerkat to keep them informed
                    </Text>
                    <Link href="/register">
                        <Button size="4">
                            <RocketIcon width="20" height="20" />
                            Get Started for Free
                        </Button>
                    </Link>
                </Flex>
            </Box>

            {/* Footer */}
            <Box style={{ borderTop: '1px solid var(--gray-a5)', padding: '32px 16px' }}>
                <Flex justify="center" align="center">
                    <Text size="2" style={{ opacity: 0.6 }}>
                        © 2026 Meerkat. All rights reserved.
                    </Text>
                </Flex>
            </Box>
        </Box>
    );
}
