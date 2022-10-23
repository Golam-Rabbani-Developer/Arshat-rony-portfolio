import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from "react-intersection-observer"
import { FiGithub } from "react-icons/fi"
import { BsBoxArrowUpRight } from "react-icons/bs"
import './Article.css'
import { Link, useLocation, useParams } from 'react-router-dom';
const Article = ({ article }) => {

    const location = useLocation()
    const { ref, inView } = useInView()
    const animation = useAnimation({
        threshold: 0.5,
    })
    const { _id, name, picture, text, liveLink, codeLink } = article;
    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: 2,
                    bounce: 0.2,
                }
            })
        }
        if (!inView) {
            animation.start({ x: "-100vw" })
        }
    }, [inView, animation, ref])
    return (
        <div>
            {
                location.pathname === "/project" ||
                <>
                    <div ref={ref}></div>
                    <motion.div
                        animate={animation}
                        className='article text-center'>
                        <h5 className='mt-3 mb-4 skills-heading d-block d-md-none'>{name}</h5>
                        <div className='article-container d-flex flex-column flex-lg-row justify-content-center  justify-content-md-between align-items-center'>
                            <div>
                                <img className='mx-auto my-2' style={{ width: "150px", height: "150px" }} src={picture} alt="" />
                                <div className='my-4 d-flex gap-4 justify-content-center'>
                                    <a href={liveLink}>
                                        <button className='artilcle-btn'><BsBoxArrowUpRight className='me-2' /> live demo</button>
                                    </a>
                                    <a href={`${codeLink}`}>
                                        <button className='artilcle-btn'><FiGithub className='me-2' /> source code  </button> </a>
                                    {/* <Link to={`/project/${_id}`}>
                                        <button className='artilcle-btn'>Details</button> </Link> */}
                                </div>
                            </div>
                            <div className=''>
                                <h5 className='mt-3 mb-4 skills-heading none d-md-block'>{name}</h5>
                                <p className='my-2'>{text}</p>
                                <div style={{ color: "var(--dark-color)" }} className='tools d-flex justify-content-center align-items-center gap-4'>
                                    {
                                        article?.tools?.map((tool, index) => <span key={index} >{tool}</span>)
                                    }

                                </div>
                            </div>

                        </div>

                    </motion.div>
                </>
            }

            {
                location.pathname === '/project' &&

                <div className='article_project'>
                    <h5 className='mt-3 mb-4 skills-heading text-center fs-3'>{name}</h5>
                    <div className='article-container d-flex flex-column justify-content-center  justify-content-md-between align-items-center'>
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                            <img className='mx-auto my-1' style={{ width: "100px", height: "100px" }} src={picture} alt="" />
                            <div className='my-4 d-flex gap-2 justify-content-center'>
                                <a href={liveLink}>
                                    <button className='artilcle-btn'><BsBoxArrowUpRight className='me-2' />Demo</button>
                                </a>
                                <a href={`${codeLink}`}>
                                    <button className='artilcle-btn'><FiGithub className='me-2' />Source</button> </a>
                                {/* <Link to={`/project/${_id}`}>
                                    <button className='artilcle-btn'>Details</button> </Link> */}
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                            <p className='mt-2 mb-5 text-center'>{text?.length > 150 ? <span>{`${text?.slice(0, 100)}...`}</span> : text?.slice(0, 100)}</p>
                            <div style={{ color: "var(--dark-color)" }} className='tools d-flex justify-content-center align-items-center gap-4'>
                                {
                                    article?.tools?.map((tool, index) => <span key={index} >{tool}</span>)
                                }

                            </div>
                        </div>

                    </div>
                </div>
            }
        </div >
    );
};

export default Article;