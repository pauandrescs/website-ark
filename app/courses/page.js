import Link from 'next/link';

export const metadata = { title: 'Courses & Mentorship — ARK Platforms' };

const courses = [
  {
    title: "The Hospitality Operator",
    category: "Hospitality / Operations",
    desc: "A 12-week intensive on the financial and technical architecture of high-performance hotels. From P&L mastery to GoldenInn PMS integration.",
    stats: ["12 Weeks", "15 Seats", "€2,400"],
    bg: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80"
  },
  {
    title: "Software as a Strategic Discipline",
    category: "Technology / Engineering",
    desc: "Architecting systems that endure. A cohort-based deep dive into Next.js, Rust, and the deployment of mission-critical platforms.",
    stats: ["8 Weeks", "12 Seats", "€1,800"],
    bg: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1800&q=80"
  },
  {
    title: "Design for the Discerning",
    category: "Design / UI / UX",
    desc: "Moving beyond pixels to systems. A study in premium aesthetic, material honesty, and the engineering of silent interfaces.",
    stats: ["6 Weeks", "20 Seats", "€1,400"],
    bg: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=1800&q=80"
  }
];

export default function Courses() {
  return (
    <>
      {/* 01. INTELLECTUAL HERO */}
      <section className="page-hero" style={{ height: '90vh', minHeight: 700 }}>
        <div className="page-hero-bg" style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2400&q=80)',
          filter: 'brightness(0.4) contrast(1.1)'
        }} />
        <div className="page-hero-content" style={{ paddingBottom: 100 }}>
          <div className="hero-eyebrow" style={{ color: 'var(--ark-gold)', fontWeight: 600 }}>The Academy of Practice</div>
          <h1 style={{ fontSize: 'clamp(44px, 7vw, 84px)', lineHeight: 0.95 }}>Education, <br />from Practitioners.</h1>
          <p style={{ fontSize: 20, marginTop: 30, maxWidth: 660, color: '#e8e3d7' }}>We do not teach theory. We transfer craft. Our courses are led by the same partners who build, operate, and invest at ARK Platforms — delivered in cohorts designed for the serious student.</p>
          <div style={{ marginTop: 50, display: 'flex', gap: 20 }}>
            <Link href="#cohorts" className="btn-primary">View Upcoming Cohorts</Link>
            <Link href="#mentorship" className="btn-ghost">Mentorship Programs</Link>
          </div>
        </div>
      </section>

      {/* 02. ACADEMY STATS */}
      <section className="section dark" style={{ padding: '60px 40px', borderBottom: '1px solid #222' }}>
        <div className="section-inner">
          <div className="stats" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div><div className="stat-num" style={{fontSize:42}}>1,200+</div><div className="stat-label">Alumni</div></div>
            <div><div className="stat-num" style={{fontSize:42}}>98%</div><div className="stat-label">Completion Rate</div></div>
            <div><div className="stat-num" style={{fontSize:42}}>15</div><div className="stat-label">Cap per Cohort</div></div>
            <div><div className="stat-num" style={{fontSize:42}}>100%</div><div className="stat-label">Practitioner Taught</div></div>
          </div>
        </div>
      </section>

      {/* 03. THE ACADEMY PHILOSOPHY */}
      <section className="section" style={{ background: '#fff', padding: '140px 40px' }}>
        <div className="section-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 100, alignItems: 'center' }}>
          <div>
            <div className="section-eyebrow">The Core Philosophy</div>
            <h2 style={{ fontSize: 48, marginBottom: 30 }}>Theory is cheap. <br />Craft is earned.</h2>
            <p style={{ fontSize: 18, color: '#5a5a5a', lineHeight: 1.8, marginBottom: 24 }}>
              Most education is a package of abstract concepts. It survives in a vacuum but fails in the field. At the ARK Academy, we teach from the field.
            </p>
            <p style={{ fontSize: 18, color: '#5a5a5a', lineHeight: 1.8 }}>
              Our curriculum is drawn from live engagements, real P&Ls, and actual codebases. We don't just tell you how it should work; we show you how it broke and how we fixed it. This is evidence-based learning for the discerning practitioner.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
             <img src="https://images.unsplash.com/photo-1434031211660-357115738c0c?auto=format&fit=crop&w=1200&q=80" alt="Learning Environment" style={{ width: '100%', height: 600, objectFit: 'cover' }} />
             <div style={{ position: 'absolute', top: -30, right: -30, background: 'var(--ark-gold)', padding: 40, color: 'var(--ark-black)', maxWidth: 300 }}>
                <div style={{ fontFamily: 'Didot, serif', fontSize: 32, lineHeight: 1.2, marginBottom: 10 }}>"The only true education is an apprenticeship with reality."</div>
                <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>— Academy Ethos</div>
             </div>
          </div>
        </div>
      </section>

      {/* 04. THE PILLARS */}
      <section className="section dark" style={{ background: 'var(--ark-black)' }}>
        <div className="section-inner">
          <div className="section-eyebrow">The Four Pillars</div>
          <h2 style={{ marginBottom: 60, color: 'var(--ark-ivory)' }}>A rigorous framework for learning.</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="process-step-num">01 / DISCIPLINE</div>
              <h3 style={{ color: 'var(--ark-ivory)' }}>Methodical Rigor</h3>
              <p>We approach every subject with the discipline of an engineer. We value structure, documentation, and the quiet pursuit of mastery over the noise of "innovation".</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">02 / EVIDENCE</div>
              <h3 style={{ color: 'var(--ark-ivory)' }}>Case-Led Learning</h3>
              <p>Every lesson is backed by a real-world case study from our practice. We analyze successes and post-mortem failures with equal intellectual honesty.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">03 / MENTORSHIP</div>
              <h3 style={{ color: 'var(--ark-ivory)' }}>Direct Access</h3>
              <p>You are not a number in a lecture hall. You are a student in a workshop. Our partners are present, accessible, and invested in your specific growth.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">04 / APPLICATION</div>
              <h3 style={{ color: 'var(--ark-ivory)' }}>Final Production</h3>
              <p>Every cohort ends with the delivery of a real piece of work — a model, a design system, or a functional platform — reviewed to institutional standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. COURSE CATEGORIES */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Disciplines</div>
          <h2 style={{ marginBottom: 60 }}>Where we share our expertise.</h2>
          <div className="industries">
            <div className="industry"><div className="industry-name">Technology</div><div className="industry-sub">Engineering & Architecture</div></div>
            <div className="industry"><div className="industry-name">Design</div><div className="industry-sub">UI/UX & Design Systems</div></div>
            <div className="industry"><div className="industry-name">Hospitality</div><div className="industry-sub">Operations & Systems</div></div>
            <div className="industry"><div className="industry-name">Finance</div><div className="industry-sub">Modeling & Strategy</div></div>
            <div className="industry"><div className="industry-name">Real Estate</div><div className="industry-sub">Development & Assets</div></div>
            <div className="industry"><div className="industry-name">Leadership</div><div className="industry-sub">Board & Exec Strategy</div></div>
          </div>
        </div>
      </section>

      {/* 06. FEATURED COHORTS */}
      <section className="section" id="cohorts" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Upcoming Cohorts</div>
          <h2 style={{ marginBottom: 60 }}>Join the next session.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
            {courses.map((c, i) => (
              <div key={i} className="split" style={{ background: '#fff', padding: 40, border: '1px solid var(--ark-border)' }}>
                 <div className="split-image" style={{ backgroundImage: `url(${c.bg})`, height: 400 }} />
                 <div>
                    <div className="section-eyebrow">{c.category}</div>
                    <h3 style={{ fontSize: 32, marginBottom: 20 }}>{c.title}</h3>
                    <p style={{ fontSize: 16, color: '#5a5a5a', lineHeight: 1.7, marginBottom: 30 }}>{c.desc}</p>
                    <div style={{ display: 'flex', gap: 40, marginBottom: 40 }}>
                       {c.stats.map((s, si) => (
                         <div key={si}><div style={{ fontFamily: 'Didot, serif', fontSize: 22, color: 'var(--ark-gold)' }}>{s.split(' ')[0]}</div><div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999' }}>{s.split(' ').slice(1).join(' ')}</div></div>
                       ))}
                    </div>
                    <Link href="/contact" className="btn-primary" style={{ background: 'var(--ark-black)', color: 'var(--ark-ivory)' }}>Apply for Admission</Link>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. THE FACULTY */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Instructors</div>
          <h2 style={{ marginBottom: 50 }}>Taught by practitioners.</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80)' }} />
              <h4>Pablo Andres</h4>
              <div className="team-role">Head of Technology</div>
            </div>
            <div className="team-card">
              <div className="team-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80)' }} />
              <h4>Elena Varela</h4>
              <div className="team-role">Hospitality Operations</div>
            </div>
            <div className="team-card">
              <div className="team-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80)' }} />
              <h4>Julian Costa</h4>
              <div className="team-role">Product Design</div>
            </div>
            <div className="team-card">
              <div className="team-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80)' }} />
              <h4>Sofia Mendes</h4>
              <div className="team-role">Financial Strategy</div>
            </div>
          </div>
        </div>
      </section>

      {/* 08. THE COHORT MODEL */}
      <section className="section dark">
        <div className="section-inner split">
          <div>
            <div className="section-eyebrow">Educational Model</div>
            <h2>The ARK Cohort</h2>
            <p style={{ color: '#bfbab0', fontSize: 17, lineHeight: 1.8 }}>We do not believe in mass education. We believe in the compounding power of small groups. Every ARK cohort is capped at 15 students to ensure that every question is answered and every project is reviewed personally by a partner.</p>
            <ul className="split-list" style={{ marginTop: 40 }}>
              <li><span>Capped Seats</span><span>15 Max</span></li>
              <li><span>Live Office Hours</span><span>Weekly</span></li>
              <li><span>Peer Review Sessions</span><span>Monthly</span></li>
              <li><span>Lifetime Alumni Network</span><span>Included</span></li>
            </ul>
          </div>
          <div className="split-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80)' }} />
        </div>
      </section>

      {/* 09. CURRICULUM DESIGN */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ textAlign: 'center', maxWidth: 900 }}>
          <div className="section-eyebrow">The Syllabus</div>
          <h2>Designed for depth, not speed.</h2>
          <p style={{ fontSize: 18, color: '#5a5a5a', lineHeight: 1.8, marginBottom: 50 }}>
            Our curricula are living documents. We update them every quarter based on what we are learning in our active client engagements. We don't teach what worked in 2020; we teach what is working this morning.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, textAlign: 'left' }}>
             <div style={{ padding: 30, border: '1px solid var(--ark-border)' }}>
                <h5 style={{ color: 'var(--ark-gold)', fontSize: 11, textTransform: 'uppercase', marginBottom: 15 }}>Research</h5>
                <p style={{ fontSize: 14, color: '#5a5a5a' }}>Deep dives into industry standards, emerging tech, and architectural shifts.</p>
             </div>
             <div style={{ padding: 30, border: '1px solid var(--ark-border)' }}>
                <h5 style={{ color: 'var(--ark-gold)', fontSize: 11, textTransform: 'uppercase', marginBottom: 15 }}>Production</h5>
                <p style={{ fontSize: 14, color: '#5a5a5a' }}>Hands-on building with the same tools we use in the practice (Next.js, Salto, etc.).</p>
             </div>
             <div style={{ padding: 30, border: '1px solid var(--ark-border)' }}>
                <h5 style={{ color: 'var(--ark-gold)', fontSize: 11, textTransform: 'uppercase', marginBottom: 15 }}>Refinement</h5>
                <p style={{ fontSize: 14, color: '#5a5a5a' }}>Iterative feedback cycles that mirror our internal quality assurance processes.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 10. CERTIFICATION */}
      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner split">
           <div className="split-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544640808-32ca72ac7f37?auto=format&fit=crop&w=1800&q=80)' }} />
           <div>
              <div className="section-eyebrow">Recognition</div>
              <h2>A different kind of certificate.</h2>
              <p style={{ fontSize: 17, lineHeight: 1.8 }}>An ARK Academy certificate is not a participation trophy. It is a validation of competency. It indicates that you have successfully completed a rigorous program of study and production, reviewed by institutional-grade practitioners.</p>
              <div style={{ marginTop: 30, display: 'flex', gap: 20 }}>
                 <div style={{ padding: '15px 25px', border: '1px solid var(--ark-gold)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Institutional Grade</div>
                 <div style={{ padding: '15px 25px', border: '1px solid var(--ark-gold)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Practitioner Verified</div>
              </div>
           </div>
        </div>
      </section>

      {/* 11. STUDENT JOURNEY */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner">
           <div className="section-eyebrow">The Path</div>
           <h2 style={{ marginBottom: 60 }}>The Student Journey</h2>
           <div className="timeline" style={{ maxWidth: 'none' }}>
              {[
                { y: 'Step 01', t: 'Application & Review', d: 'Submit your profile and intent. We select students who demonstrate a serious commitment to their craft.' },
                { y: 'Step 02', t: 'Selection & Onboarding', d: 'Successful applicants join the cohort and gain access to the foundational materials.' },
                { y: 'Step 03', t: 'The Intensive', d: 'Weeks of rigorous study, production, and live office hours with the instructors.' },
                { y: 'Step 04', t: 'Production & Review', d: 'Final project delivery and peer/instructor review to institutional standards.' },
                { y: 'Step 05', t: 'Alumni Network', d: 'Lifelong access to the ARK alumni community and exclusive opportunities.' }
              ].map((s, i) => (
                <div key={i} className="timeline-item" style={{ gridTemplateColumns: '180px 1fr' }}>
                   <div className="timeline-year">{s.y}</div>
                   <div className="timeline-content">
                      <h3>{s.t}</h3>
                      <p>{s.d}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 12. GLOBAL ALUMNI */}
      <section className="section dark">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <div className="section-eyebrow">Alumni Network</div>
          <h2>Our alumni lead from the center.</h2>
          <p style={{ color: '#bfbab0', marginBottom: 50, maxWidth: 700, margin: '0 auto 50px' }}>From Tier-1 engineering teams in New York to heritage hotel groups in Madrid, our students are applying what they learned at ARK to the world's most interesting challenges.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 30 }}>
             {["Goldman Sachs", "Google", "Blackstone", "Four Seasons", "Stripe", "Airbnb", "Accor", "Azora"].map(b => (
               <div key={b} style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ark-gold)', border: '1px solid rgba(184,155,94,0.2)', padding: 25 }}>{b}</div>
             ))}
          </div>
        </div>
      </section>

      {/* 13. CORPORATE TRAINING */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner split">
           <div>
              <div className="section-eyebrow">Institutional</div>
              <h2>Corporate Curricula</h2>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: '#5a5a5a' }}>We partner with boards, family offices, and leadership teams to build custom education programs. We help your team bridge the gap between technical possibility and operational reality.</p>
              <ul className="split-list" style={{ marginTop: 30 }}>
                 <li><span>Custom Syllabi</span><span>Bespoke</span></li>
                 <li><span>On-Site Workshops</span><span>Intensive</span></li>
                 <li><span>Executive Coaching</span><span>One-on-One</span></li>
              </ul>
              <Link href="/contact" className="btn-primary" style={{ background: 'var(--ark-black)', color: 'var(--ark-ivory)' }}>Request a Proposal</Link>
           </div>
           <div className="split-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80)' }} />
        </div>
      </section>

      {/* 14. MENTORSHIP PROGRAM */}
      <section className="section" id="mentorship" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner">
           <div className="section-eyebrow">Individual Growth</div>
           <h2 style={{ marginBottom: 50 }}>Partner Mentorship</h2>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
              <div style={{ padding: 50, background: '#fff', border: '1px solid var(--ark-border)' }}>
                 <h4 style={{ fontSize: 24, marginBottom: 20 }}>The Executive Mandate</h4>
                 <p style={{ fontSize: 15, color: '#5a5a5a', marginBottom: 30 }}>Weekly 1-on-1 sessions with a partner to navigate complex organizational, technical, or strategic challenges. Limited to 4 openings per year.</p>
                 <Link href="/contact" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ark-gold)', fontWeight: 600 }}>Inquire for Availability</Link>
              </div>
              <div style={{ padding: 50, background: '#fff', border: '1px solid var(--ark-border)' }}>
                 <h4 style={{ fontSize: 24, marginBottom: 20 }}>The Practitioner Office</h4>
                 <p style={{ fontSize: 15, color: '#5a5a5a', marginBottom: 30 }}>Monthly sessions focused on technical mastery, design systems, or operational rigor. Designed for senior leads and future partners.</p>
                 <Link href="/contact" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ark-gold)', fontWeight: 600 }}>Inquire for Availability</Link>
              </div>
           </div>
        </div>
      </section>

      {/* 15. SCHOLARSHIPS */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ textAlign: 'center', maxWidth: 800 }}>
           <div className="section-eyebrow">Access</div>
           <h2>The ARK Foundation</h2>
           <p style={{ fontSize: 18, color: '#5a5a5a', lineHeight: 1.8 }}>
              We believe that the future of the practice depends on access. Every cohort includes two fully-funded seats for students from underrepresented backgrounds or non-traditional paths who demonstrate exceptional talent and a serious commitment to craft.
           </p>
        </div>
      </section>

      {/* 16. TESTIMONIALS */}
      <section className="section dark">
        <div className="section-inner testimonial">
          <div className="section-eyebrow">Alumni Voice</div>
          <blockquote style={{ fontSize: 36 }}>"The ARK Academy didn't just teach me a skill; it changed how I think about systems. It's the difference between being a worker and being a practitioner."</blockquote>
          <cite>— Senior Engineer, New York Tech Hub</cite>
        </div>
      </section>

      {/* 17. RECOGNITION / PRESS */}
      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner">
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 30, textAlign: 'center' }}>
              <div style={{ opacity: 0.5, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Featured in The ARK Letter</div>
              <div style={{ opacity: 0.5, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Hacker News Top Tier</div>
              <div style={{ opacity: 0.5, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Monocle Business</div>
              <div style={{ opacity: 0.5, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Wallpaper* Design</div>
           </div>
        </div>
      </section>

      {/* 18. FAQ */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner">
          <div className="section-eyebrow">FAQ</div>
          <h2 style={{ marginBottom: 50 }}>Clarifying the Academy</h2>
          <div className="faq-list">
            <details className="faq-item"><summary>What is the time commitment for a cohort?</summary><p>Cohorts typically require 10-15 hours per week of study, production, and live session attendance. It is designed to be compatible with a full-time professional role.</p></details>
            <details className="faq-item"><summary>Is there an entrance exam?</summary><p>We don't have a formal exam, but we review every application to ensure that the student has the prerequisite knowledge and the serious intent required for the program.</p></details>
            <details className="faq-item"><summary>Are the sessions recorded?</summary><p>Yes, all live sessions are recorded and made available to the cohort. However, we strongly encourage live attendance to maximize the benefit of discussion.</p></details>
          </div>
        </div>
      </section>

      {/* 19. NEXT COHORT DATES */}
      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ padding: 80, background: 'var(--ark-black)', color: 'var(--ark-ivory)', textAlign: 'center' }}>
           <div className="section-eyebrow">Enrollment</div>
           <h2 style={{ color: '#fff', marginBottom: 30 }}>Next Cohort: Autumn 2026</h2>
           <p style={{ color: '#bfbab0', marginBottom: 40 }}>Applications for the Autumn 2026 session open on August 1st. Join the notification list to receive the syllabus and enrollment details.</p>
           <form className="newsletter-form" style={{ maxWidth: 400 }}>
              <input type="email" placeholder="you@domain.com" style={{ borderBottomColor: 'rgba(255,255,255,0.2)' }} />
              <button type="submit" style={{ color: 'var(--ark-gold)' }}>Notify Me</button>
           </form>
        </div>
      </section>

      {/* 20. FINAL CTA */}
      <section className="section dark" style={{ textAlign: 'center', padding: '160px 40px' }}>
        <div className="section-inner" style={{ maxWidth: 700 }}>
          <div className="section-eyebrow">Begin Your Mastery</div>
          <h2 style={{ marginBottom: 24, color: 'var(--ark-ivory)', fontSize: 52 }}>Apply for the Academy.</h2>
          <p style={{ color: '#bfbab0', marginBottom: 40, fontSize: 18 }}>
            Whether you are looking to master a new discipline or refine your existing craft — we are ready to help you bridge the gap between theory and reality.
          </p>
          <Link href="/contact" className="btn-primary">Apply Now</Link>
        </div>
      </section>
    </>
  );
}
