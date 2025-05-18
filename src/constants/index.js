// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  advanceAgility,
  wedriveglobal,
  PoliticalVaaradhi,
  testing,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  facebook,
  instagram,
  twitter,
  github,
  wordpress
} from "../assets";

import Youtubeimg from "../assets//Youtubeimg.png";
import Travel from '../assets//Travel.png'
import logo_name from "../assets//letter-r.png"
import LinkedIn from '../assets//LinkedIn.svg';
export {logo_name};
import Boostrap from "../assets/tech/Boostrap.png";
import netflix from "../assets/netflix.png";

// Navbar Links
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
  // {
  //   id: "source-code",
  //   title: "Source Code",
  //   link: "http://www.github.com/sanidhyy/3d-portfolio/",
  // },
];

// Services
const services = [
  {
    title: "Software Testing",
    icon: testing,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "WordPress Developer",
    icon: wordpress,
  }
];

// Technologies
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
  },,
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "boostrap",
    icon : Boostrap,
  },
  {
    name:"figma",
    icon:figma
  }
];

// Experiences
const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Nexevo Technologies",
    icon: reactjs,
    iconBg: "#383E56",
    date: "September 2024 - Present",
    points: [
      "Developed and maintained responsive web applications using React.js, Redux Toolkit, and Tailwind CSS.",
      "Worked extensively with frontend technologies including HTML, CSS, JavaScript, React, and Redux Toolkit on real-time web application projects.",
      "Built and customized WordPress UI projects using HTML, CSS, Bootstrap, JavaScript, and jQuery to deliver pixel-perfect, user-friendly interfaces.",
      "Collaborated using Git and GitHub for version control and code management across all projects.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Kickstart Digital",
    icon: wordpress,
    iconBg: "#383E56",
    date: "July 2022 - November 2023",
    points: [
      "Gained hands-on experience in developing and customizing WordPress websites, including theme setup, plugin configuration, and UI enhancements based on client requirements.",
      "Strengthened frontend development skills using HTML, CSS, Bootstrap, JavaScript, and jQuery to build responsive and visually appealing user interfaces.",
      "Learned to work efficiently with version control systems like Git and GitHub, enabling smooth collaboration and code management.",
      "Developed a strong understanding of website performance optimization, including techniques like image compression, caching, and code minification.",
    ],
  },
  {
    title: "QA Analyst",
    company_name: "Auction Software",
    icon: testing,
    iconBg: "#383E56",
    date: "March 2021 - Augest 2021",
    points: [
      "Conducted manual testing for web and mobile applications, including personal React.js projects, identifying defects and improving overall product quality by 15%.",
      "Managed defect reporting and tracking, reducing defect resolution time by 30% and increasing product reliability by 15%.",
      "Demonstrated a strong understanding of SDLC and STLC, with experience in test planning, case preparation, and execution, increasing testing efficiency by 25%.",
    ],
  },
 
];

// Testimonials
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
];

// Projects
const projects = [
  {
    name: "Advance Agility",
    description:
      "Developed a fully responsive corporate website using HTML, CSS, JS, and Bootstrap with a focus on clean UI, mobile optimization, and smooth user experience.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "yellow-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: advanceAgility,
    live_site_link: "https://advanceagility.co.uk/",
  },
  {
    name: "We Drive Global",
    description:
      "Developed a fully responsive corporate website using HTML, CSS, JS, and Bootstrap with a focus on clean UI, mobile optimization, and smooth user experience.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "yellow-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: wedriveglobal,
    live_site_link: "https://www.wedriveglobal.com/",
  },
  {
    name: "Political Vaaradhi",
    description:
      "Developed a fully responsive corporate website using HTML, CSS, JS, and Bootstrap with a focus on clean UI, mobile optimization, and smooth user experience.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "yellow-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: PoliticalVaaradhi,
    live_site_link: "https://www.politicalvaaradhi.com/",
  },
];

const socials = [
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/ravichandran22",
  },
  {
    name:"LinkedIn",
    icon:LinkedIn,
    link:"https://www.linkedin.com/in/ravi-chandran-r/"
  }
];

export { services, technologies, experiences, testimonials, projects, socials };
