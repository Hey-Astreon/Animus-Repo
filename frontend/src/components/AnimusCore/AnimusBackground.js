import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../../store/useStore';

// CSS-based Animus Background with subtle animations
const AnimusBackground = () => {
  const theme = useThemeStore((state) => state.theme);
  const containerRef = useRef(null);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden"
      data-testid="animus-background"
      style={{
        '--mouse-x': '0px',
        '--mouse-y': '0px',
        background: theme === 'light' 
          ? 'linear-gradient(180deg, #f8f9fc 0%, #e8eaef 100%)'
          : 'linear-gradient(180deg, #0a0a0f 0%, #111118 100%)'
      }}
    >
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: theme === 'light'
            ? `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`
            : `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          transform: 'translate(var(--mouse-x), var(--mouse-y))',
          transition: 'transform 0.3s ease-out'
        }}
      />

      {/* Volumetric Light Beams */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[1px] opacity-20"
          style={{
            left: `${15 + i * 15}%`,
            top: '-10%',
            height: '120%',
            background: theme === 'light'
              ? 'linear-gradient(180deg, transparent, rgba(37, 99, 235, 0.15), transparent)'
              : 'linear-gradient(180deg, transparent, rgba(96, 165, 250, 0.1), transparent)',
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Central Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{
              width: `${ring * 200}px`,
              height: `${ring * 200}px`,
              borderColor: theme === 'light' 
                ? `rgba(0, 0, 0, ${0.05 / ring})`
                : `rgba(255, 255, 255, ${0.03 / ring})`,
            }}
            animate={{
              rotate: ring % 2 === 0 ? 360 : -360,
              scale: [1, 1.02, 1],
            }}
            transition={{
              rotate: { duration: 60 + ring * 20, repeat: Infinity, ease: 'linear' },
              scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        ))}
        
        {/* Center Dot */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
          style={{
            background: theme === 'light' ? '#2563eb' : '#60a5fa',
            boxShadow: theme === 'light' 
              ? '0 0 20px rgba(37, 99, 235, 0.3)'
              : '0 0 20px rgba(96, 165, 250, 0.3)',
          }}
        />
      </div>

      {/* Floating Geometric Elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`geo-${i}`}
          className="absolute w-4 h-4 border rotate-45"
          style={{
            left: `${20 + i * 18}%`,
            top: `${25 + (i % 3) * 25}%`,
            borderColor: theme === 'light' 
              ? 'rgba(37, 99, 235, 0.15)'
              : 'rgba(96, 165, 250, 0.1)',
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [45, 90, 45],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Fog/Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: theme === 'light'
            ? 'radial-gradient(ellipse at center, transparent 20%, rgba(248, 249, 252, 0.9) 80%)'
            : 'radial-gradient(ellipse at center, transparent 20%, rgba(10, 10, 15, 0.95) 80%)'
        }}
      />

      {/* Subtle Noise Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};

export default AnimusBackground;
