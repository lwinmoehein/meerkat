"use client";

import { Flex, Heading, Container, Section, Box, Text } from "@radix-ui/themes";
import Image from "next/image";

export function LandingHowItWorks() {
    return (
        <Section size="3" style={{ background: 'var(--gray-3)' }}>
            <Container size="3">
                <Flex direction="column" gap="8" align="center">
                    <Box style={{ textAlign: 'center', maxWidth: '700px' }}>
                        <Heading size="8" mb="4" style={{ color: 'white' }}>How MeerkatSentry Works</Heading>
                        <Text size="4" style={{ color: 'var(--gray-11)' }}>
                            Simple, powerful monitoring in three easy steps.
                        </Text>
                    </Box>

                    <Box
                        style={{
                            width: '100%',
                            maxWidth: '900px',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            src="/meerkat_how_it_works.svg"
                            width={800}
                            height={400}
                            alt="How MeerkatSentry Works"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '500px'
                            }}
                        />
                    </Box>
                </Flex>
            </Container>
        </Section>
    );
}
