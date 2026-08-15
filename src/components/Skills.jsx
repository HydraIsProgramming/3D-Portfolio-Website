import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const tracks = [
  { number: "01", title: "Full-stack product engineering", tools: "React · Next.js · JavaScript · APIs · SQL · Authentication", evidence: "Build and operate data-backed products with user accounts, listings, team workflows, subscriptions, bookings, and production-facing interfaces.", proof: "All or Nothing · 3D Portfolio" },
  { number: "02", title: "Client & commerce delivery", tools: "E-commerce · Payments · Responsive UI · SEO · Deployment", evidence: "Lead freelance projects from discovery and scope through design, implementation, testing, launch, documentation, and ongoing support.", proof: "Blue Moon Development · Eileen's Toffee" },
  { number: "03", title: "AI & machine learning", tools: "Python · pandas · scikit-learn · TensorFlow · Gradio", evidence: "Design reproducible experiments with time-ordered evaluation, engineered features, model comparison, baselines, backtesting, and visible limitations.", proof: "MarketSignal · University research" },
  { number: "04", title: "Systems & networking", tools: "TCP/IP · Sockets · Concurrency · Java · Python", evidence: "Implemented and visualized a multithreaded TCP protocol with bounded connection capacity, synchronized state, command routing, acknowledgements, and file retrieval.", proof: "SocketLab · Java coursework" },
  { number: "05", title: "Reliability & performance", tools: "Datadog · Dynatrace · JMeter · Postman · Testing", evidence: "Contributed to performance pipelines, workflow testing, observability, technical reporting, defect resolution, and cross-team enterprise delivery.", proof: "TCS / TD Bank · Reality AI Lab" },
  { number: "06", title: "Product & experience design", tools: "Figma · Tailwind · Accessibility · Three.js · Motion", evidence: "Translate business goals and technical rules into responsive, accessible experiences while balancing visual polish, usability, and performance.", proof: "3D Portfolio · Client work" },
];

const Skills = () => <>
  <motion.div variants={textVariant()}><p className={styles.sectionSubText}>Evidence over percentages</p><h2 className={styles.sectionHeadText}>Technical track.</h2></motion.div>
  <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">Capabilities connected to live products, client delivery, technical demonstrations, and professional experience—so every claim has concrete evidence behind it.</p>
  <div className="mt-12 border-t border-white/10">{tracks.map((track, index) => <motion.article key={track.title} variants={fadeIn("up", "spring", index * .08, .65)} className="grid md:grid-cols-[70px_1fr_1.25fr_.8fr] gap-4 md:gap-8 py-8 border-b border-white/10 items-start"><span className="text-[#915EFF] font-bold">{track.number}</span><div><h3 className="text-white text-xl font-bold">{track.title}</h3><p className="text-[#00cea8] text-sm mt-2">{track.tools}</p></div><p className="text-secondary leading-7">{track.evidence}</p><p className="text-white/70 text-sm md:text-right">{track.proof}</p></motion.article>)}</div>
</>;

export default SectionWrapper(Skills, "skills");
