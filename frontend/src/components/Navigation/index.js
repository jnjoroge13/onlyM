import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import { login } from '../../store/session';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className='nav-right'>
        <LoginFormModal />
        <NavLink className='signup-btn' to="/signup">Sign Up</NavLink>
        <button className='demo-btn' onClick={e => {
          return dispatch(login({ credential: 'demo@user.io', password: 'password' }))
        }}>Demo User</button>
      </div>
    );
  }

  return (
    <div id='nav-container'>
      <div id='home'>
        <NavLink exact to="/" id='home-button' >
          Home
        </NavLink>
      </div>
      <div id='title'>
        onlyMansions
      </div>
      <div>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
