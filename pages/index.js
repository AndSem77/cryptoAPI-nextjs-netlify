import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Next.js Starter!</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header title='Welcome to my app!' />
        <h1>I love React JS</h1>
        <p>I am now live on Netlify</p>
      </main>

      <Footer />
    </div>
  );
}
