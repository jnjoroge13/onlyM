import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { thunkAddReview, thunkGetAllReviews } from '../../store/reviews';
export default function ReviewForm() {
    const dispatch = useDispatch()
    const { spotId } = useParams();
    const sessionUser = useSelector((state) => state.session.user);
    const [review, setReview] = useState('')
    const [rating, setRating] = useState('')

    useEffect(() => {
        dispatch(thunkGetAllReviews())
    }, [dispatch])

    function clearSpotForm() {
        setRating('')
        setReview('')
    }
    async function onSubmit(e) {
        e.preventDefault();
        // console.log('f')
        dispatch(thunkAddReview({ userId: sessionUser.id, review, rating, spotId: spotId }))
        return clearSpotForm()
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Review:<textarea value={review} onChange={e => setReview(e.target.value)} /></label>
                <label>Rating:<input type='text' value={rating} onChange={e => setRating(e.target.value)} /></label>
                <button>Submit New Review</button>
            </form>
        </div>
    )
}
