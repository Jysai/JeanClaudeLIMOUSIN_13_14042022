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

     
            dispatch(logout())
      

    }

    return (
       <NavLink className="navbar__btn" to="/" onClick={logoutAction}><FontAwesomeIcon icon={faSignOut} /><p className='navbar__p'>Sign out</p></NavLink>
    );
};

export default BtnLogout;