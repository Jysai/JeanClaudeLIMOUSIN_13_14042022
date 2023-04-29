import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const BtnSignIn = () => {

    return (
        <NavLink className="navbar__btn" to="/login"><FontAwesomeIcon icon={faUserCircle} /><p className="navbar__p">Sign In</p></NavLink>
    );
};

export default BtnSignIn;