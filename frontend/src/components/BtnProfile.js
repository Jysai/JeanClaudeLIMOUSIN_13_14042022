import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { selectUser } from '../features/userSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


const BtnProfile = () => {

    const user = useSelector(selectUser);

    return (
        <NavLink to="/profile" >
            <div className='navbar__btn'  >
            <FontAwesomeIcon icon={faUserCircle} />
                <p className="navbar__p">{user.firstName}</p>
            </div>
        </NavLink>
    );
};

export default BtnProfile;