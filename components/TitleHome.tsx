import React from 'react'
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FadeIn from 'react-fade-in';

export function TitleHome() {
  return (
    <div className={styles.title_container}>
    <FadeIn>
      <h1 className={styles.title}>
        Rick &<span>Morty</span>
      </h1>
    </FadeIn>
    <Image
      src="/images/rm.png"
      width="50"
      height="50"
      alt="RickMorty"
    />
  </div>
  )
}
