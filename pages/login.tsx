import { Box, Button, Input } from '@chakra-ui/react';
import { useEffect } from 'react';
import Router from 'next/router';
import { providers, getSession, ClientSafeProvider } from 'next-auth/client';
import { signIn } from 'next-auth/client';
import { NextPageContext } from 'next';
import { Session } from 'next-auth';

export interface LoginProps {
    providers: Record<string, ClientSafeProvider>;
    session: Session;
}

function Login({ providers, session }: LoginProps) {
    useEffect(() => {
        if (session) {
            Router.push('/');
        }
    }, [session]);

    if (session) return null;

    return (
        <Box p="20">
            <Input placeholder="email" type="email" />
            <Input placeholder="password" type="password" />
            <Box>
                <Button
                    style={{ background: 'brand', color: 'brand.50' }}
                    onClick={() => signIn(providers.id)}
                >
                    Sign in with {providers.name}
                </Button>
            </Box>
        </Box>
    );
}

Login.getInitialProps = async (context: NextPageContext) => {
    return {
        providers: await providers(),
        session: await getSession(context),
    };
};

export default Login;
