import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative z-40 py-12 border-t border-white/5"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-heading text-lg font-bold gradient-text">
              ASTREON
            </span>
            <p className="text-sm text-slate-500 flex items-center gap-1">
              © {currentYear} Made with{" "}
              <Heart className="w-3 h-3 text-pink-500 fill-pink-500" /> by
              Astreon
            </p>
          </div>

          {/* Back to top */}
          <motion.a
            href="#hero"
            className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2"
            whileHover={{ y: -2 }}
            data-testid="back-to-top"
          >
            Back to top
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↑
            </motion.span>
          </motion.a>

          {/* Status */}
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for projects
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
