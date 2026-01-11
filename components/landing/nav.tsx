"use client";

import { Flex, Text, Button, Container, Box } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export function LandingNav() {
    return (
        <Box
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 10,
                backdropFilter: 'blur(12px)',
                backgroundColor: 'var(--color-background)',
                borderBottom: '1px solid var(--gray-4)',
            }}
        >
            <Container size="3">
                <Flex
                    justify="between"
                    align="center"
                    py="3"
                >
                    {/* Logo */}
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <Flex align="center" gap="2">
                            <Image
                                src="/meerkat.png"
                                width={64}
                                height={64}
                                alt="MeerkatSentry"
                            />
                            <Text
                                size="5"
                                weight="bold"
                                style={{ color: 'var(--gray-12)' }}
                            >
                                MeerkatSentry
                            </Text>
                        </Flex>
                    </Link>

                    {/* CTA Buttons */}
                    <Flex gap="3" align="center">
                        <Link href="/login">
                            <Button
                                variant="soft"
                                size="2"
                            >
                                Log in
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button
                                size="2"
                            >
                                Get Started
                            </Button>
                        </Link>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}
