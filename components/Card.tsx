import styles from "../styles/Card.module.css";
import Image from "next/image";
import Link from "next/link";
import { IUtils } from "../types/index";
import { URL } from "../utils/utils";

export default function Card<T>({ item }: IUtils<T>) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={`${URL}/avatar/${item.id}.jpeg`}
          width="120"
          height="120"
          alt={item.name}
        />
      </div>
      <p className={styles.id}>#{item.id}</p>
      <h3 className={styles.title}>{item.name}</h3>
      <Link className={styles.btn} href={`/character/${item.id}`}>
        Details
      </Link>
    </div>
  );
}
