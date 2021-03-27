import { useEffect } from 'react';
import AOS from 'aos';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/Layout';
import 'aos/dist/aos.css';
import '../styles/globals.css';

library.add(fab);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 600,
      delay: 200,
      once: false,
      disable: 'mobile',
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
