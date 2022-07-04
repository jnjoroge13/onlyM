import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import spots, { thunkEditSpot, thunkGetOneSpot, thunkDeleteSpot, thunkGetAllSpots } from '../../store/spots';
import { Link, useHistory, useParams } from 'react-router-dom';
import ReviewForm from '../ReviewForm';
import ReviewList from '../ReviewsList';
import './EditSpotPage.css'


const EditSpotPage = ({ pokemon, hideForm }) => {
    const { spotId } = useParams();
    const editSpot = useSelector(state => state.spots[spotId]);
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory()
    // console.log(editSpot)

    const [isOwner, setIsOwner] = useState(sessionUser?.id == editSpot?.userId)
    const [address, setAddress] = useState(editSpot?.address)
    const [city, setCity] = useState(editSpot?.city)
    const [state, setState] = useState(editSpot?.state)
    const [name, setName] = useState(editSpot?.name)
    const [price, setPrice] = useState(editSpot?.price)
    const [imageUrl, setImageUrl] = useState(editSpot?.imageUrl)
    const [edit,setEdit] = useState(false)

    async function onSubmit(e) {
        e.preventDefault();
        await dispatch(thunkEditSpot({ userId: sessionUser.id, state, address, city, name, price, imageUrl, id: spotId }))
        history.push(`/spots`)
    }

    useEffect(() => {
        setIsOwner(sessionUser?.id == editSpot?.userId)
        setAddress(editSpot?.address)
        setCity(editSpot?.city)
        setState(editSpot?.state)
        setName(editSpot?.name)
        setPrice(editSpot?.price)
        setImageUrl(editSpot?.imageUrl)
    }, [editSpot, sessionUser])

    async function onDelete(e) {
        e.preventDefault();
        history.push(`/spots`)
        await dispatch(thunkDeleteSpot(spotId))
    }

    useEffect(() => {
        dispatch(thunkGetOneSpot(spotId))
    }, [dispatch, spotId])

    useEffect(() => {
        dispatch(thunkGetAllSpots())
    }, [dispatch])

    if (!editSpot) {
        return <h1>Listing Not Found</h1>
    }
    return (
        <div>
            {(isOwner && edit) && <form className='edit-spot-form' onSubmit={onSubmit}>
                <label>Address:<input type='text' value={address} onChange={e => setAddress(e.target.value)} /></label>
                <label>City:<input type='text' value={city} onChange={e => setCity(e.target.value)} /></label>
                <label>State:<input type='text' value={state} onChange={e => setState(e.target.value)} /></label>
                <label>Name:<input type='text' value={name} onChange={e => setName(e.target.value)} /></label>
                <label>Price:<input type='text' placeholder='$' value={price} onChange={e => setPrice(e.target.value)} /></label>
                <label>Image:<input type='text' value={imageUrl} onChange={e => setImageUrl(e.target.value)} /></label>
                {/* <img src={imageUrl} alt="" /> */}
                <button>Update Listing</button>
                <button type='button' onClick={e=> setEdit(false)}>Cancel</button>
            </form>}
            <div>
                <div>{editSpot?.name}</div>
                <div>{editSpot?.address} {editSpot?.city},{editSpot?.state}</div>
                <div>${editSpot?.price}/night</div>
                <img src={imageUrl} alt="" />
                {isOwner && <button onClick={e=> setEdit(true)}>Edit</button>}
                {isOwner && <button onClick={onDelete}>Delete</button>
}
            </div>
            {(sessionUser && !isOwner) && <ReviewForm />}
            <ReviewList />
        </div>
    )
};

export default EditSpotPage;
