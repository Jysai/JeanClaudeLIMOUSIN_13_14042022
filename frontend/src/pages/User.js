import React from 'react';
import Footer from '../components/Footer';
import HeaderUser from '../components/HeaderUser';
import Navbar from '../components/Navbar';
import Transactions from '../components/Transactions';


const User = () => {
    const getToken = localStorage.getItem("token");
    return (
        <div>
            <Navbar/>
            <main className="main bg-dark">
            {getToken ? (
            <div >
              <HeaderUser/>
               <Transactions/>
            </div>
          ) : (
            <div >
              <p>Accès refusé</p>
            </div>
          )}

            
            </main>
            <Footer/>

        </div>
    );
};

export default User;