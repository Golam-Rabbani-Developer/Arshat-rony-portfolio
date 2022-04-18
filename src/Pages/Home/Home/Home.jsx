import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import './Home.css'
const Home = () => {
    return (
        <div className='home-container mx-auto'>
            <Banner></Banner>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;