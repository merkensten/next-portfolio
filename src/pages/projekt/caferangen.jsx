import Head from 'next/head';
import Image from 'next/image';

import { Seo } from '../../components/seo/Seo';

export default function Caferangen() {
  return (
    <>
      <Seo
        title="Mattis portfolio caferangen projektet"
        description="Mattis portfolio caferangen projektet"
        pageUrl="/projekt/caferangen"
        image="/mattis-logo.svg"
      />

      <main>
        <h1 className="text-4xl">Caferangen Projektet</h1>
      </main>
    </>
  );
}
