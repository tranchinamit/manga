"use client";
import Head from "next/head";

import DataProvider from "@/context/DataProvider";

import CustomLayout from "@/app/custom-layout";

export default function Page() {
  return (
    <DataProvider>
      <div className="container">
        <Head>
          <title>Kasane - Inkr NamTran</title>
          <meta name="description" content="Dev by NamTran" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CustomLayout />
        <footer />
      </div>
    </DataProvider>
  );
}
