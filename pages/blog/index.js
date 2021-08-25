import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function blog () {
    return (
        <main className={styles.main}>
        <h1>My Blog</h1>
        <Link href="/"><a>Take me home</a></Link>
        </main>
    )
}