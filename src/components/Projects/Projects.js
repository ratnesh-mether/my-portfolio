import React, { useState } from "react";
import './Projects.scss'
import { PROJECTS_DATA } from '../../utilities/Constants';

function Projects() {
    const [loadMore, setLoadMore] = useState(true);
    const loadMoreHandler = () => {
        setLoadMore(!loadMore)
    }
    const renderProject = (project) => {
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
                            project.points.map((point) => {
                                return <li>{point}</li>
                            })
                        }
                    </ul>

                </div>
            </div>
        </div>
    }
    const projectList = () => {
        return PROJECTS_DATA.map((project, index) => {
            if (loadMore) {
                if (index < 3)
                    return renderProject(project);
            }
            else {
                return renderProject(project);
            }
        })
    }
    return <main className='projects-component'>
        {projectList()}
        {loadMore ? <p onClick={loadMoreHandler}>Show More</p> : <p onClick={loadMoreHandler}>Show Less</p>}
    </main>;
}
export default Projects;
