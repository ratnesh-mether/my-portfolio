import React, { useEffect, useState } from "react";
import './Projects.scss'
import { PROJECTS_DATA } from '../../utilities/Constants';

function Projects() {
    const [loadMore, setLoadMore] = useState(true);
    const [loadMorePoint, setLoadMorePoint] = useState(() => {
        const emptyArray = Array(5).fill(true);
        return emptyArray;
    });
    const loadMoreHandler = () => {
        setLoadMore(!loadMore)
    }
    const loadMorePointHandler = (flag, index) => {
        const data = [...loadMorePoint]
        data[index] = flag ? true : false;
        setLoadMorePoint([...data]);
    }
    useEffect(() => {
        console.log(loadMorePoint)
    }, [loadMorePoint])
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
                                return <li key={index}>{point}</li>
                            })
                        }
                    </ul>
                    <p onClick={() => loadMorePointHandler(false, projectIndex)}>Show More</p>
                    <p onClick={() => loadMorePointHandler(true, projectIndex)}>Show Less</p>
                </div>
            </div>
        </div>
    }
    const projectList = () => {
        return PROJECTS_DATA
            .slice(0, loadMore ? 3 : PROJECTS_DATA.length - 1)
            .map((project, index) => {
                return renderProject(project, index);
            })
    }
    return <main className='projects-component'>
        {projectList()}
        {loadMore ? <p onClick={loadMoreHandler}>Show More</p> : <p onClick={loadMoreHandler}>Show Less</p>}
    </main>;
}
export default Projects;
