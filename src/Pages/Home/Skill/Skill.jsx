import React from 'react';
import './Skill.css'
const Skill = ({ skill }) => {
    const { name, picture } = skill;
    return (
        <div data-aos="fade-up-right" className='skill d-flex justify-content-between align-items-center mt-3'>
            <div className='d-flex align-items-center  justify-content-center gap-3'>
                <img className='rounded-3' style={{ width: "40px", height: "40px" }} src={picture} alt="" />
                <h5 >{name} </h5>
            </div>
        </div>
    );
};

export default Skill;