import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 py-12 border-t border-[var(--animus-border)]"
      data-testid="footer"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-display font-semibold">ASTREON</span>
            <p className="hud-text opacity-50">
              © {currentYear} All systems reserved.
            </p>
          </div>

          {/* Back to top */}
          <motion.a
            href="#hero"
            className="hud-text hover:text-[var(--animus-text)] transition-colors flex items-center gap-2"
            whileHover={{ y: -2 }}
            data-testid="back-to-top"
          >
            Return to Top
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↑
            </motion.span>
          </motion.a>

          {/* Status */}
          <div className="flex items-center gap-2">
            <div className="status-dot" />
            <span className="hud-text opacity-60">System Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
