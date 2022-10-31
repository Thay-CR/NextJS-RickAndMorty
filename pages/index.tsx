import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import { ICharacters, IUtils } from "../types/index";
import Pagination from '../components/Pagination'
import { URL } from "../utils/utils";
import { TitleHome } from '../components/TitleHome'

export async function getStaticProps() {

  const api = `${URL}`;
  const res = await fetch(`${api}`);
  const data = await res.json();
  data.results.forEach((item: ICharacters, index: number) => {
    item.id = index + 1;
  });
  return {
    props: {
      items: data,
    },
  };
}

export default function Home<T>({ items }: IUtils<T>) {
  const DEFAULT_CURRENT_PAGE: number = 1

  return (
    <>
   <TitleHome />
      <div className={styles.home_container}>
        {items?.results.map((item: ICharacters) => (
          <Card
            key={item.id}
            item={item}
            results={''}
            items={items}
            character={item} />
        ))}
      </div>
      <Pagination
        next={'/home/2'}
        prev={'/home/1'}
        current={DEFAULT_CURRENT_PAGE}
        pages={Number(items?.info?.pages)} />
    </>
  );
}
