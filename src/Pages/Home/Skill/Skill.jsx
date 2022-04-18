import React from 'react';
import './Skill.css'
const Skill = ({ skill }) => {
    const { name, picture, number } = skill;
    return (
        <div className='skill d-flex justify-content-between align-items-center mt-2'>
            <div className='d-flex align-items-center  justify-content-center gap-3'>
                <img style={{ width: "40px", height: "40px" }} src={picture} alt="" />
                <h5 >{name} </h5>
            </div>
            <p className='mt-2'>{number} %</p>
        </div>
    );
};

export default Skill;