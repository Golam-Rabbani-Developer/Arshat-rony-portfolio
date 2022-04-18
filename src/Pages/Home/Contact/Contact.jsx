import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className='contact px-4'>
            <h2 className='skills-heading'>Get In Touch</h2>
            <hr />
            <div className='contact-text d-flex justify-content-between align-items-center'>
                <p>You can contact me by email at
                    <span className='ms-2 gmail' style={{ fontSize: "20px" }}>frrony@gmail.com</span> say hi!
                    <br />I always appreciate meeting new people.</p>
                <button id='global-btn' className=' btn'>Say Hello</button>
            </div>
        </div>
    );
};

export default Contact;