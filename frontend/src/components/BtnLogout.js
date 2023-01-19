import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'


const BtnLogout = () => {

    const logoutAction = () =>{
        localStorage.removeItem("token")
        localStorage.removeItem("email")
    }

    return (
       <NavLink className="main-nav-item" to="/" onClick={logoutAction}><FontAwesomeIcon icon={faSignOut} />Sign out</NavLink>
    );
};

export default BtnLogout;