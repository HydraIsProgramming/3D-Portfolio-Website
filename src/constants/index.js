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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  laurier,
  tutor,
  shopify,
  java,
  trade,
  website,
  threejs,
} from "../assets";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Artificial Intelligence",
    icon: mobile,
  },
  {
    title: "Frontend Development",
    icon: backend,
  },
  {
    title: "Data Management",
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
  {
    name: "TypeScript",
    icon: typescript,
  },
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Student Proctor",
    company_name: "Wilfrid Laurier University",
    icon: laurier,
    iconBg: "#383E56",
    date: "January 2024 - Present",
    points: [
      "Supervising and monitoring students during exams to ensure academic integrity.",
      "Helping studnets set up there exams. Ex. Importing their files and extracting them for submission.",
      "Providing clear instructions and addressing student inquiries during exams.",
      "Helping students with technical difficulties during computer written exams.",
    ],
  },
  {
    title: "Tutor",
    company_name: "Personal Job",
    icon: tutor,
    iconBg: "#E6DEDD",
    date: "July 2022 - Present",
    points: [
      "Created and taught customized lessons to help students understand Math, Physics, Python and English.",
      "Helped students improve their grades and prepare for exams by giving focused support and practice tests.",
      "Explained difficult ideas clearly and used easy teaching methods to build student confidence.",
      "Adapted my teaching based on how well each student was doing to make sure they learned effectively.",
    ],
  },
  {
    title: "Coming Soon",
    company_name: "----",
    icon: shopify,
    iconBg: "#383E56",
    date: "----",
    points: [
      "",
    ],
  },
  {
    title: "Coming Soon",
    company_name: "----",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "----",
    points: [
      "",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Ranjot was a wonderful experience he stayed focused and determined throughout the timeline of the project. He was always quick to communicate about the project and always discussed what needed to be improved. I would always love to work with him on any of our future projects.",
    name: "Rishubh Gusain",
    designation: "Project Partner",
    company: "Trading Prediction Bot",
    image: "",
  },
  {
    testimonial:
      "You were the driving force that kept the team on track, consistently reaching out and motivating us. You implemented the SMA9 and SMA21 indicators, improved the graph and Gradio interface, and fixed the dataset to work across multiple stocks.",
    name: " Usama Mohiuddin",
    designation: "Project Partner",
    company: "Trading Prediction Bot",
    image: "",
  },
  {
    testimonial:
      "I really liked working with you on the trading bot project. Your ideas were great, and it was fun and productive working together. I’m happy with what we achieved and look forward to the next porject with you!",
    name: "Rupesh Rangwani",
    designation: "Project Partner",
    company: "Trading Prediction Bot",
    image: "",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "A simple Java interface allows users to pick a type of car, the miles they will drive and the days they will rent it for. Then outputs the cost of your rental.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: java,
    source_code_link: "https://github.com/HydraIsProgramming/Car-Rental-Interface",
  },
  {
    name: "Trading Predication Bot",
    description:
      "We have made our own AI model that takes the stock, date range, and initial trading amount from the user. Then outputs the final capital you would have if you were to make accurate trades during the date range.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "Keras API",
        color: "pink-text-gradient",
      },
    ],
    image: trade,
    source_code_link: "https://github.com/HydraIsProgramming/Stock_Trading_Bot-AI",
  },
  {
    name: "3D Portfolio Website",
    description:
      "The code for this webiste which tells you all about me.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
    ],
    image: website,
    source_code_link: "https://github.com/HydraIsProgramming",
  },
];

export { services, technologies, experiences, testimonials, projects };
