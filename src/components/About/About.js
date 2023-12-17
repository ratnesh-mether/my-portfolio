import { useDispatch, useSelector } from 'react-redux';
import './../About/About.scss';
import { setPdfViewerFlag } from '../../redux-state/slice';
import { useRef } from 'react';
import { EMAIL_DATA, INTRODUCTION_PARA_1, INTRODUCTION_PARA_2, INTRODUCTION_PARA_3, PHONE_NUMBER, RESUME_PATH, SKILLS } from '../../utilities/Constants';
function About() {
    const pdfDownloadRef = useRef(null);
    const dispatch = useDispatch();
    // const pdfViewerFlag = useSelector(state => state.slice.pdfViewerFlag);
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
    const showSkills = () => {
        const skills = Object.entries(SKILLS);
        return skills.map(([key, skill]) => {
            return <div className="skill" key={key}><img src={skill} alt="react" /></div>
        })
    }
    return <main className='about-component'>
        <div className="intro-section">
            <div className="profile-image-container">
            </div>
            <div className="intro-text-links">
                <div className="text">
                    <p>{INTRODUCTION_PARA_1}</p>
                    <p>{INTRODUCTION_PARA_2}</p>
                    <p>{INTRODUCTION_PARA_3}</p>
                </div>
                <div className="links">
                    <button onClick={dispatchHandler}>View Resume</button>
                    <button onClick={composeEmail}> Email Me </button>
                    <button onClick={handleCall}> Call Me </button>
                    <a href={RESUME_PATH} ref={pdfDownloadRef} className="pdf-link" download="Frontend-Developer-Ratnesh-Mether.pdf">Resume</a>
                </div>
            </div>
        </div>
        <div className="skills-section">
            {showSkills()}
        </div>
    </main>
}

export default About;