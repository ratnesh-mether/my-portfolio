import { useDispatch, useSelector } from 'react-redux';
import About from '../../components/About/About';
import './Home.scss'
import React from "react";
import { setPdfViewerFlag } from '../../redux-state/slice';
import PdfViewer from '../../components/Pdf-viewer/Pdf-viewer';
import Projects from '../../components/Projects/Projects';
import Testimonials from '../../components/Testimonials/Testimonials';
import Experiance from '../../components/Experiance/Experiance';
import Contact from '../../components/Contact/Contact';

function Home() {
    const dispatch = useDispatch();
    const pdfViewerFlag = useSelector(state => state.slice.pdfViewerFlag)
    const dispatchHandler = () => {
        dispatch(setPdfViewerFlag(false))
    }
    const handlePDFView = () => {
        if (pdfViewerFlag) {
            return <div className="pdf-viewer-container">
                <div className='close-button' onClick={dispatchHandler}>
                    <p>Close Preview </p>
                </div>
                <PdfViewer />
            </div>
        }
    }
    return <main className="home-component">
        {handlePDFView()}
        <div style={{ visibility: 'hidden', height: 0, position: 'relative', top: -32 }} id="home"></div>
        <section className="base about-section" >
            <About />
            <div style={{ visibility: 'hidden', height: 0, position: 'relative', top: -32 }} id="projects"></div>
        </section>

        <section className="base project-section">
            <div className="inner">
                <h2 className='headings'><span>&#129495;</span> My Work</h2>
                <Projects />
            </div>
            <div style={{ visibility: 'hidden', height: 0, position: 'relative', top: -32 }} id="experiance"></div>
        </section>
        <section className="base education-section">
            <h2 className='headings'><span>&#128188;</span> Experience & Education</h2>
            <div className="inner">
                <Experiance />
            </div>
        </section>
        <section className="base testimonials-section">
            <div className="inner">
                <h2 className='headings'><span>&#128107;</span> What Peers has to say about Me!</h2>
                <Testimonials />
            </div>
            <div style={{ visibility: 'hidden', height: 0, position: 'relative', top: -32 }} id="contact"></div>
        </section>
        <section className="base contact-section" id="contact">
            <div className="inner">
                <h2 className='headings'><span>	&#128238;</span> Contact</h2>
                <Contact />
            </div>
        </section>
        <q>On Earth We are Briefly Gorgeous</q>
        <p className='thanks'>A special Thanks to <a href="https://www.linkedin.com/in/shraddha-takale-3b4184281/" target="_blank" rel='noreferrer'>SHRADDHA</a> for helping on this Beautiful Project 	&#9829;</p>

    </main >;
}

export default Home;
