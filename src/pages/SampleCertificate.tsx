import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CertificateMarksheet.css'
import './PagesCommon.css'

export default function SampleCertificate() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Official Credential Format</span>
          <h1 className="inner-hero-title">Official Sample Certificate</h1>
          <p className="inner-hero-subtitle">
            Authentic ISO 9001:2015 accredited, MCA & NITI Aayog recognized certificate awarded to successful candidates.
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
        {/* TOOLBAR */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '20px' }} className="no-print">
          <div>
            <h2 style={{ margin: 0, color: '#1e3a8a' }}>Standard Student Certificate</h2>
            <p style={{ margin: '3px 0 0', color: '#64748b', fontSize: '14px' }}>
              High-security certificate with anti-duplication serials, QR code, and holographic seal.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link to="/franchise/sample-marksheet" className="course-apply-btn" style={{ background: '#b45309', padding: '10px 18px', fontSize: '13px' }}>
              📊 View Sample Mark Sheet ➔
            </Link>
            <button onClick={handlePrint} className="print-form-btn" style={{ padding: '10px 20px', fontSize: '13px' }}>
              🖨️ Print Certificate
            </button>
          </div>
        </div>

        {/* AUTHENTIC CERTIFICATE FRAME */}
        <div className="cert-sample-frame">
          {/* TOP METADATA ROW */}
          <div className="cert-top-meta-row">
            <div>
              <span>Enrollment No. :- </span><strong style={{ color: '#1e3a8a' }}>SWF20260150</strong><br />
              <span>Roll No. :- </span><strong>20260150</strong>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span>Serial No. - </span><strong style={{ color: '#d97706' }}>10139</strong><br />
              <span>Certificate No. - </span><strong>260139</strong>
            </div>
          </div>

          {/* HEADER */}
          <div className="cert-header-content">
            <img src="./logo.png" alt="Shikashvik Welfare Foundation" style={{ height: '60px', marginBottom: '4px' }} />
            <h2 className="cert-org-title">SHIKASHVIK INSTITUTE</h2>
            <h3 className="cert-org-sub">An Autonomous Institute of Shikashvik Welfare Foundation</h3>
            <p className="cert-statutory-text">
              Registered Section 8 Non-Profit under the Companies Act, 2013, Ministry of Corporate Affairs, Govt. of India<br />
              Regd. with NITI Aayog (DARPAN) • Regd. with MSME (UDYAM) • CSR Reg. Approved
            </p>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#1e3a8a', marginTop: '4px', letterSpacing: '0.5px' }}>
              An ISO 9001:2015 Certified Organisation
            </div>
          </div>

          {/* CERTIFICATE TITLE */}
          <div style={{ textAlign: 'center' }}>
            <div className="cert-main-word">Certificate</div>
            <div className="cert-certify-line">This is to certify that</div>

            {/* STUDENT PHOTO IN FRAME */}
            <div className="cert-photo-container">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                alt="Student Photo"
              />
            </div>

            <div className="cert-student-highlight">
              Devesh Kumar S/O Man Pal Singh
            </div>

            <div style={{ fontStyle: 'italic', fontSize: '15px', color: '#475569', margin: '4px 0' }}>
              On Successful Completion of
            </div>

            <div className="cert-course-highlight">
              Course On Computer Concepts (CCC)
            </div>

            <div className="cert-details-prose">
              Conducted From <strong>01 Apr. 2026</strong> To <strong>30 Jun. 2026</strong><br />
              Duration <strong>3 Months</strong> &nbsp;|&nbsp; In the <strong>A</strong> Grade From Our Training Center<br />
              At - <strong>Youcca Institute Of Computer Education, Etah</strong>
            </div>

            {/* BADGES ROW */}
            <div className="cert-badges-row">
              <span className="cert-badge-chip">🇮🇳 Skill India</span>
              <span className="cert-badge-chip">🏢 MSME</span>
              <span className="cert-badge-chip">🌐 Digital India</span>
              <span className="cert-badge-chip">⭐ ISO 9001:2015</span>
              <span className="cert-badge-chip">📜 IAF Accredited</span>
            </div>

            {/* SIGNATURES & QR ROW */}
            <div className="cert-signatures-row">
              <div>
                <span style={{ fontSize: '11px', color: '#64748b' }}>Date of Issue : <strong>17/07/2026</strong></span><br />
                <span style={{ fontSize: '10px', background: '#ecfdf5', color: '#065f46', padding: '2px 6px', borderRadius: '3px', fontWeight: 700 }}>
                  ✓ Digitally Verified
                </span>
              </div>

              <div className="cert-sig-item">
                <div className="cert-sig-line">Center Head</div>
              </div>

              <div className="cert-sig-item">
                <div className="cert-sig-line">Exam Controller<br />Shikashvik Institute</div>
              </div>

              <div className="cert-sig-item">
                <div className="cert-sig-line">Auth. Sign.</div>
              </div>
            </div>
          </div>
        </div>

        {/* SECURITY NOTE */}
        <div className="content-card no-print" style={{ marginTop: '30px' }}>
          <h3 style={{ margin: '0 0 10px', color: '#1e3a8a' }}>Official Verification Instructions</h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
            Every certificate issued by Shikashvik Welfare Foundation can be verified 24x7 online through the{' '}
            <Link to="/student-zone/verification" style={{ color: '#4b087d', fontWeight: 700 }}>
              Student Verification Portal
            </Link>{' '}
            by entering Roll Number (<code>20260150</code>) or Enrollment Number (<code>SWF20260150</code>).
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
