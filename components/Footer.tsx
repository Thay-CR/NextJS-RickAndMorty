import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.center}>
        <span data-testid={'footer-test'}>Rick&Morty</span> &copy; 2022
      </p>
    </footer>
  )
}
