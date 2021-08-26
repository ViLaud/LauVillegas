import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'


export default function blog () {
    return (
        <div className={styles.container}>
        <Head>
          <title>Lau's Blog</title>
          <link rel="icon" href="images/code.jpg" />
        </Head>
        <main className={styles.main}>
        <h1>My Blog</h1>
        <Link href="/"><a>Take me home</a></Link>
        </main>
        </div>
    )
}