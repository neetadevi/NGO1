import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CertificateMarksheet.css'
import './PagesCommon.css'

export default function SampleMarksheet() {
  const handlePrint = () => {
    window.print()
  }

  // 8 Subjects from Authentic Scan
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

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="inner-hero-banner no-print">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Academic Transcript Format</span>
          <h1 className="inner-hero-title">Official Statement of Marks</h1>
          <p className="inner-hero-subtitle">
            Authentic academic marksheet showing theory, practical, total in words, and division awarded by Shikashvik Institute.
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Franchise</span>
            <span>/</span>
            <span>Sample Marksheet</span>
          </div>
        </div>
      </section>

      <div className="page-content-container">
        {/* TOOLBAR */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '20px' }} className="no-print">
          <div>
            <h2 style={{ margin: 0, color: '#1e3a8a' }}>Official Academic Transcript</h2>
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

        {/* AUTHENTIC MARKSHEET FRAME - 100% MATCHING ATTACHED PDF SCAN */}
        <div className="marksheet-sample-frame" id="printable-marksheet">
          {/* HEADER SECTION */}
          <div className="marksheet-header-box">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <img src="./logo.png" alt="Shikashvik Welfare Foundation" style={{ height: '62px' }} />
            </div>

            <h2 className="marksheet-org-title">SHIKASHVIK INSTITUTE</h2>
            <h3 className="marksheet-org-sub">AN AUTONOMOUS INSTITUTE OF SHIKASHVIK WELFARE FOUNDATION</h3>
            
            <p className="marksheet-statutory-line">
              Registered Section 8 Non-Profit under Companies Act, 2013, Ministry of Corporate Affairs, Govt. of India<br />
              Regd. Skill Provider of Ministry of Labour & Employment • Regd. with MSME • NITI Aayog DARPAN
            </p>

            <div className="marksheet-iso-badge">
              An ISO 9001:2015 Certified Organisation
            </div>

            <div className="marksheet-title-banner">
              STATEMENT OF MARKS
            </div>

            <div className="marksheet-course-title">
              Course On Computer Concepts (CCC)
            </div>
          </div>

          {/* STUDENT INFO & PHOTO GRID */}
          <div className="marksheet-info-grid">
            <div className="marksheet-info-col">
              <div className="ms-info-row">
                <strong>Enrollment No. :-</strong>
                <span>SWF20260150</span>
              </div>
              <div className="ms-info-row">
                <strong>Student's Name :-</strong>
                <span className="ms-student-name">Devesh Kumar</span>
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

            {/* STUDENT PASSPORT PHOTO */}
            <div className="marksheet-photo-thumb">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                alt="Candidate Devesh Kumar"
              />
            </div>
          </div>

          {/* CENTER NAME LINE */}
          <div className="marksheet-center-row">
            <strong>Center Name :- </strong>
            <span>Youcca Institute Of Computer Education, Etah</span>
          </div>

          {/* MARKS EVALUATION TABLE */}
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
                  <td className="words-cell">{s.words}</td>
                </tr>
              ))}
              <tr className="total-row">
                <td style={{ textAlign: 'left' }}>
                  Result/Division : <strong>Pass / First Division</strong>
                </td>
                <td colSpan={4} style={{ textAlign: 'right', fontWeight: 'bold' }}>
                  Grand Total :
                </td>
                <td style={{ color: '#047857', fontSize: '13px', fontWeight: 900 }}>
                  618/800
                </td>
                <td style={{ fontSize: '11px', fontWeight: 800 }}>
                  Six One Eight
                </td>
              </tr>
            </tbody>
          </table>

          {/* MARKSHEET SUMMARY BAR */}
          <div className="marksheet-summary-box">
            <div>
              <strong>Overall Percentage :- </strong>
              <span style={{ fontSize: '14px', fontWeight: 900, color: '#047857' }}>77 %</span>
            </div>
            <div>
              <strong>Grade :- </strong>
              <span style={{ fontSize: '14px', fontWeight: 900, color: '#1e3a8a' }}>A</span>
            </div>
            <div>
              <strong>Status :- </strong>
              <span className="ms-status-passed">
                ✓ PASSED
              </span>
            </div>
          </div>

          {/* GRADE DISTINCTION KEY */}
          <div className="marksheet-legend">
            Grade Distinction: (above 90%) S, (89% to 70%) A, (69% to 50%) B, (49% to 33%) C, Failed F
          </div>

          <div className="marksheet-dashed-divider"></div>

          {/* SIGNATURES ROW */}
          <div className="marksheet-signatures-row">
            <div className="ms-date-cell">
              Date :- <strong>17/07/2026</strong>
            </div>
            <div className="cert-sig-item">
              <div className="cert-sig-line">Checked By</div>
            </div>
            <div className="cert-sig-item">
              <div className="cert-sig-line">Center Head</div>
            </div>
            <div className="cert-sig-item">
              <div className="cert-sig-line">
                Exam Controller<br />
                <span style={{ fontSize: '10px' }}>Shikashvik Institute</span>
              </div>
            </div>
          </div>

          {/* FOOTER REGISTERED ADDRESS STRIP */}
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
