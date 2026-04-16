import ServicePage from '../../components/ServicePage';

export const metadata = { title: 'Infrastructure & DevOps — ARK Platforms' };

export default function Infrastructure() {
  return (
    <ServicePage
      eyebrow="Technology Practice"
      title="Infrastructure built for reliability and scale."
      lede="Cloud architecture, DevOps practices, and operational excellence that keep your systems running 24/7 with predictable costs and instant scalability."
      heroBg="https://images.unsplash.com/photo-1518432031498-74cdf184fd75?auto=format&fit=crop&w=2400&q=80"
      intro={{
        heading: "Infrastructure that fades into the background.",
        body: "Great infrastructure is invisible. Your team focuses on features and business logic while systems scale seamlessly, failures are caught before they're problems, and costs stay predictable. We architect for these outcomes.",
      }}
      services={[
        { title: 'Cloud Architecture', desc: 'AWS, GCP, and Azure designs optimized for performance, resilience, and cost efficiency.' },
        { title: 'DevOps & CI/CD', desc: 'Automated deployments, testing pipelines, and infrastructure-as-code for velocity without risk.' },
        { title: 'Kubernetes & Containers', desc: 'Production Kubernetes clusters, container orchestration, and service mesh deployments.' },
        { title: 'Observability & Monitoring', desc: 'Comprehensive logging, metrics, and alerting so you know about problems before your users do.' },
        { title: 'Security & Compliance', desc: 'Network design, identity management, and compliance frameworks (GDPR, SOC 2, HIPAA).' },
        { title: 'Database & Storage', desc: 'Relational and NoSQL design, replication, backup strategies, and data platform optimization.' },
      ]}
      splitTitle="Operations that scale with you."
      splitText="As your company grows, your infrastructure should become simpler, not more complex. We design systems that absorb growth gracefully: auto-scaling, zero-downtime deployments, and operational runbooks your team actually uses."
      splitImg="https://images.unsplash.com/photo-1461749280684-dccba630972e?auto=format&fit=crop&w=1800&q=80"
      ctaTitle="Ready to modernize your infrastructure?"
      ctaText="Share your current architecture and challenges. We respond with a clear roadmap and a realistic timeline."
    />
  );
}
