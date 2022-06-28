import { csrfFetch } from "./csrf"
const ADD_SPOT = 'spots/addSpot'
const GET_SPOTS = 'spots/getSpots'
const EDIT_SPOT = 'spots/editSpot'
const DELETE_SPOT = 'spots/deleteSpot'

const actionAddSpot = (spot) => {
    return {
        type: ADD_SPOT,
        spot
    }
}
const actionGetSpots = (spots) => {
    return {
        type: GET_SPOTS,
        spots
    }
}
const actionEditSpot = (spot) => {
    return {
        type: EDIT_SPOT,
        spot
    }
}
const actionDeleteSpot = (spotId) => {
    return {
        type: DELETE_SPOT,
        spotId
    }
}

export const thunkGetAllSpots = (spots) => async (dispatch) => {
    const response = await csrfFetch('/api/spots');
    if (response.ok) {
        const data = await response.json();
        dispatch(actionGetSpots(data));
        return response;
    } else {
        return await response.json()
    }
};

export const thunkAddSpot = (spot) => async (dispatch) => {
    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spot)
    });
    const data = await response.json();
    dispatch(actionAddSpot(data));
    return response;
};
// export const login = (user) => async (dispatch) => {
//     const { credential, password } = user;
//     const response = await csrfFetch('/api/session', {
//       method: 'POST',
//       body: JSON.stringify({
//         credential,
//         password,
//       }),
//     });
//     const data = await response.json();
//     dispatch(setUser(data.user));
//     return response;
// };
// export const login = (user) => async (dispatch) => {
//     const { credential, password } = user;
//     const response = await csrfFetch('/api/session', {
//       method: 'POST',
//       body: JSON.stringify({
//         credential,
//         password,
//       }),
//     });
//     const data = await response.json();
//     dispatch(setUser(data.user));
//     return response;
// };


const spots = (state = {}, action) => {
    const newState = { ...state };
    switch (action.type) {
        case ADD_SPOT:
            return {
                ...state, [action.spot.id]:action.spot
            }

        case GET_SPOTS:
            action.spots.forEach(spot => {
                newState[spot.id] = spot
            });
            return newState;

        case EDIT_SPOT:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;

        case DELETE_SPOT:
            delete newState[action.spotId]
            return newState

        default:
            return state;
    }
};

export default spots
