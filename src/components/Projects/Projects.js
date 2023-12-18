import { PROJECTS } from '../../utilities/Constants';
import './Projects.scss'

import React from "react";

function Projects() {
    return <main className='projects-component'>
        <div className="project-info-container">
            <h2>Hello</h2>
            <div className="project">
                <div className="image-container">
                    <img src={PROJECTS.sirius} alt="sirius" />
                </div>
                <div className="info-text">
                    <ul>
                        <li> Project Sirius is a platform that empowers users with valuable insights to support informed purchasing decisions. </li>
                        <li> Independently directed a significant portion encompassing more than 3 modules, namely profiles, reviews, and listings. </li>
                        <li> Resulted 300+ installer reviews within a month period.</li>
                    </ul>

                </div>
            </div>
        </div>
        <div className="project-info-container">
            <h2>Hello</h2>
            <div className="project">
                <div className="image-container">
                    <img src={PROJECTS.injection} alt="sirius" />
                </div>
                <div className="info-text">
                    <ul>
                        <li> Project Sirius is a platform that empowers users with valuable insights to support informed purchasing decisions. </li>
                        <li> Independently directed a significant portion encompassing more than 3 modules, namely profiles, reviews, and listings. </li>
                        <li> Resulted 300+ installer reviews within a month period.</li>
                    </ul>

                </div>
            </div>
        </div>
        <div className="project-info-container">
            <h2>Hello</h2>
            <div className="project">
                <div className="image-container">
                    <img src={PROJECTS.solar} alt="sirius" />
                </div>
                <div className="info-text">
                    <ul>
                        <li> Project Sirius is a platform that empowers users with valuable insights to support informed purchasing decisions. </li>
                        <li> Independently directed a significant portion encompassing more than 3 modules, namely profiles, reviews, and listings. </li>
                        <li> Resulted 300+ installer reviews within a month period.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="project-info-container">
            <h2>Hello</h2>
            <div className="project">

                <div className="image-container">
                    <img src={PROJECTS.electrum} alt="sirius" />
                </div>
                <div className="info-text">
                    <ul>
                        <li> Project Sirius is a platform that empowers users with valuable insights to support informed purchasing decisions. </li>
                        <li> Independently directed a significant portion encompassing more than 3 modules, namely profiles, reviews, and listings. </li>
                        <li> Resulted 300+ installer reviews within a month period.</li>
                    </ul>

                </div>
            </div>
        </div>
    </main>;
}

export default Projects;
