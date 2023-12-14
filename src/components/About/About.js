import { useDispatch, useSelector } from 'react-redux';
import './../About/About.scss';
import resume from '/Users/ratnesh/React Projects/my-portfolio/src/assets/Frontend.pdf';
import { setPdfViewerFlag } from '../../Redux-State/slice';
import { useEffect, useRef, useState } from 'react';

function About() {
    const [openModal, setModalState] = useState(false);
    const pdfDownloadRef = useRef(null);
    const dispatch = useDispatch();
    const pdfViewerFlag = useSelector(state => state.slice.pdfViewerFlag);

    const dispatchHandler = () => {
        const flag = localStorage.getItem('isPDFDownloaded');
        if (!flag) {
            localStorage.setItem('isPDFDownloaded', true);
            pdfDownloadRef.current.click();
        }
        dispatch(setPdfViewerFlag(true))
    }
    return <main className='about-component'>
        <h1>ABOUT</h1>
        <div className="profile-image-container">
        </div>
        <h1>{"" + pdfViewerFlag}</h1>
        <button onClick={dispatchHandler}>Action</button>
        <a href={resume} ref={pdfDownloadRef} className="pdf-link" download="Frontend-Developer-Ratnesh-Mether.pdf">Resume</a>

    </main>
}

export default About;