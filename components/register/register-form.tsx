"use client";

import React from 'react';
import { Flex, Card, Heading, Box, Link, TextField, Text } from "@radix-ui/themes";
import { Form } from "@radix-ui/react-form";
import { register } from '@/app/lib/actions';
import { useActionState } from "react";
import { SubmitButton } from "@/components/submit-button";
import { ArrowRightIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function RegisterForm() {
    const initialState = { message: null, errors: {} };
    const [state, dispatch, isPending] = useActionState(register, initialState);

    return (
        <Flex
            align="center"
            justify="center"
            style={{
                minHeight: '100vh',
                background: 'var(--gray-2)',
            }}
            p="4"
        >
            <Flex direction="column" gap="4" style={{ width: '100%', maxWidth: '400px' }}>
                <Link href="/" style={{ textDecoration: 'none', color: 'var(--gray-11)', alignSelf: 'flex-start' }} size="2">
                    ← Back to Home
                </Link>
                {/* Logo Section */}
                <Flex align="center" justify="center" direction="column" gap="4" mb="4">
                    <Image src="/meerkat.png" width={80} height={80} alt="Meerkat Sentry" />
                    <Heading size="6" weight="bold">Meerkat Sentry</Heading>
                </Flex>

                <Card size="4">
                    <Form action={dispatch}>
                        <Flex direction="column" gap="5">
                            {/* Title */}
                            <Box>
                                <Heading size="6" weight="bold" mb="1">
                                    Create an account
                                </Heading>
                                <Text size="2" color="gray">
                                    Start monitoring web pages for free.
                                </Text>
                            </Box>

                            {/* Error Alert */}
                            {state?.message && (
                                <Card style={{ background: 'var(--red-3)', border: '1px solid var(--red-6)' }}>
                                    <Flex align="center" gap="2">
                                        <ExclamationTriangleIcon color="red" width="16" height="16" />
                                        <Text size="2" color="red" weight="medium">
                                            {state.message}
                                        </Text>
                                    </Flex>
                                </Card>
                            )}

                            {/* Form Fields */}
                            <Flex direction="column" gap="4">
                                {/* Name */}
                                <Box>
                                    <Text as="label" size="2" weight="medium" mb="1" style={{ display: 'block' }}>
                                        Name
                                    </Text>
                                    <TextField.Root
                                        name="name"
                                        placeholder="Enter your name"
                                        size="3"
                                    />
                                    {state?.errors?.name && (
                                        <Text size="2" color="red" mt="1" style={{ display: 'block' }}>
                                            {state.errors.name[0]}
                                        </Text>
                                    )}
                                </Box>

                                {/* Email */}
                                <Box>
                                    <Text as="label" size="2" weight="medium" mb="1" style={{ display: 'block' }}>
                                        Email
                                    </Text>
                                    <TextField.Root
                                        name="email"
                                        placeholder="Enter your email"
                                        type="email"
                                        size="3"
                                    />
                                    {state?.errors?.email && (
                                        <Text size="2" color="red" mt="1" style={{ display: 'block' }}>
                                            {state.errors.email[0]}
                                        </Text>
                                    )}
                                </Box>

                                {/* Password */}
                                <Box>
                                    <Text as="label" size="2" weight="medium" mb="1" style={{ display: 'block' }}>
                                        Password
                                    </Text>
                                    <TextField.Root
                                        name="password"
                                        placeholder="Create a password (min. 4 characters)"
                                        type="password"
                                        size="3"
                                    />
                                    {state?.errors?.password && (
                                        <Text size="2" color="red" mt="1" style={{ display: 'block' }}>
                                            {state.errors.password[0]}
                                        </Text>
                                    )}
                                </Box>
                            </Flex>

                            {/* Submit Button */}
                            <SubmitButton name="Create account">
                                <ArrowRightIcon />
                            </SubmitButton>

                            {/* Footer */}
                            <Box style={{ textAlign: 'center' }}>
                                <Text size="2" color="gray">
                                    Already have an account?{' '}
                                    <Link href="/login" weight="medium">
                                        Sign in
                                    </Link>
                                </Text>
                            </Box>
                        </Flex>
                    </Form>
                </Card>
            </Flex>
        </Flex>
    );
}
