import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { thunkGetAllSpots } from '../../store/spots';
import NewSpotsForm from '../NewSpotForm';
import './Spots.css'

export default function Spots() {
    const dispatch = useDispatch()
    const selectorSpots = useSelector(state => Object.values(state.spots))
    const sessionUser = useSelector((state) => state.session.user);
    console.log(sessionUser)
    // console.log(sessionUser)
    const [showForm, setShowForm] = useState(false)
    useEffect(() => {
        dispatch(thunkGetAllSpots())
    }, [dispatch])

    // if (!selectorSpots || !sessionUser) {
    //     return null
    // }
    return (
        <div>
            {sessionUser && <button className='new-listing-btn' onClick={e => { setShowForm(!showForm) }}>Create New Listing</button>}
            {sessionUser && showForm && <NewSpotsForm showForm />}
            <div className='spots-cont'>
                {selectorSpots?.map((spot) => {
                    // console.log(spot)
                    return (
                        <NavLink className='spot' key={spot.id} to={`spots/${spot.id}`}>
                            <img src={spot.imageUrl} alt="" />
                            <div>Name: {spot.name}</div>
                            <div>Created by: {spot.User?.username}</div>
                            <div>Address: {spot.address} {spot.city},{spot.state}</div>
                            <div>Price: ${spot.price} per day</div>
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}
