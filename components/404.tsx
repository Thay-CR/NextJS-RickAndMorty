import styles from '../styles/404.module.css'
import Link from "next/link";

export  function NotFound() {
  return (
    <>
      <div className={styles.component}>
        <h1 className={styles.number}>404</h1>
        <h2 className={styles.first}>UH OH! You are lost.</h2>
        <p className={styles.second}>The page you are trying to search has been  moved to another universe.</p>
        <div className={styles.link}>
          <Link className={styles.link} href={`/`}>
            Click Here
          </Link>
        </div>
        <p className={styles.last}>and return to planet earth!</p>
      </div>
    </>
  )
}