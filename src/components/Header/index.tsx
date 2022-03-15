import Link from 'next/link';

import styles from './styles.module.scss';

export function Header() {
  return (
    <>
      <main className={styles.headerContainer}>
        <Link href='/'>
          <a>Home</a>
        </Link>

        <section className={styles.headerContent}>
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='/works'>
            <a>Works</a>
          </Link>
        </section>
      </main>
    </>
  );
}
