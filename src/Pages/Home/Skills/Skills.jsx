import React from 'react';
import useData from '../../../useData/useData';
import Skill from '../Skill/Skill';
import './Skills.css'

const Skills = () => {
    const [data, setData] = useData('skilldata.json')
    return (
        <div className='skills'>
            <h2 className='skills-heading'>Highlights of My Skills</h2>
            <hr />
            <div>
                {
                    data.map(skill => <Skill
                        key={skill.id}
                        skill={skill}
                    ></Skill>)
                }
            </div>
        </div>
    );
};

export default Skills;