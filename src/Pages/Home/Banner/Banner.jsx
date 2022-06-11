import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/banner/IMG_1564-removebg-preview (2).png'
import { AiFillTwitterCircle, AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import './Banner.css'

const Banner = () => {
    return (
        <div className='mx-auto banner-container'>
            <div className=" d-flex flex-column justify-content-between align-items-center flex-md-row mt-5">

                <div className="banner-text order-2 order-md-1 mt-5 mt-md-0">
                    <h1 className='banner-heading fw-bold'> Arshat Rony </h1>
                    <p className='banner-para mt-3 pe-3 pe-me-5 pb-3'>MERN Stack Developer. I love building Open-sources projects  <br /> and writing about what I learn.
                        My website is my digital garden where I used to write in free time.</p>
                    <div className='icons mt-4 mb-5'>
                        <a href="https://github.com/Arshat-Rony "><AiFillGithub /></a>
                        <a href="https://www.facebook.com/profile.php?id=100077245239757"><FaFacebook /></a>
                        <a href="https://www.instagram.com/ "><AiFillInstagram /></a>
                        <a href="https://twitter.com/home "><AiFillTwitterCircle /></a>
                        <a href="https://www.linkedin.com/in/arshat-rony-b26364228/ "><FaLinkedin /></a>
                    </div>
                    <Link className='text-decoration-none text-muted ' to='/about'>
                        <button id='global-btn' className="btn">More about me</button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
