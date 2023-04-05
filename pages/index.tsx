import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function Home({}) {
  return (
    <>
      <Head>
        <title>Danny Hanford</title>
      </Head>
      <main className={styles.main}></main>
    </>
  );
}
