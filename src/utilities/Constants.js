import resume from '/Users/ratnesh/React Projects/my-portfolio/src/assets/Frontend.pdf';
import react from './../assets/skills/react.svg';
import javascript from './../assets/skills/javascript.svg';
import html from './../assets/skills/html.svg';
import css from './../assets/skills/css.svg';
import angular from './../assets/skills/angular.svg';
import github from './../assets/skills/github.svg';
import docker from './../assets/skills/docker.svg';
import postman from './../assets/skills/postman.svg';
import bootstrap from './../assets/skills/bootstrap.svg';
import jira from './../assets/skills/jira.svg';
import solar from './../assets/projects/solar.webp';
import electrum from './../assets/projects/electrum.webp';
import injection from './../assets/projects/injection.webp';
import sirius from './../assets/projects/sirius.webp';
import controlCenter from './../assets/projects/control-center.jpeg';
import profilePicture from './../assets/profile_portfolio.png'

export const PHONE_NUMBER = '9922040096';

export const PDF_WORKER_URL = "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js";

export const RESUME_PATH = resume;

export const PROFILE_PICTURE = profilePicture;

export const SKILLS = {
    react, javascript, html, css, angular, github, docker, postman, bootstrap, jira
}

export const PROJECTS_DATA = [
    {
        title: 'User Review Web App (Project Sirius)',
        url: 'https://www.solar.com/solar-reviews/',
        image: sirius,
        points: [
            ' Project Sirius is a platform that empowers users with valuable insights to support informed purchasing decisions.',
            'Independently directed a significant portion encompassing more than 3 modules, namely profiles, reviews, and listings.',
            'Resulted 300+ installer reviews within a month period.'
        ]
    },
    {
        title: 'Dependency Injection Web App (Injection)',
        url: 'https://codebase2-prelive.pickmysolar.com/',
        image: injection,
        points: [
            'Injection is a configurable web application for seamless third-party platform integration.',
            'Configured diverse configurations to provide customised experiences based on partner requirements.',
            'Implemented more than 3 product flows to analyse user behaviour using LaunchDarkly.'
        ]
    },
    {
        title: 'E-Commerce Web App (Electrum.co)',
        url: 'https://www.electrum.co/',
        image: electrum,
        points: [
            'Electrum and Solar are web apps focusing on products namely solar panels, batteries, water heaters, and EV chargers.',
            'Developed a user-friendly, multi-step dashboard with flow emphasising attributes such as location, product details and utility information.',
            'Enhanced website loading speed by 40% and implemented SEO optimisations.'
        ]
    },
    {
        title: 'Admin Dashboard (Control Center)',
        url: 'https://controlcenter-v1.solar.com/',
        image: controlCenter,
        points: [
            'Control Center is Electrum\'s internal operational dashboard, facilitating efficient management of all business activities.'
        ]
    },
    {
        title: 'E-Commerce Web App (Solar.com)',
        url: 'https://www.solar.com/',
        image: solar,
        points: [
            'Electrum and Solar are web apps focusing on products namely solar panels, batteries, water heaters, and EV chargers.',
            'Developed a user-friendly, multi-step dashboard with flow emphasising attributes such as location, product details and utility information.',
            'Enhanced website loading speed by 40% and implemented SEO optimisations.'
        ]
    }
]

export const INTRODUCTION_PARA_1 = `Hey there, I'm Ratnesh Mether, 
a passionate enthusiast in the world of Frontend development and crafting user-friendly interfaces.        
My journey took root at Fergusson College, Pune, 
where I earned my master's degree. That's where my interest in  the world of tech really took flight, 
and since then, I've been hooked on learning and exploring the ever-evolving landscape of web development.`

export const INTRODUCTION_PARA_2 = `Apart from coding, I'm probably diving into the latest tech blogs, 
exploring innovative design trends, or simply seeking out new learning opportunities. 
I thrive on the thrill of problem-solving and the joy of creating something impactful.`

export const INTRODUCTION_PARA_3 = ` I'm here to connect, learn, and explore, so feel free to reach out.
Let's dive into the world of code and design together!`;

export const EMAIL_DATA = {
    recipient: 'metherratnesh@gmail.com',
    subject: "Let's Connect!",
    body: `Hey Ratnesh,

I came across your profile and found fascinating.

I'd love the opportunity to connect and learn more about your experiences and insights.

If you're open to a conversation or sharing ideas or job role; lets connect and share thoughts.

Warm regards,

[Your Name]
Contact : [Your Phone Number]

PS : Please feel free to craft your own email and do not forget to remove this line before sending a message 😜
`
}