import { ICharacters } from "./Characters"
import { IPagination } from "./Pagination"

export interface ICards {
    results: Array<ICharacters>
    info : IPagination
}
