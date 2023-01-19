import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUser } from '../features/userSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const BtnProfile = () => {


    const userData = useSelector(selectUser);

    return (
        <NavLink to="/user" >
            <div className='navbar__btn'  >
            <FontAwesomeIcon icon={faUserCircle} />
                <p>{userData.firstName}</p>
            </div>
        </NavLink>
    );
};

export default BtnProfile;