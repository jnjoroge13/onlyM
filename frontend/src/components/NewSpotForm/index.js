import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom';
import spots, { thunkAddSpot, thunkGetAllSpots } from '../../store/spots';
import './NewSpotForm.css'

export default function NewSpotsForm() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    // console.log(sessionUser)
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [validationErrors, setValidationErrors] = useState([])
    const [hasSubmitted,setHasSubmitted] = useState(false)

    useEffect(() => {
        const errors = [];
        if(!address.length) errors.push('Please enter an Address')
        if(!city.length) errors.push('Please enter a City')
        if(!state.length) errors.push('Please enter a State')
        if(!name.length) errors.push('Please Name your listing')
        if(!price.length) errors.push('Please enter a Price')
        if(!imageUrl.length) errors.push('Please upload a picture link')
        if(price.includes('e')) errors.push('Price must be a number')
        if (price.includes('?')) errors.push('A dollor sign is not needed')
        setValidationErrors(errors)
    }, [address,city,state,name,price,imageUrl])
    function clearSpotForm() {
        setAddress('')
        setCity('')
        setState('')
        setName('')
        setPrice('')
        setPrice('')
        setImageUrl('')
    }

    async function onSubmit(e) {
        e.preventDefault();
        setHasSubmitted(true)
        if (validationErrors.length) return alert('Cannot Submit')
        setHasSubmitted(false)
        // console.log('f')
        dispatch(thunkAddSpot({ userId: sessionUser.id, state, address, city, name, price, imageUrl }))
        return clearSpotForm()
    }

    return (
        <div>
            {hasSubmitted && validationErrors.length > 0 && (
                <div>
                    Before you can submit a new listing:
                    <ul>
                        {validationErrors.map(error => (
                            <li>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
            <form className='new-spot-form' onSubmit={onSubmit}>
                <label>Address:<input type='text' value={address} onChange={e => setAddress(e.target.value)} /></label>
                <label>City:<input type='text' value={city} onChange={e => setCity(e.target.value)} /></label>
                <label>State:<input type='text' value={state} onChange={e => setState(e.target.value)} /></label>
                <label>Name:<input type='text' value={name} onChange={e => setName(e.target.value)} /></label>
                <label>Price:<input type='number' placeholder='$' value={price} onChange={e => setPrice(e.target.value)} /></label>
                <label>Image:<input type='text' value={imageUrl} onChange={e => setImageUrl(e.target.value)} /></label>
                {imageUrl && <img src={imageUrl} alt="" />}
                <button>Submit New Mansion</button>
            </form>
        </div>
    )
}
