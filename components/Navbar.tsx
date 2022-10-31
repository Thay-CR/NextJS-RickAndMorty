import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/home/1" passHref style={{ backgroundColor: '#333' }}>
          <Image
            src="/images/rm.jpg"
            width="35"
            height="35"
            alt="RickMorty"
          />
        </Link>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/home/1">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}
