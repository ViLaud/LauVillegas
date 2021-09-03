import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Profile from '../components/profile'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
    </Layout>
  )
}
