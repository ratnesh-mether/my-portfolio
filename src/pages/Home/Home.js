import { useDispatch, useSelector } from 'react-redux';
import About from '../../components/About/About';
import Welcome from '../../components/Welcome/Welcome';
import './Home.scss'
import React from "react";
import { setPdfViewerFlag } from '../../redux-state/slice';
import PdfViewer from '../../components/Pdf-viewer/Pdf-viewer';
import Projects from '../../components/Projects/Projects';

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
        {/* <div className="scroll-helper" id="home"></div>
        <section className="base welcome-section">
            <Welcome></Welcome> */}

        {/* 
    Intro text for visitor and popup to take the name
    */}
        {/* </section> */}
        <div className="scroll-helper" id="about" ></div>
        <section className="base about-section" >
            <About />
            {/* 
        photo / intro text / CTA - Email, Resume / Skills / LinkedIn / Twitter
        */}
        </section>
        <div className="scroll-helper" id="projects"></div>
        <section className="base project-section" id="projects">
            <div className="inner">
                <h1>Projects</h1>
                <Projects />
            </div>

        </section>
        {/* <div className="scroll-helper" id="education"></div> */}
        <section className="base education-section">
            <div className="inner">
                <h1>Education</h1>
            </div>
            <div className="scroll-helper"></div>
        </section>
        {/* <div className="scroll-helper" id="contact"></div> */}
        <section className="base contact-section">
            <div className="inner">
                <h1>Contact</h1>
            </div>
            {/* <div className="scroll-helper"></div> */}
        </section>
        <section className="base outro-section">
            <div className="inner">
                <h1>Outro</h1>
            </div>
        </section>
    </main >;
}

export default Home;
