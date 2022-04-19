import Head from 'next/head';
import Image from 'next/image';

import { Seo } from '../../components/seo/Seo';

export default function StensholmsTradgard() {
  return (
    <>
      <Seo
        title="Mattis portfolio projekt Stensholms Trädgård"
        description="Mattis portfolio projekt Stensholms Trädgård"
        pageUrl="/projekt/stensholms-tradgard"
        image="/mattis-logo.svg"
      />

      <main>
        <h1 className="text-4xl">Stensholms Trädgård Projekt</h1>
      </main>
    </>
  );
}
