import React from 'react';
import { NavLink  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";

const BtnLogout = () => {
    // const navigate = useNavigate()
    const dispatch = useDispatch();
    const logoutAction = () =>{
        const getToken = localStorage.getItem("token");

        if (!getToken) {
            dispatch(logout())
        } else {
            dispatch(localStorage.removeItem("token")) 
        }

    }

    return (
       <NavLink className="main-nav-item" to="/" onClick={logoutAction}><FontAwesomeIcon icon={faSignOut} />Sign out</NavLink>
    );
};

export default BtnLogout;