import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PagesCommon.css'

export default function StudentVerification() {
  const [rollNo, setRollNo] = useState('')
  const [dob, setDob] = useState('')
  const [searched, setSearched] = useState(false)
  const [loading, setLoading] = useState(false)
  const [studentRecord, setStudentRecord] = useState<{
    enrollmentNo: string
    rollNo: string
    studentName: string
    fatherName: string
    courseName: string
    duration: string
    centerCode: string
    centerName: string
    admissionDate: string
    status: string
    grade: string
  } | null>(null)

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    if (!rollNo.trim()) return

    setLoading(true)
    setTimeout(() => {
      // Demo verified record generator or lookup
      setStudentRecord({
        enrollmentNo: rollNo.toUpperCase().startsWith('SWF') ? rollNo.toUpperCase() : `SWF-${rollNo.toUpperCase()}`,
        rollNo: rollNo.toUpperCase(),
        studentName: 'Pooja Shakya',
        fatherName: 'Ram Kumar Shakya',
        courseName: 'ADCA (Advanced Diploma in Computer Applications)',
        duration: '1 Year (12 Months)',
        centerCode: 'SWF-C-101',
        centerName: 'Shikashvik Computer & Skill Center (Etah)',
        admissionDate: '15 November 2026',
        status: 'VERIFIED & ACTIVE STUDENT',
        grade: 'A+ (Distinction)',
      })
      setLoading(false)
      setSearched(true)
    }, 800)
  }

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Online Authenticity Check</span>
          <h1 className="inner-hero-title">Student Verification Portal</h1>
          <p className="inner-hero-subtitle">
            Verify student enrollment authenticity, credentials, and course validity across all recognized Shikashvik Welfare Foundation centers.
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Student Zone</span>
            <span>/</span>
            <span>Student Verification</span>
          </div>
        </div>
      </section>

      <div className="page-content-container">
        <div className="portal-form-box">
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '38px', marginBottom: '8px' }}>🔍</div>
            <h2 style={{ fontSize: '22px', color: '#1e1b4b', marginBottom: '6px' }}>
              Student Certificate & Enrollment Verification
            </h2>
            <p style={{ fontSize: '13.5px', color: '#64748b' }}>
              Enter Roll No or Enrollment Number (e.g. <code>SWF-202601</code>) printed on Certificate or Admit Card.
            </p>
          </div>

          <form onSubmit={handleVerify}>
            <div className="form-group-item">
              <label>Student Roll Number / Enrollment No *</label>
              <input
                type="text"
                required
                placeholder="e.g. SWF-202601 or 10452"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
              />
            </div>

            <div className="form-group-item">
              <label>Date of Birth (Optional for additional security)</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>

            <button type="submit" disabled={loading} className="submit-portal-btn">
              {loading ? 'Searching Database...' : 'Verify Student Record ➔'}
            </button>
          </form>
        </div>

        {searched && studentRecord && (
          <div className="result-display-sheet" style={{ maxWidth: '800px', margin: '36px auto 0' }}>
            <div className="result-sheet-header">
              <span className="status-badge-verified" style={{ marginBottom: '14px' }}>
                ✓ {studentRecord.status}
              </span>
              <h3>SHIKASHVIK WELFARE FOUNDATION</h3>
              <p>National Student Credential Verification Authority • Section 8 Company (Govt. of India)</p>
            </div>

            <table className="result-table">
              <tbody>
                <tr>
                  <th style={{ width: '38%' }}>Enrollment / Roll No:</th>
                  <td style={{ fontWeight: 800, color: '#4b087d', fontSize: '15px' }}>{studentRecord.enrollmentNo}</td>
                </tr>
                <tr>
                  <th>Student's Name:</th>
                  <td><strong>{studentRecord.studentName}</strong></td>
                </tr>
                <tr>
                  <th>Father's Name:</th>
                  <td>{studentRecord.fatherName}</td>
                </tr>
                <tr>
                  <th>Course Completed / Enrolled:</th>
                  <td><strong>{studentRecord.courseName}</strong></td>
                </tr>
                <tr>
                  <th>Course Duration:</th>
                  <td>{studentRecord.duration}</td>
                </tr>
                <tr>
                  <th>Center Code & Name:</th>
                  <td>{studentRecord.centerCode} - {studentRecord.centerName}</td>
                </tr>
                <tr>
                  <th>Registration Date:</th>
                  <td>{studentRecord.admissionDate}</td>
                </tr>
                <tr>
                  <th>Academic Performance Grade:</th>
                  <td><span style={{ color: '#059669', fontWeight: 800 }}>{studentRecord.grade}</span></td>
                </tr>
                <tr>
                  <th>Digital Verification Seal:</th>
                  <td>
                    <span style={{ color: '#2563eb', fontWeight: 700, fontSize: '12.5px' }}>
                      🔐 Digitally Signed & Authenticated by Examination Controller
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

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
                🖨️ Print Verification Certificate
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

