import ServicePage from '../../components/ServicePage';

export const metadata = { title: 'Software Development — ARK Platforms' };

export default function Software() {
  return (
    <ServicePage
      eyebrow="Technology Practice"
      title="Software engineered to outlast trends."
      lede="Custom software, SaaS platforms, mobile applications, and web systems — built by senior engineers for clients who depend on what we ship."
      heroBg="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2400&q=80"
      intro={{
        heading: "We build systems, not features.",
        body: "Our engineering practice is led by architects who have spent a decade or more shipping production systems at scale. We treat every codebase as a long-lived asset: clear, documented, and built to evolve with your business for years to come.",
      }}
      services={[
        { id: 'apps', title: 'Mobile Applications', desc: 'Native iOS and Android applications crafted for performance, reliability, and delight.' },
        { id: 'web', title: 'Web Platforms', desc: 'Production-grade web applications on Next.js, React, and modern edge architectures.' },
        { title: 'SaaS & Backend Systems', desc: 'Scalable APIs, data pipelines, and microservices engineered for uptime and growth.' },
        { title: 'AI & Automation', desc: 'Integration of language models, vision systems, and automation into your core operations.' },
        { title: 'Cloud & DevOps', desc: 'AWS, GCP, and Azure infrastructure designed for resilience, observability, and cost.' },
        { title: 'Technical Due Diligence', desc: 'Independent review of codebases, teams, and architectures for investors and boards.' },
      ]}
      splitTitle="Senior craft, end to end."
      splitText="No offshore hand-offs, no junior armies. Every engagement is led by a partner-level engineer and staffed with people who have shipped what you are trying to build. We write code you could hand to your next CTO without apology."
      splitImg="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=80"
      ctaTitle="Ready to build something that endures?"
      ctaText="Share the outline of your project. We respond within one business day with a short, honest assessment of whether we are the right partner."
    />
  );
}
