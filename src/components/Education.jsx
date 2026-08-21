import { motion } from "framer-motion";

import { styles } from "../styles";
import { education, profile } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Education = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Where I studied</p>
      <h2 className={styles.sectionHeadText}>Education.</h2>
    </motion.div>

    <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-6">
      {education.map((entry, index) => (
        <motion.article
          key={entry.school}
          variants={fadeIn("up", "spring", index * 0.1, 0.7)}
          className="rounded-3xl border border-white/10 bg-tertiary p-7 sm:p-9"
        >
          <div className="flex items-start gap-5">
            {entry.icon && (
              <img src={entry.icon} alt="" className="w-14 h-14 rounded-xl object-contain bg-white/5 p-2" />
            )}
            <div>
              <h3 className="text-white text-[24px] font-bold leading-tight">{entry.degree}</h3>
              <p className="text-[#00cea8] font-semibold mt-1">{entry.minor}</p>
              <p className="text-secondary mt-2">{entry.school}</p>
              <p className="text-secondary text-sm mt-1">{entry.location} · {entry.date}</p>
            </div>
          </div>

          <ul className="case-list mt-7">
            {entry.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </motion.article>
      ))}

      <motion.aside
        variants={fadeIn("up", "spring", 0.2, 0.7)}
        className="rounded-3xl border border-[#915EFF]/40 bg-[#915EFF]/[0.07] p-7 sm:p-9 flex flex-col"
      >
        <p className="case-label">Right now</p>
        <p className="text-white text-xl font-bold mt-3 leading-8">{profile.availability}</p>
        <p className="text-secondary mt-4 leading-7">
          {profile.titles.join(", ")}. Based in {profile.location}.
        </p>

        <dl className="mt-7 space-y-3 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-secondary">Email</dt>
            <dd><a className="text-white hover:text-[#00cea8] transition-colors" href={`mailto:${profile.email}`}>{profile.email}</a></dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-secondary">Phone</dt>
            <dd><a className="text-white hover:text-[#00cea8] transition-colors" href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`}>{profile.phone}</a></dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-secondary">LinkedIn</dt>
            <dd><a className="text-white hover:text-[#00cea8] transition-colors" href={profile.linkedin} target="_blank" rel="noreferrer">/00ranjotsandhu ↗</a></dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-secondary">GitHub</dt>
            <dd><a className="text-white hover:text-[#00cea8] transition-colors" href={profile.github} target="_blank" rel="noreferrer">/HydraIsProgramming ↗</a></dd>
          </div>
        </dl>

        <a
          href={profile.resume}
          download="Ranjot-Sandhu-Resume.pdf"
          className="mt-auto pt-8 inline-block"
        >
          <span className="block text-center py-3 rounded-xl bg-[#915EFF] text-white font-semibold hover:bg-[#a77bff] transition-colors">
            Download my résumé ↓
          </span>
        </a>
      </motion.aside>
    </div>
  </>
);

export default SectionWrapper(Education, "education");
