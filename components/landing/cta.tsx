"use client";

import { Flex, Text, Button, Container, Section, Heading } from "@radix-ui/themes";
import Link from "next/link";
import { RocketIcon } from "@radix-ui/react-icons";

export function LandingCTA() {
    return (
        <Section size="3" style={{ background: 'var(--gray-2)' }}>
            <Container size="2">
                <Flex direction="column" align="center" gap="6" style={{ textAlign: 'center' }}>
                    <Heading size="8" weight="bold">
                        Ready to start monitoring?
                    </Heading>
                    <Text size="4" color="gray" style={{ maxWidth: '500px' }}>
                        Join thousands of users who trust Meerkat to keep them informed. No credit card required.
                    </Text>
                    <Link href="/register">
                        <Button size="4">
                            <RocketIcon width="18" height="18" />
                            Get started for free
                        </Button>
                    </Link>
                </Flex>
            </Container>
        </Section>
    );
}
