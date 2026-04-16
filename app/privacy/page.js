import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — ARK Platforms',
};

export default function PrivacyPolicy() {
  const sections = [
    {
      num: '1',
      title: 'Introduction',
      content: 'ARK Platforms, Inc values your privacy and is committed to protecting your personal data in accordance with applicable law. This policy explains how we collect, use, and protect our users\' information, aiming to ensure transparency and security in the handling of their data. We believe that privacy is fundamental to maintaining trust with our clients and users, and we take every reasonable measure to safeguard sensitive information.',
    },
    {
      num: '2',
      title: 'Scope',
      content: 'This Privacy Policy applies to all services and products offered by ARK Platforms, Inc, including websites, mobile applications, software, and consulting services, regardless of the user\'s geographical location, unless otherwise required by law. This policy is binding on all employees, contractors, and third-party service providers who process personal data on our behalf.',
    },
    {
      num: '3',
      title: 'Data Collected',
      content: 'We collect personal data such as name, email address, phone number, business address, IP address, browsing data, user preferences, transaction information, and any information that the Client voluntarily provides to access our services or receive technical support. Collection methods include direct submission through forms, account registration, email communication, and automated data collection through technological means.',
    },
    {
      num: '4',
      title: 'Usage Data and Analytics',
      content: 'We collect information about how users interact with our services, including visited pages, clicked links, time spent on each section, download history, search queries, device information, browser type, and any other information related to the use of our platforms. This data is collected for statistical analysis, continuous improvement purposes, product development, and to identify trends in user behavior and preferences.',
    },
    {
      num: '5',
      title: 'Cookies and Similar Technologies',
      content: 'Our website uses cookies, pixel tags, web beacons, and similar tracking technologies to optimize user experience, analyze traffic patterns, personalize content and advertising, and improve service functionality. Cookies may be session-based or persistent. Users can configure their browsers to reject cookies, although some functions may be limited as a result. We provide detailed information about cookie management in our Cookie Policy.',
    },
    {
      num: '6',
      title: 'Purpose of Processing',
      content: 'Personal data will be used exclusively to provide our services, manage user accounts, communicate with the Client, send relevant information about products and services, comply with legal and regulatory obligations, improve products and services, develop new services that meet customer needs, analyze usage patterns, prevent fraud, and enhance overall security and functionality of our platforms.',
    },
    {
      num: '7',
      title: 'Legal Basis for Processing',
      content: 'The processing of personal data is based on user consent, contract execution, compliance with legal obligations, protection of the user\'s vital interests, protection of our legitimate interests, or other bases permitted under applicable law. For each processing activity, we maintain clear documentation of the legal basis, ensuring compliance with the principle of lawfulness.',
    },
    {
      num: '8',
      title: 'Data Retention',
      content: 'Personal data will be retained only as long as necessary to fulfill the purposes stated in this policy or until the user requests its deletion, unless the law requires retention for a longer specified period. Different types of data are retained for different periods based on business necessity and legal requirements. We implement secure deletion and anonymization procedures to ensure data is permanently removed from our systems.',
    },
    {
      num: '9',
      title: 'Sharing of Information',
      content: 'ARK Platforms, Inc does not sell personal data to third parties for marketing purposes. We only share information with service providers, trusted partners, and competent authorities in strict compliance with legal obligations. Any third parties with access to personal data are bound by confidentiality agreements and are required to implement equivalent security measures. Sharing is limited to data that is strictly necessary for the specific purpose.',
    },
    {
      num: '10',
      title: 'International Data Transfers',
      content: 'In some cases, data may be transferred to servers located outside the local jurisdiction or the European Economic Area. All transfers are carried out in strict compliance with applicable law, including the GDPR. We ensure adequate protection levels through standard contractual clauses, adequacy decisions, or other legal mechanisms approved under data protection regulations.',
    },
    {
      num: '11',
      title: 'Information Security Measures',
      content: 'We implement appropriate technical, administrative, and organizational security measures to protect personal data against loss, unauthorized access, disclosure, alteration, or destruction. These measures include but are not limited to: encryption of data in transit and at rest, access controls based on the principle of least privilege, regular security audits, penetration testing, incident response procedures, and contingency planning for security incidents.',
    },
    {
      num: '12',
      title: 'User Rights',
      content: 'Users have the right to access their personal data, correct inaccurate information, delete their data subject to legal limitations, restrict processing of their information, object to processing, request the portability of their data in a structured format, and withdraw consent at any time. These rights can be exercised by contacting ARK Platforms, Inc through the official channels indicated in this policy, and we will respond within the timeframes required by applicable law.',
    },
    {
      num: '13',
      title: 'Withdrawal of Consent',
      content: 'When processing is based on user consent, it can be withdrawn at any time without affecting the lawfulness of prior processing conducted before withdrawal. Withdrawal can be made through the contact methods indicated in this policy. We will cease processing the data upon receipt of withdrawal, unless a different legal basis justifies continued processing.',
    },
    {
      num: '14',
      title: 'Protection of Minors',
      content: 'Our services are not directed at minors under 18 years old. We do not knowingly collect personal data from minors. If information from a minor is detected, it will be immediately deleted from our systems, and the responsible legal guardians will be informed without undue delay. We may seek verification of age to ensure compliance with this policy.',
    },
    {
      num: '15',
      title: 'Third-Party Services Integration',
      content: 'Some services offered by ARK Platforms, Inc may integrate third-party tools, such as payment processors, analytics providers, cloud hosting services, and communication tools. Data shared with these services will be limited to what is strictly necessary to provide the required functionality, always secured under confidentiality agreements and legal compliance. We carefully vet all third-party providers for their security practices and privacy commitments.',
    },
    {
      num: '16',
      title: 'Links to Third-Party Websites',
      content: 'Our website may contain links to third-party websites and services. ARK Platforms, Inc is not responsible for the privacy practices of these external sites and does not endorse their content or practices. We recommend reviewing the privacy policies of third-party sites before providing personal information to them, as their data handling practices may differ from ours.',
    },
    {
      num: '17',
      title: 'Commercial Communications',
      content: 'With prior user consent, we may send commercial information, promotional materials, newsletters, service updates, and news related to our services and offerings. Users can unsubscribe from marketing communications at any time using the cancellation links included in our emails or by contacting us directly. We will respect preferences and cease sending marketing materials promptly.',
    },
    {
      num: '18',
      title: 'Policy Updates and Notifications',
      content: 'Any change to this Privacy Policy will be notified by updating the effective date on this page. Material changes will be communicated via email to registered users or published prominently on our website. We recommend periodically reviewing this document to stay informed of any relevant modifications to our privacy practices and your rights.',
    },
    {
      num: '19',
      title: 'Activity Logs and Record Keeping',
      content: 'ARK Platforms, Inc maintains comprehensive internal records of personal data processing, including who accessed the information, when it was accessed, and what changes were made. These records ensure transparency, accountability, and compliance with applicable law. Records are retained for appropriate periods and securely disposed of when no longer needed.',
    },
    {
      num: '20',
      title: 'User Responsibility',
      content: 'Users agree to provide truthful, accurate, and complete information and not to attempt to access other users\' data or internal systems without authorization. Any violation of this policy or attempt to compromise the security of our systems may result in suspension or termination of services without liability. Users are responsible for maintaining the confidentiality of their login credentials.',
    },
    {
      num: '21',
      title: 'ARK Platforms Obligations',
      content: 'ARK Platforms, Inc is committed to processing personal data only for the purposes explicitly stated in this policy, ensuring confidentiality of all information, complying with all applicable laws and regulations, and applying all necessary technical and organizational measures to protect users\' information. We maintain accountability for our data handling practices and are prepared to demonstrate compliance upon request.',
    },
    {
      num: '22',
      title: 'Risk Assessments and Evaluations',
      content: 'We conduct periodic and ongoing risk assessments on the security and privacy practices of personal data to identify vulnerabilities, weaknesses, and potential threats. Based on these assessments, we apply preventive and corrective measures continuously, ensuring that our security posture evolves with emerging threats and technological advancements.',
    },
    {
      num: '23',
      title: 'Backup and Disaster Recovery',
      content: 'Backups of personal data are maintained for specific periods to ensure recovery in case of security incidents, system failures, or data loss. These backups are encrypted using the same standards as production data, are stored in secure locations, and are accessible only by authorized personnel with a specific business need.',
    },
    {
      num: '24',
      title: 'Data Protection Officer',
      content: 'ARK Platforms, Inc has appointed a Data Protection Officer (DPO) responsible for supervising compliance with privacy regulations, monitoring our data protection activities, and acting as a contact point for user inquiries and complaints regarding privacy. The DPO can be contacted at dpo@arkplatforms.eu for any privacy-related concerns.',
    },
    {
      num: '25',
      title: 'Security Incident Management',
      content: 'Any security incident involving personal data will be recorded, analyzed for root cause and impact, and communicated to the competent authorities and affected users as stipulated by applicable law. Our incident response plan involves immediate containment, investigation, remediation, and transparency with stakeholders about potential impacts.',
    },
    {
      num: '26',
      title: 'Internal Audits and Compliance Review',
      content: 'Periodic internal audits are conducted to verify the correct application of this policy, the effectiveness of data security measures, and compliance with legal and contractual obligations by ARK Platforms, Inc staff. Audit findings are documented and used to improve our privacy and security practices.',
    },
    {
      num: '27',
      title: 'Secure Deletion Procedures',
      content: 'When personal data is no longer necessary for the stated purposes or deletion is requested by the user, secure deletion procedures are applied. These include physical destruction of storage media, secure overwriting of digital data using industry-standard methods, and verification that data has been completely removed from all systems and backups.',
    },
    {
      num: '28',
      title: 'Explicit Consent Requirements',
      content: 'In all cases required by law or our policies, ARK Platforms, Inc obtains the user\'s explicit, informed consent before processing personal data. Consent requests are presented in clear language, separately from other terms, and users can withdraw consent at any time. We maintain records of all consent obtained for accountability purposes.',
    },
    {
      num: '29',
      title: 'Limitation of Liability',
      content: 'ARK Platforms, Inc will not be liable for indirect, incidental, special, or consequential damages arising from the use of services or any breach of privacy, except in cases of fraud, gross negligence, or willful misconduct. Users acknowledge and accept these limitations when using our services, and we maintain insurance coverage for data protection liabilities.',
    },
    {
      num: '30',
      title: 'Regulatory Compliance Framework',
      content: 'All processes and procedures related to the processing of personal data comply with applicable local and international laws, including the European Union\'s General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other relevant data protection laws in jurisdictions where we operate.',
    },
    {
      num: '31',
      title: 'Transparency and Accessibility',
      content: 'ARK Platforms, Inc ensures that users can clearly and accessibly understand how their data is collected, stored, used, and shared. We provide detailed information in plain language, avoid legal jargon where possible, and make privacy information easily accessible through our website and communications.',
    },
    {
      num: '32',
      title: 'Staff Training and Education',
      content: 'All ARK Platforms, Inc staff members with access to personal data receive mandatory periodic training in data protection, privacy best practices, and security awareness. This training ensures that our policies and internal procedures are correctly understood and applied consistently across the organization.',
    },
    {
      num: '33',
      title: 'Sensitive Data Protection Protocols',
      content: 'Data classified as sensitive, such as financial information, health data, religious beliefs, or biometric data, is handled with special care under reinforced security protocols. Access to sensitive data is limited to the minimum necessary personnel, and additional encryption, access controls, and monitoring are implemented.',
    },
    {
      num: '34',
      title: 'Third-Party Privacy Policy Review',
      content: 'Before integrating third-party services that process user data, we conduct thorough reviews of their privacy policies, terms of service, and security certifications. We ensure they meet our required protection standards and maintain contractual agreements to protect user data.',
    },
    {
      num: '35',
      title: 'Data Protection Impact Assessments',
      content: 'We conduct Data Protection Impact Assessments (DPIAs) when processing may pose a high risk to users\' rights and freedoms, particularly for new technologies or large-scale processing. Assessment findings inform the implementation of measures to mitigate identified risks and ensure compliance with privacy principles.',
    },
    {
      num: '36',
      title: 'Data Transfers in Corporate Events',
      content: 'In the event of mergers, acquisitions, or corporate reorganizations, personal data may be transferred to the resulting legal entity. Such transfers ensure continuity of data protection standards, respect users\' rights, and comply with applicable notification requirements. Users will be notified of any material changes to data handling.',
    },
    {
      num: '37',
      title: 'User Complaint Procedures',
      content: 'Users can file complaints with ARK Platforms, Inc regarding any perceived violation of their privacy rights. Complaints should be submitted in writing to privacy@arkplatforms.eu. Users also have the right to lodge complaints with the relevant data protection authority in their jurisdiction if they believe their rights have been violated.',
    },
    {
      num: '38',
      title: 'Communication of Policy Changes',
      content: 'Any significant changes to privacy procedures or policies will be communicated to users via email notification, website banners, or publication of the new policy version with a clear, prominent update date. Users will be given a reasonable period to review changes before they become effective.',
    },
    {
      num: '39',
      title: 'Monitoring and Continuous Compliance',
      content: 'Compliance with this policy is monitored through periodic reviews, internal and external audits, data access controls, and regular testing of security measures. We maintain compliance documentation and are prepared to demonstrate adherence to legal and contractual obligations upon request.',
    },
    {
      num: '40',
      title: 'Limitations on Data Use',
      content: 'Personal data provided by users will only be used for the specific purposes stated in this policy. Any use beyond these stated purposes requires prior explicit consent from the user. We do not sell data, use it for unrelated purposes, or share it with third parties for purposes not disclosed to the user.',
    },
    {
      num: '41',
      title: 'Data Breach Response and Notification',
      content: 'In the event of a confirmed security breach affecting personal data, rapid response procedures will be activated immediately. Affected users will be notified without undue delay, and competent authorities will be informed in accordance with applicable law. We will provide guidance on protective measures users should take.',
    },
    {
      num: '42',
      title: 'Staff Confidentiality and Agreements',
      content: 'All personnel with access to personal data are subject to strict confidentiality obligations through employment contracts, non-disclosure agreements, and internal policies. Breaches of confidentiality may result in disciplinary action, including termination of employment and legal consequences.',
    },
    {
      num: '43',
      title: 'Continuous Risk Management and Adaptation',
      content: 'ARK Platforms, Inc continuously evaluates risks to privacy and compliance with privacy policies, adapting procedures and security measures according to technological developments, emerging threats, and legislative changes. We remain proactive in addressing evolving privacy challenges.',
    },
    {
      num: '44',
      title: 'Encryption Standards and Protocols',
      content: 'All sensitive and personal data is transmitted and stored using robust encryption protocols, including TLS 1.2 or higher for data in transit and AES-256 for data at rest. Encryption keys are managed securely, and key rotation is performed regularly to maintain security effectiveness.',
    },
    {
      num: '45',
      title: 'Third-Party Integration Standards',
      content: 'Any integration with third-party platforms, APIs, or external services strictly complies with our established privacy requirements. We ensure that user data is not used for purposes other than those explicitly contracted, and we maintain service level agreements covering data protection and security.',
    },
    {
      num: '46',
      title: 'Documentation and Audit Trails',
      content: 'ARK Platforms, Inc maintains detailed, comprehensive documentation of all privacy procedures, conducted audits, security measures implemented, data processing activities, and compliance certifications. This documentation is available for internal inspection and to competent authorities when required by law.',
    },
    {
      num: '47',
      title: 'Acceptance of Privacy Policy',
      content: 'Use of the services implies the user\'s express and unconditional acceptance of this Privacy Policy as amended from time to time. By using our platforms, the user explicitly declares that they have read, understood, and accepted all provisions contained herein. Continued use after updates constitutes acceptance of changes.',
    },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=2400&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-eyebrow">Data Protection & Privacy</div>
          <h1>Privacy Policy</h1>
          <p>How ARK Platforms protects and respects your personal data. Our commitment to transparency, security, and compliance.</p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900, textAlign: 'center' }}>
          <div className="section-eyebrow">Policy</div>
          <h2 style={{ marginBottom: 28 }}>Privacy and Data Protection</h2>
          <p style={{ fontSize: 17, color: '#5a5a5a', lineHeight: 1.85, marginBottom: 10 }}>
            Effective Date: April 15, 2026
          </p>
          <p style={{ fontSize: 16, color: '#bfbab0', lineHeight: 1.8 }}>
            At ARK Platforms, Inc, we take the protection of your personal data seriously. This comprehensive policy outlines how we collect, process, store, and protect information you provide us, and your rights regarding that data. We comply with the GDPR, CCPA, and all applicable data protection laws.
          </p>
        </div>
      </section>

      {sections.map((section, idx) => (
        <section key={idx} className="section" style={{ background: idx % 2 === 0 ? '#fff' : 'var(--ark-ivory)' }}>
          <div className="section-inner" style={{ maxWidth: 900, textAlign: 'left' }}>
            <div style={{ marginBottom: 30 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginBottom: 16 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: '#b89b5e', minWidth: 50 }}>
                  {section.num}
                </div>
                <h3 style={{ margin: 0, fontSize: 22 }}>{section.title}</h3>
              </div>
              <p style={{ fontSize: 16, color: '#5a5a5a', lineHeight: 1.85, marginLeft: 70 }}>
                {section.content}
              </p>
            </div>
          </div>
        </section>
      ))}

      <section className="section dark" style={{ textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 820 }}>
          <div className="section-eyebrow">Your Privacy Matters</div>
          <h2 style={{ marginBottom: 24, color: 'var(--ark-ivory)' }}>We protect your data with the highest standards.</h2>
          <p style={{ fontSize: 17, color: '#bfbab0', marginBottom: 40 }}>
            If you have questions about this Privacy Policy or concerns about your data, contact our Data Protection Officer at dpo@arkplatforms.eu or use the form below. We respond to all inquiries within 30 days.
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Contact Us</Link>
            <Link href="/gdpr" className="btn-ghost">GDPR Compliance</Link>
          </div>
        </div>
      </section>
    </>
  );
}
