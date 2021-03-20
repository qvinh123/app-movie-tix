/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Pangations from './panigation'
import format from "date-format";

export default function HistoryBooking({ userInfo }) {
    const { thongTinDatVe } = userInfo ?? ""

    const [posts, setPosts] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(8)

    useEffect(() => {
        setPosts(thongTinDatVe)
    }, [])

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost)

    const renderTable = () => {
        return currentPosts?.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.maVe}</td>
                    <td>{item.tenPhim}</td>
                    <td>{format(
                        "dd-MM-yyy | hh:mm",
                        new Date(item.ngayDat)
                    )}</td>
                    <td>{item.danhSachGhe.map((item, index) => {
                        return <span style={{marginBottom:"0"}} key={index}>{item.tenGhe}, </span>
                    })}</td>
                </tr>
            )
        })
    }

    const paganate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const prevPage = () => {
        setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)
    }

    const nextPage = () => {
        setCurrentPage(posts?.length / postPerPage > currentPage ? currentPage + 1 : currentPage)
    }

    return (
        <div className="history_booking">
            <h2 className="text-center">Lịch sử đặt vé</h2>
            <div className="table-responsive">
                <table className="table text-center table-dark text-whitex table-striped">
                    <thead>
                        <tr>
                            <th>Mã vé</th>
                            <th>Tên phim</th>
                            <th>Thời gian</th>
                            <th>Ghế</th>
                        </tr>
                    </thead>
                    <tbody>{renderTable()}</tbody>
                </table>
            </div>
            <Pangations currentPage={currentPage} prevPage={prevPage} nextPage={nextPage} postPerPage={postPerPage} totalPosts={posts?.length} paganate={paganate} />
        </div>
    )
}
