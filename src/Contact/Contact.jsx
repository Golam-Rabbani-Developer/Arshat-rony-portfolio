import React from 'react';
import emailjs from "emailjs-com"
import { Button, Form } from 'react-bootstrap';
import "./Contact.css"
const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.user_email.value;
        const name = e.target.name.value;
        const message = e.target.message.value;
        if (email && name && message) {
            emailjs.sendForm("service_zqz5s7s", 'template_lbrrc0s', e.target, "2LiFp4sDedrEp_q72")
                .then(res => {
                    // console.log(res)
                })
                .catch(err => console.error(err))
            e.target.reset()
            console.log("REs")
        }
    }
    return (
        <div className='form-container mx-auto home-container d-flex justify-content-center align-items-center gap-4 flex-column flex-md-row p-4'>
            <div>
                <h3 className='skills-heading'>Wanna know more?</h3>
                <p className='text-white pe-5'>  Want to know more about my design process? Have an <br /> exciting project that could use my help? Drop me a line and let's chat!</p>
            </div>
            <Form style={{ width: "450px" }} onSubmit={handleSubmit} autoComplete="off">
                <h3 className='mb-5 skills-heading'>Feel Free to Drop Your Mail</h3>

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
    );
};

export default Contact;