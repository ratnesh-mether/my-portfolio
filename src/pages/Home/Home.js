import { useDispatch, useSelector } from 'react-redux';
import About from '../../components/About/About';
import Welcome from '../../components/Welcome/Welcome';
import './Home.scss'
import React, { useState } from "react";
import { setPdfViewerFlag } from '../../Redux-State/slice';
import PdfViewer from '../../components/Pdf-viewer/Pdf-viewer';

function Home() {
    const dispatch = useDispatch();
    const pdfViewerFlag = useSelector(state => state.slice.pdfViewerFlag)
    const dispatchHandler = () => {

        dispatch(setPdfViewerFlag(false))
    }
    return <main className="home-component">
        {
            pdfViewerFlag ?
                <div className="pdf-viewer-container">
                    <div className='close-button' onClick={dispatchHandler}>
                        <p>Close Preview </p>
                    </div>
                    <PdfViewer />
                </div>
                : ''}
        <div className="scroll-helper" id="home"></div>
        <section className="base welcome-section">
            <Welcome></Welcome>

            {/* 
    Intro text for visitor and popup to take the name
    */}
        </section>
        <div className="scroll-helper" id="about"></div>
        <section className="base about-section" >
            <About />
            {/* 
        photo / intro text / CTA - Email, Resume / Skills
        */}
        </section>
        <div className="scroll-helper" id="projects"></div>
        <section className="base project-section">
            <div className="inner">
                <h1>Projects</h1>
            </div>

        </section>
        <div className="scroll-helper" id="education"></div>
        <section className="base education-section">
            <div className="inner">
                <h1>Education</h1>
            </div>
            <div className="scroll-helper"></div>
        </section>
        <div className="scroll-helper" id="contact"></div>
        <section className="base contact-section">
            <div className="inner">
                <h1>Contact</h1>
            </div>
            <div className="scroll-helper"></div>
        </section>
        <section className="base outro-section">
            <div className="inner">
                <h1>Outro</h1>
            </div>
        </section>
    </main>;
}

export default Home;
