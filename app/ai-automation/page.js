import ServicePage from '../../../components/ServicePage';

export const metadata = { title: 'AI & Automation — ARK Platforms' };

export default function AiAutomation() {
  return (
    <ServicePage
      eyebrow="Technology Practice"
      title="AI and automation built for real operations."
      lede="We turn intelligent automation into predictable, audited outcomes — from data workflows to generative systems that support your teams and customers."
      heroBg="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=80"
      intro={{
        heading: 'Automation that feels less like technology and more like a teammate.',
        body: 'Our AI practice focuses on practical deployments: reliable models, safe orchestration, and business processes that benefit from automation without adding complexity.',
      }}
      services={[
        { title: 'Generative AI Systems', desc: 'Custom prompt flows, model evaluation, and alignment for internal tools, customer support, and content workflows.' },
        { title: 'Intelligent Automation', desc: 'End-to-end automation that connects systems, triggers actions, and reduces repetitive effort across your organization.' },
        { title: 'Data & Analytics Orchestration', desc: 'Automated pipelines, data validation, and operational dashboards so insights are available where decisions happen.' },
        { title: 'AI Governance', desc: 'Risk-aware architecture, audit trails, and compliance practices for deploying AI safely and transparently.' },
      ]}
      splitTitle="Build AI you can trust." 
      splitText="We partner with your team to build AI applications that are maintainable, measurable, and aligned to real business impact — not shiny proofs of concept."
      splitImg="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1800&q=80"
      ctaTitle="Ready to make AI work for your business?"
      ctaText="Share the process you want to automate or the intelligence you want to unlock. We respond with practical next steps, not buzzwords."
    />
  );
}
