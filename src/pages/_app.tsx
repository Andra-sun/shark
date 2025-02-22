import type { AppProps } from 'next/app';
import Sidebar from '@/components/Sidebar';
import Header from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
        <Header />
      <Sidebar />
      <main >
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;