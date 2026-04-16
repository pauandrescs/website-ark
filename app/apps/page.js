import ServicePage from '../../components/ServicePage';

export const metadata = { title: 'Mobile Apps — ARK Platforms' };

export default function MobileApps() {
  return (
    <ServicePage
      eyebrow="Technology Practice"
      title="Mobile applications built for performance and delight."
      lede="Native iOS and Android applications engineered for speed, reliability, and user experience. Built by architects who understand both code and commerce."
      heroBg="https://images.unsplash.com/photo-1512941691920-25bda36dc6f7?auto=format&fit=crop&w=2400&q=80"
      intro={{
        heading: "Apps that feel native, perform like it too.",
        body: "We build iOS and Android applications that respect your users' devices. Fast launch times, minimal battery drain, elegant interactions — the details that separate apps people love from apps people tolerate.",
      }}
      services={[
        { title: 'Native iOS Development', desc: 'Swift and SwiftUI applications built for performance and App Store excellence.' },
        { title: 'Native Android Development', desc: 'Kotlin applications optimized for the Android ecosystem and user expectations.' },
        { title: 'Cross-Platform Architecture', desc: 'Strategic approach to code reuse without compromising native experience.' },
        { title: 'Mobile UX & Design', desc: 'Interaction design and visual systems built for mobile-first experiences.' },
        { title: 'App Store Optimization', desc: 'Metadata, screenshots, and review processes that drive installs and retention.' },
        { title: 'Mobile DevOps', desc: 'CI/CD pipelines, beta testing, and release management tailored to mobile.' },
      ]}
      splitTitle="Every pixel earns its place."
      splitText="Mobile apps run on the devices your users trust most. We design and engineer with that responsibility in mind: minimal permissions, transparent data handling, performance that respects battery life, and interactions that feel inevitable."
      splitImg="https://images.unsplash.com/photo-1511707267537-b85faf00021e?auto=format&fit=crop&w=1800&q=80"
      ctaTitle="Ready to launch a mobile product?"
      ctaText="Share your concept and target audience. We respond with a clear technical approach and realistic timeline."
    />
  );
}
