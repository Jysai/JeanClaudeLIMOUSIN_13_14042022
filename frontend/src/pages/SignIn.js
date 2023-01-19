import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Authentication from '../components/Authentication';

const SignIn = () => {
    return (
        <div>
            <Navbar/>
            
                <Authentication/>
          
            <Footer/>
        </div>
    );
};

export default SignIn;