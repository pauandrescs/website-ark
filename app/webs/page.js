import ServicePage from '../../components/ServicePage';

export const metadata = { title: 'Web Platforms — ARK Platforms' };

export default function WebPlatforms() {
  return (
    <ServicePage
      eyebrow="Technology Practice"
      title="Web platforms engineered for scale and delight."
      lede="Production-grade web applications built on Next.js, React, and modern edge architectures. From startups to enterprises, we build systems that grow with you."
      heroBg="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=2400&q=80"
      intro={{
        heading: "Web that works everywhere, loads instantly.",
        body: "Great web platforms adapt to every device, connect to backends flawlessly, and load so fast users forget they're waiting. We build on Next.js, React, and edge runtimes — technologies designed for this moment.",
      }}
      services={[
        { title: 'Next.js & React Applications', desc: 'Server-side rendering, static generation, and edge functions for instant performance.' },
        { title: 'API & Backend Integration', desc: 'Seamless communication with Node, Python, Go, and cloud platforms.' },
        { title: 'Real-time Features', desc: 'WebSockets, live updates, and collaborative features for modern user expectations.' },
        { title: 'Database Design & Integration', desc: 'PostgreSQL, MongoDB, and NoSQL strategies that scale without complexity.' },
        { title: 'Performance & Core Web Vitals', desc: 'Optimization for speed, SEO, and user experience metrics that matter.' },
        { title: 'Authentication & Security', desc: 'OAuth, JWTs, and secure architecture for user data and compliance.' },
      ]}
      splitTitle="The web, built right."
      splitText="A great web platform handles millions of requests, adapts to any device, and feels responsive everywhere. We architect for this: edge-first deployment, smart caching, efficient data fetching, and infrastructure that scales transparently."
      splitImg="https://images.unsplash.com/photo-1633356122544-f134324ef6db?auto=format&fit=crop&w=1800&q=80"
      ctaTitle="Ready to build a web platform?"
      ctaText="Share your vision and scale expectations. We respond with architectural recommendations and a technical roadmap."
    />
  );
}
