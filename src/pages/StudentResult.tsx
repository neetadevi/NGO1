import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './PagesCommon.css'

export default function StudentResult() {
  const [rollNo, setRollNo] = useState('')
  const [dob, setDob] = useState('')
  const [searched, setSearched] = useState(false)
  const [loading, setLoading] = useState(false)

  const [resultData, setResultData] = useState<{
    rollNo: string
    name: string
    fatherName: string
    course: string
    center: string
    examDate: string
    subjects: { name: string; maxMarks: number; theory: number; practical: number; total: number }[]
    grandTotal: number
    maxTotal: number
    percentage: string
    grade: string
    resultStatus: string
  } | null>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!rollNo.trim()) return

    setLoading(true)
    setTimeout(() => {
      setResultData({
        rollNo: rollNo.toUpperCase().startsWith('SWF') ? rollNo.toUpperCase() : `SWF-${rollNo.toUpperCase()}`,
        name: 'Vikas Kumar',
        fatherName: 'Suresh Kumar',
        course: 'ADCA (Advanced Diploma in Computer Applications) - 1 Year',
        center: 'SWF-C-101 (Etah Main Training Center)',
        examDate: 'October 2026',
        subjects: [
          { name: 'Computer Fundamentals & OS (Windows/Linux)', maxMarks: 100, theory: 78, practical: 18, total: 96 },
          { name: 'MS Office Suite (Word, Excel, PowerPoint)', maxMarks: 100, theory: 72, practical: 19, total: 91 },
          { name: 'Financial Accounting with Tally Prime & GST', maxMarks: 100, theory: 75, practical: 19, total: 94 },
          { name: 'DTP & Graphic Tools (Photoshop, CorelDRAW)', maxMarks: 100, theory: 70, practical: 18, total: 88 },
          { name: 'Web Designing, Internet & Cyber Security', maxMarks: 100, theory: 74, practical: 19, total: 93 },
        ],
        grandTotal: 462,
        maxTotal: 500,
        percentage: '92.4%',
        grade: 'A+ (Outstanding)',
        resultStatus: 'PASSED',
      })
      setLoading(false)
      setSearched(true)
    }, 850)
  }

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Examination Portal</span>
          <h1 className="inner-hero-title">Online Examination Result</h1>
          <p className="inner-hero-subtitle">
            Check and download your official provisional mark sheet and grade report online.
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Student Zone</span>
            <span>/</span>
            <span>Result</span>
          </div>
        </div>
      </section>

      <div className="page-content-container">
        <div className="portal-form-box">
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '38px', marginBottom: '8px' }}>🏆</div>
            <h2 style={{ fontSize: '22px', color: '#1e1b4b', marginBottom: '6px' }}>
              Check Online Result & Mark Sheet
            </h2>
            <p style={{ fontSize: '13.5px', color: '#64748b' }}>
              Enter your Roll Number (e.g. <code>SWF-202601</code> or <code>10245</code>) to fetch results.
            </p>
          </div>

          <form onSubmit={handleSearch}>
            <div className="form-group-item">
              <label>Student Roll Number *</label>
              <input
                type="text"
                required
                placeholder="Enter Roll Number"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
              />
            </div>

            <div className="form-group-item">
              <label>Date of Birth *</label>
              <input
                type="date"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>

            <button type="submit" disabled={loading} className="submit-portal-btn">
              {loading ? 'Fetching Examination Result...' : 'View Result & Mark Sheet ➔'}
            </button>
          </form>
        </div>

        {searched && resultData && (
          <div className="result-display-sheet" style={{ maxWidth: '900px', margin: '36px auto 0' }}>
            <div className="result-sheet-header">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ margin: 0, color: '#4b087d' }}>SHIKASHVIK WELFARE FOUNDATION</h3>
                  <small style={{ color: '#64748b', fontSize: '11px' }}>
                    Section 8 Non-Profit • Under MCA, Govt. of India • Reg. Etah, UP
                  </small>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className="status-badge-verified">
                    PROVISIONAL MARK SHEET
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', margin: '20px 0', fontSize: '13.5px' }}>
              <div><strong>Roll Number:</strong> <span style={{ color: '#4b087d', fontWeight: 700 }}>{resultData.rollNo}</span></div>
              <div><strong>Student Name:</strong> {resultData.name}</div>
              <div><strong>Father Name:</strong> {resultData.fatherName}</div>
              <div><strong>Course:</strong> {resultData.course}</div>
              <div><strong>Study Center:</strong> {resultData.center}</div>
              <div><strong>Session / Exam:</strong> {resultData.examDate}</div>
            </div>

            <table className="result-table">
              <thead>
                <tr>
                  <th>Subject Name</th>
                  <th>Max</th>
                  <th>Theory</th>
                  <th>Practical</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {resultData.subjects.map((s, idx) => (
                  <tr key={idx}>
                    <td>{s.name}</td>
                    <td>{s.maxMarks}</td>
                    <td>{s.theory}</td>
                    <td>{s.practical}</td>
                    <td><strong>{s.total}</strong></td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr style={{ background: '#f8fafc', fontWeight: 800 }}>
                  <td>GRAND TOTAL:</td>
                  <td>{resultData.maxTotal}</td>
                  <td colSpan={2} style={{ textAlign: 'right' }}>MARKS OBTAINED:</td>
                  <td style={{ color: '#059669', fontSize: '15px' }}>{resultData.grandTotal}</td>
                </tr>
              </tfoot>
            </table>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ecfdf5', padding: '14px 20px', borderRadius: '8px', border: '1.5px solid #a7f3d0', margin: '20px 0', flexWrap: 'wrap', gap: '10px' }}>
              <div><strong>Percentage:</strong> <span style={{ fontSize: '16px', color: '#065f46', fontWeight: 800 }}>{resultData.percentage}</span></div>
              <div><strong>Grade:</strong> <span style={{ fontSize: '16px', color: '#065f46', fontWeight: 800 }}>{resultData.grade}</span></div>
              <div><strong>Final Result:</strong> <span style={{ fontSize: '16px', color: '#065f46', fontWeight: 800 }}>✓ {resultData.resultStatus}</span></div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '36px', borderTop: '1px solid #cbd5e1', paddingTop: '16px', fontSize: '12px', color: '#64748b' }}>
              <div>Authorized Coordinator</div>
              <div>Date of Issue: 25 Oct 2026</div>
              <div>Controller of Examination</div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <button
                onClick={() => window.print()}
                style={{
                  background: '#4b087d',
                  color: '#fff',
                  border: 'none',
                  padding: '10px 24px',
                  borderRadius: '6px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontSize: '13.5px',
                }}
              >
                🖨️ Print Mark Sheet
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
