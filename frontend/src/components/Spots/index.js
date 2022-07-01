import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { thunkGetAllSpots } from '../../store/spots';
import NewSpotsForm from '../NewSpotForm';

export default function Spots() {
    const dispatch = useDispatch()
    const selectorSpots = useSelector(state => Object.values(state.spots))
    const sessionUser = useSelector((state) => state.session.user);
    // console.log(sessionUser.id)

    useEffect(() => {
        dispatch(thunkGetAllSpots())
    }, [dispatch])

    if (!selectorSpots || !sessionUser) {
        return null
    }
    return (
        <div>
            <NewSpotsForm/>
            {selectorSpots?.map(({ id, name, address, city, state, price, imageUrl }) => {
                return (
                    <NavLink key={id} to={`spots/${id}`}>
                        <div>Name:{name}</div>
                        <div>Created by:{sessionUser.username}</div>
                        <div>Address:{address} {city},{state}</div>
                        <div>Price: ${price}</div>
                        <img src={imageUrl} alt="" />
                    </NavLink>
                )
            })}
        </div>
    )
}
