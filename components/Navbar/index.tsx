import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { logoTextProps, parentContainerProps } from './style-props';
import { signIn, signOut, useSession } from 'next-auth/client';

function Session() {
    const [session, loading] = useSession();

    return (
        <>
            {!session && (
                <>
                    Not signed in <br />
                    <button onClick={() => signIn()}>Sign in</button>
                </>
            )}
            {session && (
                <>
                    Signed in as {session.user.name} <br />
                    <button onClick={() => signOut()}>Sign out</button>
                </>
            )}
        </>
    );
}

export default function Navbar() {
    return (
        <Flex {...parentContainerProps}>
            <Text {...logoTextProps}>gilink</Text>
            {/* Navbar?? */}
            <Text fontWeight={'semibold'} fontSize={'2xl'} textAlign={'center'}>
                Navbar
            </Text>
            <Text>
                <Session />
            </Text>
        </Flex>
    );
}
