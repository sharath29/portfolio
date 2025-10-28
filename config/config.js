// config/config.js
import getConfig from "next/config";
import {
  faFirefox,
  faGithub,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

// read basePath exported from next.config.js
const { publicRuntimeConfig } = getConfig();
const BASE = publicRuntimeConfig?.basePath || "";

// profile image served from /public
const PROFILE_SRC = `${BASE}/profile.png`;

export const navigation = {
  name: "Sharath",
  links: [
    { title: "About", link: "#about" },
    { title: "Projects", link: "#projects" },
    { title: "Contact", link: "#contact" },
  ],
};

export const intro = {
  title: "Hey, I'm Sharath Savasere",
  description:
    "Computer Engineer focused on building distributed systems. I love turning complex problems into reliable, scalable software.",
  image: PROFILE_SRC,
  buttons: [
    { title: "Contact Me", link: "#contact", isPrimary: true },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1E3CEN2wh2hbW5pWsaXLZnGeYHofv3LJ6/view?usp=sharing",
      isPrimary: false,
    },
  ],
};

export const about = {
  title: "Who I am",
  description: [
    "I graduated from the National Institute of Technology Karnataka (NITK) in 2019 with a B.Tech in Computer Science and Engineering. Since then, I've primarily worked as a backend engineer, delivering projects in distributed systems.",
    "I enjoy software engineering, collaborating with developers, and diving deep into debugging—whether it’s my code or helping others.",
    "When I’m not programming, you’ll find me watching documentaries on YouTube, playing football, jump roping (skipping), fidgeting with Rubik’s cubes, or playing chess.",
  ],
};

export const workExp = {
  title: "Experience",
  exp: [
    {
      company: "MarkovML",
      title: "Founding Engineer (SDE III)",
      description: [
        "Shipped core microservices: Notifications, RBAC, usage analytics, config, and remote schedulers.",
        "Built the backend for an LLM copywriter (PDF/DOCX/TXT parsing + indexing for AI-powered editing).",
        "Designed workflow orchestration across data connectors with AI-assisted steps.",
        "Developed a conversational marketing scientist agent integrated with multiple MCP servers.",
      ],
      duration: "Jul. 2022 – Present",
      icons: null,
    },
    {
      company: "Zeta",
      title: "Software Engineer",
      description: [
        "Implemented an ETL pipeline using Amazon Redshift and AWS S3 for analytics/BI.",
        "Deployed to 8 clients globally to power data visualization and insights.",
        "Co-built the UPI payment module for major banks (20–30M transactions/month).",
        "Designed dispute management and added a Redis caching layer, cutting network calls by 15%.",
      ],
      duration: "Feb. 2021 – Jul. 2022",
      icons: null,
    },
    {
      company: "Visa",
      title: "Software Engineer",
      description: [
        "Improved VisaNet reliability with monitoring and alerting tools, reducing incidents by 30%.",
        "Automated high-throughput transaction execution using parallel stream processing.",
      ],
      duration: "Jul. 2019 – Feb. 2021",
      icons: null,
    },
    {
      company: "Visa",
      title: "Software Engineer Intern",
      description: [
        "Built an ISO 8583 parser to fetch/modify mainframe transaction data and re-ingest to VisaNet (20% effort reduction).",
        "Automated variant transaction runs, improving test execution efficiency by 50%.",
      ],
      duration: "May. 2018 – Jul. 2018",
      icons: null,
    },
    {
      company: "IE NITK",
      title: "Mentor",
      description: [
        "Mentored 20 students on web development (Django, Python).",
        "Built a TODO application using Django.",
      ],
      duration: "May. 2017 – Aug. 2017",
      icons: null,
    },
  ],
};

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Healthcare Monitoring IoT",
      description:
        "Multiple health sensors connected to a Raspberry Pi continuously read a patient’s vitals and send them to a Django server, which alerts a doctor on abnormal readings.",
      icons: [{ icon: faGithub, link: "https://github.com/sharath29/Health-Care-System-IOT" }],
    },
    {
      title: "CUDA K-Means Clustering",
      description:
        "Parallel K-Means implementation using CUDA for faster clustering on large datasets.",
      icons: [{ icon: faGithub, link: "https://github.com/sharath29/kmeans-cuda" }],
    },
    {
      title: "IEEE Paper Publication",
      description: "Word Sense Disambiguation using Bi-Directional LSTM.",
      icons: [
        { icon: faGithub, link: "https://github.com/sharath29/Word-Sense-Disambiguation-using-LSTM" },
        { icon: faNewspaper, link: "https://ieeexplore.ieee.org/document/9008031" },
      ],
    },
    {
      title: "Service Discovery in Microservices",
      description:
        "Explored Serf and Consul for distributed container service discovery.",
      icons: [{ icon: faGithub, link: "https://sharath29.github.io/CO367-Distributed-Computing-Assignment/" }],
    },
    {
      title: "Snakes",
      description:
        "A p5.js snake game that grows when it eats a red fruit.",
      icons: [{ icon: faGithub, link: "https://sharath29.github.io/JavaScript-Snake/" }],
    },
    {
      title: "C Compiler",
      description: "A simple compiler written in C.",
      icons: [{ icon: faGithub, link: "https://github.com/sharath29/Compiler-C" }],
    },
    {
      title: "CodeFundo — Chessically",
      description:
        "A chess app that generates music from each move played on the board.",
      icons: [{ icon: faGithub, link: "https://github.com/sharath29/codefundo-chess-music" }],
    },
    {
      title: "Project Euler",
      description: "Solutions to the top 100 Project Euler problems.",
      icons: [{ icon: faGithub, link: "https://github.com/sharath29/project-euler" }],
    },
    {
      title: "Mozilla-Central Contribution",
      description:
        "Contributed to the Firefox codebase by fixing browser styling bugs.",
      icons: [{ icon: faFirefox, link: "https://phabricator.services.mozilla.com/D15284" }],
    },
  ],
};

export const contact = {
  title: "Get in touch",
  description:
    "Want to collaborate or have a question? Schedule a meeting or email me directly at sharath.savasere@gmail.com.",
  buttons: [{ title: "Email Me", link: "mailto:sharath.savasere@gmail.com", isPrimary: false }],
};

// SEARCH ENGINE
export const SEO = {
  title: "Sharath Savasere",
  description: "Backend + Distributed Systems Engineer. I build reliable, scalable software.",
  image: PROFILE_SRC,
};

export const socials = {
  title: "Socials",
  description: "Check out my YouTube for football freestyle!",
  socialLinks: [
    {
      icon: faTwitter,
      title: "Twitter",
      link: "https://twitter.com/SavasereSharath",
      website: "Twitter",
    },
    {
      icon: faYoutube,
      title: "YouTube",
      link: "https://www.youtube.com/channel/UCGtkfVTpNJ55NVklCurkinw",
      website: "YouTube",
    },
  ],
};

// You can customize or remove this "links" block if not needed.
// (Kept from your original template but consider pointing to your own handles.)
export const links = {
  image: PROFILE_SRC,
  title: "@hashirshoaeb",
  description: "Computer Engineer | Flutter | React.js Developer",
  cards: [
    { title: "My website", link: "https://hashirshoaeb.com/" },
    { title: "QuranTalk App", link: "https://www.qurantalk.app/" },
    { title: "StarBook App", link: "https://starbook.dev/" },
    { title: "My GitHub", link: "https://github.com/hashirshoaeb/" },
    { title: "My LinkedIn", link: "https://www.linkedin.com/in/hashirshoaeb/" },
  ],
};
