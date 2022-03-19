import Head from 'next/head';

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar';

import styles from './Header.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Everton Blog | Home</title>
      </Head>
      <Header />

      <main>
    
      </main>

    </div>
  )
}
