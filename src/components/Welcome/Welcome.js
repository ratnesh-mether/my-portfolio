import React from "react";
import "./Welcome.scss"
function Welcome() {
    return <div className="welcome-component">
        <p className="text">Hey <span className="name">Ratnesh</span>,</p>
        <p className="text">Welcome! I'm Delighted you're here.&#128519;</p>
        <p className="text">This space is all about showcasing <span className="name">How I can help You.</span>&#129309;</p>
        {/* <p className="text">As a Frontend Developer&#128119;,</p>
        <p className="text">I'm passionate about creating user-friendly experiences.</p> */}
        <p className="text">Let's explore how I can bring your ideas to life.</p>
        <p className="text">Excited to connect!!!</p>
        {/* 
Welcome! I'm thrilled you're here. 
This space is all about showcasing how I can help you. 
As a frontend developer, I'm passionate about creating user-friendly experiences. 
Let's explore how I can bring your ideas to life! 
Excited to connect and be a part of your next project!

*/}
    </div>;
}

export default Welcome;
