import Head from 'next/head';
import Image from 'next/image';

import { Seo } from '../../components/seo/Seo';

export default function Projekt() {
  return (
    <>
      <Seo
        title="Mattis portfolio projekt"
        description="Mattis portfolio projekt"
        pageUrl="/projekt"
        image="/mattis-logo.svg"
      />

      <main>
        <h1 className="text-4xl">Mina Projekt</h1>
      </main>
    </>
  );
}
