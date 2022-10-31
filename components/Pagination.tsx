import React from 'react'
import styles from '../styles/Pagination.module.css'
import Link from 'next/link'
import { IPagination } from '../types/index'

export default function Pagination({ next, prev, current, pages }: IPagination) {
    
    const INCREMENT_PAGE : number = 1
    const iterablePages = Array.from({ length: pages }, (_, i) => i + INCREMENT_PAGE)
    let linkParam : string = prev === '/home/1' ?  '/home/' : ''
    
    return (
        <div>
            <ul className={styles.divPages}>
                <Link className={styles.nextAndPrevious} href={`${prev}`}>«</Link>
                {
                    iterablePages.map(item =>
                       
                        <Link key={item} className={styles.linkComponent} href={`${linkParam}${item}`}>{
                            item === current ?
                                <div className={styles.currentPage}>{item}</div>
                                : 
                                <div className={styles.commonPage}>{item}</div> 
                        }</Link>
                    )
                }
                <Link className={styles.nextAndPrevious} href={`${next}`}>»</Link>
            </ul></div>
    )
}




