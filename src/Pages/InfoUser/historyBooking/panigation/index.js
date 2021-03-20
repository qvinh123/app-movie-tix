/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Pangations({ postPerPage, totalPosts, paganate, nextPage, prevPage, currentPage }) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i)
    }
    let prevDisabled = currentPage === 1 ? "disabled" : ""
    let nextDisabled = currentPage === Math.ceil(totalPosts / postPerPage) ? "disabled" : ""
    return (
        <nav className="mt-4">
            <ul className="pagination">
                <li className={`page-item ${prevDisabled}`}>
                    <a onClick={() => prevPage()} className="page-link">Previous</a>
                </li>
                {pageNumbers.map((number,index) => {
                    let activeClass = currentPage === number ? 'active' : ''
                    return <li key={index} className={`page-item ${activeClass}`}>
                        <a onClick={() => paganate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                })}
                <li className={`page-item ${nextDisabled}`}>
                    <a onClick={() => nextPage()} className="page-link">Next</a>
                </li>
            </ul>
        </nav>
    )
}
