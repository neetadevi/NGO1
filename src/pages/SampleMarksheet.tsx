import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CertificateMarksheet.css'
import './PagesCommon.css'

export default function SampleMarksheet() {
  const subjects = [
    { name: 'Introduction to Computers', maxTh: 70, th: 48, maxPr: 30, pr: 29, total: 77, words: 'Seven Seven' },
    { name: 'Introduction to GUI Based Operating System', maxTh: 70, th: 43, maxPr: 30, pr: 28, total: 71, words: 'Seven One' },
    { name: 'Elements of Word Processing', maxTh: 70, th: 49, maxPr: 30, pr: 29, total: 78, words: 'Seven Eight' },
    { name: 'SpreadSheet', maxTh: 70, th: 48, maxPr: 30, pr: 28, total: 76, words: 'Seven Six' },
    { name: 'Computer Communication & Internet', maxTh: 70, th: 50, maxPr: 30, pr: 28, total: 78, words: 'Seven Eight' },
    { name: 'WWW & Web Browser', maxTh: 70, th: 51, maxPr: 30, pr: 29, total: 80, words: 'Eight Zero' },
    { name: 'Communication & Collaboration', maxTh: 70, th: 53, maxPr: 30, pr: 27, total: 80, words: 'Eight Zero' },
    { name: 'LibreOffice', maxTh: 70, th: 49, maxPr: 30, pr: 29, total: 78, words: 'Seven Eight' },
  ]

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Academic Transcript</span>
          <h1 className="inner-hero-title">Official Statement of Marks</h1>
          <p className="inner-hero-subtitle">
            Authentic mark sheet transcript showing detailed theory, practical, viva evaluations, and grades.
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Franchise</span>
            <span>/</span>
            <span>Sample Mark sheet</span>
          </div>
        </div>
      </section>

      <div className="page-content-container">
        {/* TOOLBAR */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '20px' }} className="no-print">
          <div>
            <h2 style={{ margin: 0, color: '#1e3a8a' }}>Standard Mark Sheet Format</h2>
            <p style={{ margin: '3px 0 0', color: '#64748b', fontSize: '14px' }}>
              Subject-wise evaluation breakdown with tamper-proof security watermark.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link to="/franchise/sample-certificate" className="course-apply-btn" style={{ background: '#b45309', padding: '10px 18px', fontSize: '13px' }}>
              📜 View Sample Certificate ➔
            </Link>
            <button onClick={handlePrint} className="print-form-btn" style={{ padding: '10px 20px', fontSize: '13px' }}>
              🖨️ Print Mark Sheet
            </button>
          </div>
        </div>

        {/* AUTHENTIC MARKSHEET FRAME */}
        <div className="marksheet-sample-frame">
          {/* HEADER */}
          <div className="marksheet-header-box">
            <img src="./logo.png" alt="Shikashvik Welfare Foundation" style={{ height: '54px', marginBottom: '4px' }} />
            <h2 className="marksheet-org-title">SHIKASHVIK INSTITUTE</h2>
            <h3 className="marksheet-org-sub">An Autonomous Institute of Shikashvik Welfare Foundation</h3>
            <p style={{ fontSize: '11px', color: '#4b5563', margin: 0 }}>
              Registered Section 8 Non-Profit under Companies Act, 2013, Ministry of Corporate Affairs, Govt. of India<br />
              Regd. Skill Provider of Ministry of Labour & Employment • Regd. with MSME • NITI Aayog DARPAN
            </p>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#1e3a8a', marginTop: '4px' }}>
              An ISO 9001:2015 Certified Organisation
            </div>

            <div className="marksheet-title-banner">
              STATEMENT OF MARKS
            </div>

            <div className="marksheet-course-title">
              Course On Computer Concepts (CCC)
            </div>
          </div>

          {/* STUDENT INFO GRID */}
          <div className="marksheet-info-grid">
            <div className="marksheet-info-col">
              <div className="ms-info-row">
                <strong>Enrollment No. :-</strong>
                <span>SWF20260150</span>
              </div>
              <div className="ms-info-row">
                <strong>Student's Name :-</strong>
                <span style={{ fontWeight: 800, color: '#1e3a8a' }}>Devesh Kumar</span>
              </div>
              <div className="ms-info-row">
                <strong>Father's Name :-</strong>
                <span>Man Pal Singh</span>
              </div>
            </div>

            <div className="marksheet-info-col">
              <div className="ms-info-row">
                <strong>Roll No. :-</strong>
                <span>20260150</span>
              </div>
              <div className="ms-info-row">
                <strong>D.O.B. :-</strong>
                <span>21/06/1997</span>
              </div>
              <div className="ms-info-row">
                <strong>Center Code :-</strong>
                <span>SALT/UP/046</span>
              </div>
            </div>

            {/* STUDENT PHOTO */}
            <div className="marksheet-photo-thumb">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                alt="Candidate Photo"
              />
            </div>
          </div>

          <div style={{ fontSize: '12.5px', marginBottom: '10px' }}>
            <strong>Center Name :- </strong>
            <span>Youcca Institute Of Computer Education, Etah</span>
          </div>

          {/* MARKS TABLE */}
          <table className="marksheet-table">
            <thead>
              <tr>
                <th rowSpan={2} style={{ textAlign: 'left', width: '38%' }}>Subject</th>
                <th colSpan={2}>Theory</th>
                <th colSpan={2}>Practical</th>
                <th rowSpan={2} style={{ width: '60px' }}>Total</th>
                <th rowSpan={2} style={{ width: '120px' }}>Total in Words</th>
              </tr>
              <tr>
                <th style={{ width: '45px' }}>Max</th>
                <th style={{ width: '55px' }}>Marks Obt.</th>
                <th style={{ width: '45px' }}>Max</th>
                <th style={{ width: '55px' }}>Marks Obt.</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((s, idx) => (
                <tr key={idx}>
                  <td className="sub-name-cell">{s.name}</td>
                  <td>{s.maxTh}</td>
                  <td>{s.th}</td>
                  <td>{s.maxPr}</td>
                  <td>{s.pr}</td>
                  <td><strong>{s.total}</strong></td>
                  <td style={{ fontSize: '10.5px' }}>{s.words}</td>
                </tr>
              ))}
              <tr className="total-row">
                <td style={{ textAlign: 'left' }}>Result/Division : <strong>Pass / First Division</strong></td>
                <td colSpan={4} style={{ textAlign: 'right' }}>Grand Total :</td>
                <td style={{ color: '#059669', fontSize: '13px' }}>618/800</td>
                <td style={{ fontSize: '11px', fontWeight: 800 }}>Six One Eight</td>
              </tr>
            </tbody>
          </table>

          {/* MARKSHEET SUMMARY */}
          <div className="marksheet-summary-box">
            <div>
              <strong>Overall Percentage :- </strong>
              <span style={{ fontSize: '14px', fontWeight: 800, color: '#059669' }}>77 %</span>
            </div>
            <div>
              <strong>Grade :- </strong>
              <span style={{ fontSize: '14px', fontWeight: 800, color: '#1e3a8a' }}>A</span>
            </div>
            <div>
              <strong>Status :- </strong>
              <span style={{ fontSize: '12px', background: '#ecfdf5', color: '#065f46', padding: '2px 8px', borderRadius: '3px', fontWeight: 800 }}>
                ✓ PASSED
              </span>
            </div>
          </div>

          <div className="marksheet-legend">
            Grade Distinction: (above 90%) S, (89% to 70%) A, (69% to 50%) B, (49% to 33%) C, Failed F
          </div>

          {/* SIGNATURES ROW */}
          <div className="cert-signatures-row" style={{ marginTop: '16px' }}>
            <div>
              <span style={{ fontSize: '11px', color: '#64748b' }}>Date :- <strong>17/07/2026</strong></span>
            </div>
            <div className="cert-sig-item">
              <div className="cert-sig-line">Checked By</div>
            </div>
            <div className="cert-sig-item">
              <div className="cert-sig-line">Center Head</div>
            </div>
            <div className="cert-sig-item">
              <div className="cert-sig-line">Exam Controller<br />Shikashvik Institute</div>
            </div>
          </div>

          {/* FOOTER ADDRESS */}
          <div className="marksheet-footer-strip">
            <strong>H.O. Registered Office : </strong>
            C/o Ankit Shakya, Dhumari, Dhumari, Aliganj, Etah (U.P.) - 207248 | Helpline No.- 8445020016 | Website- shikashvikwelfare.org.in
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
