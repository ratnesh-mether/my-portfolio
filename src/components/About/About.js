import PdfViewer from '../Pdf-viewer/Pdf-viewer';
import './../About/About.scss';
import resume from '/Users/ratnesh/React Projects/my-portfolio/src/assets/Frontend.pdf';

function About() {
    return <main className='about-component'>
        <h1>ABOUT</h1>
        <div className="profile-image-container">
        </div>
        <a href={resume} download="Frontend-Developer-Ratnesh-Mether.pdf">Resume</a>
        <PdfViewer />
    </main>
}

export default About;