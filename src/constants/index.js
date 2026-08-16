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
  laurier,
  tutor,
  tdtcs,
  realityai,
  mlIcon,
  dataScience,
  neuralNetwork,
  mlops,
  clientserver,
  carrent,
  tradingbot,
  portfolio3d,
  threejs,
  allornothing,
  eileens,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
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
  {
    title: "Machine Learning",
    icon: mlIcon,
  },
  {
    title: "Data Science",
    icon: dataScience,
  },
  {
    title: "AI Research",
    icon: neuralNetwork,
  },
  {
    title: "MLOps",
    icon: mlops,
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
    title: "Founder & Freelance Software Developer",
    company_name: "Blue Moon Development",
    icon: web,
    iconBg: "#101827",
    date: "January 2026 - Present",
    points: [
      "Founded and operate a freelance development studio delivering professional websites, e-commerce experiences, web applications, APIs, and practical AI automation for businesses and independent founders.",
      "Lead projects end to end—from discovery, requirements, scope, and interface design through architecture, full-stack development, testing, deployment, documentation, and ongoing support.",
      "Translate business goals into reliable digital products across esports, online retail, hospitality, and professional branding, with a focus on responsive experiences and measurable customer outcomes.",
      "Manage client communication, proposals, delivery timelines, technical decisions, and product handoff while ensuring clients retain ownership of their code, accounts, domains, and hosting.",
    ],
    company_link: "https://bluemoondev.net",
  },
  {
    title: "Research Project Developer",
    company_name: "Wilfrid Laurier University",
    icon: laurier,
    iconBg: "#383E56",
    date: "September 2025 - Present",
    points: [
      "Collaborated with a faculty researcher to design and implement an AI-based solution to a real-world research problem.",
      "Performed data collection, preprocessing, and exploratory analysis to support model training.",
      "Built and evaluated machine learning models to derive actionable insights from data.",
      "Applied iterative experimentation and performance tuning to improve model accuracy.",
      "Communicated technical results through documentation and presentations.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Tata Consultancy Services - Client: TD Bank",
    icon: tdtcs,
    iconBg: "#000000ff",
    date: "June 2025 - August 2025",
    points: [
      "Working with multiple teams on projects creating scripts and testing user workflows.",
      "Collaborated with off shore teams and on shore teams for multiple projects to ensure timely delivery of software solutions.",
      "Created Testing, Final and Performance reports for multiple projects to ensure quality standards were met.",
      "Conducted testing in the perfhawk pipeline with Dynatrace and Datadog.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Reality AI Lab",
    icon: realityai,
    iconBg: "#383E56",
    date: "February 2025 - May 2025",
    points: [
      "Collaborated within an agile team, contributing to sprint planning, stand-ups, and design reviews.",
      "Created and iterated on website wireframes and UI designs in Figma, aligning design decisions with user and business requirements.",
      "Reviewed code, identified defects, and implemented fixes to improve stability and integration.",
    ],
  },
  {
    title: "Student Proctor",
    company_name: "Wilfrid Laurier University",
    icon: laurier,
    iconBg: "#383E56",
    date: "January 2024 - August 2026",
    points: [
      "Supervised and monitored students during exams to ensure academic integrity.",
      "Helped students prepare exam files and extract required materials for submission.",
      "Provided clear instructions and addressed student questions during exams.",
      "Resolved technical difficulties during computer-based examinations.",
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
    name: "Usama Mohiuddin",
    designation: "Project Partner",
    company: "Trading Prediction Bot",
    image: "",
  },
  {
    testimonial:
      "I really liked working with you on the trading bot project. Your ideas were great, and it was fun and productive working together. I'm happy with what we achieved and look forward to the next project with you!",
    name: "Rupesh Rangwani",
    designation: "Project Partner",
    company: "Trading Prediction Bot",
    image: "",
  },
];

const projects = [
  {
    name: "All or Nothing Esports", type: "Live revenue-generating product",
    description: "A live multi-game esports platform connecting competitors through teams, ladders, tournaments, subscriptions, and paid coaching.",
    longDescription: "A production esports business built and operated for real players—not a portfolio simulation. It brings competitive discovery, team formation, rankings, events, subscriptions, and bookable coaching into one branded platform.",
    problem: "Competitive players jump between Discord servers, spreadsheets, and disconnected services to find teams, enter events, track rankings, and book coaching.",
    contributions: ["Founded, built, launched, and continue to operate the product", "Designed player listings, team discovery, ladders, tournaments, and coaching journeys", "Developed the subscription and coaching business model", "Manage the live community, product direction, and commercial experiments"],
    evidence: ["Live production platform at allornothing.gg", "Working player, team, tournament, ladder, and coaching surfaces", "Supports Rematch, Deadlock, and The Finals", "Real subscribers and completed coaching purchases"],
    highlights: [{ value: "$2,880", label: "subscription ARR run rate" }, { value: "40", label: "paid subscribers" }, { value: "38", label: "coaching sessions sold" }],
    traction: {
      title: "Launch-stage commercial traction",
      description: "Founder-reported first-month operating metrics. The platform added 10 subscribers during its first full month and is expanding into additional game communities. ARR is the current subscription run rate ($240 MRR × 12), not revenue already earned over a full year.",
      metrics: [
        { value: "$240", label: "Subscription MRR", note: "40 paid subscribers × $6/month" },
        { value: "$2,880", label: "ARR run rate", note: "Current MRR annualized" },
        { value: "40", label: "Paid subscribers", note: "AON Sub monthly plan" },
        { value: "+10", label: "First-month growth", note: "New paid subscribers added during the first full month" },
        { value: "0", label: "Cancellations", note: "Reported in the last full month" },
        { value: "38", label: "Coaching sessions", note: "Paid sessions sold" },
        { value: "$950", label: "Coaching GMV", note: "$25 average customer spend per session" },
        { value: "$142", label: "Coaching revenue retained", note: "14.9% effective platform take rate" }
      ]
    },
    productAreas: [
      { title: "Competition", text: "Tournaments and ladders turn community play into structured progression." },
      { title: "Team formation", text: "Player listings and team profiles reduce the friction of finding compatible competitors." },
      { title: "Coaching marketplace", text: "Players can discover coaches and move into a bookable paid session." },
      { title: "Founder operations", text: "Product decisions connect directly to community feedback, monetization, and live-platform operations." }
    ],
    tags: [{ name: "Full Stack", color: "blue-text-gradient" }, { name: "Esports", color: "green-text-gradient" }, { name: "Product Growth", color: "pink-text-gradient" }],
    image: allornothing, demoUrl: "https://allornothing.gg/", demoKind: "external", demoLabel: "Visit live platform", cardLabel: "View live product & metrics →",
  },
  {
    name: "Eileen's English Toffee", type: "Freelance client · E-commerce",
    description: "A polished online storefront that brings a Michigan family business, its products, and its English heritage into one responsive customer experience.",
    longDescription: "A live client website designed and developed through Blue Moon Development for a family-owned confectioner. The product balances commerce, local discovery, and brand storytelling while giving customers a clear path from product interest to purchase.",
    problem: "The business needed a professional digital storefront that could present its product range, preserve the story behind its original Surrey recipe, and help local and online customers take action.",
    contributions: ["Translated the family brand and product story into a responsive visual system", "Built the product catalogue, cart journey, product-detail pages, and owner access", "Created story, event, contact, location, hours, and email-capture experiences", "Delivered the project through Blue Moon Development as a live client engagement"],
    evidence: ["Live production client website", "Six-product catalogue with weight variants and pricing", "Shopping cart, product pages, and owner login", "Local business information, event discovery, maps, social links, and subscriber capture"],
    highlights: [{ value: "6", label: "products presented" }, { value: "Live", label: "client storefront" }, { value: "Mobile", label: "responsive experience" }],
    productAreas: [
      { title: "Commerce", text: "Product discovery, pricing, individual product pages, and a persistent shopping-cart journey." },
      { title: "Brand story", text: "A content-rich narrative connects the product to Eileen's original recipe and family history." },
      { title: "Local discovery", text: "Store hours, directions, events, contact information, and social channels support in-person customers." },
      { title: "Customer retention", text: "Email capture supports seasonal offers, market events, and repeat-purchase campaigns." }
    ],
    tags: [{ name: "E-commerce", color: "blue-text-gradient" }, { name: "Responsive UI", color: "green-text-gradient" }, { name: "Client Delivery", color: "pink-text-gradient" }],
    image: eileens, demoUrl: "https://eileensenglishtoffee.netlify.app/", demoKind: "external", demoLabel: "Visit live storefront",
  },
  {
    name: "Prestige Rental Quote Builder", type: "Java → Web case study",
    description: "A responsive quote experience that preserves the original Java pricing engine across six vehicle classes.",
    longDescription: "A browser adaptation of a Java Swing coursework project, redesigned to make the underlying pricing rules immediate, transparent, and recruiter-friendly.",
    problem: "Desktop software asks every reviewer to install and configure it before they can understand the product.",
    contributions: ["Translated Java rate and mileage rules into a testable browser calculator", "Designed responsive quote, validation, and confirmation flows", "Kept the original Java implementation available for comparison"],
    evidence: ["Six vehicle-specific rate schedules", "Itemized excess-mileage calculation", "Semantic inputs and responsive layout"],
    highlights: [{ value: "6", label: "vehicle rate plans" }, { value: "$0.25", label: "per excess mile" }, { value: "0", label: "backend dependencies" }],
    tags: [{ name: "Java", color: "blue-text-gradient" }, { name: "JavaScript", color: "green-text-gradient" }, { name: "Responsive UI", color: "pink-text-gradient" }],
    image: carrent, demoUrl: "/demos/car-rental/index.html?embed=1", demoKind: "embed",
    source_code_link: "https://github.com/HydraIsProgramming/Car-Rental-Interface",
  },
  {
    name: "MarketSignal Lab", type: "Group coursework · ML",
    description: "A multi-model market intelligence workbench for forecasting, signal analysis, strategy testing, and transparent evaluation.",
    longDescription: "A richer recruiter-facing evolution of the original AI trading coursework: multiple forecasting models, technical indicators, walk-forward market analysis, strategy controls, and honest baseline comparison in one interactive lab.",
    problem: "Financial ML demos often optimize for impressive charts while hiding leakage, weak baselines, and unsupported profitability claims.",
    contributions: ["Implemented SMA9/SMA21 indicators and improved the original Gradio workflow", "Expanded dataset support across multiple stocks", "Built the deployment demo around chronological testing and explicit baselines"],
    evidence: ["Chronological train/test split", "Multiple model comparison against a naive baseline", "Feature importance, technical signals, drawdown, and transparent backtest assumptions"],
    highlights: [{ value: "3", label: "forecasting models" }, { value: "8", label: "engineered features" }, { value: "4", label: "analysis views" }],
    tags: [{ name: "Python", color: "blue-text-gradient" }, { name: "scikit-learn", color: "green-text-gradient" }, { name: "Gradio", color: "pink-text-gradient" }],
    image: tradingbot, demoUrl: "https://stock-trading-bot-ai.onrender.com", demoKind: "embed",
    source_code_link: "https://github.com/HydraIsProgramming/Stock_Trading_Bot-AI",
  },
  {
    name: "SocketLab", type: "Python networking coursework",
    description: "An interactive protocol visualizer backed by a multithreaded TCP client/server implementation.",
    longDescription: "A browser simulation explaining TCP sessions, bounded concurrency, command routing, shared files, acknowledgements, and connection lifecycle state. The endpoints shown are simulated—not real users or customers.",
    problem: "Raw socket applications are difficult for recruiters to run and almost impossible to understand from a terminal screenshot.",
    contributions: ["Implemented server/client communication and command handling", "Modelled a three-connection capacity and lifecycle state", "Created a guided browser simulation of the Python protocol"],
    evidence: ["Thread-per-client server", "Lock-protected client cache", "Status, list, get, message, and exit commands"],
    highlights: [{ value: "3", label: "modelled connection slots" }, { value: "1,024", label: "byte receive buffer" }, { value: "TCP", label: "transport protocol" }],
    tags: [{ name: "Python", color: "blue-text-gradient" }, { name: "TCP/IP", color: "green-text-gradient" }, { name: "Concurrency", color: "pink-text-gradient" }],
    image: clientserver, demoUrl: "/demos/socket-lab/index.html?embed=1", demoKind: "embed", demoHeight: "650px", demoMinHeight: 560,
    source_code_link: "https://github.com/HydraIsProgramming/Client-Server-Assignment",
  },
  {
    name: "3D Engineering Portfolio", type: "Independent product",
    description: "An immersive React and Three.js portfolio that connects technical claims to working products and evidence.",
    longDescription: "This site combines interactive 3D scenes with accessible project case studies, technical tracks, and a clearly labelled product-growth model.",
    problem: "A visually memorable portfolio still fails if recruiters cannot quickly reach evidence, source code, and working software.",
    contributions: ["Built the React/Three.js experience and responsive navigation", "Designed the project demo hub and evidence-based technical track", "Added progressive disclosure to keep heavy experiences optional"],
    evidence: ["React Three Fiber scenes", "Reduced-motion aware UI", "Lazy-loaded project demonstrations"],
    highlights: [{ value: "3", label: "interactive demos" }, { value: "5", label: "technical tracks" }, { value: "2 clicks", label: "to working evidence" }],
    tags: [{ name: "React", color: "blue-text-gradient" }, { name: "Three.js", color: "green-text-gradient" }, { name: "Tailwind", color: "pink-text-gradient" }],
    image: portfolio3d,
    source_code_link: "https://github.com/HydraIsProgramming/3D-Portfolio-Website",
  },
];

export { services, technologies, experiences, testimonials, projects };
