import type { Content } from './components/Sections';

export const content: Content = {
  name: 'Neha Iyer',
  role: 'Product Manager',
  tagline: 'Turning ideas into products users love',
  photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
  email: 'neha@productlens.co',
  phone: '+91 99887 76655',
  location: 'Bengaluru, India',
  languages: ['English', 'Hindi', 'Tamil'],
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'Medium', href: 'https://medium.com' },
  ],
  about: [
    'I am a product manager who loves turning messy user problems into clear, shippable products. Over 6 years I have owned products end to end — from discovery and roadmapping to launch and iteration.',
    'I blend research with data, and I champion teams. My north star is simple: deliver measurable value to users while keeping the team energized and focused.',
  ],
  services: [
    { title: 'Discovery & Research', desc: 'Structured user interviews, surveys and usability tests that surface the real problem before a line of code is written.', icon: '🔍' },
    { title: 'Product Strategy', desc: 'Vision, positioning and success metrics that align the whole company around outcomes instead of feature lists.', icon: '🧭' },
    { title: 'Roadmapping', desc: 'Prioritised, transparent roadmaps that balance bets, dependencies and quick wins with real stakeholder buy-in.', icon: '🗺️' },
    { title: 'Delivery & Agile', desc: 'Running squads through discovery-to-launch rituals that ship on time without burning out the team.', icon: '🚀' },
    { title: 'Experimentation', desc: 'Hypothesis-driven A/B testing loops that turn every release into a measurable learning.', icon: '🧪' },
    { title: 'Stakeholder Management', desc: 'Clear communication with engineering, design, sales and leadership that keeps everyone moving in the same direction.', icon: '🤝' },
  ],
  skills: [
    { name: 'Product Strategy', level: 95, note: 'Vision & positioning' },
    { name: 'Roadmapping', level: 94, note: 'Prioritisation frameworks' },
    { name: 'User Research', level: 93, note: '200+ interviews' },
    { name: 'Agile Delivery', level: 92, note: 'Scrum & Kanban' },
    { name: 'Data & Analytics', level: 91, note: 'Mixpanel, Amplitude' },
  ],
  skillsIcons: [
    { name: 'Roadmapping', note: 'Strategy & prioritization', icon: '🗺️' },
    { name: 'User Research', note: 'Interviews & usability', icon: '🎧' },
    { name: 'A/B Testing', note: 'Experimentation', icon: '🧪' },
    { name: 'Analytics', note: 'Mixpanel, Amplitude', icon: '📊' },
  ],
  stats: [
    { label: 'Products shipped', value: 12, suffix: '+' },
    { label: 'Retention lift', value: 25, suffix: '%' },
    { label: 'Feature experiments', value: 80, suffix: '+' },
    { label: 'User interviews', value: 200, suffix: '+' },
  ],
  experience: [
    {
      role: 'Senior Product Manager',
      company: 'LumenLabs',
      period: '2021 — Present',
      desc: 'Own the core dashboard product. Led a redesign that increased weekly retention 25% and NPS by 18 points.',
    },
    {
      role: 'Product Manager',
      company: 'Brightcart',
      period: '2019 — 2021',
      desc: 'Shipped checkout and recommendations features. Drove AOV up 14% and conversion up 9% through experimentation.',
    },
    {
      role: 'Associate Product Manager',
      company: 'GrowthWorks',
      period: '2018 — 2019',
      desc: 'Supported onboarding and activation initiatives, scaling activation rate from 28% to 44%.',
    },
  ],
  education: [
    {
      degree: 'MBA – Product Management',
      school: 'Indian School of Business',
      period: '2017 — 2019',
      desc: 'Focused on product strategy, consumer behaviour and data-driven decision making.',
    },
    {
      degree: 'B.Tech – Computer Science',
      school: 'Anna University, Chennai',
      period: '2013 — 2017',
      desc: 'Technical foundation in systems, design and software engineering.',
    },
  ],
  certificates: [
    'Certified Scrum Product Owner (CSPO)',
    'Project Management Professional (PMP)',
    'Reforge Product Strategy',
    'Google UX Certificate',
  ],
  awards: [
    { title: 'PM of the Year', detail: 'Company-wide recognition for the dashboard redesign that lifted retention 25%.', year: '2023' },
    { title: 'Innovation Award', detail: 'Awarded for the experimentation framework now adopted across all product squads.', year: '2022' },
    { title: 'Customer Champion', detail: 'Honoured for turning 200+ customer interviews into roadmap-driving insights.', year: '2021' },
  ],
  cards: [
    {
      title: 'Onboarding Redesign',
      desc: 'Cut time-to-value from 35 to 12 minutes through a redesigned onboarding flow, lifting activation 33%.',
      stack: 'Figma, Jira, Amplitude',
      metric: '+33% activation',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=400&fit=crop',
    },
    {
      title: 'Pricing & Packaging',
      desc: 'Re-architected the pricing model based on willingness-to-pay research. Grew gross revenue 28%.',
      stack: 'Research, SQL, Finance',
      metric: '+28% revenue',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=400&fit=crop',
    },
    {
      title: 'Mobile App Launch',
      desc: 'Led a 0-to-1 mobile product with a shoestring team. Reached 100k downloads in the first quarter.',
      stack: 'Discovery, MVP, Launch',
      metric: '100k downloads',
      image: 'https://images.unsplash.com/photo-1512941937669-90ce1c58e7e9?w=800&h=400&fit=crop',
    },
  ],
  projects: [
    {
      title: 'Analytics Redesign',
      desc: 'Rebuilt the core analytics dashboard around user workflows, lifting weekly retention 25%.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      tags: ['Dashboard', 'Retention'],
    },
    {
      title: 'Checkout Experimentation',
      desc: 'A testing loop on checkout and recommendations that drove AOV up 14% and conversion up 9%.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      tags: ['A/B Testing', 'Conversion'],
    },
    {
      title: 'Team Alignment Playbook',
      desc: 'Introduced discovery rituals and shared OKRs that cut delivery cycle time 20% across two squads.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=500&fit=crop',
      tags: ['Process', 'Delivery'],
    },
  ],
  hobbies: [
    { name: 'Cooking', note: 'Testing new recipes on weekends', icon: '🍳' },
    { name: 'Badminton', note: 'District-level player', icon: '🏸' },
    { name: 'Product Podcasts', note: 'Lenny & Strong Minds commute fuel', icon: '🎧' },
    { name: 'Photography', note: 'Street & product shots', icon: '📷' },
  ],
  testimonials: [
    {
      quote:
        'Neha asks the right questions before anyone else does. She keeps the whole team moving toward outcomes, not just output.',
      author: 'Arun Menon',
      role: 'Engineering Director, LumenLabs',
    },
    {
      quote:
        'The rare PM who marries user empathy with ruthless prioritization. Our roadmap has never been clearer.',
      author: 'Rob Singh',
      role: 'CEO, Brightcart',
    },
  ],
  footnote: '© Neha Iyer · React, TypeScript & Framer Motion',
  ticker: ['Product Strategy', 'User Research', 'Roadmapping', 'A/B Testing', 'Agile Delivery', 'Stakeholder Alignment'],

  blogPosts: [
    { title: 'Product-Led Growth: Strategies That Work', excerpt: 'How to build products that sell themselves through exceptional user experience and viral loops.', date: '2024-01-11', tags: ['Product Strategy', 'Growth'], readTime: '9 min' },
    { title: 'User Research Methods for Product Teams', excerpt: 'Practical guide to conducting user interviews, surveys, and usability testing.', date: '2024-01-01', tags: ['User Research', 'UX'], readTime: '8 min' },
  ],

  faqItems: [
    { question: 'What product management tools do you use?', answer: 'I use Jira for project tracking, Figma for design collaboration, Amplitude for analytics, and Notion for documentation.' },
    { question: 'How do you prioritize features?', answer: 'I use frameworks like RICE scoring, user interviews, and business impact analysis to make data-driven prioritization decisions.' },
    { question: 'What is your approach to product strategy?', answer: 'I align product vision with business goals, conduct market research, and create roadmaps based on user needs and competitive analysis.' },
    { question: 'How do you work with engineering teams?', answer: 'I maintain close collaboration through daily standups, sprint planning, and regular retrospectives to ensure alignment.' },
  ],

  skillsDetailed: [
    { category: 'Strategy', items: [
      { name: 'Product Strategy', level: 95 },
      { name: 'Market Research', level: 88 },
      { name: 'Competitive Analysis', level: 90 },
    ]},
    { category: 'Execution', items: [
      { name: 'Agile/Scrum', level: 92 },
      { name: 'User Stories', level: 90 },
      { name: 'A/B Testing', level: 85 },
    ]},
  ],

  contactMethods: [
    { type: 'Email', value: 'pm@email.com', icon: '📧', href: 'mailto:pm@email.com' },
    { type: 'LinkedIn', value: 'linkedin.com/in/pm', icon: '💼', href: 'https://linkedin.com' },
  ],
};