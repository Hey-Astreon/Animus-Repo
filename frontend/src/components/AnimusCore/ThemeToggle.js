import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../../store/useStore';

const ThemeToggle = () => {
  const { theme, toggleTheme, finishTransition } = useThemeStore();

  const handleToggle = () => {
    document.body.classList.add('theme-transitioning');
    toggleTheme();
    
    setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
      finishTransition();
    }, 600);
  };

  return (
    <motion.button
      className="fixed bottom-6 left-6 z-50 w-12 h-12 flex items-center justify-center animus-surface rounded-sm cursor-pointer"
      onClick={handleToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      data-testid="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
