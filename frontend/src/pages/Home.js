import React from 'react';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const home = () => {
    return (
        <div>
            <Navbar/>
            <main>
                <Hero/>
                <Features/>
                <Footer/>
            </main>
        </div>
    );
};

export default home;