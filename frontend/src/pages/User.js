import React from 'react';
import Footer from '../components/Footer';
import HeaderUser from '../components/HeaderUser';
import Navbar from '../components/Navbar';
import Transactions from '../components/Transactions';

const User = () => {
    return (
        <div>
            <Navbar/>
            <main class="main bg-dark">
            <HeaderUser/>
            <Transactions/>
            </main>
            <Footer/>

        </div>
    );
};

export default User;