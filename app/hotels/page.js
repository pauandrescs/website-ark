import ServicePage from '../../components/ServicePage';
export const metadata = { title: 'Hotels & Hospitality — ARK Platforms' };

export default function Hotels() {
  return (
    <ServicePage
      eyebrow="Hospitality Practice"
      title="Hospitality, considered in every detail."
      lede="Boutique hotels, serviced residences, and the technology that runs them — designed around the guest and operated with the rigor of an institution."
      heroBg="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2400&q=80"
      intro={{
        heading: "A practice at the intersection of craft and operations.",
        body: "We develop and operate a small collection of properties, and we build the software that modern hospitality runs on — from central reservation systems to guest experience platforms. What we learn as operators informs what we build as technologists.",
      }}
      services={[
        { title: 'Hotel Development', desc: 'Concept, design, and opening of boutique and lifestyle properties.' },
        { title: 'Operations', desc: 'Full management of owned and third-party properties with exacting standards.' },
        { title: 'CRS & PMS Platforms', desc: 'Proprietary central reservation and property management systems.' },
        { title: 'Guest Experience', desc: 'Mobile apps, in-room technology, and service design that guests actually use.' },
        { title: 'Brand Creation', desc: 'Naming, identity, and narrative for new hospitality brands.' },
        { title: 'Repositioning', desc: 'Re-concepting underperforming assets into properties with purpose.' },
      ]}
      splitTitle="Built by operators, for operators."
      splitText="Because we run hotels, our technology is shaped by real service — not the other way around. Because we build technology, our hotels operate at a level most independents cannot match. The two practices compound."
      splitImg="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=80"
      ctaTitle="Partner on a property or platform."
      ctaText="Owners, investors, and brands seeking a quiet, capable partner are welcome to reach out."
    />
  );
}
