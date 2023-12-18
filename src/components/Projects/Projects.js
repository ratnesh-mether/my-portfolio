import { PROJECTS, PROJECTS_URLS } from '../../utilities/Constants';
import './Projects.scss'

import React from "react";

function Projects() {
    return <main className='projects-component'>
        <div className="project-info-container">
            <a href={PROJECTS_URLS.sirius} target='_blank' rel="noreferrer">
                <h2>User Review Web App (Project Sirius) &#128279;</h2>
            </a>
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
            <a href={PROJECTS_URLS.injection} target='_blank' rel="noreferrer">
                <h2>Dependency Injection Web App (Injection) &#128279;</h2>
            </a>
            <div className="project">
                <div className="image-container">
                    <img src={PROJECTS.injection} alt="injection" />
                </div>
                <div className="info-text">
                    <ul>
                        <li> Injection is a configurable web application for seamless third-party platform integration.</li>
                        <li> Configured diverse configurations to provide customised experiences based on partner requirements. </li>
                        <li> Implemented more than 3 product flows to analyse user behaviour using LaunchDarkly.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="project-info-container">
            <a href={PROJECTS_URLS.solar} target='_blank' rel="noreferrer">
                <h2>E-Commerce Web App (Solar.com) &#128279;</h2>
            </a>
            <div className="project">
                <div className="image-container">
                    <img src={PROJECTS.solar} alt="solar" />
                </div>
                <div className="info-text">
                    <ul>
                        <li> Electrum and Solar are web apps focusing on products namely solar panels, batteries, water heaters, and EV chargers. </li>
                        <li> Developed a user-friendly, multi-step dashboard with flow emphasising attributes such as location, product details and utility information. </li>
                        <li> Enhanced website loading speed by 40% and implemented SEO optimisations.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="project-info-container">
            <a href={PROJECTS_URLS.electrum} target='_blank' rel="noreferrer">
                <h2>E-Commerce Web App (Electrum.co) &#128279;</h2>
            </a>
            <div className="project">

                <div className="image-container">
                    <img src={PROJECTS.electrum} alt="electrum" />
                </div>
                <div className="info-text">
                    <ul>
                        <li> Electrum and Solar are web apps focusing on products namely solar panels, batteries, water heaters, and EV chargers. </li>
                        <li> Developed a user-friendly, multi-step dashboard with flow emphasising attributes such as location, product details and utility information. </li>
                        <li> Enhanced website loading speed by 40% and implemented SEO optimisations.</li>
                    </ul>

                </div>
            </div>
        </div>
    </main>;
}

export default Projects;
