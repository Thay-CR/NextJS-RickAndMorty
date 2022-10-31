import styles from '../../styles/Character.module.css'
import Image from 'next/image'
import ReactCardFlip from "react-card-flip";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { NotFound } from '../../components/404'
import Loading from '../../components/Loading'
import { ICharacters, IUtils } from '../../types/index'
import { GetStaticProps } from 'next'
import { URL } from '../../utils/utils';

export const getStaticPaths = async () => {
  const res = await fetch(`${URL}`)
  const data = await res.json()
  const paths = data.results.map((character: ICharacters, index: number) => {
    return {
      params: { characterId: index.toString() },
    }
  })
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.characterId
  const res = await fetch(`${URL}/${id}`)
  const data = await res.json()
  return {
    props: { character: data },
  }
}

export default function Character<T>({ character }: IUtils<T>) {
  const router = useRouter()
  const [flipGender, setFlipGender] = useState<boolean>(false)
  const [flipStatus, setFlipStatus] = useState<boolean>(false)
  const [flipSpecies, setFlipSpecies] = useState<boolean>(false)

  if (router?.isFallback) {
    return (
      <div className={styles.types_container_loading}>
        <Loading
          type={'spin'}
          color={'#03bb85'}
        />
      </div>
    )
  }

  if (character.error) {
    return (
      <NotFound />
    )
  }

  return (
    <div className={styles.character_container}>
      <h1 className={styles.title}>{character.name}</h1>
      <Image
        src={`${URL}/avatar/${character.id}.jpeg`}
        width="200"
        height="200"
        alt={character.name}
      />
      <div className={styles.data_container}>
        <ReactCardFlip isFlipped={flipGender}
          flipDirection="vertical">
          <button className={styles.btngender}
            onMouseEnter={() => setFlipGender(!flipGender)}>
            <h4 className={styles.h4gender}>Gender</h4>
          </button>
          <button className={styles.btngender}
            onMouseLeave={() => setFlipGender(!flipGender)}>
            <h4 className={styles.h4gender}>{character.gender}</h4>
          </button>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={flipStatus}
          flipDirection="vertical">
          <button className={styles.btnstatus}
            onMouseEnter={() => setFlipStatus(!flipStatus)}>
            <h4 className={styles.h4status}>Status</h4>
          </button>
          <button className={styles.btnstatus}
            onMouseLeave={() => setFlipStatus(!flipStatus)}>
            <h4 className={styles.h4status}>{character.status}</h4>
          </button>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={flipSpecies}
          flipDirection="vertical">
          <button className={styles.btnspecies}
            onMouseEnter={() => setFlipSpecies(!flipSpecies)}>
            <h4 className={styles.h4species}>Species</h4>
          </button>
          <button className={styles.btnspecies}
            onMouseLeave={() => setFlipSpecies(!flipSpecies)}>
            <h4 className={styles.h4species}>{character.species}</h4>
          </button>
        </ReactCardFlip>
      </div>
    </div>
  )
}
