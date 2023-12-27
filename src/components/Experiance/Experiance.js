import React, { useEffect } from "react";
import './Experiance.scss'
import { EXPERIANCE } from "../../utilities/Constants";
import Aos from "aos";
import 'aos/dist/aos.css';

function Experiance() {
    useEffect(() => {
        Aos.init();
    }, [])
    const showExperiance = () => {
        return EXPERIANCE.map((exp, index) => {
            const data = index % 2 === 0 ? "fade-right" : "fade-left";
            return <div className="experiance" key={exp.name} data-aos={data} data-aos-offset='270'>
                <div className="column org">
                    <a href={exp.link} target="_blank" rel="noreferrer">
                        <div className="logo" style={{ backgroundImage: "url(" + exp.img + ")" }}>
                            {/* <img src={exp.img} alt={exp.name} /> */}
                        </div>
                        <p>{exp.name}</p>
                    </a>

                </div>
                <div className="column designation">
                    <p>{exp.designation}</p>
                    <p>{exp.subDesignation}</p>
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
