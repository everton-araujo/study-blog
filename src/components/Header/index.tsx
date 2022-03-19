import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';

export function Header() {
  const { asPath } = useRouter();

  return (
    <>
      <main className={styles.headerContainer}>
        <Link href='/'>
          <a className={asPath === '/' ? styles.active : ''}>Home</a>
        </Link>

        <section className={styles.headerContent}>
          <Link href='/about'>
            <a className={asPath === '/about' ? styles.active : ''}>About</a>
          </Link>
          <Link href='/projects'>
            <a className={asPath === '/projects' ? styles.active : ''}>Projects</a>
          </Link>
        </section>
      </main>
    </>
  );
}
