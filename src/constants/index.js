/* eslint-disable no-unused-vars */
import {
    alro,
    backend,
    creator,
    css,
    erie,
    git,
    html,
    javascript,
    kwest,
    mobile,
    mongodb,
    nodejs,
    reactjs,
    tripguide,
    web,
    gititdone,
    bluetopaz,
    ai,
    thread,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Experience",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    // {
    //     title: "Me",
    //     icon: me,
    // },
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Full Stack / Mobile Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "IT Analyst",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    // {
    //     name: "Tailwind CSS",
    //     icon: tailwind,
    // },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    // {
    //     name: "figma",
    //     icon: figma,
    // },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [
    {
        title: "Web Developer / Full Stack Developer",
        company_name: "Kwest Group LLC",
        icon: kwest,
        iconBg: "#383E56",
        date: "May 22, 2022 – Present",
        points: [
            "Career responsibilities included:",
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Developing via the Agile methodology.",
            "Skills: React Native · React.js · css · Node.js · JavaScript · MongoDB · Mithri · HTML",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Erie Construction",
        icon: erie,
        iconBg: "#E6DEDD",
        date: "August 17, 2020 – May 20, 2022",
        points: [
            "Career responsibilities included:",
            "Rebuilding and maintaining entire front-end experience with a mobile-first responsive design including back-end development for communication and functionality.",
            "Expanding sales opportunities by building custom platforms and management of version control operations via GIT.",
            "Skill: Bootstrap · HTML5 · css · C# · ASP.NET · MySQL · HTML",
        ],
    },
    {
        title: " CAD Operator / CAD Shift Supervisor / I.T - Helpdesk Analyst / Software Engineer",
        company_name: "Alro Steel Inc",
        icon: alro,
        iconBg: "#383E56",
        date: "June 2, 2017 – August 14, 2020",
        points: [
            "Career responsibilities included:",
            "CAD Operator - Utilized AutoCAD and other CAD software to create accurate 2D and 3D models, contributing to the successful completion of various engineering projects within deadlines.",
            "Shift Supervisor - Managed a team of 3 third shift employees, utilized AutoCAD and other CAD software to create accurate 2D and 3D models, contributing to the successful completion of various engineering projects within deadlines.",
            "I.T / Helpdesk Analyst - Provided timely and effective technical support to end-users, resolving hardware and software issues, and achieving a high customer satisfaction rate.",
            "Software Engineer - Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        ],
    },
];

const projects = [
    {
        name: "Git it Done!",
        description:
            "Search for a GitHub user or click on a language to see a list of repositories and how many open issues they have!",
        tags: [
            {
                name: "API",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
        ],
        image: gititdone,
        source_code_link: "https://github.com/MichealJWEllis/mod6prodRedo",
        live_site_link: "https://michealjwellis.github.io/mod6_redo/",
    },
    {
        name: "Blue Topaz",
        description:
            "A comprehensive e-commerce platform that allows users to shop hand made products.  Stripe integration for payment",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "sanity",
                color: "green-text-gradient",
            },
            {
                name: "stripe",
                color: "pink-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: bluetopaz,
        source_code_link: "https://github.com/MichealJWEllis/bluetopazshop",
        live_site_link: "https://thebluetopazco.com",
    },
    {
        name: "DALL-E Image Generator",
        description:
            "AI-Powered Imagery: Utilizes the DALLE API to convert textual descriptions into vivid and unique images, making content creation accessible and inspiring.",
        tags: [
            {
                name: "OpenAi-API",
                color: "blue-text-gradient",
            },
            {
                name: "ReactJS",
                color: "green-text-gradient",
            },
            {
                name: "MERN",
                color: "pink-text-gradient",
            },
            {
                name: "Vite",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind.css",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: ai,
        source_code_link:
            "https://github.com/MichealJWEllis/ai_image_generator",
        live_site_link: "https://aigenerator.michealjwellis.com/",
    },
    {
        name: "Threads Clone",
        description:
            "Introducing Threads! This application serves as a hub for community-driven conversations, allowing users to create threads, comment on existing ones, build communities, and much more.",
        tags: [
            {
                name: "NextJS",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "MERN",
                color: "pink-text-gradient",
            },
            {
                name: "MongoDB",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind.css",
                color: "green-text-gradient",
            },
        ],
        image: thread,
        source_code_link: "https://github.com/MichealJWEllis/threads",
        live_site_link: "https://threads-rust-ten.vercel.app/sign-in",
    },
];

export { experiences, projects, services, technologies };
