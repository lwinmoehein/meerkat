"use client";

import { Box, Button, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import { ExitIcon, PersonIcon } from "@radix-ui/react-icons";
import { signOut } from "@/app/lib/actions";

export function Profile({ user }: { user: User }) {

    const logOut = async () => {
        await signOut()
    }

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Button
                    variant={'soft'}
                    style={{
                        cursor: 'pointer',
                        transition: 'all var(--transition-base)',
                    }}
                >
                    <Box display={{ 'initial': 'none', 'md': 'block' }}>
                        <Text weight={'bold'}>{user?.name}</Text>
                    </Box>
                    <PersonIcon />
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
                style={{
                    minWidth: '200px',
                    boxShadow: 'var(--shadow-xl)',
                    border: '1px solid var(--neutral-200)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-2)',
                }}
                className="animate-slide-down"
            >
                <Box p="2" style={{ borderBottom: '1px solid var(--neutral-200)' }}>
                    <Text size="2" weight="bold" style={{ display: 'block' }}>
                        {user?.name}
                    </Text>
                    <Text size="1" style={{ color: 'var(--neutral-500)', display: 'block' }}>
                        {user?.email}
                    </Text>
                </Box>
                <DropdownMenu.Item
                    onClick={logOut}
                    color={'red'}
                    style={{
                        marginTop: 'var(--spacing-2)',
                        cursor: 'pointer',
                        borderRadius: 'var(--radius-md)',
                        transition: 'all var(--transition-base)',
                    }}
                >
                    <ExitIcon />
                    Log Out
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}