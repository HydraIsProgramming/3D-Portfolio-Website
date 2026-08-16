import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  const [showDemo, setShowDemo] = useState(false);
  const isExternal = project?.demoKind === "external";

  useEffect(() => {
    if (!project) return;
    setShowDemo(false);
    const onKey = (event) => event.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  const modal = (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#02030bf2] backdrop-blur-lg overflow-y-auto px-3 py-6 sm:p-10 lg:p-14"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          role="dialog" aria-modal="true" aria-labelledby="project-title"
          onMouseDown={(event) => event.target === event.currentTarget && onClose()}
        >
          <motion.article
            initial={{ y: 35, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
            className="relative max-w-7xl mx-auto bg-[#0d0b20] border border-white/10 rounded-[28px] overflow-hidden shadow-2xl"
          >
            <button onClick={onClose} className="absolute z-10 right-5 top-5 sm:right-8 sm:top-8 w-12 h-12 rounded-full border border-white/20 bg-[#0d0b20]/90 text-white text-xl hover:bg-white/10" aria-label="Close project">×</button>

            <header className="px-6 pt-10 pb-8 sm:px-12 sm:pt-14 sm:pb-11 pr-20 sm:pr-28 border-b border-white/10 bg-gradient-to-br from-[#17102d] to-[#0d0b20]">
              <p className="text-[#a87cff] uppercase tracking-[0.25em] text-xs font-bold">{project.type}</p>
              <h2 id="project-title" className="text-white text-3xl sm:text-5xl lg:text-6xl font-black mt-3 leading-[1.05]">{project.name}</h2>
              <p className="text-secondary mt-5 max-w-4xl text-base sm:text-lg leading-8">{project.longDescription}</p>
            </header>

            <div className="px-6 py-6 sm:px-12 sm:py-8 flex flex-wrap items-center gap-3 border-b border-white/10 bg-white/[0.02]">
              {project.demoUrl && !isExternal && <button onClick={() => setShowDemo((value) => !value)} className="px-6 py-3.5 rounded-full bg-[#915EFF] text-white font-semibold hover:bg-[#a77bff] transition-colors">{showDemo ? "Hide interactive demo" : "Try the interactive demo"}</button>}
              {project.demoUrl && isExternal && <a href={project.demoUrl} target="_blank" rel="noreferrer" className="px-6 py-3.5 rounded-full bg-[#915EFF] text-white font-semibold hover:bg-[#a77bff] transition-colors">{project.demoLabel || "Visit live product"} ↗</a>}
              {project.source_code_link && <a href={project.source_code_link} target="_blank" rel="noreferrer" className="px-6 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/10">View source ↗</a>}
              {project.demoUrl && !isExternal && <a href={project.demoUrl} target="_blank" rel="noreferrer" className="px-3 py-3.5 text-secondary hover:text-white">Open demo in a new tab ↗</a>}
            </div>

            {project.operatingStatus && <section className="px-6 py-6 sm:px-12 border-b border-[#ff5269]/30 bg-[#ff263f]/[0.08]"><div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"><div className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-[#ff5269] shadow-[0_0_18px_#ff5269]" aria-hidden="true"/><strong className="text-white text-lg">{project.operatingStatus.label}</strong></div><p className="text-[#ff9baa] text-sm sm:text-right">{project.operatingStatus.detail}</p></div></section>}

            {showDemo && project.demoUrl && (
              <section className="px-4 py-6 sm:p-10 lg:p-12 border-b border-white/10">
                <div className="flex flex-wrap justify-between gap-3 mb-5"><div><p className="case-label mb-1">Live product</p><h3 className="text-white text-xl sm:text-2xl font-bold">Explore {project.name}</h3></div><p className="text-secondary text-sm max-w-md sm:text-right">The demo is isolated from the portfolio and only loads when you request it.</p></div>
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-black shadow-[0_24px_80px_rgba(0,0,0,.45)]">
                  <iframe src={project.demoUrl} title={`${project.name} interactive demo`} className="block w-full bg-white" style={{ height: project.demoHeight || "74vh", minHeight: project.demoMinHeight || 680 }} loading="lazy" />
                </div>
              </section>
            )}

            {project.traction && <section className="px-6 py-10 sm:p-12 border-b border-white/10 bg-gradient-to-r from-[#1b0710] to-[#0d0b20]"><p className="case-label text-[#ff5269]">Live business evidence</p><div className="mt-3 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"><h3 className="text-white text-3xl sm:text-4xl font-black">{project.traction.title}</h3><p className="text-secondary max-w-xl leading-6">{project.traction.description}</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">{project.traction.metrics.map((metric) => <article key={metric.label} className="rounded-2xl border border-white/10 bg-black/20 p-6"><strong className="block text-white text-2xl sm:text-3xl">{metric.value}</strong><span className="block text-[#ff7286] font-semibold mt-2">{metric.label}</span><small className="block text-secondary mt-2">{metric.note}</small></article>)}</div></section>}

            {project.productAreas && <section className="px-6 py-10 sm:p-12 border-b border-white/10"><p className="case-label">Product surface</p><h3 className="text-white text-3xl sm:text-4xl font-black mt-3">What I built and operate</h3><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">{project.productAreas.map((area, index) => <article key={area.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"><span className="text-[#a87cff] text-xs font-black">0{index + 1}</span><h4 className="text-white text-lg font-bold mt-4">{area.title}</h4><p className="text-secondary text-sm leading-6 mt-3">{area.text}</p></article>)}</div></section>}

            <div className="px-6 py-10 sm:p-12 lg:p-14">
              <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
                <section><p className="case-label">Problem</p><h3 className="case-title">{project.problem}</h3></section>
                <section><p className="case-label">My contribution</p><ul className="case-list">{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul></section>
                <section><p className="case-label">Engineering evidence</p><ul className="case-list">{project.evidence.map((item) => <li key={item}>{item}</li>)}</ul></section>
              </div>
              <div className="mt-12 pt-10 border-t border-white/10 grid sm:grid-cols-3 gap-4">{project.highlights.map((item) => <div key={item.label} className="p-6 rounded-2xl bg-white/5 border border-white/10"><strong className="block text-white text-3xl">{item.value}</strong><span className="block text-secondary text-sm mt-1">{item.label}</span></div>)}</div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modal, document.body);
};

export default ProjectModal;
