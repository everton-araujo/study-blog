import { Header } from '../../components/Header';

import styles from './styles.module.scss';

export default function About() {
  return (
    <>
      <Header />
      
      <main className={styles.content}>
        <h1>About Page</h1>
      </main>
    </>
  );
}
