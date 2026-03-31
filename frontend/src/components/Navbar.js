import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useThemeStore } from '../store/useStore';

const navLinks = [
  { name: 'Identity', href: '#identity', code: '01' },
  { name: 'Modules', href: '#modules', code: '02' },
  { name: 'Matrix', href: '#matrix', code: '03' },
  { name: 'Transmission', href: '#transmission', code: '04' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        data-testid="navbar"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled ? 'animus-surface px-6 py-3' : ''
            }`}
          >
            {/* Logo */}
            <a
              href="#hero"
              className="font-display text-lg font-semibold tracking-tight"
              data-testid="navbar-logo"
            >
              ASTREON
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-[var(--animus-text-muted)] hover:text-[var(--animus-text)] transition-colors"
                  data-testid={`nav-link-${link.name.toLowerCase()}`}
                >
                  <span className="hud-text opacity-40 group-hover:opacity-100 transition-opacity">
                    {link.code}
                  </span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <a
                href="#transmission"
                className="animus-button-ghost text-xs"
                data-testid="navbar-cta"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-button"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          data-testid="mobile-menu"
        >
          <div
            className="absolute inset-0 bg-[var(--animus-bg)]/95 backdrop-blur-lg pointer-events-auto"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <motion.div
            className="relative h-full flex flex-col items-center justify-center gap-8 pointer-events-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 text-2xl font-display font-semibold pointer-events-auto"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
              >
                <span className="hud-text opacity-40">{link.code}</span>
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#transmission"
              className="mt-4 animus-button pointer-events-auto"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              data-testid="mobile-cta"
            >
              <span>Contact</span>
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
