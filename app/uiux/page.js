import ServicePage from '../../components/ServicePage';

export const metadata = { title: 'UI / UX Design — ARK Platforms' };

export default function UIUXDesign() {
  return (
    <ServicePage
      eyebrow="Design Practice"
      title="Design as strategy, not decoration."
      lede="Product design, brand systems, and user research for companies that understand design as a competitive advantage — not a cosmetic layer."
      heroBg="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2400&q=80"
      intro={{
        heading: "We design for clarity, trust, and longevity.",
        body: "Our designers pair with your leadership, research your users, and deliver systems that your engineers can build and your customers will remember. We measure success not in awards, but in retention, conversion, and the quiet confidence a great interface conveys.",
      }}
      services={[
        { title: 'Product & UX Design', desc: 'End-to-end design of digital products from research to shippable interface.' },
        { title: 'Brand & Identity', desc: 'Marks, systems, and visual languages that age gracefully.' },
        { title: 'Design Systems', desc: 'Component libraries and design tokens that scale across teams and platforms.' },
        { title: 'User Research', desc: 'Qualitative and quantitative research to inform decisions with evidence.' },
        { title: 'Prototyping & Interaction', desc: 'High-fidelity, interactive prototypes that de-risk investment before engineering.' },
        { title: 'Design Leadership', desc: 'Fractional design leadership and team building for companies between hires.' },
      ]}
      splitTitle="Taste, informed by discipline."
      splitText="Great design requires both judgment and method. We bring a senior eye and a rigorous process: discovery, synthesis, concept, iteration, and handover. The result is work that feels inevitable."
      splitImg="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1800&q=80"
      ctaTitle="Elevate your product."
      ctaText="Whether you are designing a new flagship or quietly refining what you already have, we would like to hear about it."
    />
  );
}
