import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Profile from '../components/profile'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LauVillegas.com</title>
        <link rel="icon" href="images/code.jpg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          LauVillegas.com
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>A Dev's Journey</code>
        </p>
        <Profile></Profile>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>My Story &rarr;</h3>
            <p>It's all happening!!</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Resources / Learn&rarr;</h3>
            <p>Wanna learn? get better?</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Projects &rarr;</h3>
            <p>Show off time.</p>
          </a>

          <Link href="/blog/">
            <a className={styles.card}>
              <h3>Blog &rarr;</h3>
              <p>
                The meat and the potatoes. 
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Laura Villegas and deployed using Vercel
        </a>
      </footer>
    </div>
  )
}
