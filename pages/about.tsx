import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About this Project</h1>
      <p>Rick and Moty Challenge is an application developed in Next.js to query characters from the series.</p>
      <Image
        src="/images/rm.png"
        alt="RickMorty"
        width="300"
        height="300"
      />
    </div>
  )
}
