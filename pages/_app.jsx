import { useEffect, useState } from 'react';
import Router from 'next/router';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
} from '@tanstack/react-query';
import { Header } from '../components/Header.components';
import { LoadingSpinner } from '../components/LoadingSpinner.components';
import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };

    const end = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <>
      {loading ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
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
      )}
    </>
  );
}

export default MyApp;
