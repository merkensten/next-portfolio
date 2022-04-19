import Head from 'next/head';
import Image from 'next/image';

import { Seo } from '../../components/seo/Seo';

export default function Projekt() {
  return (
    <>
      <Seo
        title="Mattis portfolio projekt Voii"
        description="Mattis portfolio projekt Voii"
        pageUrl="/projekt/voii"
        image="/mattis-logo.svg"
      />

      <main>
        <h1 className="text-4xl">Voii Projektet</h1>
      </main>
    </>
  );
}
