import React from "react";
import './Experiance.scss'
import { EXPERIANCE } from "../../utilities/Constants";

function Experiance() {
    const showExperiance = () => {
        return EXPERIANCE.map((exp) => {
            return <div className="experiance">
                <div className="column org">
                    <a href={exp.link} target="_blank" rel="noreferrer">
                        <div className="logo">
                            <img src={exp.img} alt={exp.name} />
                        </div>
                        <p>{exp.name}</p>
                    </a>

                </div>
                <div className="column designation">
                    <p>{exp.designation}</p>
                </div>
                <div className="column year">
                    <p>{exp.year}</p>
                </div>
            </div>
        })
    }
    return <main className="experiance-component">
        <div className="parent-table">
            {showExperiance()}
        </div>
    </main>;
}

export default Experiance;
