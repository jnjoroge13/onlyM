import { NavLink } from 'react-router-dom';
import './SplashPage.css'
export default function SplashPage() {
    return (
        <div className='listings-link'>
            <NavLink id='listing-btn' exact to="/spots">View Available Listings!</NavLink>
        </div>
    )
}
