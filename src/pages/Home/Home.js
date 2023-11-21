import './Home.scss'
import React from "react";

function Home() {
    return <main className="home-component">
        <section className="base welcome-section">
            <div className="inner">
                <h1>Welcome</h1>
            </div>
            {/* 
    Intro text for visitor and popup to take the name
    */}
        </section>
        <section className="base intro-section" id="section1">
            <div className="inner">
                <h1>Intro</h1>
            </div>
            {/* 
        photo / intro text / CTA - Email, Resume / Skills
        */}
        </section>
        <section className="base project-section">
            <div className="inner">
                <h1>Projects</h1>
            </div>

        </section>
        <section className="base education-section">
            <div className="inner">
                <h1>Education</h1>
            </div>

        </section>
        <section className="base outro-section">
            <div className="inner">
                <h1>Outro</h1>
            </div>

        </section>
    </main>;
}

export default Home;
