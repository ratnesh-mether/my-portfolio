import { useSelector } from 'react-redux';
import ControlledCarousel from '../../shared/Carousel/Carousel';
import './Testimonials.scss';
import React from "react";
function Testimonials() {
    const darkModeFlag = useSelector(state => state.slice.darkModeFlag)

    return <main className={'testimonials-section ' + (darkModeFlag ? 'dark-mode-carousel' : "")}>
        <div className="testimonial-container">
            <ControlledCarousel />
        </div>
    </main>;
}

export default Testimonials;
