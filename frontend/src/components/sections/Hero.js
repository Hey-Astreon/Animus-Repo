import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowDown } from "lucide-react";
import CorePulse from "../AstreonCore/CorePulse";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center z-40 px-6"
      data-testid="hero-section"
    >
      {/* Core Pulse behind the title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <CorePulse />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Status indicator */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-mono text-xs tracking-[0.2em] text-cyan-400 uppercase">
            System Active
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="gradient-text text-glow-violet">ASTREON</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-mono text-sm sm:text-base tracking-[0.15em] text-slate-400 uppercase mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          A Living Digital Universe
        </motion.p>

        {/* Description */}
        <motion.p
          className="font-body text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Full-Stack Developer & Digital Architect crafting intelligent,
          immersive experiences at the intersection of code and creativity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-full glass glow-violet overflow-hidden transition-all duration-300 hover:scale-105"
            data-testid="hero-cta-projects"
          >
            <span className="relative z-10 font-semibold text-white flex items-center gap-2">
              Explore Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all duration-300"
            data-testid="hero-cta-contact"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-violet-400 transition-colors duration-300"
            data-testid="social-github"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            data-testid="social-linkedin"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-pink-400 transition-colors duration-300"
            data-testid="social-twitter"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-violet-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
