import styles from '../styles/footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.description}>
                <code className={styles.code}>Created by Laura Villegas and deployed using vercel</code>
            </p>
        </footer>
    )
}