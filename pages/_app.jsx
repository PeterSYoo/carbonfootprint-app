import { ThemeProvider } from 'next-themes';
import { Header } from '../components/Header.components';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <SessionProvider session={pageProps.session}>
            <ThemeProvider enableSystem={true} attribute="class">
              <Header />
              <Component {...pageProps} />
            </ThemeProvider>
          </SessionProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
