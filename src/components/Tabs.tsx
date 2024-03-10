import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const tabs = ["About", "Experience", "Skills", "Projects"];

function Tabs() {
  const [selected, setSelected] = useState(tabs[0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map((tab) =>
        document.getElementById(tab.toLowerCase())
      );
      const scrollPosition = window.scrollY * 1.1;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i]!.offsetTop <= scrollPosition) {
          setSelected(tabs[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 z-10 flex flex-wrap items-center justify-center w-full gap-2 py-3 bg-slate-200/10 backdrop-blur-sm">
      {tabs.map((tab) => (
        <Tab
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
}

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
}

function Tab({ text, selected, setSelected }: TabProps) {
  return (
    <a href={`#${text.toLocaleLowerCase()}`}>
      <button
        onClick={() => setSelected(text)}
        className={`${
          selected
            ? "text-white"
            : "text-slate-800 hover:text-slate-200 hover:bg-primary-light"
        } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
      >
        <span className="relative z-10">{text}</span>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-violet-600 to-indigo-600"
          ></motion.span>
        )}
      </button>
    </a>
  );
}

export default Tabs;
