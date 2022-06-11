import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import resume from "../../../assests/Arshat Rony  (1).pdf"
import articleimg from '../../../images/icons/download.png'
import aboutimg from '../../../images/icons/download (2).png'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div style={{ backgroundColor: "#212529" }} className='header'>
            <div className='header home-container mx-auto px-3'>
                <Navbar bg="dark" expand="lg">
                    <Navbar.Brand>
                        <Nav.Link as={Link} to='/home' className='text-decoration-none' ><h5 className='text-white logo fw-bold'>Arshat Rony</h5></Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className="me-auto menubar">

                            {/* <Nav.Link className='text-white me-5' href="#home">
                                <img className='me-2' style={{ height: "25px" }} src={projectsimg} alt="" />
                                Articles
                            </Nav.Link> */}
                            <Nav.Link className='text-white me-5'
                                as={Link} to='/about'>
                                <img className='me-2' style={{ height: "25px" }} src={articleimg} alt="" />
                                About Me
                            </Nav.Link>
                            <Nav.Link className='text-white me-5' as={Link} to="/project">
                                <img className='me-2' style={{ height: "25px" }} src={aboutimg} alt="" />
                                Projects
                            </Nav.Link>

                        </Nav>
                        <Link to={resume} download="Arshat Rony (1).pdf" target="_blank">  <button id='global-btn' className="btn">Resume</button></Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;