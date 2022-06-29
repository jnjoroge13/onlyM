import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom';
import spots, { thunkAddSpot, thunkGetAllSpots } from '../../store/spots';

export default function SpotsForm() {
    const dispatch = useDispatch()
    const selectorSpots = useSelector(state => Object.values(state.spots))
    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory()
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    async function onSubmit(e) {
        e.preventDefault();
        // console.log('f')
        dispatch(thunkAddSpot({ userId: sessionUser.id, state, address, city, name, price, imageUrl }))
    }
    useEffect(() => {
        dispatch(thunkGetAllSpots())
    }, [dispatch])


    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>address:<input type='text' value={address} onChange={e => setAddress(e.target.value)} /></label>
                <label>city:<input type='text' value={city} onChange={e => setCity(e.target.value)} /></label>
                <label>state:<input type='text' value={state} onChange={e => setState(e.target.value)} /></label>
                <label>name:<input type='text' value={name} onChange={e => setName(e.target.value)} /></label>
                <label>price:<input type='text' placeholder='$' value={price} onChange={e => setPrice(e.target.value)} /></label>
                <label>image:<input type='text' value={imageUrl} onChange={e => setImageUrl(e.target.value)} /></label>
                <img src={imageUrl} alt="" />
                <button>Submit New Mansion</button>
            </form>
            {selectorSpots?.map(({ id, name, User, address, city, state, price, imageUrl }) => {
                 function editButton(e) {
                    e.preventDefault();
                    setName(name)
                }
                return (
                    <NavLink key={id} to={`spots/${id}`}>
                        <div>Name:{name}</div>
                        <div>Created by:{User.username}</div>
                        <div>Address:{address} {city},{state}</div>
                        <div>Price: ${price}</div>
                        <img src={imageUrl} alt="" />
                    </NavLink>
                )
            })}
        </div>
    )
}
