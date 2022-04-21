import React from 'react';
import './Skill.css'
const Skill = ({ skill }) => {
    const { name, picture, number } = skill;
    return (
        <div className='skill d-flex justify-content-between align-items-center mt-3'>
            <div className='d-flex align-items-center  justify-content-center gap-3'>
                <img style={{ width: "40px", height: "40px" }} src={picture} alt="" />
                <h5 >{name} </h5>
            </div>
        </div>
    );
};

export default Skill;