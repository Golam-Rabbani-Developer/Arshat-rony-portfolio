import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'
const Contact = () => {
    return (
        <div className='contact px-4'>
            <h2 className='skills-heading'>Get In Touch</h2>
            <hr />
            <div className='contact-text d-flex justify-content-between align-items-center'>
                <p>You can contact me by email at
                    <span className='ms-2 gmail' style={{ fontSize: "20px" }}>frrony1996@gmail.com</span> say hi!
                    <br />I always appreciate meeting new people.</p>
                <Link to='/contact'>
                    <button id='global-btn' className=' btn'>Say Hello</button>
                </Link>
            </div>
        </div>
    );
};

export default Contact;