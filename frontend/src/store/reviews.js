import { csrfFetch } from "./csrf"
const ADD_REVIEW = 'reviews/addReview'
const GET_REVIEWS = 'reviews/getReviews'
const DELETE_REVIEW = 'reviews/deleteReview'

const actionGetReviews = (reviews) => {
    return {
        type: GET_REVIEWS,
        reviews
    }
}

const actionAddReview = (review) => {
    return {
        type: ADD_REVIEW,
        review
    }
}

const actionDeleteReview = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}

export const thunkGetAllReviews = (reviews) => async (dispatch) => {
    const response = await csrfFetch('/api/reviews');
    if (response.ok) {
        const data = await response.json();
        // console.log(data)
        dispatch(actionGetReviews(data));
        return response;
    } else {
        return await response.json()
    }
};

export const thunkAddReview = (review) => async (dispatch) => {
    const response = await csrfFetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
    });
    const data = await response.json();
    dispatch(actionAddReview(data));
    return response;
};

export const thunkDeleteReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        const data = await response.json();
        // console.log(reviewId)
        dispatch(actionDeleteReview(reviewId))
        return response;
    }
};

const reviews = (state = {}, action) => {
    const newState = { ...state };
    switch (action.type) {
        case ADD_REVIEW:
            newState[action.review.id] = action.review
            return newState

        case GET_REVIEWS:
            // console.log(action)
            action.reviews.forEach(review => {
                newState[review.id] = review
            });
            return newState;

        case DELETE_REVIEW:
            // console.log(newState)
            // console.log(action)
            delete newState[action.reviewId]
            // console.log('\n\n\n\n**************************')

            // console.log(newState)
            return newState

        default:
            return state;
    }
};

export default reviews
