import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const BtnSignIn = () => {

    return (
        <NavLink className="main-nav-item" to="/signin"><FontAwesomeIcon icon={faUserCircle} />Sign In</NavLink>
    );
};

export default BtnSignIn;