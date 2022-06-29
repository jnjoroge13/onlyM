import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import spots, { thunkEditSpot, thunkGetOneSpot, thunkDeleteSpot } from '../../store/spots';
import { Link, useHistory, useParams } from 'react-router-dom';


const EditSpotPage = ({ pokemon, hideForm }) => {
    const {spotId} = useParams();
    const editSpot = useSelector(state => state.spots[spotId]);
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory()
    // console.log(editSpot)
    const id = editSpot.id
    const [address, setAddress] = useState(editSpot.address)
    const [city, setCity] = useState(editSpot.city)
    const [state, setState] = useState(editSpot.state)
    const [name, setName] = useState(editSpot.name)
    const [price, setPrice] = useState(editSpot.price)
    const [imageUrl, setImageUrl] = useState(editSpot.imageUrl)
    async function onSubmit(e) {
        e.preventDefault();
        await dispatch(thunkEditSpot({ userId: sessionUser.id, state, address, city, name, price, imageUrl, id }))
        history.push(`/spots/${id}`)
    }

    async function onDelete(e) {
        e.preventDefault();
        await dispatch(thunkDeleteSpot(spotId))
        history.push(`/api/spots`)
    }
    // useEffect(() => {
    //     dispatch(thunkGetOneSpot(spotId))
    // }, [dispatch, spotId])

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
                <button>Update Mansion</button>
                <button onClick={onDelete}>Delete</button>
                <button type='button'><Link to='/spots'>Cancel</Link></button>
            </form>
        </div>
    )
};

export default EditSpotPage;
