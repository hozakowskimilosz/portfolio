import { motion, useScroll } from "framer-motion";

import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Tabs from "./components/Tabs";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="divide-y-2 font-kanit">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-[50px] left-0 right-0 h-[5px] bg-primary transform z-20 transition-transform"
      />
      <Tabs />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
