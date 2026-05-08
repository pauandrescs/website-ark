'use client';
import { useState } from 'react';
import Link from 'next/link';
import { submitContribution } from '@/lib/actions';

export default function Contribute() {
  const [form, setForm] = useState({
    name: '', email: '', role: '', link: '', topic: '', pitch: '',
  });
  const [status, setStatus] = useState(null);
  const update = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    
    const result = await submitContribution(form);
    
    if (result.success) {
      setStatus('success');
      setForm({ name: '', email: '', role: '', link: '', topic: '', pitch: '' });
    } else {
      setStatus('error');
      alert('Error sending pitch. Please try again later.');
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2400&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-eyebrow">Write for the ARK Journal</div>
          <h1>Become a Contributor.</h1>
          <p>The ARK Journal publishes considered writing from practitioners — operators, engineers, designers, investors — who have something specific and well-earned to say. If that describes you, we would like to read your pitch.</p>
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner">
          <div className="section-eyebrow">Why Write With Us</div>
          <h2 style={{ marginBottom: 50, color: 'var(--ark-ivory)' }}>Three reasons our contributors return.</h2>
          <div className="contribute-benefits">
            <div className="benefit">
              <div className="benefit-num">01</div>
              <h3>Serious editing</h3>
              <p>Every essay is paired with an editor who has read in your field. We treat your writing the way we treat our own work: carefully, and without theatre.</p>
            </div>
            <div className="benefit">
              <div className="benefit-num">02</div>
              <h3>Considered readership</h3>
              <p>The ARK Letter reaches several thousand founders, operators, and partners. Small numbers, but the people you would most want to read you.</p>
            </div>
            <div className="benefit">
              <div className="benefit-num">03</div>
              <h3>Honoured authorship</h3>
              <p>You keep your byline, your rights, and your voice. We do not rewrite in house style. We amplify the voice you already have.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 820 }}>
          <div className="section-eyebrow">What We Publish</div>
          <h2 style={{ marginBottom: 30 }}>Specific, considered, first-person.</h2>
          <p style={{ fontSize: 17, color: '#5a5a5a', lineHeight: 1.8, marginBottom: 30 }}>
            The ARK Journal is not a news site and not a thought-leadership blog. We publish essays that could only have been written by someone who has done the work — field notes from a single project, hard-won opinions from a decade in a craft, frank post-mortems, and considered argument.
          </p>
          <p style={{ fontSize: 17, color: '#5a5a5a', lineHeight: 1.8, marginBottom: 30 }}>
            We publish <strong>1,200–3,000 word essays</strong>. We prefer the specific over the universal, the first-person over the editorial, and the quiet confidence of evidence over the posture of certainty. We decline ghost-written pieces, press releases, and anything that reads like it was optimised for search.
          </p>
          <p style={{ fontSize: 17, color: '#5a5a5a', lineHeight: 1.8 }}>
            If that sounds like a home for something you have been meaning to write — pitch us below. We read everything. We reply to everything, eventually.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 760 }}>
          <div className="section-eyebrow">The Process</div>
          <h2 style={{ marginBottom: 50 }}>From pitch to publication.</h2>
          <div className="process-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className="process-step">
              <div className="process-step-num">01</div>
              <h3>Pitch</h3>
              <p>Send us a one-paragraph pitch and a sentence or two about you. We respond within ten business days.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">02</div>
              <h3>Outline</h3>
              <p>If we are interested, we schedule a 30-minute conversation and agree on an outline and a draft date.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">03</div>
              <h3>Draft &amp; Edit</h3>
              <p>You write. We edit in two rounds — the first structural, the second line-by-line — with your voice intact.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">04</div>
              <h3>Publish</h3>
              <p>We publish on a quiet Tuesday, announce in the ARK Letter, and archive the piece permanently under your name.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 700 }}>
          <div className="section-eyebrow">Pitch an Essay</div>
          <h2 style={{ marginBottom: 30 }}>Tell us what you want to write.</h2>
          <p style={{ color: '#5a5a5a', marginBottom: 10 }}>All fields optional except name, email, and pitch.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input type="text" value={form.name} onChange={update('name')} required />

            <label>Email</label>
            <input type="email" value={form.email} onChange={update('email')} required />

            <label>Role / Title</label>
            <input type="text" value={form.role} onChange={update('role')} placeholder="e.g. CTO, Architect, Operator" />

            <label>Link to your writing (optional)</label>
            <input type="url" value={form.link} onChange={update('link')} placeholder="https://…" />

            <label>Essay Title / Topic</label>
            <input type="text" value={form.topic} onChange={update('topic')} placeholder="Working title or one-line topic" />

            <label>Your Pitch (one paragraph)</label>
            <textarea value={form.pitch} onChange={update('pitch')} rows={6} required placeholder="What are you arguing, what evidence will you bring, and why are you the one to write it?" />

            <button type="submit" className="btn-primary" style={{ background:'var(--ark-black)', color:'var(--ark-ivory)' }}>
              {status === 'loading' ? 'Sending…' : 'Submit Pitch'}
            </button>

            {status === 'success' && (
              <p style={{ color: 'var(--ark-gold)', marginTop: 20, fontSize: 14 }}>
                Thank you. We read every pitch personally and will reply within ten business days.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="section dark" style={{ textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 700 }}>
          <div className="section-eyebrow">Already an ARK Contributor?</div>
          <h2 style={{ marginBottom: 20 }}>Sign in to submit your draft.</h2>
          <p style={{ color: '#bfbab0', marginBottom: 30 }}>Contributors with an active essay on commission can submit drafts and track editor notes through the contributor portal.</p>
          <Link href="/login" className="btn-primary">Contributor Sign In</Link>
        </div>
      </section>
    </>
  );
}
