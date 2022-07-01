import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory, useParams } from 'react-router-dom';
import reviews, { thunkGetAllReviews } from '../../store/reviews';
export default function ReviewList() {
    const dispatch = useDispatch()
    const { spotId } = useParams()
    const selectorReviews = useSelector(state => Object.values(state.reviews))
    const spotReviews = selectorReviews.filter(review => {
        return(review.spotId == spotId)
    })
    const sessionUser = useSelector((state) => state.session.user);

    return (
        <div>
            {spotReviews?.map((review) => {
                return (
                    <div>
                        <div>Review:{review.review}</div>
                        <div>Rating:{review.rating} ⭐</div>
                        <div>Created by:{sessionUser.username}</div>
                    </div>
                )
            })}
        </div>
    )
}
