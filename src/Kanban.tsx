import { motion } from 'framer-motion';
import Reveal from './lib/Reveal';
import { useInView } from './hooks/useMotion';
import { useTheme } from './components/ThemeProvider';

const columns = ['Backlog', 'In Progress', 'Shipped'];
const cards = [
  { title: 'Onboarding flow', from: 0, to: 2 },
  { title: 'Pricing revamp', from: 0, to: 2 },
  { title: 'Mobile MVP', from: 1, to: 2 },
  { title: 'Churn study', from: 0, to: 1 },
];

function colX(col: number) {
  return col * 33.33;
}

export default function Kanban() {
  const { theme } = useTheme();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  return (
    <section id="roadmap" className="py-24" style={{ background: theme.surface }}>
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold" style={{ color: theme.text }}>
            Ideas → Shipped
          </h2>
          <p className="mt-2 text-center" style={{ color: theme.muted }}>
            Watch priorities glide through the pipeline as I drive them home.
          </p>
        </Reveal>
        <div
          ref={ref}
          className="relative mt-10 grid h-[320px] grid-cols-3 overflow-hidden rounded-2xl border"
          style={{ borderColor: theme.border, background: theme.bg }}
        >
          {columns.map((col) => (
            <div
              key={col}
              className="border-r p-3"
              style={{ borderColor: theme.border, background: `${theme.accent}0d` }}
            >
              <p className="mb-3 text-center text-xs font-bold uppercase tracking-wider" style={{ color: theme.accent2 }}>
                {col}
              </p>
            </div>
          ))}
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="absolute left-0 top-0 z-10 w-[30%] rounded-lg border p-3 shadow-sm"
              style={{ borderColor: theme.border, background: i % 2 ? theme.accent : theme.accent2, color: '#fff', margin: '44px 4px 0' }}
              initial={false}
              animate={inView ? { left: `${colX(card.to) + 2}%`, top: `${70 + i * 20}px` } : { left: `${colX(card.from) + 2}%`, top: `${70 + i * 20}px` }}
              transition={{ duration: 1.4, delay: 0.3 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs font-semibold">{card.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
