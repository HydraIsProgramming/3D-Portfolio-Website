import { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project, index, onOpen }) => <motion.article variants={fadeIn("up", "spring", index * .1, .65)} className="w-full min-w-0"><Tilt options={{ max: 12, scale: 1.01, speed: 450 }} className="bg-tertiary p-5 rounded-2xl h-full border border-white/5 flex flex-col"><div className="relative w-full h-[230px] overflow-hidden rounded-2xl"><img src={project.image} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"/><span className="absolute left-3 top-3 max-w-[calc(100%-4.5rem)] px-3 py-1 rounded-full bg-black/70 text-white text-xs backdrop-blur">{project.type}</span>{project.source_code_link && <a href={project.source_code_link} onClick={(event) => event.stopPropagation()} target="_blank" rel="noreferrer" aria-label={`View ${project.name} source`} className="absolute right-3 top-3 black-gradient w-10 h-10 rounded-full flex justify-center items-center"><img src={github} alt="" className="w-1/2 h-1/2 object-contain"/></a>}</div><div className="mt-5"><h3 className="text-white font-bold text-[24px]">{project.name}</h3><p className="mt-2 text-secondary text-[14px] leading-6 min-h-[96px]">{project.description}</p></div><div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag.name} className={`text-[13px] ${tag.color}`}>#{tag.name}</span>)}</div><button onClick={() => onOpen(project)} className="mt-auto pt-6 w-full"><span className="block py-3 rounded-xl border border-[#915EFF]/60 text-white hover:bg-[#915EFF] transition-colors font-semibold">{project.cardLabel || "See the project and demo →"}</span></button></Tilt></motion.article>;

const Works = () => {
  const [selected, setSelected] = useState(null);
  return <><motion.div variants={textVariant()}><p className={styles.sectionSubText}>Things I have built</p><h2 className={styles.sectionHeadText}>Projects and live products.</h2></motion.div><p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">Open any project to see the live version or a demo, how it was built, what I did on it, and what came out of it.</p><div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 items-stretch">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} onOpen={setSelected}/>)}</div><ProjectModal project={selected} onClose={() => setSelected(null)}/></>;
};

export default SectionWrapper(Works, "projects");
