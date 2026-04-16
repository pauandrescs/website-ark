import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions — ARK Platforms',
};

export default function TermsOfService() {
  const sections = [
    {
      num: '1',
      title: 'Purpose of the Terms and Conditions',
      content: 'This document governs the terms and conditions under which users access and use the services offered by ARK Platforms, Inc. Through this agreement, rights, obligations, and limitations are established for both parties, providing a contractual framework that protects both the company and clients against potential conflicts arising from the provision of services. These Terms and Conditions establish a binding legal agreement between ARK Platforms, Inc and any individual or legal entity accessing or using our services.',
    },
    {
      num: '2',
      title: 'Definitions',
      content: 'For interpretive purposes, "Client" refers to the natural or legal person contracting services from ARK Platforms, Inc; "Services" refers to any development, advisory, support, or maintenance provided by the company; "Contract" refers to this document with its annexes; "Parties" refers to both ARK Platforms, Inc and the Client; "Deliverables" refers to all tangible and intangible outputs produced in connection with the Services; and "Force Majeure" refers to extraordinary events beyond the reasonable control of either party.',
    },
    {
      num: '3',
      title: 'Acceptance of the Terms',
      content: 'The use of the services constitutes express and unconditional acceptance of these Terms and Conditions. Acceptance may be manifested through digital signature, physical signature, or continued use of the services. By proceeding with service engagement, the Client acknowledges having read, understood, and agreed to all terms herein. Any amendments or modifications must be made in writing and executed by authorized representatives of both parties.',
    },
    {
      num: '4',
      title: 'Modification of the Terms',
      content: 'ARK Platforms, Inc may modify these Terms and Conditions at any time to adapt them to legislative, technological, or market changes. The modifications will be published on this page with the date of last update, and continued use of the services will imply acceptance. Clients will be notified of material changes via email at least thirty (30) days in advance.',
    },
    {
      num: '5',
      title: 'Description of the Services',
      content: 'ARK Platforms, Inc offers comprehensive services including technology consulting, custom software development, mobile applications, interface and user experience design, technical support and maintenance, system architecture and infrastructure planning, quality assurance and testing, business incorporation advisory, cloud migration services, and ongoing technical stewardship.',
    },
    {
      num: '6',
      title: 'Capacity to Contract',
      content: 'Only persons of legal age with full legal capacity may contract the services. In the case of legal persons, contracting must be carried out through duly authorized legal representatives who possess the authority to bind their organization. ARK Platforms, Inc reserves the right to request proof of authorization before commencing services.',
    },
    {
      num: '7',
      title: 'Obligations of the Client',
      content: 'The Client commits to use the services diligently, lawfully, and in accordance with the established conditions. The Client agrees to provide timely and truthful information necessary for service delivery, maintain confidentiality of access credentials and sensitive information, refrain from activities that may harm the technological infrastructure of the company or third parties, and cooperate fully with ARK Platforms personnel in achieving project objectives.',
    },
    {
      num: '8',
      title: 'Obligations of the Company',
      content: 'ARK Platforms, Inc commits to delivering the contracted services with the highest professional diligence, respecting agreed deadlines and quality standards, maintaining professional conduct and ethical business practices, providing regular progress updates to the Client, responding to reasonable inquiries within two (2) business days, and ensuring adequate staffing with qualified professionals.',
    },
    {
      num: '9',
      title: 'Contracting and Payment',
      content: 'The contracting of services is perfected by acceptance of a financial proposal, budget, or pricing plan previously issued by the company. The Client must pay the agreed amounts within the established deadlines. Invoices will be issued according to project milestones or monthly intervals as specified in the service agreement. Late payments may result in the suspension of services pending settlement.',
    },
    {
      num: '10',
      title: 'Pricing and Invoicing',
      content: 'Service prices will be indicated in the proposal accepted by the Client and may include applicable taxes according to jurisdiction. The company will issue the corresponding invoice in digital or physical format. Prices are valid for thirty (30) days from the proposal date. Any changes in scope of work will be subject to revised pricing. Currency and payment terms will be specified in the individual service agreement.',
    },
    {
      num: '11',
      title: 'Warranties',
      content: 'ARK Platforms, Inc warrants that its services will be provided according to industry technology standards and best practices. The Company warrants that it possesses the necessary expertise and resources to deliver the Services professionally. However, the company does not guarantee that services will be error-free or uninterrupted, nor that all technical challenges may be predictably resolved. Software and systems are provided without warranty of merchantability or fitness for a particular purpose.',
    },
    {
      num: '12',
      title: 'Limitation of Liability',
      content: 'The company\'s liability shall be limited to the amount actually paid by the Client for the specific service that caused harm, not to exceed the fees paid in the twelve (12) months preceding the claim. In no event shall the company be liable for indirect losses, lost profits, loss of revenue, loss of data, or consequential damages, even if advised of the possibility of such damages. This limitation applies to all claims regardless of whether they arise from contract, tort, strict liability, or other legal theories.',
    },
    {
      num: '13',
      title: 'Intellectual Property',
      content: 'All developments, designs, software, documentation, code, architecture, or material created by ARK Platforms, Inc shall remain the intellectual property of the company, unless explicitly agreed otherwise in a separate written agreement. The Client shall have only a limited, non-exclusive, and non-transferable license to use the deliverables for the purpose specified in the contract. The Client may not resell, redistribute, or sublicense deliverables without prior written consent.',
    },
    {
      num: '14',
      title: 'Ownership of Data',
      content: 'Data provided by the Client shall remain the sole property of the Client. ARK Platforms, Inc will use Client data only to the extent necessary to provide the contracted Services, always complying with applicable data protection laws and regulations. Upon completion or termination of the engagement, all Client data will be returned or securely destroyed as requested.',
    },
    {
      num: '15',
      title: 'Personal Data Protection',
      content: 'The company complies with international data protection regulations, including the EU General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other applicable privacy laws. Personal data will be processed lawfully, fairly, and transparently. ARK Platforms, Inc will implement appropriate technical and organizational measures to protect against unauthorized processing. Data processing agreements are available upon request.',
    },
    {
      num: '16',
      title: 'Confidentiality',
      content: 'Both parties undertake to maintain strict confidentiality of all technical, commercial, strategic, or proprietary information accessed during the term of the contract and for a period of three (3) years thereafter. This obligation does not apply to information that is publicly available, independently developed, or required to be disclosed by law. Trade secrets related to ARK Platforms methods and practices shall be protected indefinitely.',
    },
    {
      num: '17',
      title: 'Technical Support',
      content: 'ARK Platforms, Inc will provide technical support at the times and in the manner previously agreed with the Client. Support may include bug fixes, performance optimization, documentation updates, and advisory consultations. Support hours will be specified in the service agreement. Emergency support outside standard hours may be available for an additional fee.',
    },
    {
      num: '18',
      title: 'Service Availability',
      content: 'The company will make reasonable efforts to ensure continuous availability of its services, except for interruptions due to scheduled maintenance, critical updates, security patches, or force majeure events. Scheduled maintenance will be communicated at least forty-eight (48) hours in advance. ARK Platforms, Inc aims for ninety-nine percent (99%) uptime availability for production systems.',
    },
    {
      num: '19',
      title: 'Delivery Times',
      content: 'Delivery times for projects or services will be established in the specific contract signed with the Client. Timelines may be affected by external causes beyond reasonable control, including but not limited to Client delays in providing required information, third-party dependencies, regulatory changes, or unforeseen technical challenges. Any delays will be communicated promptly to the Client.',
    },
    {
      num: '20',
      title: 'Early Termination',
      content: 'Either party may terminate the contract early with written notice of at least thirty (30) days in advance. Upon termination, the Client remains responsible for payment of all work completed to date and reasonable expenses incurred. Work in progress will be compensated at the hourly rate specified in the agreement. Documentation and deliverables completed at time of termination will be provided within five (5) business days.',
    },
    {
      num: '21',
      title: 'Right of Withdrawal',
      content: 'Clients acting as consumers may exercise the right of withdrawal under applicable law, provided the service has not commenced or commenced digital products have not been delivered. The withdrawal period is fourteen (14) days from the date of contract signature. This right does not apply to custom development services where work has begun or to business-to-business contracts.',
    },
    {
      num: '22',
      title: 'Assignment of the Contract',
      content: 'The Client may not assign or transfer rights and obligations arising from this contract without prior written consent from ARK Platforms, Inc. ARK Platforms, Inc retains the right to assign its obligations to affiliated companies provided the quality and scope of services remain unchanged and the Client is notified in writing.',
    },
    {
      num: '23',
      title: 'Subcontracting',
      content: 'ARK Platforms, Inc may rely on external collaborators, specialized consultants, or associated companies to execute parts of the services, while retaining primary responsibility to the Client. Subcontractors are bound by confidentiality obligations equivalent to those contained herein. The Client will be informed of any material subcontracting arrangements.',
    },
    {
      num: '24',
      title: 'Hardware and Equipment Ownership',
      content: 'Servers, licenses, software libraries, development tools, and infrastructure used to deliver services shall remain the property of ARK Platforms, Inc, unless expressly agreed otherwise in writing. The Client receives a non-exclusive license to use deliverables only for authorized purposes. Cloud services and third-party platforms remain governed by their respective terms of service.',
    },
    {
      num: '25',
      title: 'Use of Trademarks and Logos',
      content: 'The use of trademarks, logos, trade names, domain names, or other distinctive signs of ARK Platforms, Inc is prohibited without prior written authorization. The Client may not use ARK Platforms branding in marketing materials without explicit permission. ARK Platforms, Inc reserves the right to reference completed projects for promotional purposes unless otherwise agreed.',
    },
    {
      num: '26',
      title: 'Communication Between Parties',
      content: 'All communications between the Parties must be made in writing, either via email, certified letter, or any electronic means that provides proof of receipt. Official correspondence should be directed to the addresses or email addresses specified in the service agreement. Verbal instructions will not be considered binding unless subsequently confirmed in writing.',
    },
    {
      num: '27',
      title: 'Language of the Contract',
      content: 'This contract is drafted in Spanish as the primary version. In case of translation to other languages for convenience, the Spanish version shall prevail in case of interpretative discrepancies, ambiguities, or conflicts. Both parties acknowledge they have had the opportunity to review this document in their preferred language.',
    },
    {
      num: '28',
      title: 'Partial Nullity',
      content: 'If any clause of this contract is declared null, void, or unenforceable by a competent authority or court of law, it shall not affect the validity of the remaining provisions, which shall remain fully enforceable. The parties agree that any invalid provision shall be modified to the minimum extent necessary to make it enforceable while preserving the original intent.',
    },
    {
      num: '29',
      title: 'Applicable Law',
      content: 'This contract shall be governed and interpreted in accordance with the laws of the State of Delaware, United States, unless consumer protection laws establish another mandatory jurisdiction. The choice of law provision is intended to provide predictable legal framework for international commercial transactions and does not limit consumer rights under local law.',
    },
    {
      num: '30',
      title: 'Jurisdiction and Dispute Resolution',
      content: 'For the resolution of any dispute arising from this contract, the Parties expressly submit to the jurisdiction of the courts of Wilmington, Delaware, waiving any other jurisdiction that might correspond to them. Before pursuing litigation, the Parties agree to attempt resolution through good-faith negotiation and, if necessary, mediation. Costs of dispute resolution shall be borne by the party who initiated proceedings.',
    },
    {
      num: '31',
      title: 'Entire Agreement',
      content: 'These Terms and Conditions, together with any service proposal, statement of work, or service agreement, constitute the entire agreement between the parties regarding the subject matter hereof. All prior negotiations, representations, and agreements, whether written or oral, are superseded by this agreement. No modification of these terms shall be effective unless made in writing and executed by authorized representatives of both parties.',
    },
    {
      num: '32',
      title: 'Contact and Support',
      content: 'For questions regarding these Terms and Conditions or requests for clarification, please contact ARK Platforms, Inc at info@arkplatforms.eu or through the contact form on our website. Our team will respond to inquiries within two (2) business days. We maintain a comprehensive FAQ section addressing common questions about our services and terms.',
    },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2400&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-eyebrow">Legal Agreement</div>
          <h1>Terms and Conditions</h1>
          <p>Comprehensive terms governing the use of ARK Platforms services. Please read carefully before engaging our services.</p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900, textAlign: 'center' }}>
          <div className="section-eyebrow">Agreement</div>
          <h2 style={{ marginBottom: 28 }}>Terms Governing ARK Platforms Services</h2>
          <p style={{ fontSize: 17, color: '#5a5a5a', lineHeight: 1.85, marginBottom: 10 }}>
            Effective Date: April 15, 2026
          </p>
          <p style={{ fontSize: 16, color: '#bfbab0', lineHeight: 1.8 }}>
            This document establishes the contractual framework between ARK Platforms, Inc and clients who engage our services. By accessing our services or signing a service agreement, you acknowledge acceptance of these terms.
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
          <div className="section-eyebrow">Agreement Acceptance</div>
          <h2 style={{ marginBottom: 24, color: 'var(--ark-ivory)' }}>By using our services, you agree to these terms.</h2>
          <p style={{ fontSize: 17, color: '#bfbab0', marginBottom: 40 }}>
            Your engagement with ARK Platforms constitutes acceptance of this agreement. If you have questions or concerns about any provision, contact our team for clarification before proceeding.
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Inquire About Services</Link>
            <Link href="/" className="btn-ghost">Return to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
