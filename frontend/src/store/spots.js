import { csrfFetch } from "./csrf"
const ADD_SPOT = 'spots/addSpot'
const GET_SPOTS = 'spots/getSpots'
const GET_SPOT = 'spots/getSpot'
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
const actionGetOneSpot = (spot) => {
    return {
        type: GET_SPOTS,
        spot
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

export const thunkGetOneSpot = (spotId) => async (dispatch) => {
    const response = await fetch(`/api/spots/${spotId}`);

    if (response.ok) {
      const spot = await response.json();
        dispatch(actionGetOneSpot(spot));
        return spot
    }
};

export const thunkEditSpot = (spot) => async (dispatch) => {
    // console.log(spot)
    const response = await csrfFetch(`/api/spots/${spot.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(spot),
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(actionEditSpot(data));
        return data;
    }
};

export const thunkDeleteSpot = (spotId) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(actionDeleteSpot(data))
        return response;
    }
  };


const spots = (state = {}, action) => {
    const newState = { ...state };
    switch (action.type) {
        case ADD_SPOT:
            newState[action.spot.id] = action.spot
            return newState

        case GET_SPOT:
            newState[action.spot.id] = action.spot
            return newState;

        case GET_SPOTS:
            action.spots.forEach(spot => {
                newState[spot.id] = spot
            });
            return newState;

        case EDIT_SPOT:
            newState[action.spot.id] = action.spot
            return newState

        case DELETE_SPOT:
            delete newState[action.spot.id]
            return newState

        default:
            return state;
    }
};

export default spots
