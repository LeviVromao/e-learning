/* eslint-disable @next/next/no-page-custom-font */
import FirstSection from "@/components/FirstSection";
import Header from "@/components/Header";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet"/>
      </Head>
      <Header/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection />
    </>
  );
}
