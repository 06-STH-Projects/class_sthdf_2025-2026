import React from 'react';
import Head from '@docusaurus/Head';

export default function CustomHead() {
  return (
    <Head>
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
      <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />

      {/* Apple Touch */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180.png" />

      {/* Manifest */}
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="theme-color" content="#0b2ea8" />
    </Head>
  );
}