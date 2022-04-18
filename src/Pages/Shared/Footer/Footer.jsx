import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const date = new Date()
const Footer = () => {
    return (
        <footer className='footer py-3 mt-4'>
            <div className='home-container mx-auto text-center'>

                <small className='footer-text'>{"\u00a9"}Copyrights AR. {date.getFullYear()} All Rights Reserved.</small>

            </div>
        </footer>
    );
};

export default Footer;