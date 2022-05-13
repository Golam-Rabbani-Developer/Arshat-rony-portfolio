import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from "react-intersection-observer"
import './Article.css'
const Article = ({ article }) => {
    const { ref, inView } = useInView()
    const animation = useAnimation({
        threshold: 0.5,
    })
    const { name, picture, text, liveLink, codeLink, tools } = article;
    useEffect(() => {
        if (inView) {
            console.log(inView)
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
            <div ref={ref}></div>
            <motion.div
                animate={animation}
                className='article text-center'>

                <h5 className='mt-3 mb-4 skills-heading d-block d-md-none'>{name}</h5>
                <div className='d-flex flex-column flex-lg-row justify-content-center  justify-content-md-between align-items-center'>
                    <div>
                        <img className='mx-auto my-2' style={{ width: "100px", height: "100px" }} src={picture} alt="" />
                        <div className='my-4 d-flex gap-4 justify-content-center'>
                            <a href={liveLink}>
                                <button className='artilcle-btn'>live demo</button>
                            </a>
                            <a href={codeLink}>
                                <button className='artilcle-btn'>source code</button> </a>
                        </div>
                    </div>
                    <div className=''>
                        <h5 className='mt-3 mb-4 skills-heading none d-md-block'>{name}</h5>
                        <p className='my-2'>{text}</p>
                        <div style={{ color: "var(--dark-color)" }} className='tools d-flex justify-content-center align-items-center gap-4'>
                            <span >{tools[0]}</span>
                            <span>{tools[1]}</span>
                            <span>{tools[2]}</span>
                            <span >{tools[3]}</span>
                        </div>
                    </div>

                </div>

            </motion.div>

        </div >
    );
};

export default Article;