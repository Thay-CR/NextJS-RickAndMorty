import { ICards } from './Cards'
import { ICharacters } from './Characters'

export interface IUtils<T> {
    results: T,
    item: ICharacters,
    items?: ICards,
    character: ICharacters
}

export interface IChildren {
    children?: React.ReactNode;
}