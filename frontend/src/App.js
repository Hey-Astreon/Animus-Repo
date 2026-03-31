import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import "@/App.css";

// Store
import { useThemeStore } from './store/useStore';

// Core Components
import AnimusBackground from './components/AnimusCore/AnimusBackground';
import SystemHUD from './components/AnimusCore/SystemHUD';
import ThemeToggle from './components/AnimusCore/ThemeToggle';

// UI Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections
import Hero from './components/sections/Hero';
import CoreIdentity from './components/sections/CoreIdentity';
import SystemModules from './components/sections/SystemModules';
import CapabilitiesMatrix from './components/sections/CapabilitiesMatrix';
import TransmissionInterface from './components/sections/TransmissionInterface';

function App() {
  const theme = useThemeStore((state) => state.theme);
  const { scrollYProgress } = useScroll();
  
  // Scroll progress transform
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App relative" data-testid="app-container">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--animus-accent)] z-[60] origin-left"
        style={{ scaleX }}
        data-testid="scroll-progress"
      />

      {/* Background System */}
      <AnimusBackground />

      {/* System HUD */}
      <SystemHUD />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navbar />

        {/* Main Sections */}
        <main>
          <Hero />
          <CoreIdentity />
          <SystemModules />
          <CapabilitiesMatrix />
          <TransmissionInterface />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
