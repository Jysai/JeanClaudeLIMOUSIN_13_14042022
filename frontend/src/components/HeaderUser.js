
import React from 'react';
import { useSelector } from 'react-redux';
import {  selectUser } from '../features/userSlice';

const HeaderUser = () => {


    const userData = useSelector(selectUser);

    

    return (
        <div>
            <div className="header">
                <h1>Welcome back</h1>
                
                         
                    <div>
                    <h1>{userData.firstName} {userData.lastName}</h1>
                    <button className="edit-button">Edit Name</button>
                    </div>
                
            </div>
        </div>
    );
};

export default HeaderUser;