import { useDispatch } from 'react-redux';
import './../About/About.scss';
import { setPdfViewerFlag } from '../../redux-state/slice';
import { useRef } from 'react';
import { EMAIL_DATA, INTRODUCTION_PARA_1, INTRODUCTION_PARA_2, INTRODUCTION_PARA_3, PHONE_NUMBER, RESUME_PATH, SKILLS } from '../../utilities/Constants';
function About() {
    const pdfDownloadRef = useRef(null);
    const dispatch = useDispatch();
    const dispatchHandler = () => {
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
            return <div className="skill" key={key}><div className='tag'><p>{skill.name}</p></div><img src={skill.logo} alt="react" /></div>
        })
    }
    return <main className='about-component'>
        <div className="intro-section">
            <div className="profile-cover"></div>
            <div className="profile-image-container"></div>
            <div className="intro-text-links">
                <div className="me">
                    <h2><a href="https://www.linkedin.com/in/ratnesh-mether" target='_blank' rel="noreferrer">Ratnesh Mether <span>&#128640;</span></a></h2>
                    <p>Frontend Developer</p>
                </div>
                <div className="text">
                    <p>{INTRODUCTION_PARA_1}</p>
                    <p>{INTRODUCTION_PARA_2}</p>
                    <p>{INTRODUCTION_PARA_3}</p>
                </div>
                <div className="links">
                    <button onClick={dispatchHandler} className='resume'>View Resume</button>
                    <div className="contact-button">
                        <button onClick={composeEmail} className='email'> Email </button>
                        <button onClick={handleCall} className='call'> Call</button>
                    </div>
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