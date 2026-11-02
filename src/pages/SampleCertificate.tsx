import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './PagesCommon.css'

export default function SampleCertificate() {
  const securityFeatures = [
    { title: 'Dynamic QR Code Verification', desc: 'Scan via smartphone camera to verify student credentials directly on the official foundation portal.' },
    { title: 'Unique Serial / Roll Number', desc: 'Every certificate is registered with a unique central database serial number preventing duplication.' },
    { title: 'ISO 9001:2015 Quality Seal', desc: 'Quality Management System accredited certificate issued under international parameters.' },
    { title: 'Hologram & High Security Border', desc: 'Special security Guilloche border and anti-photocopy security patterns.' },
    { title: 'Section 8 Company MCA Seal', desc: 'Legally registered non-profit company seal registered under the Companies Act, 2013, Govt. of India.' },
  ]

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Credential Quality</span>
          <h1 className="inner-hero-title">Sample Certificate</h1>
          <p className="inner-hero-subtitle">
            Preview of the government-recognized, ISO accredited certificate awarded to successful learners.
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Franchise</span>
            <span>/</span>
            <span>Sample Certificate</span>
          </div>
        </div>
      </section>

      <div className="page-content-container">
        <div className="content-card">
          <h2>Official Certificate Preview & Security Standards</h2>
          <p>
            Shikashvik Welfare Foundation provides tamper-proof, professionally designed certificates to students completing computer, vocational, and skill courses through our authorized network of study centers.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', margin: '30px 0', alignItems: 'center' }}>
            {/* CERTIFICATE VISUAL CARD */}
            <div style={{ background: '#fffbeb', border: '8px double #4b087d', borderRadius: '14px', padding: '24px', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <img src="./logo.png" alt="Foundation Logo" style={{ height: '48px' }} />
                <div style={{ textAlign: 'right', fontSize: '11px', color: '#64748b' }}>
                  <strong>ISO 9001:2015</strong><br />Certified NGO
                </div>
              </div>

              <h3 style={{ fontFamily: 'Georgia, serif', color: '#4b087d', fontSize: '20px', margin: '10px 0 4px' }}>
                SHIKASHVIK WELFARE FOUNDATION
              </h3>
              <small style={{ color: '#64748b', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Section 8 Non-Profit • Under MCA, Govt. of India
              </small>

              <div style={{ margin: '18px 0', fontSize: '13px', color: '#1e293b' }}>
                <p style={{ fontStyle: 'italic', margin: '0 0 6px' }}>This is to certify that</p>
                <h4 style={{ fontSize: '18px', color: '#b45309', margin: '4px 0' }}>RAHUL KUMAR SHAKYA</h4>
                <p style={{ margin: '4px 0', fontSize: '12px', color: '#64748b' }}>S/o Shri Ramesh Kumar Shakya</p>
                <p style={{ margin: '8px 0 4px', fontSize: '12.5px' }}>
                  has successfully completed <strong>Advanced Diploma in Computer Applications (ADCA)</strong> of 12 Months duration with <strong>Grade A+ (92%)</strong>
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed #cbd5e1', paddingTop: '14px', marginTop: '16px', fontSize: '11px' }}>
                <div>
                  <strong>QR Code</strong><br />
                  <span>[ Scan to Verify ]</span>
                </div>
                <div>
                  <span style={{ color: '#059669', fontWeight: 800 }}>✓ VERIFIED</span><br />
                  <span>Serial: SWF-2026-9481</span>
                </div>
                <div>
                  <strong>Authorized Signatory</strong><br />
                  <span>Exam Controller</span>
                </div>
              </div>
            </div>

            {/* SECURITY FEATURES LIST */}
            <div>
              <h3 style={{ margin: '0 0 16px', color: '#1e1b4b' }}>Key Security & Verification Features</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {securityFeatures.map((f, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', background: '#f8fafc', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <span style={{ color: '#10b981', fontWeight: 800, fontSize: '16px' }}>✓</span>
                    <div>
                      <strong style={{ fontSize: '14px', color: '#1e1b4b' }}>{f.title}</strong>
                      <p style={{ margin: '2px 0 0', fontSize: '12.5px', color: '#64748b' }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link to="/franchise/apply" className="course-apply-btn" style={{ display: 'inline-block', padding: '12px 28px' }}>
              Affiliate Your Center to Award Certificates →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
