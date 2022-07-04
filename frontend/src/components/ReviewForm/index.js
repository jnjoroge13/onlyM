import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { thunkAddReview, thunkGetAllReviews } from '../../store/reviews';
import './ReviewForm.css'
export default function ReviewForm() {
    const dispatch = useDispatch()
    const { spotId } = useParams();
    const sessionUser = useSelector((state) => state.session.user);
    // console.log(sessionUser.username)
    const [review, setReview] = useState('')
    const [rating, setRating] = useState('1')
    const [validationErrors, setValidationErrors] = useState([])
    const [hasSubmitted, setHasSubmitted] = useState(false)

    useEffect(() => {
        const errors = []
        if (!review.length) errors.push('Please write a review')
        setValidationErrors(errors)
    },[review])

    function clearSpotForm() {
        setRating('1')
        setReview('')
    }
    async function onSubmit(e) {
        e.preventDefault();
        // console.log(validationErrors)
        setHasSubmitted(true)
        if (validationErrors.length) return alert('Cannot Submit Review')
        setHasSubmitted(false)
        dispatch(thunkAddReview({ userId: sessionUser.id, review, rating, spotId: spotId, username:sessionUser.username}))
        return clearSpotForm()
    }
    return (
        <div className='review'>
            {hasSubmitted && validationErrors.length > 0 && (
                    <ul className='review-form-errors'>
                        {validationErrors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
            )}
            <form className='review-form-cont' onSubmit={onSubmit}>
                <label>Review:<textarea value={review} onChange={e => setReview(e.target.value)} /></label>
                <label>Rating:
                    <select value={rating} onChange={e => setRating(e.target.value)}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </label>
                <button>Submit New Review</button>
            </form>
        </div>
    )
}
