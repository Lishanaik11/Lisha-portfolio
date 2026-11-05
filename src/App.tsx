
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import AnimatedBackground from "./components/AnimatedBackground";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import JourneySection from "./components/JourneySection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <main className="min-h-screen bg-[#111] text-white overflow-hidden">
      <AnimatedBackground />

      <nav className="relative z-20 flex justify-between items-center px-8 md:px-16 py-8">
        <a href="#home" className="text-xl font-semibold tracking-widest">
          LN.
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm text-gray-300">
          <a href="#home" className="hover:text-purple-400 transition">Home</a>
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#experience" className="hover:text-purple-400 transition">Journey</a>
          <a href="#education" className="hover:text-purple-400 transition">Education</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </div>

        <a
          href="#contact"
          className="text-sm border border-white/30 rounded-full px-5 py-3 hover:bg-white hover:text-black transition"
        >
          LET'S TALK ↗
        </a>
      </nav>

      <section
        id="home"
        className="relative min-h-[85vh] flex flex-col justify-center items-center px-5"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs md:text-sm tracking-[0.5em] text-purple-300 mb-8"
        >
          HI, I'M
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.75, y: 80 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[19vw] leading-[0.8] tracking-[-0.07em] text-center whitespace-nowrap"
          style={{ fontFamily: '"Times New Roman", serif' }}
        >
          LISHA
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-serif text-[8vw] text-purple-300 tracking-widest mt-5"
        >
          NAIK
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-12 left-8 md:left-16 text-xs text-gray-400"
        >
          <p>FULL STACK DEVELOPER</p>
          <p className="mt-2">BASED IN INDIA</p>
        </motion.div>

        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 right-8 md:right-16 text-purple-300"
        >
          <ArrowDown size={28} />
        </motion.a>
      </section>

      <AboutSection />
      <SkillsSection />
      <JourneySection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />

      <div className="border-t border-white/10 py-5 px-8 md:px-16 flex justify-between text-xs text-gray-400">
        <span>CREATIVE DEVELOPER</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </main>
  );
}

export default App;
