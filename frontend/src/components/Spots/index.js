import React, { useState } from 'react';

export default function SpotsForm() {
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    function onSubmit(e) {
        e.preventDefault();
        console.log({address,city,state,name,price,imageUrl})

    }
    return (
        <form onSubmit={onSubmit}>
            <label>address:<input type='text' value={address} onChange = {e => setAddress(e.target.value)}/></label>
            <label>city:<input type='text' value={city} onChange = {e => setCity(e.target.value)}/></label>
            <label>state:<input type='text' value={state} onChange = {e => setState(e.target.value)}/></label>
            <label>name:<input type='text' value={name} onChange = {e => setName(e.target.value)}/></label>
            <label>price:<input type='text' placeholder='$' value={price} onChange = {e => setPrice(e.target.value)}/></label>
            <label>image:<input type='text' value={imageUrl} onChange={e => setImageUrl(e.target.value)} /></label>
            <img src={imageUrl} alt=""/>
            <button>Submit New Mansion</button>
        </form>
    )
}
