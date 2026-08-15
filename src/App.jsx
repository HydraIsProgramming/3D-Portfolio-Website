import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Skills, Tech, Works } from "./components";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const DeferredStars = () => {
  const anchorRef = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = anchorRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: "300px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={anchorRef} className="absolute inset-0 z-[-1]">{visible && <Suspense fallback={null}><StarsCanvas /></Suspense>}</div>;
};

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <DeferredStars />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
