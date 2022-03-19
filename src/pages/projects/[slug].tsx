import Head from "next/head"
import { useRouter } from "next/router"

import { Header } from "../../components/Header"

import styles from './project.module.scss'

export default function Project() {
  const router = useRouter()
  const { slug } = router.query
  return (
    <>
      <Head>
        <title>Everton Blog | {slug}</title>
      </Head>
      <Header />

      <main className={styles.content}>
        <h1>{slug}</h1>
      </main>
    </>
  )
}
