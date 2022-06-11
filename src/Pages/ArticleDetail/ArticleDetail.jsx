import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { FiGithub } from "react-icons/fi"
import { BsBoxArrowUpRight } from "react-icons/bs"
import Loading from '../Shared/Loading';

const ArticleDetail = () => {
    const { id } = useParams()
    const { isLoading, data } = useQuery('servicedata', () =>
        fetch(`http://localhost:5000/project/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading type="spokes" color="red"></Loading>
    }
    const { name, picture, text, liveLink, codeLink, detail_page, login_page, others } = data;
    return (
        <div>
            <div style={{ background: "none" }} className='article_project w-full border-bottom-0 '>
                <h5 className='mt-3 mb-4 skills-heading text-center fs-3'>{name}</h5>
                <div className='my-4 d-flex gap-2 justify-content-center'>
                    <a href={liveLink}>
                        <button className='artilcle-btn'><BsBoxArrowUpRight className='me-2' />Demo</button>
                    </a>
                    <a href={`${codeLink}`}>
                        <button className='artilcle-btn'><FiGithub className='me-2' />Source</button> </a>
                </div>
                <div className='article-container d-flex flex-column justify-content-center  justify-content-md-between align-items-center'>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <img style={{ width: "400px", height: "800px" }} className='mx-auto my-1' src={detail_page} alt="" />
                        <img style={{ width: "300px", height: "400px" }} className='mx-auto my-1' src={login_page} alt="" />
                        <img style={{ width: "400px", height: "600px" }} className='mx-auto my-1' src={others} alt="" />

                    </div>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <p style={{ width: "400px" }} className='mt-2 mb-5 text-center mx-auto'>{text}</p>
                        <div style={{ color: "var(--dark-color)" }} className='tools d-flex justify-content-center align-items-center gap-4'>
                            {
                                data?.tools?.map((tool, index) => <span key={index} >{tool}</span>)
                            }

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ArticleDetail;