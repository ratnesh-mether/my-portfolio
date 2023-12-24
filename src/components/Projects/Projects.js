import React, { useEffect, useState } from "react";
import './Projects.scss'
import { PROJECTS_DATA } from '../../utilities/Constants';

function Projects() {
    const [loadMore, setLoadMore] = useState(true);
    const [loadMorePoint, setLoadMorePoint] = useState(() => {
        const emptyArray = Array(5).fill(true);
        return emptyArray;
    });
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    useEffect(() => {
        setScreenSize(getCurrentDimension())
        const screenSize = getCurrentDimension();
        updateMorePoints(screenSize);
    }, [])
    const updateMorePoints = (screenSize) => {
        if (screenSize.width > 640) {
            setLoadMorePoint(() => {
                const emptyArray = Array(5).fill(false);
                return emptyArray;
            })
        } else {
            setLoadMorePoint(() => {
                const emptyArray = Array(5).fill(true);
                return emptyArray;
            })
        }
    }
    const loadMoreHandler = () => {
        setLoadMore(!loadMore)
    }
    const loadMorePointHandler = (flag, index) => {
        const data = [...loadMorePoint]
        data[index] = flag ? true : false;
        setLoadMorePoint([...data]);
    }
    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            // height: window.innerHeight
        }
    }

    const renderProject = (project, projectIndex) => {
        return <div className="project-info-container" key={project.title}>
            <a href={project.url} target='_blank' rel="noreferrer">
                <h2>{project.title} &#128279;</h2>
            </a>
            <div className="project">
                <div className="image-container">
                    <img src={project.image} alt={project.image} />
                </div>
                <div className="info-text">
                    <ul>
                        {
                            project.points.slice(0, loadMorePoint[projectIndex] ? 1 : project.points.length).map((point, index) => {
                                return <li key={index}><span className="info">&#127919;</span><span className="tick">&#9989;</span> {point}</li>
                            })
                        }
                    </ul>
                    {
                        screenSize.width <= 640 ?
                            <div className="more-container">
                                {
                                    loadMorePoint[projectIndex] ?
                                        <p onClick={() => loadMorePointHandler(false, projectIndex)}>Show More </p> :
                                        <p onClick={() => loadMorePointHandler(true, projectIndex)}>Show Less</p>
                                }
                            </div> : ''
                    }

                </div>
            </div>
        </div>
    }
    const projectList = () => {
        return PROJECTS_DATA
            .slice(0, loadMore ? 3 : PROJECTS_DATA.length)
            .map((project, index) => {
                return renderProject(project, index);
            })
    }
    return <main className='projects-component'>
        {projectList()}
        {loadMore ?
            <p onClick={loadMoreHandler} className="more-project">Show More Projects</p> :
            <p onClick={loadMoreHandler} className="more-project">Show Less Projects</p>}
    </main>;
}
export default Projects;
