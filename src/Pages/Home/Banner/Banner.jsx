import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/banner/IMG_1564-removebg-preview (2).png'
import { AiFillTwitterCircle, AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import articleimg from '../../../images/icons/download.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='mx-auto banner-container'>
            <div className=" d-flex flex-column justify-content-between align-items-center flex-md-row mt-5">
                <div className='img order-1 order-md-2 text-start'>
                    <img style={{ height: '300px' }} src={img} alt="" />
                </div>
                <div className="banner-text order-2 order-md-1 mt-5 mt-md-0">
                    <h1 className='banner-heading fw-bold'>Hey, Arshat Rony Here.</h1>
                    <p className='banner-para mt-3 pe-3 pe-me-5 pb-3'>I'm a creative Front-End-Developer. I love building Open-sources projects  <br /> and writing about what I learn.
                        My website is my digital garden where I give water everyday.</p>
                    <Link className='text-decoration-none text-muted' to='/about'>
                        <img className='me-2' style={{ height: "25px" }} src={articleimg} alt="" />
                        More about me
                    </Link>
                    <div className='icons mt-5'>
                        <span><FaFacebook /></span>
                        <span><AiFillInstagram /></span>
                        <span><AiFillTwitterCircle /></span>
                        <span><FaLinkedin /></span>
                        <span><AiFillGithub /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;