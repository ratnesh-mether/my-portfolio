import { TESTIMONIALS } from '../../utilities/Constants';
import './Testimonials.scss';
import React from "react";
function Testimonials() {
    const showTestimonal = () => {
        return TESTIMONIALS.map((testimonial) => {
            return <div className="info-card">
                <div className="meta">
                    <a className="personal-info" href={testimonial.profileURL} target='_blank' rel='noreferrer'>
                        <div className="image-container">
                            <img src={testimonial.img} alt={testimonial.name} />
                        </div>
                        <div className="info-text">
                            <p className="name">{testimonial.name}</p>
                            <p className="designation">{testimonial.designation}</p>
                        </div>
                    </a>
                    <a className="org-img" href={testimonial.orgURL} target='_blank' rel='noreferrer'>
                        <img src={testimonial.orgLogo} alt={testimonial.organisation} />
                    </a>
                </div>
                <div className="text-container">
                    <p className="text"><span>"</span>{testimonial.text}<span>"</span></p>
                </div>
            </div>
        })
    }
    return <main className='testimonials-section'>
        <div className="testimonial-container">
            <button className="navigation-button">Previous</button>
            {showTestimonal()}
            <button className="navigation-button">Next</button>
        </div>
    </main>;
}

export default Testimonials;
