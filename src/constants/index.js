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
    web,
    gititdone,
    bluetopaz,
    ai,
    thread,
    swppp,
    etm,
    helpdesk,
    generic
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
    {
        title: "Enterprise SSO & Identity",
        description: "Entra ID + Auth0 | SAML | OIDC/OAuth2",
        icon: creator,
    },
    {
        title: "Full-Stack MERN",
        description: "React + Node/Express + MongoDB/SQL",
        icon: web,
    },
    {
        title: "Authorization Design",
        description: "RBAC, permissions, secure access controls",
        icon: backend,
    },
    {
        title: "Business Systems Engineering",
        description: "Workflows, reporting, stakeholder alignment",
        icon: mobile,
    },
    {
        title: "Systems Integrations",
        description: "SharePoint/MSAL, internal tooling, reliability",
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
        date: "May 2022 – Present",
        points: [
            "Built and maintained MERN-stack internal tools supporting equipment inventory, employee requests, form workflows, and reporting.",
            "Implemented and maintained enterprise authentication/authorization flows including SSO (SAML) with Entra ID/Auth0 and JWT-based session handling.",
            "Developed Node/Express APIs with domain-based routing, middleware patterns, and consistent REST shapes for CRUD + archive/unarchive operations.",
            "Enforced role/permission-based access controls (RBAC) and UI guards aligned with backend permission checks; partnered with stakeholders to map business processes to permissions.",
            "Integrated SharePoint file storage using Azure MSAL; implemented file upload/download patterns and validated MIME/size constraints.",
            "Added/maintained audit logging and change history snapshots to support traceability and compliance for data mutations.",
            "Delivered multiple iterations of the application stack, including more complex versions using TypeScript and Mithril.",
            "Integrated LLM capabilities into internal web applications to automate/summarize workflows and generate structured outputs; implemented prompt templates and response validation to ensure reliable results.",
            "Built an LLM-powered assistant feature for internal users, including UI, API endpoints, and guardrails (input sanitization, restricted context, and logging) to support safe enterprise usage."

        ],
    },
    {
        title: "Software Engineer / Full Stack Developer",
        company_name: "Erie Construction",
        icon: erie,
        iconBg: "#E6DEDD",
        date: "August 2020 – May 2022",
        points: [
            "Rebuilt and maintained front-end experiences with responsive, mobile-first design and improved UX consistency.",
            "Developed and integrated RESTful services and database-backed features; collaborated with non-technical stakeholders to translate requirements into deliverables.",
            "Supported CI-friendly version control workflows and deployments; improved stability through bug fixes and incremental refactors.",
        ],
    },
    {
        title: "IT / Helpdesk Analyst · CAD Operator · Shift Supervisor",
        company_name: "Alro Steel Inc.",
        icon: alro,
        iconBg: "#383E56",
        date: "June 2017 – August 2020",
        points: [
            "Provided tiered IT support for Windows environments, networking, and user access; resolved incidents and improved end-user productivity.",
            "Supported CAD operations and supervised shift workflows; coordinated cross-team communication in a production environment.",
        ],
    },
];

const education = [
    {
        degree: "B.S., Software Engineering",
        school: "Western Governors University",
    },
    {
        degree: "A.A.S., CAD Technology",
        school: "Owens Community College",
        note: "Certified CAD Technician",
    },
    {
        degree: "Coding Boot Camp Certification",
        school: "University of Texas at Austin",
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

const workProjects = [
    {
        name: "ETM — Employee & Equipment Tracking",
        description:
            "Internal MERN-stack platform for equipment inventory, employee requests, form workflows, and reporting. Enterprise SSO with Entra ID/Auth0, RBAC, SharePoint file storage via Azure MSAL, audit logging, and automated email/push notifications.",
        tags: [
            { name: "React", color: "blue-text-gradient" },
            { name: "Node/Express", color: "green-text-gradient" },
            { name: "MongoDB", color: "pink-text-gradient" },
            { name: "Azure-MSAL", color: "blue-text-gradient" },
            { name: "RBAC", color: "green-text-gradient" },
        ],
        image: etm,
        source_code_link: null,
        live_site_link: null,
    },
    {
        name: "Plan — Resource Planning & Scheduling",
        description:
            "Enterprise resource planning tool for personnel and equipment allocation. Manages project bids, utilization forecasting, resource conflict detection, and automated reporting. Integrates with the HCSS external API and handles complex permission sets.",
        tags: [
            { name: "Node/Express", color: "blue-text-gradient" },
            { name: "MongoDB", color: "green-text-gradient" },
            { name: "HCSS-API", color: "pink-text-gradient" },
            { name: "Webpack", color: "blue-text-gradient" },
            { name: "Permissions", color: "green-text-gradient" },
        ],
        image: generic,
        source_code_link: null,
        live_site_link: null,
    },
    {
        name: "Safety — SWPPP Inspection & Compliance",
        description:
            "TypeScript-first full-stack app for stormwater pollution prevention plan tracking, inspections, and corrective actions. Offline-first with IndexedDB (Dexie), PDF generation via Puppeteer, OAuth2 PKCE auth, and a client-facing portal.",
        tags: [
            { name: "React", color: "blue-text-gradient" },
            { name: "TypeScript", color: "green-text-gradient" },
            { name: "tRPC", color: "pink-text-gradient" },
            { name: "OAuth2-PKCE", color: "blue-text-gradient" },
            { name: "Puppeteer", color: "green-text-gradient" },
        ],
        image: swppp,
        source_code_link: null,
        live_site_link: null,
    },
    {
        name: "Helpdesk — Internal Ticket Portal",
        description:
            "Internal helpdesk portal integrated with Zendesk for ticket submission. Supports multi-format file attachments up to 50MB, dynamic user and category sync from external APIs, and Multer file upload middleware.",
        tags: [
            { name: "Node/Express", color: "blue-text-gradient" },
            { name: "Zendesk-API", color: "green-text-gradient" },
            { name: "Multer", color: "pink-text-gradient" },
            { name: "JavaScript", color: "blue-text-gradient" },
        ],
        image: helpdesk,
        source_code_link: null,
        live_site_link: null,
    },
    {
        name: "CRM — Contact Relationship Manager",
        description:
            "Modern contact management system with a Vue 3 + TypeScript frontend, Pinia state management, and a clean Express/MongoDB backend. Progressive Web App with Playwright end-to-end testing and full CRUD operations.",
        tags: [
            { name: "Vue-3", color: "blue-text-gradient" },
            { name: "TypeScript", color: "green-text-gradient" },
            { name: "Pinia", color: "pink-text-gradient" },
            { name: "MongoDB", color: "blue-text-gradient" },
            { name: "PWA", color: "green-text-gradient" },
        ],
        image: generic,
        source_code_link: null,
        live_site_link: null,
    },
];

export { education, experiences, projects, services, technologies, workProjects };
