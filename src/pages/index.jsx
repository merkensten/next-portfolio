import Head from 'next/head';
import Image from 'next/image';

import { Seo } from '../components/seo/Seo';

export default function Home() {
  return (
    <>
      <Seo
        title="Mattis portfolio"
        description="Mattis portfolio"
        pageUrl="/"
        image="/mattis-logo.svg"
      />

      <main>
        <h1 className="text-4xl">Mattis portfolio</h1>
      </main>
    </>
  );
}
