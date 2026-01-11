"use client";

import { Flex, Text, Button } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export default function LandingNav() {
    return (
        <nav
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 'var(--z-sticky)',
                backdropFilter: 'blur(12px)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderBottom: '1px solid var(--neutral-200)',
            }}
        >
            <div className="container">
                <Flex
                    justify="between"
                    align="center"
                    style={{
                        height: '72px',
                    }}
                >
                    {/* Logo */}
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <Flex align="center" gap="2">
                            <Image
                                src="/meerkat.png"
                                width={40}
                                height={40}
                                alt="Meerkat"
                            />
                            <Text
                                size="6"
                                weight="bold"
                                className="gradient-text"
                                style={{ fontSize: 'var(--text-2xl)' }}
                            >
                                Meerkat
                            </Text>
                        </Flex>
                    </Link>

                    {/* CTA Buttons */}
                    <Flex gap="3" align="center">
                        <Link href="/login">
                            <Button
                                variant="ghost"
                                size="3"
                                style={{
                                    cursor: 'pointer',
                                    transition: 'all var(--transition-base)',
                                }}
                            >
                                Log in
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button
                                size="3"
                                className="btn-primary"
                                style={{
                                    background: 'var(--primary-600)',
                                    color: 'white',
                                    cursor: 'pointer',
                                    transition: 'all var(--transition-base)',
                                }}
                            >
                                Get Started
                            </Button>
                        </Link>
                    </Flex>
                </Flex>
            </div>
        </nav>
    );
}
