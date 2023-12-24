import { useDispatch, useSelector } from 'react-redux';
import About from '../../components/About/About';
import './Home.scss'
import React from "react";
import { setPdfViewerFlag } from '../../redux-state/slice';
import PdfViewer from '../../components/Pdf-viewer/Pdf-viewer';
import Projects from '../../components/Projects/Projects';
import Testimonials from '../../components/Testimonials/Testimonials';
import Experiance from '../../components/Experiance/Experiance';

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
            {/* <div style={{ visibility: 'hidden', height: 0 }} id="experiance"></div> */}
        </section>
        <section className="base testimonials-section">
            <div className="inner">
                <h2 className='headings'><span>&#128107;</span> What Peers has to say about Me!</h2>
                <Testimonials />
            </div>
        </section>
        {/* <section className="base contact-section" id="contact">
            <div className="inner">
                <h1>Contact</h1>
            </div>
        </section> */}

    </main >;
}

export default Home;
