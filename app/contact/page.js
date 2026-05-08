export const metadata = { title: 'Contact — ARK Platforms' };

import { submitContactForm } from '@/lib/actions';

export default function Contact() {
  return (
    <>
      <section className="page-hero" style={{ height: '50vh', minHeight: 360 }}>
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-eyebrow">Begin a Conversation</div>
          <h1>Get in touch.</h1>
          <p>Share a few details about your project. A partner will respond personally within one business day.</p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <form className="contact-form" action={submitContactForm}>
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Your name" required />

          <label>Email</label>
          <input type="email" name="email" placeholder="you@company.com" required />

          <label>Company (optional)</label>
          <input type="text" name="company" placeholder="Company or organization" />

          <label>Area of Interest</label>
          <select name="interest">
            <option>Software Development</option>
            <option>UI / UX Design</option>
            <option>Real Estate</option>
            <option>Hotels & Hospitality</option>
            <option>Finance</option>
            <option>Audits</option>
            <option>Courses & Mentorship</option>
            <option>Other</option>
          </select>

          <label>Tell us about your project</label>
          <textarea name="message" placeholder="A short outline is enough." required />

          <button type="submit" className="btn-primary" style={{background:'var(--ark-black)',color:'var(--ark-ivory)'}}>Send Message</button>
        </form>
      </section>

      <section className="section dark" style={{ textAlign: 'center' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Direct Lines</div>
          <h2 style={{ marginBottom: 40 }}>Prefer a direct channel?</h2>
          <div className="stats" style={{ gridTemplateColumns: 'repeat(3,1fr)'}}>
            <div><div className="stat-label" style={{marginBottom:12}}>General</div><div style={{fontFamily:'Didot,serif',fontSize:22,color:'var(--ark-ivory)'}}>hello@arkplatforms.eu</div></div>
            <div><div className="stat-label" style={{marginBottom:12}}>New Business</div><div style={{fontFamily:'Didot,serif',fontSize:22,color:'var(--ark-ivory)'}}>partners@arkplatforms.eu</div></div>
            <div><div className="stat-label" style={{marginBottom:12}}>Press</div><div style={{fontFamily:'Didot,serif',fontSize:22,color:'var(--ark-ivory)'}}>press@arkplatforms.eu</div></div>
          </div>
        </div>
      </section>
    </>
  );
}
