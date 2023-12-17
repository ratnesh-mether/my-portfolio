import { useDispatch, useSelector } from 'react-redux';
import './../About/About.scss';
import { setPdfViewerFlag } from '../../redux-state/slice';
import { useRef } from 'react';
import { EMAIL_DATA, PHONE_NUMBER, RESUME_PATH } from '../../utilities/Constants';
function About() {
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
    const handleCall = () => {
        window.location.href = `tel:${PHONE_NUMBER}`;
    };
    const composeEmail = () => {
        const mailtoLink = `mailto:${EMAIL_DATA.recipient}?subject=${encodeURIComponent(EMAIL_DATA.subject)}&body=${encodeURIComponent(EMAIL_DATA.body)}`;
        window.open(mailtoLink, '_blank');
    };
    return <main className='about-component'>
        <h1>ABOUT</h1>
        <div className="profile-image-container">
        </div>
        {/* <p>{introduction}</p> */}
        <h1>{"" + pdfViewerFlag}</h1>
        <button onClick={dispatchHandler}>Action</button>
        <a href={RESUME_PATH} ref={pdfDownloadRef} className="pdf-link" download="Frontend-Developer-Ratnesh-Mether.pdf">Resume</a>
        <button onClick={composeEmail}>
            Compose Email
        </button>
        <button onClick={handleCall}>
            Call Me
        </button>
    </main>
}

export default About;