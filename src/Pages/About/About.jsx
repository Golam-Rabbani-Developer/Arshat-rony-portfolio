import React from 'react';
import { VscActivateBreakpoints } from "react-icons/vsc"
import { MdAttachEmail } from "react-icons/md"
import { BsFillTelephoneOutboundFill } from "react-icons/bs"
import { FcAddressBook } from "react-icons/fc"
import './About.css'
import Skills from '../Home/Skills/Skills';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className='home-container mx-auto p-4'>
            <h1 id='about-title' className='about-heading '>Learn About Me</h1>
            <h4 className='about-subheading'>MERN-Stack-Developer, Open-Sourcer</h4>
            <div className="about-container">
                <p>Hey, Arshat Rony here. Addressing to my spot on the web for projects I've created,tutorials I've written and else I want to show the world.My site has no ads, no affiliate links, no tracking or analytics, no sponsored posts, and no paywall. My only motivation for this site is to share what I've learned with the world and document notes for myself, and hopefully connect with a few people.</p>
                <br />
                <p>Check out my <Link className='text-decoration-none text-white' to='/project'>
                    <span className='project-bar'>Projects</span></Link> and <span className='project-bar'>Articles</span></p>
            </div>
            <div className="about-container">
                <Skills></Skills>
            </div>
            <div data-aos="fade-up-right" className='about-container '>
                <h3 className='about-heading'>My Interests</h3>
                <hr />
                <p><VscActivateBreakpoints className='me-3 text-white' />
                    Sotware that enables creatives.</p>
                <p><VscActivateBreakpoints className='me-3 text-white' />
                    UI/UX or illustration in web3.O.</p>
                <p><VscActivateBreakpoints className='me-3 text-white' />
                    Making Some Beautiful application.</p>
            </div>
            <div data-aos="fade-up-right" className='about-container '>
                <h3 className='about-heading'>Favourite Tools</h3>
                <hr />
                <div className=''>
                    <img style={{ height: "60px" }} src="https://i.ibb.co/x8ZFysr/react-removebg-preview.png" alt="" />
                    <img style={{ height: "60px" }} src="https://i.ibb.co/h7gkbkc/image-removebg-preview-13.png" alt="" />
                    <img style={{ height: "60px" }} src="https://i.ibb.co/bbrHMLq/firebase-removebg-preview.png" alt="" />
                    <img style={{ height: "60px" }} src="https://i.ibb.co/KsBn35m/image-removebg-preview-14.png" alt="" />

                    <img style={{ height: "60px" }} src="https://i.ibb.co/xs231nS/tailwind-removebg-preview.png" alt="" />

                </div>
            </div>
            <div data-aos="fade-up-right" className='about-container '>
                <h3 className='about-heading'>Current Location</h3>
                <hr />
                <p><FcAddressBook className='fs-3' /> Dhaka, Bnagladesh</p>
            </div>
            <div className='about-container '>
                <h3 className='about-heading'>Connect Me</h3>
                <hr />
                <p className=''><MdAttachEmail className='me-3 fs-4 email-phone' />
                    frrony@gmail.com</p>
                <p><BsFillTelephoneOutboundFill className='me-3 fs-4 email-phone' />
                    +01641-382848</p>
            </div>
        </div>
    );
};

export default About;