import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { login, selectUser } from '../features/userSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { findUser } from "../services/authAPI";

const BtnProfile = () => {
    const dispatch = useDispatch();

    const getToken = localStorage.getItem("token");
    
    const verifUserLogged = async () => {
        if(getToken){
            const userProfile = await findUser(getToken);
            
            dispatch(login(userProfile))
          }
    }
    verifUserLogged()

    


    const user = useSelector(selectUser);

    return (
        <NavLink to="/user" >
            <div className='navbar__btn'  >
            <FontAwesomeIcon icon={faUserCircle} />
                <p>{user.firstName}</p>
            </div>
        </NavLink>
    );
};

export default BtnProfile;