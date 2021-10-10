import '../styles/globals.css';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider as AuthProvider } from 'next-auth/client';
import Layout from '../components/Layout';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <AuthProvider session={pageProps.session}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AuthProvider>
        </ChakraProvider>
    );
}

export default MyApp;
