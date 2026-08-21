import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { skillGroups } from "../constants";

const tracks = [
  { number: "01", title: "Full-stack development", tools: "React · Next.js · JavaScript · APIs · SQL · Authentication", evidence: "I build and run products backed by real data, with user accounts, listings, team features, subscriptions, and bookings.", proof: "All or Nothing · 3D Portfolio" },
  { number: "02", title: "Client and e-commerce work", tools: "E-commerce · Payments · Responsive UI · SEO · Deployment", evidence: "I take freelance projects from the first conversation through design, build, testing, launch, and support after launch.", proof: "Blue Moon Development · Eileen's Toffee" },
  { number: "03", title: "AI, machine learning, and RL", tools: "Python · pandas · scikit-learn · TensorFlow · PyTorch · PPO/SAC", evidence: "I set up experiments that test honestly, using time-ordered data, real baselines, and backtesting. I also train reinforcement learning agents for robotic arm control, reaching over 90% policy confidence.", proof: "MarketSignal · Arm Model · Research" },
  { number: "04", title: "Systems and networking", tools: "TCP/IP · Sockets · Concurrency · Java · Python", evidence: "I built a multithreaded TCP server with a fixed connection limit, shared state, command routing, acknowledgements, and file transfer, then made it easy to watch in a browser.", proof: "SocketLab · Java coursework" },
  { number: "05", title: "Reliability, cloud, and testing", tools: "Datadog · Dynatrace · JMeter · Docker · CI/CD · pytest", evidence: "I cut manual incident detection time by more than half with monitoring and SRE tooling, and I ship apps using Docker, CI/CD, unit and regression tests, and QA.", proof: "TCS / TD Bank · Blue Moon Development" },
  { number: "06", title: "Product and interface design", tools: "Figma · Tailwind · Accessibility · Three.js · Motion", evidence: "I turn business goals into interfaces that work on any screen and stay usable, without letting the design slow the page down.", proof: "3D Portfolio · Client work" },
  { number: "07", title: "iOS and mobile", tools: "Swift · SwiftUI · Xcode · Supabase · PostgreSQL", evidence: "I built a multi-tenant iOS app with Row Level Security across 16 tables, shift tracking, automatic sales reconciliation, and three ways to scan barcodes.", proof: "Bookshelf" },
];

const Skills = () => <>
  <motion.div variants={textVariant()}><p className={styles.sectionSubText}>What I actually do</p><h2 className={styles.sectionHeadText}>How I work.</h2></motion.div>
  <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">Every skill below is tied to something I built, shipped, or was paid to do, so you can go and check the work yourself.</p>
  <div className="mt-12 border-t border-white/10">{tracks.map((track, index) => <motion.article key={track.title} variants={fadeIn("up", "spring", index * .08, .65)} className="grid md:grid-cols-[70px_1fr_1.25fr_.8fr] gap-4 md:gap-8 py-8 border-b border-white/10 items-start"><span className="text-[#915EFF] font-bold">{track.number}</span><div><h3 className="text-white text-xl font-bold">{track.title}</h3><p className="text-[#00cea8] text-sm mt-2">{track.tools}</p></div><p className="text-secondary leading-7">{track.evidence}</p><p className="text-white/70 text-sm md:text-right">{track.proof}</p></motion.article>)}</div>

  <div className="mt-20">
    <p className={styles.sectionSubText}>Everything I use</p>
    <h3 className="text-white font-black text-[26px] sm:text-[32px] mt-1">Technical skills.</h3>
    <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">The languages, frameworks, and tools I work with, grouped the same way as my résumé.</p>
    <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
      {skillGroups.map((group, index) => (
        <motion.section
          key={group.title}
          variants={fadeIn("up", "spring", index * .07, .6)}
          className="grid md:grid-cols-[210px_1fr] gap-x-8 gap-y-3 px-6 py-6 border-b border-white/10 last:border-b-0"
        >
          <div className="md:pt-1">
            <h4 className="text-[#00cea8] text-xs font-bold uppercase tracking-[0.2em]">{group.title}</h4>
            <span className="text-white/35 text-xs">{group.items.length} skills</span>
          </div>
          <ul className="flex flex-wrap gap-2 content-start">
            {group.items.map((item) => (
              <li key={item} className="px-3 py-1.5 rounded-full border border-white/10 bg-[#915EFF]/10 text-white/85 text-[13px] whitespace-nowrap">{item}</li>
            ))}
          </ul>
        </motion.section>
      ))}
    </div>
  </div>
</>;

export default SectionWrapper(Skills, "skills");
