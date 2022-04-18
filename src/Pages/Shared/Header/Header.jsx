import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { GrArticle } from 'react-icons/gr'
import projectsimg from "../../../images/icons/download (1).png"
import articleimg from '../../../images/icons/download.png'
import aboutimg from '../../../images/icons/download (2).png'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div style={{ backgroundColor: "#212529" }} className='header'>
            <div className='header home-container mx-auto px-3'>
                <Navbar bg="dark" expand="lg">
                    <Navbar.Brand href="#home">
                        <Link className='text-decoration-none' to='/home'><h5 className='text-white logo fw-bold'>Arshat Rony</h5></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className="me-auto">

                            <Nav.Link className='text-white me-5' href="#home">
                                <img className='me-2' style={{ height: "25px" }} src={projectsimg} alt="" />
                                Articles
                            </Nav.Link>
                            <Nav.Link className='text-white me-5' href="#link">
                                <img className='me-2' style={{ height: "25px" }} src={aboutimg} alt="" />
                                Projects
                            </Nav.Link>
                            <Nav.Link className='text-white me-5'
                                as={Link} to='/about'>
                                <img className='me-2' style={{ height: "25px" }} src={articleimg} alt="" />
                                About Me
                            </Nav.Link>
                        </Nav>
                        <button id='global-btn' className="btn ">Resume</button>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;