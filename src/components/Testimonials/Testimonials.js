import ControlledCarousel from '../../shared/Carousel/Carousel';
import './Testimonials.scss';
import React from "react";
function Testimonials() {
    return <main className='testimonials-section'>
        <div className="testimonial-container">
            <ControlledCarousel />
        </div>
    </main>;
}

export default Testimonials;
