import Head from 'next/head';
import Image from 'next/image';

import { Seo } from '../components/seo/Seo';

export default function integritetspolicy() {
  return (
    <>
      <Seo
        title="Integritetspolicy"
        description="Integritetspolicy"
        pageUrl="/integritetspolicy"
        image="/mattis-logo.svg"
      />

      <main>
        <h1 className="text-4xl">Integritetspolicy</h1>
      </main>
    </>
  );
}
