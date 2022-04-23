import React from 'react';
import Articles from '../../Articles/Articles';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import './Home.css'
const Home = () => {
    return (
        <div className='home-container mx-auto'>
            <Banner></Banner>
            <Articles></Articles>
            <About></About>
            <Contact></Contact>

        </div>
    );
};

export default Home;