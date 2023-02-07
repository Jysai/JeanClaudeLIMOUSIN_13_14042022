import React from 'react';
import Footer from '../components/Footer';
import HeaderUser from '../components/HeaderUser';
import Navbar from '../components/Navbar';
import Transactions from '../components/Transactions';
import { Navigate } from 'react-router-dom';
import { selectUser, saveToken} from "../features/userSlice";
import { useSelector } from 'react-redux';


const User = () => {

  const user = useSelector(selectUser);
  const getToken = localStorage.getItem("token");

    return (
        <div>
            <Navbar/>
            <main className="main bg-dark">
            { user.token || getToken ? (
            <div >
               <HeaderUser/>
               <Transactions/>
            </div>
          ) : (
            <Navigate to="/" replace={true} />
          )}

            
            </main>
            <Footer/>

        </div>
    );
};

export default User;