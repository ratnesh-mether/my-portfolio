import { useState } from 'react';
import './Carousel.scss'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TESTIMONIALS } from '../../utilities/Constants';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const showTestimonal = () => {
        return TESTIMONIALS.map((testimonial) => {
            return <Carousel.Item >
                <div className="info-card">
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
            </Carousel.Item>
        })
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} >
            {showTestimonal()}
        </Carousel>
    );
}

export default ControlledCarousel;