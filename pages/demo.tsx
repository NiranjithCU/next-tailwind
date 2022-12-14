import type { NextPage } from "next";
import Head from "next/head";
import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Spotlight from "../components/Spotlight/Spotlight";

const Demo: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carleton University | Home </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Spotlight />
      <Featured />
      <Footer />
    </>
  );
};

export default Demo;
