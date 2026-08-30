import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';

function AnimatedSVGBackground() {
  const { theme } = useTheme();
  const roadmapPaths = [
    'M0,80 Q180,20 360,60 T720,40 T1080,70 T1440,30',
    'M0,120 Q180,80 360,100 T720,90 T1080,110 T1440,80',
    'M0,160 Q180,130 360,150 T720,140 T1080,160 T1440,130',
  ];
  const milestones = [
    { x: 120, y: 55, label: 'Discovery' },
    { x: 360, y: 40, label: 'Strategy' },
    { x: 600, y: 60, label: 'Execution' },
    { x: 840, y: 35, label: 'Launch' },
    { x: 1080, y: 50, label: 'Growth' },
    { x: 1320, y: 30, label: 'Scale' },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg viewBox="0 0 1440 200" className="absolute bottom-0 left-0 w-full opacity-20" preserveAspectRatio="none">
        {roadmapPaths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke={i === 0 ? theme.accent : theme.accent2}
            strokeWidth="2"
            strokeDasharray="12 8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 3, delay: i * 0.5, ease: 'easeInOut' }}
          />
        ))}
        {milestones.map((m, i) => (
          <motion.g key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5 + i * 0.2 }}>
            <circle cx={m.x} cy={m.y} r="6" fill={i % 2 === 0 ? theme.accent : theme.accent2} opacity="0.7" />
            <motion.circle cx={m.x} cy={m.y} r="12" fill="none" stroke={i % 2 === 0 ? theme.accent : theme.accent2} strokeWidth="1" opacity="0.3"
              animate={{ r: [12, 20, 12], opacity: [0.3, 0.1, 0.3] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }} />
          </motion.g>
        ))}
      </svg>
      <svg viewBox="0 0 1440 200" className="absolute top-0 left-0 w-full opacity-10" preserveAspectRatio="none">
        <motion.path d="M0,100 Q360,30 720,80 T1440,60" fill="none" stroke={theme.accent} strokeWidth="1.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, delay: 0.5 }} />
      </svg>
    </div>
  );
}

function FloatingElements() {
  const { theme } = useTheme();
  const elements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 8,
    duration: Math.random() * 8 + 8,
    delay: Math.random() * 4,
    shape: ['circle', 'diamond', 'square'][i % 3],
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            width: el.size,
            height: el.size,
            borderRadius: el.shape === 'circle' ? '50%' : el.shape === 'diamond' ? '2px' : '4px',
            border: `1px solid ${el.id % 2 === 0 ? theme.accent : theme.accent2}`,
            background: `${el.id % 2 === 0 ? theme.accent : theme.accent2}10`,
            transform: el.shape === 'diamond' ? 'rotate(45deg)' : undefined,
          }}
          animate={{ y: [0, -25, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: el.duration, repeat: Infinity, delay: el.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

function Roadmap() {
  const { theme } = useTheme();
  const milestones = [
    { date: 'Q3 22', label: 'Idea' },
    { date: 'Q4 22', label: 'Research' },
    { date: 'Q1 23', label: 'Design' },
    { date: 'Q2 23', label: 'Build' },
    { date: 'Q3 23', label: 'Ship' },
  ];
  return (
    <div className="relative mt-10 hidden w-full md:block">
      <motion.div
        className="h-1 origin-left"
        style={{ background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      />
      <div className="mt-2 flex justify-between">
        {milestones.map((m, i) => (
          <motion.div
            key={m.label}
            className="text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + i * 0.15 }}
          >
            <span
              className="mx-auto mb-1 block h-3 w-3 rounded-full"
              style={{ background: i % 2 ? theme.accent2 : theme.accent }}
            />
            <span className="block font-mono text-xs" style={{ color: theme.muted }}>{m.date}</span>
            <span className="block text-xs font-semibold" style={{ color: theme.text }}>{m.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouse = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMouse({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20,
    });
  }, []);

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const } },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: theme.bg }}
      onMouseMove={handleMouse}
    >
      <AnimatedSVGBackground />
      <FloatingElements />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 py-28 text-center"
        style={{ x: mouse.x * 0.3, y: mouse.y * 0.3 }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      >
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.p variants={fadeUp} className="font-mono text-sm" style={{ color: theme.accent }}>
            Hi, I&apos;m
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl font-extrabold md:text-6xl" style={{ color: theme.text }}>
            {content.name}
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-xl text-xl font-semibold" style={{ color: theme.accent2 }}>
            {content.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mx-auto mt-8 flex max-w-md items-center gap-4">
            <img
              src={content.photo}
              alt={content.name}
              className="h-16 w-16 rounded-full border-2 object-cover"
              style={{ borderColor: theme.accent }}
            />
            <p className="text-left text-sm" style={{ color: theme.muted }}>
              6+ years shipping products that users love, from discovery to delighted retention.
            </p>
          </motion.div>

          <Roadmap />

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-lg px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
              style={{ background: theme.accent, color: '#fff' }}
            >
              View product work
            </a>
            <a
              href="#contact"
              className="rounded-lg border-2 px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
              style={{ borderColor: theme.accent2, color: theme.accent2 }}
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
