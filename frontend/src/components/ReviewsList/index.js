import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory, useParams } from 'react-router-dom';
import reviews, { thunkDeleteReview, thunkGetAllReviews } from '../../store/reviews';
import './ReviewsList.css'
export default function ReviewList() {
    const dispatch = useDispatch()
    const { spotId } = useParams()
    const selectorReviews = useSelector(state => Object.values(state.reviews))
    const sessionUser = useSelector((state) => state.session.user);
    const editSpot = useSelector(state => state.spots[spotId]);
    const [isOwner, setIsOwner] = useState(sessionUser?.id == editSpot?.userId)


    const spotReviews = selectorReviews.filter(review => {
        return (review.spotId == spotId)
    })


    useEffect(() => {
        setIsOwner(sessionUser?.id == editSpot?.userId)
    }, [editSpot, sessionUser])

    return (
        <div className='review-list'>
            {spotReviews?.map((review) => {
                // console.log(review)
                return (
                    <div className='review-single'>
                        <div className='review-content'>
                            <div>Review:<br />{review.review}</div>
                            <div>Rating:{review.rating} ⭐</div>
                            <div>Created by:{review.User.username}</div>
                            {(sessionUser?.id == review.userId) && <button className='review-delete-btn' onClick={async (e) => {
                                e.preventDefault();
                                // history.push(`/spots`)
                                return await dispatch(thunkDeleteReview(review.id))
                            }}>Delete</button>}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
