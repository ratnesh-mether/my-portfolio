import './../About/About.scss';
import profile_picture from '/Users/ratnesh/React Projects/my-portfolio/src/assets/profile_portfolio.PNG';

function About() {
    return <main className='about-component'>
        <h1>ABOUT</h1>
        <div className="profile-image-container">
            <img src={profile_picture} alt="profile" />
        </div>
    </main>
}

export default About;