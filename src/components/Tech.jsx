import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-5'>
      {technologies.map((technology, index) => (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * .04 }} viewport={{ once: true }} className='w-28 h-28 rounded-2xl bg-tertiary border border-white/5 flex flex-col items-center justify-center gap-2 hover:border-[#915EFF]/60 transition-colors' key={technology.name}>
          <img src={technology.icon} alt="" className="w-11 h-11 object-contain" loading="lazy" />
          <span className="text-white/70 text-[11px] text-center px-2">{technology.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
