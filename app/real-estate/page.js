import ServicePage from '../../components/ServicePage';
export const metadata = { title: 'Real Estate — ARK Platforms' };

export default function RealEstate() {
  return (
    <ServicePage
      eyebrow="Real Estate Practice"
      title="Properties curated for enduring value."
      lede="Acquisition, development, and stewardship of residential and commercial real estate, with an emphasis on location, architecture, and long-term value."
      heroBg="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=80"
      intro={{
        heading: "Real estate is a thirty-year decision.",
        body: "We source, underwrite, and manage properties with the patience that asset class deserves. Our work spans boutique residential, mixed-use developments, and hospitality real estate across Europe and the Americas.",
      }}
      services={[
        { title: 'Acquisitions', desc: 'Off-market and competitive acquisitions in select primary and resort markets.' },
        { title: 'Development', desc: 'Ground-up and adaptive reuse development with architect-led design.' },
        { title: 'Asset Management', desc: 'Operational oversight, capital planning, and reporting for institutional standards.' },
        { title: 'Advisory', desc: 'Independent counsel to families and funds on strategy, disposition, and succession.' },
        { title: 'Hospitality Conversions', desc: 'Repositioning of properties into boutique hotels and branded residences.' },
        { title: 'Portfolio Analysis', desc: 'Data-led review of existing portfolios to surface value and risk.' },
      ]}
      splitTitle="Selective by design."
      splitText="We take on a small number of mandates each year. Each is approached with architectural sensibility, institutional discipline, and the long patience that real estate rewards."
      splitImg="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80"
      ctaTitle="Explore a mandate with us."
      ctaText="Whether you are acquiring your first asset or rebalancing a family portfolio, we would be pleased to review it in confidence."
    />
  );
}
