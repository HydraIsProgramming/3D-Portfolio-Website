import { motion } from "framer-motion";
import { useState, useEffect, lazy, Suspense } from "react";

import { styles } from "../styles";
import NeuralBackground from "./NeuralBackground";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const ROLES = [
  "Full-stack products",
  "Machine learning experiments",
  "Reliable systems",
];

const useTypewriter = (words, typingSpeed = 80, deletingSpeed = 40, pause = 1800) => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return displayed;
};

const Hero = () => {
  const role = useTypewriter(ROLES);
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    const smallScreen = window.matchMedia("(max-width: 767px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!smallScreen && !reducedMotion) {
      const timer = window.setTimeout(() => setShow3D(true), 150);
      return () => window.clearTimeout(timer);
    }
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <NeuralBackground />
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Ranjot Sandhu</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software engineer building reliable full-stack and AI-powered products
          </p>
          <p className={`${styles.heroSubText} mt-1 text-[#915EFF]`}>
            {role}<span className="animate-pulse">|</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3 relative z-10">
            <a href="#projects" className="hero-button hero-button-primary">Explore projects</a>
            <a href="/resume/Ranjot-Sandhu-Resume.pdf" download="Ranjot-Sandhu-Resume.pdf" className="hero-button">Download résumé ↓</a>
            <a href="#contact" className="hero-button">Contact me</a>
            <a href="https://github.com/HydraIsProgramming" target="_blank" rel="noopener noreferrer" className="hero-button">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/00ranjotsandhu/" target="_blank" rel="noopener noreferrer" className="hero-button">LinkedIn ↗</a>
          </div>
        </div>
      </div>

      {show3D && <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center text-secondary">Loading 3D workspace…</div>}><ComputersCanvas /></Suspense>}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
