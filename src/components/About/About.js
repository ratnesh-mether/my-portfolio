import './../About/About.scss';
import profile_picture from './../../assets/profile-pic.png';

function About() {
    return <main className='about-component'>
        <h1>ABOUT</h1>
        <div className="profile-image-container">
            <img src={profile_picture} alt="profile" />
        </div>
    </main>
}

export default About;