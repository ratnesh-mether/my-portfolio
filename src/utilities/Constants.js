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
import controlCenter from './../assets/projects/control-center.png';
import profilePicture from './../assets/profile_portfolio.png';
import linkedin from './../assets/social/linkedin-logo.svg';
import github_logo from './../assets/social/github-logo.svg';
import stackoverflow from './../assets/social/stackoverflow.svg';
import twitter from './../assets/social/twitter.svg';
import seema from './../assets/testimonial/seema.jpeg';
import kashif from './../assets/testimonial/kashif.jpeg';
import prashant from './../assets/testimonial/prashant.jpg';
import vikrant from './../assets/testimonial/vikrant.jpg';
import fergusson from './../assets/social/fergusson.jpeg';
import tc from './../assets/social/tcc.png';
import qr from './../assets/ratneshQR.svg';
import rocket from './../assets/rocket.gif';
import silverdoor from './../assets/SilverDoor-logo.svg'


export const PHONE_NUMBER = '9922040096';

export const PDF_WORKER_URL = "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js";

export const RESUME_PATH = resume;

export const PROFILE_PICTURE = profilePicture;

export const ROCKET = rocket;

export const QR = qr;

export const SOCIAL_LINKS = [
    { url: 'https://www.linkedin.com/in/ratnesh-mether', logo: linkedin, title: 'linkedin' },
    { url: 'https://github.com/ratnesh-mether', logo: github_logo, title: 'githublogo' },
    { url: 'https://stackoverflow.com/users/22933238/ratnesh-mether', logo: stackoverflow, title: 'stackoverflow' },
    { url: 'https://twitter.com/ratnesh_mether', logo: twitter, title: 'twitter' }];
export const SKILLS = {
    react: {
        name: 'React',
        logo: react
    },
    angular: {
        name: 'Angular',
        logo: angular
    },
    javascript: {
        name: 'JS',
        logo: javascript
    },
    html: {
        name: 'HTML',
        logo: html,
    },
    css: {
        name: 'CSS',
        logo: css
    },
    bootstrap: {
        name: 'Bootstrap',
        logo: bootstrap
    },
    github: {
        name: 'GitHub',
        logo: github
    },
    docker: {
        name: 'Docker',
        logo: docker
    },
    postman: {
        name: 'Postman',
        logo: postman
    },
    jira: {
        name: 'JIRA',
        logo: jira
    }
}

export const PROJECTS_DATA = [
    {
        title: 'User Review Web App (Project Sirius)',
        url: 'https://www.solar.com/solar-reviews/',
        image: sirius,
        points: [
            'Project Sirius is a platform that empowers users with valuable insights to support informed purchasing decisions.',
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
            'Control Center is Electrum\'s internal operational dashboard, facilitating efficient management of all business activities.',
            'Implemented highly responsive user interface using in collaboration with UI designers.',
            'Contributed in various modules like Profile and User Listings.'
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

export const INTRODUCTION_PARA_1 = `Hey there, I'm 
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

export const TESTIMONIALS = [
    {
        name: 'Kashif Faraz Shamsi',
        text: `Ratnesh stands out as an exceptional team player, 
         known for confidently tackling challenges and ensuring reliable outcomes.
         His expertise in Angular and React showcases his remarkable technical proficiency, 
         complemented by an effective and creative approach to problem-solving. 
         Not only is his work marked by keen attention to detail and quality, 
         but Ratnesh also brings a proactive attitude and consistently exceeds expectations. 
         His collaborative nature significantly enhances team dynamics, contributing to a more productive and positive work environment. 
         A role model in balancing technical acumen with strong interpersonal skills, Ratnesh’s presence in any project guarantees success. 
         His ability to seamlessly blend technical expertise with teamwork makes him an invaluable asset, 
         deeply impacting every project he undertakes with his unique blend of skills and qualities.`,
        img: kashif,
        designation: 'Development Team Lead',
        profileURL: 'https://www.linkedin.com/in/kfshamsi/',
        organisation: 'Electrum(formarly PickMySolar)',
        orgURL: 'https://www.linkedin.com/company/pickmysolar/mycompany/',
        orgLogo: 'https://assets.solar.com/partner_assets/electrum/electrum-logo.svg'
    },
    {
        name: 'Seema Poonia',
        text: `I had the pleasure of working with Ratnesh, and I can't say enough good things. 
        He's not just dedicated, but a real quick learner. Always exceeding expectations, 
        he dives into challenges with enthusiasm and gets things done efficiently. 
        Ratnesh is the kind of team player you want – thriving in dynamic setups. 
        I highly recommend him for not just his hard work but also his positive attitude. 
        A pleasure to work alongside you!`,
        img: seema,
        designation: 'Senior Frontend Developer',
        profileURL: 'https://www.linkedin.com/in/seema-poonia/',
        organisation: 'Electrum(formarly PickMySolar)',
        orgURL: 'https://www.linkedin.com/company/pickmysolar/mycompany/',
        orgLogo: 'https://assets.solar.com/partner_assets/electrum/electrum-logo.svg'
    },
    {
        name: 'Prashant Deshmukh',
        text: `Ratnesh is an outstanding Front-End Developer whose coding skills and 
        technical expertise have consistently delivered high-quality, scalable software solutions. 
His knack for swiftly mastering new technologies has made him an invaluable asset in our rapidly evolving field. 
Not only does he excel in team environments, but Ratnesh also demonstrates strong leadership qualities, 
efficiently managing teams and projects in fast-paced settings. 
His ability to collaborate seamlessly with cross-functional teams fosters a culture of success and achievement. 
Overall, Ratnesh's blend of technical prowess, adaptability, and leadership makes him an indispensable contributor to any project or team.`,
        img: prashant,
        designation: 'Senior Backend Developer',
        profileURL: 'https://www.linkedin.com/in/prashantvdeshmukh613/',
        organisation: 'Electrum(formarly PickMySolar)',
        orgURL: 'https://www.linkedin.com/company/pickmysolar/mycompany/',
        orgLogo: 'https://assets.solar.com/partner_assets/electrum/electrum-logo.svg'
    },
    {
        name: 'Vikrant Chaudhari',
        text: `I had the pleasure of working closely with Ratnesh on several projects, 
        and I am highly impressed with his skills and dedication as a frontend developer. 
        He possesses a deep understanding of frontend technologies and consistently delivers high-quality work.
Ratnesh has a keen eye for design and a strong ability to translate complex ideas into user-friendly interfaces. 
His proficiency in HTML, CSS, and JavaScript is exceptional, and he always stay up-to-date with the latest industry trends and best practices.
One of Ratnesh standout qualities is his ability to collaborate effectively within a team. 
He communicates clearly, takes initiative, 
and is always willing to go the extra mile to ensure the success of the project.Ratnesh played a crucial role in Eclipse Project where his problem-solving skills and attention to detail were instrumental in overcoming challenges.`,
        img: vikrant,
        designation: 'Automation QA Engineer',
        profileURL: 'https://www.linkedin.com/in/vikrant-chaudhari-677980231/',
        organisation: 'Electrum(formarly PickMySolar)',
        orgURL: 'https://www.linkedin.com/company/pickmysolar/mycompany/',
        orgLogo: 'https://assets.solar.com/partner_assets/electrum/electrum-logo.svg'
    }
]

export const EXPERIANCE = [
    {
        name: 'SilverDoor',
        img: silverdoor,
        designation: 'Frontend Developer',
        subDesignation: '',
        year: 'March 2024 - Present',
        link: `https://www.linkedin.com/company/silverdoor-international-serviced-apartments/`
    },
    {
        name: 'Electrum(formerly PickMySolar)',
        img: 'https://assets.solar.com/partner_assets/electrum/electrum-logo.svg',
        designation: 'Frontend Developer',
        subDesignation: '',
        year: 'JUNE 2021 - November 2023',
        link: `https://www.linkedin.com/company/pickmysolar/mycompany/`
    },
    {
        name: 'Fergusson College, Pune',
        img: fergusson,
        designation: 'MSc',
        subDesignation: '(Computer Applications)',
        year: '2018 - 2020',
        link: `https://www.linkedin.com/school/fergusson-college/`
    },
    {
        name: 'Tuljaram Chaturchand College, Baramati',
        img: tc,
        designation: 'BSc',
        subDesignation: '(Computer Science)',
        year: '2015 - 2017',
        link: `https://www.linkedin.com/school/tuljaram-chaturchand-college-baramati-dist.pune-413102/`
    }
]