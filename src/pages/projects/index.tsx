import Head from 'next/head';
import Link from 'next/link';

import { Header } from '../../components/Header';

import styles from './styles.module.scss';

export default function Projects() {
  const mockData = [
    {
      id: 1,
      name: 'Project 1',
      date: '10-02-2022'
    },
    {
      id: 1,
      name: 'Project 2',
      date: '11-02-2022'
    },
    {
      id: 3,
      name: 'Project 3',
      date: '12-02-2022'
    },
    {
      id: 4,
      name: 'Project 4',
      date: '13-02-2022'
    },
    {
      id: 5,
      name: 'Project 5',
      date: '14-02-2022'
    },
  ]

  return (
    <>
      <Head>
        <title>Everton Blog | Projects</title>
      </Head>

      <Header />

      <main className={styles.content}>
        <div>
          {
            mockData.map(project => (
              <Link href={`projects/${project.name}`}>
                <a key={project.id} className={styles.project}>
                  <h1>{project.name}</h1>
                  <h3>{project.date}</h3>
                </a>
              </Link>
            ))
          }
        </div>
      </main>
    </>
  );
}
