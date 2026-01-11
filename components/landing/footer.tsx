"use client";

import { Flex, Text, Container, Box } from "@radix-ui/themes";

export function LandingFooter() {
    return (
        <Box
            py="6"
            style={{ borderTop: '1px solid var(--gray-4)' }}
        >
            <Container size="3">
                <Flex justify="between" align="center" wrap="wrap" gap="4">
                    <Text size="2" color="gray">
                        © {new Date().getFullYear()} Meerkat. All rights reserved.
                    </Text>

                    <Flex gap="4">
                        <Text size="2" color="gray">Privacy</Text>
                        <Text size="2" color="gray">Terms</Text>
                        <Text size="2" color="gray">Contact</Text>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}
