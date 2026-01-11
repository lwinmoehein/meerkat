"use client";

import { Flex, Text, Button, Container, Section, Heading, Box } from "@radix-ui/themes";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export function LandingHero() {
    return (
        <Section size="3" pb="0">
            <Container size="3">
                <Flex direction="column" align="center" gap="6" style={{ textAlign: 'center' }}>

                    <Box>
                        <Box
                            style={{
                                display: 'inline-block',
                                padding: '4px 12px',
                                background: 'var(--accent-3)',
                                borderRadius: '9999px',
                                marginBottom: '24px'
                            }}
                        >
                            <Text size="2" weight="medium" color="orange">
                                New: Smart element selection active
                            </Text>
                        </Box>

                        <Heading size="9" weight="bold" style={{ lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px' }}>
                            Monitor Web Pages. <br />
                            <Text style={{ color: 'var(--accent-9)' }}>Get Instant Alerts.</Text>
                        </Heading>

                        <Text size="5" color="gray" style={{ maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                            Meerkat silently watches your favorite websites for changes, so you don't have to.
                            Receive notifications via Email, Discord, or Slack instantly.
                        </Text>
                    </Box>

                    <Flex gap="4" wrap="wrap" justify="center" mt="4">
                        <Link href="/register">
                            <Button size="4" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                                Start Monitoring Free
                                <ArrowRightIcon />
                            </Button>
                        </Link>
                        <Link href="#features">
                            <Button size="4" variant="soft" color="gray">
                                How it works
                            </Button>
                        </Link>
                    </Flex>
                </Flex>
            </Container>
        </Section>
    );
}
