"use client";

import { Flex, Text, Heading, Container, Section, Grid, Card, Box } from "@radix-ui/themes";
import { BellIcon, EyeOpenIcon, LightningBoltIcon, CheckCircledIcon } from "@radix-ui/react-icons";

const features = [
    {
        title: "Real-time Monitoring",
        description: "Our efficient crawlers check your tracked pages as frequently as every 5 minutes.",
        icon: <EyeOpenIcon width="24" height="24" />
    },
    {
        title: "Smart Element Selection",
        description: "Don't track the whole page. Select specific HTML elements (IDs, classes) to ignore noise.",
        icon: <LightningBoltIcon width="24" height="24" />
    },
    {
        title: "Instant Notifications",
        description: "Get alerted immediately via Email, Webhook, or your favorite messaging apps.",
        icon: <BellIcon width="24" height="24" />
    }
];

export function LandingFeatures() {
    return (
        <Section size="3" id="features">
            <Container size="3">
                <Flex direction="column" gap="8">
                    <Box style={{ textAlign: 'center', margin: '0 auto', maxWidth: '700px' }}>
                        <Heading size="8" mb="4">Everything you need to stay updated</Heading>
                        <Text size="4" color="gray">
                            Powerful tools designed to keep you informed about what matters most on the web.
                        </Text>
                    </Box>

                    <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="6">
                        {features.map((feature, i) => (
                            <Card key={i} size="3" style={{ height: '100%' }}>
                                <Flex direction="column" gap="4" height="100%">
                                    <Box
                                        style={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: 'var(--accent-3)',
                                            color: 'var(--accent-9)'
                                        }}
                                    >
                                        {feature.icon}
                                    </Box>
                                    <Box>
                                        <Heading size="4" mb="2">{feature.title}</Heading>
                                        <Text size="3" color="gray" style={{ lineHeight: 1.5 }}>
                                            {feature.description}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Card>
                        ))}
                    </Grid>
                </Flex>
            </Container>
        </Section>
    );
}
