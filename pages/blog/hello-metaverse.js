import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'

export default function HelloMetaverse () {
    return (
        <div className={styles.container}>
        <Head>
          <title>Hello Metaverse</title>
          <link rel="icon" href="images/code.jpg" />
        </Head>
        <main className={styles.main}>
        <h1>Hello Metaverse</h1>
        <Link href="/"><a>Take me home</a></Link>
        </main>
        </div>
    )
}