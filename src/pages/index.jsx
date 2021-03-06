import Head from 'next/head';
import Image from 'next/image';

import { Seo } from '../components/seo/Seo';
import { Cta } from '../components/Cta';
import { Hero } from '../components/Hero';

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
        <Hero />
        <Cta />
      </main>
    </>
  );
}
