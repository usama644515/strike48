import Head from 'next/head';
import Header from '../components/Header/Header';
import Hero from '../components/Home/Hero';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Strike48 - AI Personas and Automation</title>
        <meta name="description" content="Customized AI Personas and Agent-to-Agent Automation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}