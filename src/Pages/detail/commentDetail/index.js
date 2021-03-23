import React, { useState} from 'react'
import StarRatings from 'react-star-ratings';
import { useSelector, useDispatch } from "react-redux"
import {postCommnentAction} from "../../../Redux/action/mainAction/infoUser.action"

export default function CommentDetail({ maPhim,cinemaSystemCode }) {
    const [rating, setRating] = useState(1)
    const [comments, setComments] = useState({ comment: "" });

    const user = useSelector((state) => state?.signInReducer?.userSignIn);
    const dispatch = useDispatch()


    const changeRating = (newRating) => {
        setRating(newRating);
    }

    const dateHour = () => {
        let today = new Date();
        let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        let dateTime = date + '-' + time;
        return dateTime
    }

    const handleChangeComment = (e) => {
        let { name, value } = e.target
        setComments({ ...comments, [name]: value })
    }

    const handleClick = () => {
        dispatch(postCommnentAction({maCumRap:cinemaSystemCode, comment: comments.comment, maPhim: Number(maPhim), ngayBinhLuan: dateHour(), rating: Number(rating), taiKhoan: user.taiKhoan }))
        setRating(1)
        setComments({...comments,comment:""})
    }

    return (
        <div className="modal" id="modalCommnent">
            <div className="modal-dialog modal-lg modal-sm">
                <div className="modal-content">
                    <div className="modal-header flex-column align-items-center">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 style={{ color: "#7ed321", fontSize: "40px" }} className="modal-title">{rating*2}.0</h4>
                        <StarRatings
                            rating={rating}
                            starRatedColor="#fb4226"
                            changeRating={changeRating}
                            numberOfStars={5}
                            name='rating'
                            starHoverColor="#fb4226"
                            starDimension="35px"
                            starSpacing="0"
                        />
                    </div>
                    <div className="modal-body">
                        <textarea value={comments.comment} onChange={handleChangeComment} name="comment" rows="2" className="inputComment" placeholder="Nói cho mọi người biết bạn nghĩ gì về phim này..."></textarea>
                    </div>
                    <div className="modal-footer">
                    {comments.comment? <button onClick={() => handleClick()} type="button" className="btn btn-danger">Đăng</button>:<p className="text-danger">Hãy bình luận và đánh giá về phim</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}
