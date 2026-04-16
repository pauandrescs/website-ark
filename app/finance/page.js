import ServicePage from '../../components/ServicePage';
export const metadata = { title: 'Finance — ARK Platforms' };

export default function Finance() {
  return (
    <ServicePage
      eyebrow="Financial Practice"
      title="Capital, advised with clarity."
      lede="Financial strategy, modeling, and reporting for operators, family offices, and investors who require both rigor and discretion."
      heroBg="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=2400&q=80"
      intro={{
        heading: "Numbers tell a story. We make it legible.",
        body: "Our finance practice serves founders through Series C, family offices, and operators of hospitality and real estate assets. We deliver the discipline of institutional finance with the pace and intimacy of a trusted advisor.",
      }}
      services={[
        { title: 'Financial Modeling', desc: 'Institutional-grade models for fundraising, acquisitions, and operations.' },
        { title: 'Fractional CFO', desc: 'Embedded CFO services for growth-stage companies and operating properties.' },
        { title: 'Fundraising Advisory', desc: 'Preparation of materials, data rooms, and narrative for equity and debt raises.' },
        { title: 'Reporting & Controls', desc: 'Management reporting, KPI dashboards, and internal control design.' },
        { title: 'M&A Support', desc: 'Buy-side and sell-side support with independent valuation and diligence.' },
        { title: 'Treasury & Tax Strategy', desc: 'Cash management and international tax structuring in partnership with counsel.' },
      ]}
      splitTitle="Discretion is a feature."
      splitText="Most of our engagements are never disclosed. Our clients value not only our technical work, but the quiet confidence that sensitive matters stay within a trusted circle."
      splitImg="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80"
      ctaTitle="A confidential conversation."
      ctaText="If you are weighing a raise, a sale, or a restructuring, we are pleased to discuss it privately."
    />
  );
}
