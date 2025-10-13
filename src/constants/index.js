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
  youtubeClone,
  blogApp,
  todoApp,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Testing",
    icon: testing,
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
      "Developed and maintained responsive websites using HTML, CSS, JavaScript, Bootstrap, and React.js.",
      "Customized and optimized WordPress & WooCommerce sites for better performance and user experience.",
      "Managed Web Hosting, Domain Setup, and Website Deployment to ensure smooth operations.",
      "Worked closely with clients to understand their needs and deliver personalized website solutions.",
      "Used Git & GitHub for version control and project collaboration.",
      "Led a team of developers, handling Client Interactions, Project Planning, and Execution."
    ],
  },
  {
    title: "Web Developer",
    company_name: "Kickstart Digital",
    icon: wordpress,
    iconBg: "#383E56",
    date: "July 2022 - November 2023",
    points: [
      "Delivered 10+ client-specific WordPress websites with customized features, increasing user engagement by 40%.",
      "Improved client website performance by 20% through image optimization, caching techniques, and code minification.",
      "Automated content workflows in WordPress, reducing content update time by 30%.",
      "Resolved 15+ critical WordPress issues, cutting client support requests by 40%.",
      "Enhanced customer satisfaction by customizing themes and plugins to meet specific business needs, improving functionality by 15%."
    ],
  },
  {
    title: "QA Analyst",
    company_name: "Auction Software",
    icon: testing,
    iconBg: "#383E56",
    date: "March 2021 - Augest 2021",
    points: [
      "Completed a 3-month training focused on developing user-friendly web interfaces using HTML5, CSS3, and JavaScript.",
      "Gained hands-on experience with React.js, working on personal projects to improve user interaction by 20%.",
      "Practiced version control using Git, reducing code integration issues by 40% and improving collaboration in team environments."
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
  name: "React YouTube Clone",
  description:
    "Built a fully responsive YouTube Clone using React.js, integrating YouTube Data API v3 for real-time video content. Implemented global state management, dynamic routing, and modern UI design for an interactive user experience.",
  tags: [
    {
      name: "reactjs",
      color: "blue-text-gradient",
    },
    {
      name: "tailwindcss",
      color: "green-text-gradient",
    },
    {
      name: "javascript",
      color: "yellow-text-gradient",
    },
    {
      name: "api-integration",
      color: "pink-text-gradient",
    },
  ],
  image: youtubeClone,
  live_site_link: "https://react-youtube-clone-pi-five.vercel.app/",
},
    {
  name: "React Blog App",
  description:
    "Developed a modern and responsive Blog Application using React.js. Implemented dynamic routing, CRUD functionality, and API integration to manage blog posts efficiently. Focused on clean UI, seamless navigation, and a smooth user experience.",
  tags: [
    {
      name: "reactjs",
      color: "blue-text-gradient",
    },
    {
      name: "tailwindcss",
      color: "green-text-gradient",
    },
    {
      name: "javascript",
      color: "yellow-text-gradient",
    },
    {
      name: "api-integration",
      color: "pink-text-gradient",
    },
  ],
  image: blogApp,
  live_site_link: "https://react-blog-app-six-dusky.vercel.app/",
},
{
  name: "React Todo App",
  description:
    "Created a responsive and interactive Todo App using React.js with features like task addition, editing, deletion, and local storage integration. Focused on a clean UI and smooth user interactions to improve task management efficiency.",
  tags: [
    {
      name: "reactjs",
      color: "blue-text-gradient",
    },
    {
      name: "tailwindcss",
      color: "green-text-gradient",
    },
    {
      name: "javascript",
      color: "yellow-text-gradient",
    },
    {
      name: "localstorage",
      color: "pink-text-gradient",
    },
  ],
  image: todoApp,
  live_site_link: "https://react-todo-app-lac-gamma.vercel.app/",
},

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
