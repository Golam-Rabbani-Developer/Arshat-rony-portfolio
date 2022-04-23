import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useData from '../../useData/useData';
import Article from '../Article/Article';
import "./Articles.css"
const Articles = () => {
    const [data, setData] = useData('articles.json')
    console.log(data)
    let slicedData = data.slice(0, 3)
    const location = useLocation()

    return (
        <div className={`articles-container p-4 ${location.pathname === '/project' && "home-container mx-auto"}`}>
            <div className={`d-flex  ${location.pathname === "/project" ? "justify-content-center flex-column mt-5" : 'justify-content-between'} align-items-center `}>

                <h2 className='skills-heading'>Highlighted Projects</h2>
                {
                    location.pathname === "/project" ?
                        <p>View others project on my <a style={{ borderBottom: "2px solid var(--primary-color)" }} href='https://github.com/Arshat-Rony' className='text-decoration-none fw-bold text-white '>
                            Github
                        </a></p>
                        : <Link to="/project">
                            <button id='global-btn' className='btn'>View All</button>
                        </Link>
                }

            </div>
            {
                location.pathname === "/project" || <hr />
            }

            <div className="articles mt-5">
                {location.pathname === "/home" && slicedData.map(article => <Article
                    key={article._id}
                    article={article}
                ></Article>)
                }
                {
                    location.pathname === '/project' && data.map(article => <Article
                        key={article._id}
                        article={article}
                    ></Article>)
                }
            </div>
        </div>
    );
};

export default Articles;