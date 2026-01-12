"use client";

import { useState } from "react";
import { Flex, Text, Button, Container, Box, IconButton } from "@radix-ui/themes";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export function LandingNav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <Box
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                backdropFilter: 'blur(12px)',
                backgroundColor: 'rgba(var(--color-background-rgb), 0.8)',
                borderBottom: '1px solid var(--gray-a4)',
            }}
        >
            <Container size="4">
                <Flex
                    justify="between"
                    align="center"
                    py={{ initial: '2', sm: '3' }}
                    px={{ initial: '4', sm: '5', md: '6' }}
                >
                    {/* Logo */}
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <Flex align="center" gap={{ initial: '1', sm: '2' }}>
                            <Image
                                src="/meerkat.png"
                                width={40}
                                height={40}
                                alt="MeerkatSentry"
                                style={{ width: '40px', height: '40px' }}
                            />
                            <Text
                                size={{ initial: '4', sm: '5' }}
                                weight="bold"
                                style={{
                                    color: 'var(--gray-12)',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                MeerkatSentry
                            </Text>
                        </Flex>
                    </Link>

                    {/* Desktop CTA Buttons */}
                    <Flex
                        gap="3"
                        align="center"
                        display={{ initial: 'none', sm: 'flex' }}
                    >
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

                    {/* Mobile Menu Button */}
                    <Box
                        display={{ initial: 'block', sm: 'none' }}
                    >
                        <IconButton
                            size="2"
                            variant="ghost"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
                        </IconButton>
                    </Box>
                </Flex>

                {/* Mobile Menu */}
                <Box
                    display={{ initial: mobileMenuOpen ? 'block' : 'none', sm: 'none' }}
                    pb="3"
                    px="3"
                    style={{
                        borderTop: '1px solid var(--gray-a4)',
                        marginTop: 'var(--space-2)'
                    }}
                >
                    <Flex direction="column" gap="2" pt="3">
                        <Link href="/login" style={{ width: '100%' }}>
                            <Button
                                variant="soft"
                                size="3"
                                style={{ width: '100%' }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Log in
                            </Button>
                        </Link>
                        <Link href="/register" style={{ width: '100%' }}>
                            <Button
                                size="3"
                                style={{ width: '100%' }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get Started
                            </Button>
                        </Link>
                    </Flex>
                </Box>
            </Container>
        </Box>
    );
}
