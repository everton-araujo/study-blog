import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import styles from './Header.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <Footer />
    </div>
  )
}
