import profile from "./profile-photo.jpg";
import {
  faAppStore,
  faFirefox,
  faGithub,
  faGooglePlay,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

export const navigation = {
  name: "Sharath",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
  ],
};
export const intro = {
  title: "Hey, I'm Sharath Savasere",
  description:
    "A Computer Engineer who enjoys building distributed applications, learning new technologies and building new things.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
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
    "I graduated from National Institute of Technology, Karnataka (NITK) in 2019 with a bachelor's degree in Computer Science Engineering. Since then I have been working primarily as a backend developer building multiple prjects in distributed systems environment.",
    "I enjoy software engineering, talking to other developers and spending time debugging things or helping others in debugging.",
    "When I’m not programming, you can find me watching documentaries on youtube, playing football, doing jump ropes (skipping), fidgeting with my Rubik's cubes or playing chess.",
  ],
};

export const workExp = {
  title: "Experience",
  exp: [
    {
      company: "Zeta",
      title: "Software engineer",
      description: [
        "Implemented ETL pipeline to extract the data from different data sources, transform the data and unload the transformed data using Redshift to AWS S3 service and use visualization tools to get insight on the data.",
        "Currently deployed to 8 clients across the world to view data and get visualizations.",
        "Collaborated in building UPI payment module for major banks in India which would see 20-30 million transactions per month.",
        "Designed the dispute management system for the payment flow and implemented the Redis caching layer for the application which resulted in 15% reduction in network calls.",
      ],
      duration: "Feb. 2021 – Present",
      icons: null,
    },
    {
      company: "Visa",
      title: "Software engineer",
      description: [
        "Impacted the reliability of Visa Net payment gateway by building tools to monitor and give alerts for any deviation in the system behavior resulting in a decrease in the number of incidents by 30%.",
        "Automated the process of executing the transactions and created a tool which can run millions of transactions per second using parallel stream processing.",
      ],
      duration: "Jul. 2019 – Feb. 2021",
      icons: null,
    },
    {
      company: "Visa",
      title: "Software engineer intern",
      description: [
        "Designed a parser to fetch, modify and send the ISO 8583 transaction data present in mainframes to Visa Net system for processing and capturing the response, resulting in a decrease in the effort required by 20%.",
        "Increased the efficiency by 50% of executing transactions to test the system by automating the system to run different flavors of the transaction.",
      ],
      duration: "May. 2018 – July 2018",
      icons: null,
    },
    {
      company: "IE NITK",
      title: "Mentor",
      description: [
        "Mentored a group of 20 students on web-development, django and python.",
        "Built a todo application using Django.",
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
      title: "Health-Care-Monitoring IOT",
      description:
        "Using multiple health sensors connected to raspberryPi which continuosly read patient's vital signs and forward it to a server hosted using django which notifies the doctor in case of abnormal readings.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/sharath29/Health-Care-System-IOT",
        },
      ],
    },
    {
      title: "Cuda K-means Clustering",
      description:
        "Implementation of parallel k means algorithm using cuda programming.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/sharath29/kmeans-cuda",
        },
      ],
    },
    {
      title: "IEEE Paper publication",
      description: "Word sense disambiguation using bi-directional LSTM.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/sharath29/Word-Sense-Disambiguation-using-LSTM",
        },
        {
          icon: faNewspaper,
          link: "https://ieeexplore.ieee.org/document/9008031",
        },
      ],
    },
    {
      title: "Service Discovery in Microservices",
      description:
        "Using Serf and Consul for distributed container service discovery problem.",
      icons: [
        {
          icon: faGithub,
          link: "https://sharath29.github.io/CO367-Distributed-Computing-Assignment/",
        },
      ],
    },
    {
      title: "Snakes",
      description:
        "Using p5.js to create a snake game which increases in length when it eats the red fruit.",
      icons: [
        {
          icon: faGithub,
          link: "https://sharath29.github.io/JavaScript-Snake/",
        },
      ],
    },
    {
      title: "C compiler",
      description: "Compiler written in c language.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/sharath29/Compiler-C",
        },
      ],
    },
    {
      title: "Code-fun-do chessically",
      description:
        "Chess game application which creates music from each move played on the board.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/sharath29/codefundo-chess-music",
        },
      ],
    },
    {
      title: "Project euler",
      description: "Solution to top 100 project euler problems",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/sharath29/project-euler",
        },
      ],
    },
    {
      title: "Mozilla-central contribution",
      description:
        "Contributed to firefox repository by fixing bugs in the browser styling",
      icons: [
        {
          icon: faFirefox,
          link: "https://phabricator.services.mozilla.com/D15284",
        },
      ],
    },
  ],
};

export const contact = {
  title: "Get in touch",
  description:
    "Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at sharath.savasere@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:sharath.savasere@gmail.com",
      isPrimary: false,
    },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: "Sharath Savasere",
  description: "Building applications in a distributed environment.",
  image: profile.src,
};

export const socials = {
  title: "Socials",
  description: "Checkout my youtube for football freestyle!",
  socialLinks: [
    {
      icon: faTwitter,
      title: "Twitter",
      link: "https://twitter.com/SavasereSharath",
      website: "Twitter",
    },
    {
      icon: faYoutube,
      title: "Youtube",
      link: "https://www.youtube.com/channel/UCGtkfVTpNJ55NVklCurkinw",
      website: "YouTube",
    },
  ],
};

export const links = {
  image: profile.src,
  title: "@hashirshoaeb",
  description: "Computer Engineer | Flutter | Reactjs Developer",
  cards: [
    {
      title: "My website",
      link: "https://hashirshoaeb.com/",
    },
    {
      title: "QuranTalk App",
      link: "https://www.qurantalk.app/",
    },
    {
      title: "StarBook App",
      link: "https://starbook.dev/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/hashirshoaeb/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/hashirshoaeb/",
    },
  ],
};
