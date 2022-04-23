import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className='home-about p-4'>
            <h1 className='skills-heading'>
                Coding and Thinking
            </h1>
            <hr />
            <p>With ever-evolving web-standards, It's absolutely essential for any web design professional or an agency to keep themselves updated with latest and the greatest in website front-end code. Whether it is tools, design patterns, or the 'best-practices'; I undertake extensive research and provide professional training to companies and individuals looking for ways to enhance their Website front-end development skills. I help them on their quest to nurture their website UI/UX and Frond-End-Logic building design skills. I also help print designers to transition to website design.
                <br />
                Some of the technologies I provide my consultation and training expertise are <span style={{ color: "var(--heading-color)" }} className='fw-bold'>HTML, CSS , JavaScript, ReactJS, Progressive Enhancement, Responsive Web Design and Art-Direction (in terms of HTML5 or CSS3)</span>.</p>


        </div>
    );
};

export default About;