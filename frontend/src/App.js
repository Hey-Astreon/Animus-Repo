import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "@/App.css";

// Background System
import AstreonBackground from "./components/AstreonCore/AstreonBackground";

// UI Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Sections
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";

// Loading Screen Component
const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#030014] flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      data-testid="loading-screen"
    >
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-heading text-4xl font-black tracking-tighter gradient-text">
          ASTREON
        </span>
      </motion.div>

      {/* Progress bar */}
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500"
          style={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Status text */}
      <motion.p
        className="mt-4 font-mono text-xs text-slate-500 tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        INITIALIZING CORE...
      </motion.p>
    </motion.div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  // Parallax effect for mouse movement
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll progress bar transform
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="App relative" data-testid="app-container">
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-violet-500 via-cyan-500 to-pink-500 z-[60] origin-left"
        style={{ scaleX }}
        data-testid="scroll-progress"
      />

      {/* Background System */}
      <AstreonBackground />

      {/* Main Content with subtle parallax */}
      <motion.div
        className="relative z-40"
        style={{
          x: mousePosition.x * -0.5,
          y: mousePosition.y * -0.5,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      >
        {/* Navigation */}
        <Navbar />

        {/* Main Sections */}
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
