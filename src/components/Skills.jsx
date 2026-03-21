import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const SKILLS = [
  {
    category: "AI / Machine Learning",
    color: "#915EFF",
    items: [
      { name: "Python", level: 92 },
      { name: "TensorFlow / Keras", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "scikit-learn", level: 85 },
    ],
  },
  {
    category: "Data & Research",
    color: "#00cea8",
    items: [
      { name: "Data Analysis (Pandas / NumPy)", level: 88 },
      { name: "Computer Vision", level: 72 },
      { name: "Natural Language Processing", level: 70 },
      { name: "Statistical Modelling", level: 78 },
    ],
  },
  {
    category: "Software Engineering",
    color: "#915EFF",
    items: [
      { name: "React / Next.js", level: 85 },
      { name: "Java", level: 82 },
      { name: "Node.js / REST APIs", level: 80 },
      { name: "SQL / Databases", level: 75 },
    ],
  },
  {
    category: "Site Reliability Engineering",
    color: "#00cea8",
    items: [
      { name: "JMeter", level: 78 },
      { name: "Datadog", level: 74 },
      { name: "Postman", level: 88 },
      { name: "Fiddler", level: 72 },
    ],
  },
];

const SkillBar = ({ name, level, color, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    viewport={{ once: true }}
    className="mb-4"
  >
    <div className="flex justify-between mb-1">
      <span className="text-white text-[14px] font-medium">{name}</span>
      <span className="text-secondary text-[13px]">{level}%</span>
    </div>
    <div className="w-full bg-[#1a1a2e] rounded-full h-2.5 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, delay: index * 0.08 + 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-2.5 rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
      />
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Skills & Proficiency</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {SKILLS.map((group) => (
          <div
            key={group.category}
            className="bg-[#1d1836] rounded-2xl p-6 shadow-card"
          >
            <h3
              className="text-[17px] font-bold mb-5"
              style={{ color: group.color }}
            >
              {group.category}
            </h3>
            {group.items.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={group.color}
                index={i}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
