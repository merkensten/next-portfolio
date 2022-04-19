import '../styles/globals.css';

import { Layout } from '../components/layouts/Layout';
import { RoutingPath } from '../helpers/RoutingPath';
import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <CookieConsent
        buttonText="Acceptera"
        style={{
          background: '#f2f2f2',
          color: '#000',
          fontSize: '16px',
          display: 'block',
          padding: '20px 0',
        }}
        buttonStyle={{
          background: '#312B7D',
          color: '#fefbf0',
          fontSize: '18px',
          marginTop: '0',
          borderRadius: '50px',
          padding: '10px 30px',
        }}
        expires={150}
        // debug={true}
      >
        Denna webbplats använder sig av cookies. Genom att du använder denna
        webbplats accepterar du vårt användade av cookies. Läs mer om vår{' '}
        <Link href={RoutingPath.integritetspolicy}>
          <a style={{ textDecoration: 'underline' }}>integritetspolicy</a>
        </Link>
        .
      </CookieConsent>
    </Layout>
  );
}

export default MyApp;
