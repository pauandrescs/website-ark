import ServicePage from '../../components/ServicePage';
export const metadata = { title: 'Audits — ARK Platforms' };

export default function Audits() {
  return (
    <ServicePage
      eyebrow="Audit Practice"
      title="Independent review, without theatre."
      lede="Financial, technical, and operational audits — delivered by senior reviewers who understand the businesses they examine."
      heroBg="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2400&q=80"
      intro={{
        heading: "An audit is only as good as the people who conduct it.",
        body: "We offer independent audit and review services for boards, investors, and owners who need clarity without bureaucracy. Each engagement is staffed with specialists who have operated in the industries they review.",
      }}
      services={[
        { title: 'Financial Audits', desc: 'Review of financial statements, controls, and reporting accuracy.' },
        { title: 'Technical Audits', desc: 'Independent review of software architecture, security, and engineering practices.' },
        { title: 'Operational Reviews', desc: 'Examination of operating models, processes, and efficiency for hospitality and services.' },
        { title: 'Security & Compliance', desc: 'Review of cybersecurity posture, data protection, and regulatory readiness.' },
        { title: 'Pre-transaction Diligence', desc: 'Buyer-side and seller-side diligence across financial, technical, and operational dimensions.' },
        { title: 'Post-mortem Reviews', desc: 'Root-cause review of incidents, failed projects, and strategic misses.' },
      ]}
      splitTitle="Rigorous. Readable. Actionable."
      splitText="Our reports are written to be used — not filed. Every finding is paired with a recommendation, a priority, and a path forward. Clients tell us our audits read like memos from a trusted partner, not a compliance exercise."
      splitImg="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80"
      ctaTitle="Commission a review."
      ctaText="Boards, investors, and executives seeking an independent set of eyes are welcome to reach out in confidence."
    />
  );
}
