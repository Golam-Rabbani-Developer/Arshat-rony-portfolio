import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Article.css'
const Article = ({ article }) => {
    const { name, picture, text, liveLink, codeLink, tools } = article;
    return (
        <div className='article text-center'>
            <h5 className='mt-3 mb-4 skills-heading'>{name}</h5>
            <img className='mx-auto my-2' style={{ width: "100px", height: "100px" }} src={picture} alt="" />
            <div className='my-4 d-flex gap-4 justify-content-center'>
                <a href={liveLink}>
                    <button className='artilcle-btn'>live demo</button>
                </a>
                <a href={codeLink}>
                    <button className='artilcle-btn'>source code</button> </a>


            </div>
            <p className='my-2'>{text}</p>
            <div style={{ color: "var(--dark-color)" }} className='tools d-flex justify-content-center align-items-center gap-4'>

                <span >{tools[0]}</span>
                <span>{tools[1]}</span>
                <span>{tools[2]}</span>
                <span >{tools[3]}</span>
            </div>

        </div>
    );
};

export default Article;