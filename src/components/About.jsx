import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={`${title} icon`}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a software engineer who works across full-stack development, AI and machine learning, and site reliability. I finished my Computer Science degree at Wilfrid Laurier University in August 2026, with a minor in UX Design. At TD Bank, working through Tata Consultancy Services, I wrote monitoring scripts and SRE tooling that cut manual incident detection time by more than half. I built Datadog dashboards that several engineering teams used to triage problems, and I ran load and performance testing with JMeter and Dynatrace to catch bottlenecks before release.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.15, 1)}
        className='mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        On the AI side, I have built predictive models that reached about 85% accuracy, and trained PPO and SAC reinforcement learning agents to over 90% policy confidence for robotic arm control in assistive healthcare research. I work in Python with TensorFlow, PyTorch, scikit-learn, pandas, and NumPy. I also run my own studio, Blue Moon Development, where I built and still operate a multi-game esports platform on Next.js, TypeScript, Supabase, and PostgreSQL. It signs players in with Discord OAuth and bills them through Stripe, and it reached 40 paying subscribers and $240 in monthly revenue in its first full month. I have also shipped a multi-tenant iOS app in Swift and SwiftUI, plus live client websites. Docker, CI/CD, pytest, QA, Agile, and deploying to Vercel, Netlify, and Render are all part of how I work. Right now I am looking for software engineering roles, in an office, hybrid, or fully remote. Here is where I focus:
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
