import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function HomeContent() {
    return(
        <main className={styles.main}>    

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
    )
}
