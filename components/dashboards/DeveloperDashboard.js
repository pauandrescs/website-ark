export default function DeveloperDashboard() {
  return (
    <div className="animate-fade-in" style={{ color: '#00ff41', background: '#0a0a0a', padding: 40, borderRadius: 16, minHeight: '80vh', fontFamily: 'monospace' }}>
      <div style={{ marginBottom: 40, borderBottom: '1px solid #1a1a1a', paddingBottom: 20 }}>
        <h1 style={{ fontSize: 24 }}>[ ARK_TECHNICAL_FORGE ]</h1>
        <p style={{ color: '#008f11', fontSize: 14 }}>{'>'} Status: Systems Operational | Node: Alpha-7</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20, marginBottom: 40 }}>
        <div style={{ border: '1px solid #1a1a1a', padding: 20 }}>
          <div style={{ fontSize: 12, marginBottom: 10 }}>API_REQUESTS_24H</div>
          <div style={{ fontSize: 32 }}>142,891</div>
        </div>
        <div style={{ border: '1px solid #1a1a1a', padding: 20 }}>
          <div style={{ fontSize: 12, marginBottom: 10 }}>LATENCY_AVG</div>
          <div style={{ fontSize: 32 }}>24ms</div>
        </div>
      </div>

      <div style={{ background: '#000', padding: 20, border: '1px solid #1a1a1a' }}>
        <div style={{ marginBottom: 10 }}>[ SYSTEM_LOGS ]</div>
        <div style={{ fontSize: 13, color: '#008f11', lineHeight: 1.6 }}>
          {'>'} User.auth.success (Google) - 14:32:01<br/>
          {'>'} Database.query.blog (34ms) - 14:32:05<br/>
          {'>'} API.route.onboarding.completed - 14:32:10<br/>
          {'>'} Warn: Latency spike in Frankfurt node - 14:31:00
        </div>
      </div>

      <div style={{ marginTop: 40 }}>
        <button style={{ background: '#00ff41', color: '#000', border: 'none', padding: '12px 24px', fontWeight: 'bold', cursor: 'pointer' }}>
          GENERATE_API_KEY
        </button>
      </div>
    </div>
  );
}
