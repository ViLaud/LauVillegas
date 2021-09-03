import styles from '../styles/layout.module.css'
import Head from 'next/head'
import Image from 'next/image'
import HomeContent from './homeContent'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Profile from './profile'
import Footer from './footer'

const name = 'LauVillegas.com'
export const siteTitle = 'LauVillegas.com'
export default function Layout({ children, home }) {
     return (
         <div className={styles.container}>
             <Head>
                <link rel="icon" href="images/code.jpg" />
                <meta 
                    name="description"
                    content="A self taugth engineer's journey"
                />
             </Head>

             <header className={styles.header}>

                 { home ? (

                     <>
                     <Profile/>
                    <h1 className={utilStyles.heading2x1}>{name}</h1>
                    <p className={styles.description}>
                         <code className={styles.code}>A Dev's Journey</code>
                       </p>
                    </>
                 ) : (
                     <>
                     <Link href="/">
                         <a>
                         <Profile/>
                        </a>
                     </Link>
                     <h2 className={utilStyles.headingLg}>
                         <Link href="/">
                             <a className={utilStyles.colorInherit}>{name}</a>
                         </Link>
                     </h2>
                     </>

                 )}

             </header>

             { home && (
                <HomeContent/> 
             ) }
            

             {!home && (
                <div className={styles.backToHome}>
                     <Link href="/">
                         <a>← Back to home</a>        
                     </Link>
                </div>
             )}
        <Footer/>
         </div>
     )
 }
