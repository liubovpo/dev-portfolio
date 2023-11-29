import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Vocational training",
        company_name: "IronHack",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Aug 2023 — Nov 2023",
        points: [
            "Full-time 9 week intensive Web Development Bootcamp",
            "Front-end: HTML | CSS | JavaScript (ES6) | React | Tailwind ",
            "Back end: Express.JS | Node.JS | REST APIs",
            "Database: MongoDB | Mongoose | MongoDB Atlas",
            "Version Control: Git | GitHub",
            "Responsive Web Design",
        ],
    },
    {
        title: "Web & Graphic Designer",
        company_name: "Freelance",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Dec 2021 — Aug 2023",
        points: [
            "Led website development projects and personally designed website prototypes, using Figma and my knowledge in HTML, CSS, JS.",
            "Worked directly with clients and creative directors to develop project briefs, maintaining a customer-centric approach to graphic design.",
        ],
    },
    {
        title: "Web & Graphic Designer",
        company_name: "Innothera, OOO 'Innotech'",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Sep 2020 — Dec 2021",
        points: [
            "Developed over 50 user-friendly page designs for multiple company websites following best UI/UX principles.",
            "Worked closely with developing team, providing constructive feedback to developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/liubovpo',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com//in/liubov-pozdeeva',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-blue',
        name: 'Dream AI',
        description: 'Dream AI is a visionary platform where users can input dream descrip- tions to generate personalized dream images and share them with the community. ',
        link: 'https://github.com/liubovpo/dream-ai',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Grow Together',
        description: 'Plant Care App, where you can create your user profile, log your plants, access expert care information, and foster a thriving community.',
        link: 'https://github.com/JaySchenk/GrowTogether',
    },
    {
        iconUrl: car,
        theme: 'btn-back-red',
        name: 'DayMaster',
        description: 'DayMaster is a web application designed to help you streamline your task management. It offers features to create, manage, and track tasks with different priorities, due dates, and descriptions.',
        link: 'https://github.com/akaradag32/DayMaster',
    },
   
];