import Head from 'next/head';
import Image from 'next/image';

import { Seo } from '../components/seo/Seo';

export default function OmMig() {
  return (
    <>
      <Seo
        title="Mattis portfolio om mig"
        description="Mattis portfolio om mig"
        pageUrl="/om-mig"
        image="/mattis-logo.svg"
      />

      <main>
        <h1 className="text-4xl">Om Mig</h1>
      </main>
    </>
  );
}
