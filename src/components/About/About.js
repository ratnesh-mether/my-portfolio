import { useDispatch, useSelector } from 'react-redux';
import './../About/About.scss';
import resume from '/Users/ratnesh/React Projects/my-portfolio/src/assets/Frontend.pdf';
import { setPdfViewerFlag } from '../../Redux-State/slice';
import { useRef } from 'react';

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
    const composeEmail = () => {
        const recipient = 'metherratnesh@gmail.com';
        const subject = "Let's Connect!";
        const body = `Hey Ratnesh,

I came across your profile and found fascinating.

I'd love the opportunity to connect and learn more about your experiences and insights.

If you're open to a conversation or sharing ideas or job role; lets connect and share thoughts.

Warm regards,

[Your Name]
Contact : [Your Phone Number]

PS : Please feel free to craft your own email and do not forget to remove this line before sending a message 😜
`;

        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, '_blank');
    };
    return <main className='about-component'>
        <h1>ABOUT</h1>
        <div className="profile-image-container">
        </div>
        <h1>{"" + pdfViewerFlag}</h1>
        <button onClick={dispatchHandler}>Action</button>
        <a href={resume} ref={pdfDownloadRef} className="pdf-link" download="Frontend-Developer-Ratnesh-Mether.pdf">Resume</a>
        <button onClick={composeEmail}>
            Compose Email
        </button>
    </main>
}

export default About;