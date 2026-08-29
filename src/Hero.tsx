import { motion } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';

// Horizontal roadmap drawn on load
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
        style={{ background: theme.accent }}
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
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: theme.bg }}
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-28 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-sm"
          style={{ color: theme.accent }}
        >
          Hi, I&apos;m
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl font-extrabold md:text-6xl"
          style={{ color: theme.text }}
        >
          {content.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mx-auto mt-3 max-w-xl text-xl font-semibold"
          style={{ color: theme.accent2 }}
        >
          {content.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mx-auto mt-8 flex max-w-md items-center gap-4"
        >
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-lg px-6 py-3 font-semibold"
            style={{ background: theme.accent, color: '#fff' }}
          >
            View product work
          </a>
          <a
            href="#contact"
            className="rounded-lg border-2 px-6 py-3 font-semibold"
            style={{ borderColor: theme.accent2, color: theme.accent2 }}
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
