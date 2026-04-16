import ServicePage from '../../components/ServicePage';
export const metadata = { title: 'Courses & Education — ARK Platforms' };

export default function Courses() {
  return (
    <ServicePage
      eyebrow="Education Practice"
      title="Education, from practitioners."
      lede="Courses, workshops, and mentorship programs taught by the same people who build, operate, and invest at ARK Platforms."
      heroBg="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2400&q=80"
      intro={{
        heading: "We teach what we do.",
        body: "Our programs are not packaged theory. They are drawn directly from our live engagements — with the names removed — and delivered in cohorts small enough for genuine discussion. We teach software architects, designers, hospitality operators, and emerging investors.",
      }}
      services={[
        { id: 'workshops', title: 'Executive Workshops', desc: 'Intensive, multi-day workshops for leadership teams on technology, design, and capital strategy.' },
        { title: 'Cohort Courses', desc: 'Small-cohort online programs on software engineering, product design, and hospitality operations.' },
        { id: 'mentorship', title: 'Mentorship', desc: 'One-on-one mentorship for founders, senior engineers, and design leaders.' },
        { title: 'Corporate Training', desc: 'Custom curricula for engineering, design, and operating teams inside client organizations.' },
        { title: 'Masterclasses', desc: 'Single-session masterclasses on specific topics — from Next.js architecture to hotel P&L.' },
        { title: 'Certification', desc: 'Professional certificates issued upon successful completion of select cohort programs.' },
      ]}
      splitTitle="A different kind of classroom."
      splitText="Cohorts are capped. Instructors are operators. Every program includes real case work, live office hours, and alumni access to a network that is genuinely useful."
      splitImg="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1800&q=80"
      ctaTitle="Join an upcoming cohort."
      ctaText="Request the current schedule of courses, workshops, and mentorship openings."
    />
  );
}
