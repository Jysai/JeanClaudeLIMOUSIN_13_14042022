import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SignInContent from '../components/SignInContent';

const SignIn = () => {
    return (
        <div>
            <Navbar/>
            
                <SignInContent/>
          
            <Footer/>
        </div>
    );
};

export default SignIn;