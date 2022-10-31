import Card from "../../components/Card";
import styles from "../../styles/Home.module.css";
import { ICharacters, IUtils } from "../../types/index";
import Pagination from '../../components/Pagination'
import { NextPageContext } from "next";
import { URL } from "utils/utils";
import { TitleHome } from "@/components/TitleHome";

export default function Main<T>({ items }: IUtils<T>) {

  const ARRAY_INDEX: number = 1
  const FIRST_PAGE: string = '1'
  const ONE_PAGE_BACK: number = 1

  let next: string;
  let previous: string;

  let nextPage: string = typeof (items?.info?.next) === "string" ?
    items?.info?.next?.split("=")[ARRAY_INDEX] : ""

  let previousPage: string = typeof (items?.info?.prev) === "string" ?
    items?.info?.prev?.split("=")[ARRAY_INDEX] : ""

  let pages: number = Number(items?.info?.pages)
  let current = Number(nextPage) - ONE_PAGE_BACK

  next = nextPage != undefined ? nextPage : FIRST_PAGE
  previous = previousPage ? previousPage : FIRST_PAGE

  return (
    <>
      <TitleHome />
      <div className={styles.home_container}>
        {items?.results?.map((item: ICharacters) => (
          <Card
            key={item.id}
            item={item}
            results={''}
            items={items}
            character={item} />
        ))}
      </div>
      <Pagination
        next={next}
        prev={previous}
        current={current}
        pages={pages} />
    </>
  );
}

Main.getInitialProps = async (context: NextPageContext) => {
  const { query } = context
  const api = `${URL}?page=${query.page}`;
  const res = await fetch(`${api}`);
  const data = await res.json();
  return {
    items: data,
  }
}

