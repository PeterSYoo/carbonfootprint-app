import { ThemeProvider } from 'next-themes';
import { Header } from '../components/Header.components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
