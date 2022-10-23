import React from 'react';
import emailjs from "emailjs-com"
import { Button, Form } from 'react-bootstrap';
import { AiFillTwitterCircle, AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { MdAttachEmail } from "react-icons/md"
import { BsFillTelephoneOutboundFill } from "react-icons/bs"
import "./Contact.css"
import { Link } from 'react-router-dom';
const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.user_email.value;
        const name = e.target.name.value;
        const message = e.target.message.value;
        if (email && name && message) {
            emailjs.sendForm("service_zqz5s7s", 'template_lbrrc0s', e.target, "2LiFp4sDedrEp_q72")
                .then(res => {
                })
                .catch(err => console.error(err))
            e.target.reset()
        }
    }
    return (
        <div className='contact-section'>
            <div className='form-container mx-auto home-container d-flex justify-content-center align-items-center gap-4 flex-column flex-md-row p-4'>
                <div className='biodata d-flex flex-column justify-content-center align-items-center'>

                    <img className='my-3 mx-auto' src="https://i.ibb.co/XyZYCty/laptop-new.png" alt="laptop-pic" />
                    <div className='text-center'>
                        <h3 className='skills-heading '>Golam Rabbani</h3>
                        <p className=''><span className='text-bold text-secondary fs-3 '>Jr. MERN Stack Developer.</span></p>
                        <p className='text-white px-5'> Have an exciting project that could use my help? Drop me a line and let's chat!</p>
                    </div>
                    <div className="contact_email my-3">
                        <p className=''><MdAttachEmail className='me-3 fs-4 email-phone' />
                            golam.rabbani2848@gmail.com</p>
                        <p><BsFillTelephoneOutboundFill className='me-3 fs-4 email-phone' />
                            +01641-382848</p>
                    </div>
                    <div className='contact-icons mt-2 mb-5'>
                        <Link to="https://github.com/Arshat-Rony "><AiFillGithub /></Link>
                        <Link to="https://www.facebook.com/profile.php?id=100077245239757"><FaFacebook /></Link>
                        <Link to="https://www.instagram.com/ "><AiFillInstagram /></Link>
                        <Link to="https://twitter.com/home "><AiFillTwitterCircle /></Link>
                        <Link to="https://www.linkedin.com/in/arshat-rony-b26364228/ "><FaLinkedin /></Link>
                    </div>

                </div>
                <Form className='form' onSubmit={handleSubmit} autoComplete="off">
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control name='name' type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control name='user_email' type="email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicArea">
                        <Form.Label>Your Message</Form.Label>
                        <textarea id='text-area' className=' w-100 form-control' name='message' type="text" />
                    </Form.Group>

                    <Button id='global-btn' variant="none" type="submit">
                        Send Me
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Contact;