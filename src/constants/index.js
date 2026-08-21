import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  laurier,
  tutor,
  tdtcs,
  realityai,
  mlIcon,
  dataScience,
  mlops,
  clientserver,
  carrent,
  tradingbot,
  portfolio3d,
  threejs,
  python,
  java,
  swift,
  nextjs,
  postgresql,
  supabase,
  tensorflow,
  pytorch,
  pandas,
  scikitlearn,
  neuralNetwork,
  backend,
  allornothing,
  eileens,
  bookshelf,
  armmodel,
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
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// Résumé header details, kept in one place so the site and the PDF stay in sync.
export const profile = {
  name: "Ranjot Sandhu",
  titles: ["Software Engineer", "AI/ML Engineer", "Full-Stack Developer"],
  availability: "Looking for software engineering roles, in an office, hybrid, or fully remote",
  email: "00ranjotsandhu@gmail.com",
  phone: "269-213-0348",
  location: "Waterloo, Ontario, Canada",
  website: "https://ranjotsandhu.com",
  linkedin: "https://www.linkedin.com/in/00ranjotsandhu/",
  github: "https://github.com/HydraIsProgramming",
  resume: "/resume/Ranjot-Sandhu-Resume.pdf",
  summary:
    "Computer Science graduate with a minor in UX Design. I have worked on software engineering, AI and machine learning, site reliability, and full-stack products at TD Bank through Tata Consultancy Services, at Reality AI Lab, and at Wilfrid Laurier University. I cut manual incident detection time by more than half, and launched an esports platform that reached 40 paying subscribers in its first full month. I work in Python, Java, JavaScript, React, Next.js, SQL, Docker, pytest, and CI/CD, and I have taken products all the way from an idea to something live.",
};

export const education = [
  {
    school: "Wilfrid Laurier University",
    degree: "Bachelor of Computer Science",
    minor: "Minor in UX Design",
    location: "Waterloo, Ontario, Canada",
    date: "Graduated August 2026",
    icon: laurier,
    details: [
      "A Computer Science degree with a minor in UX Design, so I learned how to build software and how to make it easy to use.",
      "Courses covered data structures and algorithms, object-oriented programming, databases and SQL, operating systems, computer networks, software engineering, artificial intelligence, and machine learning.",
      "I put the degree to use on faculty research in machine learning and reinforcement learning, and turned most of my coursework into software that actually runs.",
    ],
  },
];

// Every keyword from the résumé's Technical Skills section, grouped for recruiters and search.
export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C", "Swift", "R", "HTML", "CSS"],
  },
  {
    title: "AI / Data",
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Reinforcement Learning (PPO, SAC, A2C)",
      "Machine Learning",
      "Data Visualization",
    ],
  },
  {
    title: "Full Stack",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "SwiftUI",
      "REST APIs",
      "Supabase",
      "PostgreSQL",
      "Gradio",
      "Stripe",
      "OAuth",
      "Authentication & Authorization",
      "Tailwind CSS",
      "Three.js",
    ],
  },
  {
    title: "Reliability / Tools",
    items: [
      "Datadog",
      "Dynatrace",
      "JMeter",
      "Postman",
      "Git",
      "Figma",
      "Xcode",
      "Tkinter",
      "Site Reliability Engineering (SRE)",
    ],
  },
  {
    title: "Deployment / Testing",
    items: [
      "Docker",
      "Vercel",
      "Netlify",
      "Render",
      "pytest",
      "CI/CD",
      "Agile/Scrum",
      "Unit Testing",
      "Regression Testing",
      "QA",
    ],
  },
];

const services = [
  {
    title: "Full-Stack Development",
    icon: web,
  },
  {
    title: "AI & Machine Learning",
    icon: mlIcon,
  },
  {
    title: "Site Reliability Engineering",
    icon: mlops,
  },
  {
    title: "Data Science",
    icon: dataScience,
  },
  {
    title: "iOS Development",
    icon: mobile,
  },
  {
    title: "UX Design",
    icon: creator,
  },
  {
    title: "Reinforcement Learning",
    icon: neuralNetwork,
  },
  {
    title: "Cloud & DevOps",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
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
    name: "Swift",
    icon: swift,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "scikit-learn",
    icon: scikitlearn,
  },
  {
    name: "pandas",
    icon: pandas,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
];

const experiences = [
  {
    title: "Freelance Software Developer",
    company_name: "Blue Moon Development",
    icon: web,
    iconBg: "#101827",
    date: "January 2026 - Present",
    points: [
      "Shipped paid client work, including an online shop and an esports platform that earns money, built with React, Next.js, TypeScript, Node.js, Supabase, PostgreSQL, and Stripe.",
      "Run my own studio building websites, online shops, full-stack apps, and small automation tools for businesses and solo founders.",
      "Handle projects from the first conversation right through to launch: working out what the client needs, designing it, building it, testing it, shipping it, and supporting it afterwards.",
      "Deploy and look after live apps on Vercel and Netlify, including the release pipeline, environment settings, custom domains, and monitoring.",
      "Design the database, login, and payment side of things, using Discord sign in, Supabase row level permissions, and Stripe for subscriptions and payouts, on products that handle real customer money.",
      "Deal with clients directly on quotes, scope, and deadlines, and hand over documentation at the end so they own their code, accounts, and domains outright.",
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
      "Built and tested predictive machine learning models for a faculty research project, getting to around 85% accuracy by improving the features and tuning the models.",
      "Wrote Python, Pandas, and NumPy pipelines to clean, check, and organise university datasets before training on them.",
      "Trained PPO and SAC reinforcement learning agents to control a simulated robot arm doing everyday tasks, writing the reward functions and policy logic that got them past 90% confidence.",
      "Built a multi-window dashboard in Tkinter and Matplotlib that shows training progress and arm movement while the model runs.",
      "Set the arm project up as a base for later research into assistive and medical exoskeletons, with Python and R pipelines so the results can be reproduced.",
      "Wrote up what the models showed and presented the findings to faculty.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Tata Consultancy Services - Client: TD Bank",
    icon: tdtcs,
    iconBg: "#000000ff",
    date: "June 2025 - August 2025",
    points: [
      "Wrote monitoring scripts and SRE tooling that cut manual incident detection time by more than half on shared banking infrastructure.",
      "Built and maintained Datadog dashboards that engineering teams used to check service health and find problems faster.",
      "Ran load and performance tests with JMeter and Dynatrace in the perfhawk pipeline to find and fix bottlenecks before release.",
      "Replaced manual health checks with scripts that detect problems and raise alerts, now used by several teams.",
      "Wrote up testing, performance, and handover documentation, and gave sprint updates to teams both on-shore and off-shore.",
      "Worked with the software and infrastructure teams on reliability fixes that were straightforward to maintain afterwards.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Reality AI Lab",
    icon: realityai,
    iconBg: "#383E56",
    date: "February 2025 - May 2025",
    points: [
      "Built and checked parts of the AI training pipeline using Python, TensorFlow, PyTorch, Pandas, and Scikit-learn.",
      "Did the QA on AI features: regression testing, tracking bugs, and checking the model output was correct.",
      "Designed wireframes and interface pieces in Figma so the model's features made sense to the people using them.",
      "Reviewed code, found bugs, and fixed them to make the AI features more stable.",
      "Worked in a small remote team using Git, taking part in sprint planning, stand-ups, and design reviews.",
      "Made the training pipeline more consistent by checking model behaviour against expected results before each release.",
    ],
  },
  {
    title: "Student Proctor & Teaching Assistant",
    company_name: "Wilfrid Laurier University",
    icon: laurier,
    iconBg: "#383E56",
    date: "January 2024 - August 2026",
    points: [
      "Set up exam rooms, checked students in, watched for cheating, and got rooms ready, over two and a half years of exams.",
      "Worked with faculty on course admin, teaching materials, marking, and the tech needed on exam day.",
      "Fixed computer problems during exams and helped students save and hand in their files when time was short.",
      "Gave students clear instructions and answered their questions during exams, and kept things running on time.",
    ],
  },
  {
    title: "Tutor",
    company_name: "Personal Job",
    icon: tutor,
    iconBg: "#E6DEDD",
    date: "July 2022 - Present",
    points: [
      "Planned and taught lessons in Maths, Physics, Python, and English, built around what each student was struggling with.",
      "Helped students bring their grades up and get ready for exams with focused practice and mock tests.",
      "Broke hard ideas down into simple explanations so students felt confident rather than lost.",
      "Changed how I taught depending on how each student was doing.",
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
    name: "All or Nothing Esports", type: "Live product with paying customers",
    description: "A live esports platform for several games, where players find teams, join ladders and tournaments, subscribe, and book paid coaching.",
    longDescription: "A real esports business that I built and still run. Players sign up, pay for subscriptions, and book coaching sessions, and the platform earns money from both.",
    operatingStatus: {
      label: "Currently live and generating revenue",
      detail: "Live code · Paying subscribers · Revenue from subscriptions and coaching",
    },
    problem: "Competitive players were jumping between Discord servers, spreadsheets, and separate sites just to find a team, enter an event, check their rank, or book a coach.",
    contributions: ["Started it, built it, launched it, and still run it today", "Designed how players find teams, join ladders and tournaments, and book coaching", "Worked out how the subscriptions and coaching cut would make money", "Run the community, decide what gets built next, and test new ways to earn", "Built it in Next.js and TypeScript on top of Supabase and PostgreSQL", "Set up Discord sign in, Stripe payments and subscriptions, and admin tools for users, events, coaching, and payouts"],
    evidence: ["Live at allornothing.gg", "Player profiles, teams, tournaments, ladders, and coaching all working", "Supports Rematch, Deadlock, and The Finals", "Real subscribers and real coaching sessions paid for", "Discord sign in, Supabase row level access, and Stripe billing all live"],
    highlights: [{ value: "$2,880", label: "subscription ARR run rate" }, { value: "40", label: "paid subscribers" }, { value: "38", label: "coaching sessions sold" }],
    traction: {
      title: "How the first month went",
      description: "These are my own numbers from the first full month. The platform picked up 10 new subscribers that month and is now moving into more game communities. The yearly figure is the current monthly revenue times 12, not money already earned over a year.",
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
      { title: "Competing", text: "Tournaments and ladders give casual community play something to climb." },
      { title: "Finding a team", text: "Player listings and team profiles make it much easier to find people you actually want to play with." },
      { title: "Coaching", text: "Players can browse coaches and book a paid session in a few clicks." },
      { title: "Running it", text: "I hear what the community wants, decide what to build, and ship it myself." }
    ],
    tags: [{ name: "Full Stack", color: "blue-text-gradient" }, { name: "Esports", color: "green-text-gradient" }, { name: "Product Growth", color: "pink-text-gradient" }],
    image: allornothing, demoUrl: "https://allornothing.gg/", demoKind: "external", demoLabel: "Visit the live site", cardLabel: "See the product and the numbers →",
  },
  {
    name: "Eileen's English Toffee", type: "Freelance client · E-commerce",
    description: "An online shop for a family toffee business in Michigan, showing their products and their English roots on one site that works on any device.",
    longDescription: "A client website I designed and built through Blue Moon Development for a family-run toffee maker. It sells the product, tells the family story, and helps local customers find the shop.",
    problem: "The business needed a proper website that showed what they sell, told the story behind their original Surrey recipe, and gave customers an easy way to buy or visit.",
    contributions: ["Turned the family brand and their story into a design that works on phones and desktops", "Built the product catalogue, cart, product pages, and owner login", "Added pages for their story, events, contact details, opening hours, and email signup", "Delivered the whole thing through Blue Moon Development as a paid client job"],
    evidence: ["Live client website", "Six products with different sizes and prices", "Working cart, product pages, and owner login", "Shop details, events, maps, social links, and email signup"],
    highlights: [{ value: "6", label: "products presented" }, { value: "Live", label: "client storefront" }, { value: "Mobile", label: "responsive experience" }],
    productAreas: [
      { title: "Buying", text: "Browsing, prices, product pages, and a cart that remembers what you added." },
      { title: "The story", text: "Pages that connect the toffee to Eileen's original recipe and the family behind it." },
      { title: "Finding the shop", text: "Opening hours, directions, events, contact details, and social links for local customers." },
      { title: "Staying in touch", text: "Email signup so the owners can tell customers about seasonal batches and market dates." }
    ],
    tags: [{ name: "E-commerce", color: "blue-text-gradient" }, { name: "Responsive UI", color: "green-text-gradient" }, { name: "Client Delivery", color: "pink-text-gradient" }],
    image: eileens, demoUrl: "https://eileensenglishtoffee.netlify.app/", demoKind: "external", demoLabel: "Visit live storefront",
  },
  {
    name: "Bookshelf", type: "iOS · Swift & SwiftUI",
    description: "An iOS app that lets shop staff track scratch-off lottery stock and cash up at the end of a shift, across more than one store.",
    longDescription: "An iOS app built in Swift and SwiftUI, running on Supabase and PostgreSQL. Owners and staff use the same app but see different things, and barcode scanning and automatic cash-up replace counting books by hand on paper.",
    problem: "Most shops still track lottery stock on paper. Staff count books by hand at the end of a shift, mistakes only turn up days later, and owners cannot see what sold at each store.",
    contributions: [
      "Built an iOS app in Swift and SwiftUI that works across several store locations at once",
      "Set up owner and staff permissions using PostgreSQL Row Level Security across 16 tables",
      "Added three ways to scan barcodes: Bluetooth scanners, plug-in scanners, and the phone camera",
      "Built shift open and close, book swaps, automatic sales totals, and stock tracking per book",
      "Used Supabase logins and database functions to keep the sensitive stock operations safe without running a separate server",
    ],
    evidence: [
      "Row Level Security rules across 16 tables",
      "Three ways to scan: Bluetooth, plug-in scanner, and camera",
      "Sensitive operations handled by the database, with no separate server",
      "End-of-shift totals worked out automatically, with stock tracked book by book",
    ],
    highlights: [{ value: "16", label: "RLS-protected tables" }, { value: "3", label: "barcode input modes" }, { value: "0", label: "separate app servers" }],
    productAreas: [
      { title: "Stock", text: "Every book tracked as it is activated, swapped, and sold, at each store." },
      { title: "Cashing up", text: "Shifts open and close in the app, and the sales totals are worked out for you." },
      { title: "Permissions", text: "Owners and staff see different things, and that split is enforced in the database, not just hidden in the app." },
      { title: "Scanning", text: "Bluetooth scanners, plug-in scanners, and the phone camera all work, so shops can use the hardware they already have." },
    ],
    tags: [{ name: "Swift", color: "blue-text-gradient" }, { name: "SwiftUI", color: "green-text-gradient" }, { name: "PostgreSQL", color: "pink-text-gradient" }],
    image: bookshelf,
  },
  {
    name: "Arm Model Research System", type: "University research · Reinforcement learning",
    cardLabel: "See how it works →",
    description: "PPO and SAC reinforcement learning agents trained to control a simulated robot arm doing everyday tasks.",
    longDescription: "A research project for a faculty member that trains reinforcement learning agents to control a simulated robot arm. It is meant as groundwork for later research into assistive and medical exoskeletons. A live dashboard shows what the agent is doing while it trains, instead of leaving it as a black box.",
    problem: "Exoskeleton research needs control policies you can test against real everyday tasks, but raw training runs are hard to read and hard to compare against each other.",
    contributions: [
      "Trained PPO and SAC agents to control a simulated robot arm doing everyday tasks",
      "Wrote the reward functions and policy logic that got the agents past 90% confidence on the set tasks",
      "Built the data handling and charts in Python, R, NumPy, Tkinter, and Matplotlib to judge how the agents behaved",
      "Built a multi-window dashboard that shows training progress and arm movement as it happens",
      "Set the whole thing up as a base for later assistive and medical exoskeleton research",
    ],
    evidence: [
      "PPO and SAC agents tested against the same set of everyday tasks",
      "Over 90% confidence on those tasks",
      "Live view of training progress and arm movement",
      "Python and R pipelines so results can be reproduced",
    ],
    highlights: [{ value: "90%+", label: "policy confidence" }, { value: "2", label: "RL algorithms compared" }, { value: "Live", label: "training telemetry" }],
    tags: [{ name: "Reinforcement Learning", color: "blue-text-gradient" }, { name: "Python", color: "green-text-gradient" }, { name: "Robotics", color: "pink-text-gradient" }],
    image: armmodel,
  },
  {
    name: "Prestige Rental Quote Builder", type: "Java project, rebuilt for the web",
    description: "A car rental quote tool that keeps the pricing rules from my original Java project, across six vehicle types.",
    longDescription: "A browser version of a Java Swing coursework project, rebuilt so anyone can see the pricing rules working without installing anything.",
    problem: "Desktop apps make everyone install and set them up before they can see what the software actually does.",
    contributions: ["Rewrote the Java rate and mileage rules as a calculator that runs in the browser", "Designed the quote, validation, and confirmation screens to work on any size screen", "Kept the original Java version available so you can compare them"],
    evidence: ["Six different vehicle rate plans", "Extra mileage charges broken out line by line", "Proper form inputs and a layout that adapts to the screen"],
    highlights: [{ value: "6", label: "vehicle rate plans" }, { value: "$0.25", label: "per excess mile" }, { value: "0", label: "backend dependencies" }],
    tags: [{ name: "Java", color: "blue-text-gradient" }, { name: "JavaScript", color: "green-text-gradient" }, { name: "Responsive UI", color: "pink-text-gradient" }],
    image: carrent, demoUrl: "/demos/car-rental/index.html?embed=1", demoKind: "embed",
    source_code_link: "https://github.com/HydraIsProgramming/Car-Rental-Interface",
  },
  {
    name: "MarketSignal Lab", type: "Group coursework · Machine learning",
    description: "A tool for comparing several stock forecasting models, testing trading ideas, and seeing honestly how well they actually do.",
    longDescription: "A bigger version of our AI trading coursework project. It runs several forecasting models side by side, adds technical indicators and strategy controls, and always compares against a simple baseline so the results mean something.",
    problem: "A lot of finance machine learning demos chase impressive-looking charts while quietly leaking future data, skipping baselines, and claiming profits they cannot back up.",
    contributions: ["Added the SMA9 and SMA21 indicators and cleaned up the original Gradio interface", "Made it work across multiple stocks instead of just one", "Built the demo around testing in date order, with the baseline always shown"],
    evidence: ["Training and testing split by date, not at random", "Several models compared against a simple baseline", "Feature importance, signals, drawdown, and the backtest assumptions all shown openly"],
    highlights: [{ value: "3", label: "forecasting models" }, { value: "8", label: "engineered features" }, { value: "4", label: "analysis views" }],
    tags: [{ name: "Python", color: "blue-text-gradient" }, { name: "scikit-learn", color: "green-text-gradient" }, { name: "Gradio", color: "pink-text-gradient" }],
    image: tradingbot, demoUrl: "https://stock-trading-bot-ai.onrender.com", demoKind: "embed",
    source_code_link: "https://github.com/HydraIsProgramming/Stock_Trading_Bot-AI",
  },
  {
    name: "SocketLab", type: "Python networking coursework",
    description: "A visual walkthrough of a multithreaded TCP client and server I wrote in Python.",
    longDescription: "A browser simulation that shows how TCP connections work: how many clients can connect at once, how commands are routed, how files are shared, and how a connection opens and closes. The clients you see are simulated, not real users.",
    problem: "Socket programs are awkward to run on someone else's machine, and a screenshot of a terminal tells you almost nothing about what is going on.",
    contributions: ["Wrote the client and server communication and the command handling", "Modelled a three connection limit and the states a connection moves through", "Built a guided browser simulation of how the Python version behaves"],
    evidence: ["One thread per connected client", "Shared client list protected by a lock", "Status, list, get, message, and exit commands all working"],
    highlights: [{ value: "3", label: "modelled connection slots" }, { value: "1,024", label: "byte receive buffer" }, { value: "TCP", label: "transport protocol" }],
    tags: [{ name: "Python", color: "blue-text-gradient" }, { name: "TCP/IP", color: "green-text-gradient" }, { name: "Concurrency", color: "pink-text-gradient" }],
    image: clientserver, demoUrl: "/demos/socket-lab/index.html?embed=1", demoKind: "embed", demoHeight: "650px", demoMinHeight: 560,
    source_code_link: "https://github.com/HydraIsProgramming/Client-Server-Assignment",
  },
  {
    name: "3D Engineering Portfolio", type: "Independent product",
    description: "This site. Built in React and Three.js, with every claim linked to something you can go and look at.",
    longDescription: "This portfolio pairs 3D scenes with plain write-ups of each project, so you can see the work behind the claims rather than taking my word for it.",
    problem: "A portfolio can look great and still fail if nobody can quickly get to the working software, the source code, or any proof.",
    contributions: ["Built the React and Three.js site and the navigation", "Designed the project pages so each one links to a live demo or the code", "Kept the heavy 3D parts optional so the page still loads fast"],
    evidence: ["3D scenes built with React Three Fiber", "Respects the reduce motion setting", "Demos only load when you open them"],
    highlights: [{ value: "3", label: "interactive demos" }, { value: "5", label: "technical tracks" }, { value: "2 clicks", label: "to working evidence" }],
    tags: [{ name: "React", color: "blue-text-gradient" }, { name: "Three.js", color: "green-text-gradient" }, { name: "Tailwind", color: "pink-text-gradient" }],
    image: portfolio3d,
    source_code_link: "https://github.com/HydraIsProgramming/3D-Portfolio-Website",
  },
];

export { services, technologies, experiences, testimonials, projects };
