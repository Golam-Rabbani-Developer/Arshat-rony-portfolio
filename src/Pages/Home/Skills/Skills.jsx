import React from 'react';
import { useQuery } from 'react-query';
import useData from '../../../useData/useData';
import Loading from '../../Shared/Loading';
import Skill from '../Skill/Skill';
import './Skills.css'

const Skills = () => {
    const { isLoading, data } = useQuery('servicedata', () =>
        fetch(`https://ar-portfolio-server.herokuapp.com/skills`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading type="spokes" color="#1C2648"></Loading>
    }

    return (
        <div className='skills' >
            <h2 className='skills-heading'>Highlights of My Skills</h2>
            <hr />
            <div >
                {
                    data.map(skill => <Skill
                        key={skill._id}
                        skill={skill}
                    ></Skill>)
                }
            </div>
        </div>
    );
};

export default Skills;