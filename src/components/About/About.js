import { useDispatch, useSelector } from 'react-redux';
import './../About/About.scss';
import resume from '/Users/ratnesh/React Projects/my-portfolio/src/assets/Frontend.pdf';
import { setPdfViewerFlag } from '../../Redux-State/slice';
import { useEffect, useState } from 'react';

function About() {
    const [openModal, setModalState] = useState(false);
    const dispatch = useDispatch();
    const pdfViewerFlag = useSelector(state => state.slice.pdfViewerFlag);
    // useEffect(() => {
    //     dispatch(setPdfViewerFlag(true))
    // }, [openModal, dispatch])
    const dispatchHandler = () => {
        dispatch(setPdfViewerFlag(true))
        // setModalState(true);
    }
    return <main className='about-component'>
        <h1>ABOUT</h1>
        <div className="profile-image-container">
        </div>
        <h1>{"" + pdfViewerFlag}</h1>
        <button onClick={dispatchHandler}>Action</button>
        {/* <div className="pdf-viewer-container">
        </div> */}
        <a href={resume} download="Frontend-Developer-Ratnesh-Mether.pdf">Resume</a>

    </main>
}

export default About;