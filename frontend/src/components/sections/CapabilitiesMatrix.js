import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    name: 'Frontend',
    code: 'FE',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind', level: 92 },
    ],
  },
  {
    name: 'Backend',
    code: 'BE',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 88 },
      { name: 'FastAPI', level: 85 },
      { name: 'PostgreSQL', level: 82 },
    ],
  },
  {
    name: 'AI/ML',
    code: 'AI',
    skills: [
      { name: 'OpenAI', level: 90 },
      { name: 'LangChain', level: 85 },
      { name: 'TensorFlow', level: 75 },
      { name: 'Vector DBs', level: 80 },
    ],
  },
  {
    name: 'Systems',
    code: 'SYS',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'CI/CD', level: 88 },
      { name: 'Git', level: 95 },
    ],
  },
];

const CapabilitiesMatrix = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="matrix"
      ref={ref}
      className="relative py-32 z-10"
      data-testid="matrix-section"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-2 h-2 bg-[var(--animus-accent)]" />
          <span className="hud-text">Capabilities_Matrix</span>
          <div className="flex-1 h-[1px] bg-[var(--animus-border)]" />
          <span className="hud-text opacity-50">03</span>
        </motion.div>

        <motion.h2
          className="section-title mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Technical <span className="text-[var(--animus-accent)]">Stack</span>
        </motion.h2>

        {/* Skills Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              className="module-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
              data-testid={`skill-category-${category.code.toLowerCase()}`}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--animus-border)]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-semibold text-[var(--animus-accent)]">
                    {category.code}
                  </span>
                  <span className="font-display font-medium">{category.name}</span>
                </div>
                <span className="hud-text opacity-50">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    data-testid={`skill-${skill.name.toLowerCase()}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="hud-text">{skill.level}%</span>
                    </div>
                    <div className="h-[2px] bg-[var(--animus-border)] overflow-hidden">
                      <motion.div
                        className="h-full bg-[var(--animus-accent)]"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 0.8,
                          delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="hud-text opacity-60">
            Continuously expanding capabilities • Always learning new technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilitiesMatrix;
