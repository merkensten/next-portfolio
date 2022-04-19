import Head from 'next/head';
import Image from 'next/image';

import { Seo } from '../components/seo/Seo';

export default function Kontakt() {
  return (
    <>
      <Seo
        title="Mattis portfolio"
        description="Mattis portfolio"
        pageUrl="/kontakt"
        image="/mattis-logo.svg"
      />

      <main>
        <h1 className="text-4xl">Kontakta mig</h1>
      </main>
    </>
  );
}
