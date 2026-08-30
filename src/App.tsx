import Navbar from './components/Navbar';
import Hero from './Hero';
import BackgroundFx from './components/BackgroundFx';
import { TickerMarquee, AboutSection, Services, StatCounters, MeterSkills, IconSkillTiles, Timeline, Education, Projects, CertGrid, Awards, Hobbies, TestimonialSection, ContactShell, BlogSection, FAQSection, EnhancedTimeline, SkillsDetailedGrid, ContactMethodsGrid, WaveDivider } from './components/Sections';
import { content } from './content';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundFx />
      <Navbar content={content} />
      <Hero />
      <WaveDivider />
      <TickerMarquee items={content.ticker ?? [content.role, content.tagline]} />
      <WaveDivider flip />
      <AboutSection content={content} />
      <Services content={content} />
      <WaveDivider />
      <StatCounters content={content} />
      <MeterSkills content={content} />
      <IconSkillTiles content={content} />
      <SkillsDetailedGrid content={content} />
      <WaveDivider flip />
      <EnhancedTimeline content={content} />
      <Timeline content={content} />
      <Education content={content} />
      <WaveDivider />
      <Projects content={content} />
      <CertGrid content={content} />
      <Awards content={content} />
      <WaveDivider flip />
      <Hobbies content={content} />
      <BlogSection content={content} />
      <FAQSection content={content} />
      <WaveDivider />
      <TestimonialSection content={content} />
      <ContactMethodsGrid content={content} />
      <ContactShell content={content} />
    </div>
  );
}
