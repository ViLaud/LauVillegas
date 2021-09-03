import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function blog () {
    return (
        <Layout>
            <Head>
                <title>Lau's Blog</title>
                <link rel="icon" href="images/code.jpg" />
            </Head>

            <main className={styles.main}>
                <h1>Super Rad Blog</h1>
                <Link href="/"><a>Take me home</a></Link>
            </main>
        </Layout>
    )
}