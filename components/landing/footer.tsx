"use client";

import { Flex, Text, Container, Box, Link } from "@radix-ui/themes";
import NextLink from "next/link";

export function LandingFooter() {
    return (
        <Box
            py="6"
            style={{ borderTop: '1px solid var(--gray-4)' }}
        >
            <Container size="3">
                <Flex justify="between" align="center" wrap="wrap" gap="4">
                    <Text size="2" color="gray">
                        © {new Date().getFullYear()} Meerkat Sentry. All rights reserved.
                    </Text>

                    <Flex gap="4">
                        <NextLink href="/privacy" style={{ textDecoration: 'none' }}>
                            <Text size="2" style={{ cursor: 'pointer' }}>Privacy</Text>
                        </NextLink>
                        <NextLink href="/terms" style={{ textDecoration: 'none' }}>
                            <Text size="2" style={{ cursor: 'pointer' }}>Terms</Text>
                        </NextLink>
                        <NextLink href="/contact" style={{ textDecoration: 'none' }}>
                            <Text size="2" style={{ cursor: 'pointer' }}>Contact</Text>
                        </NextLink>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}
