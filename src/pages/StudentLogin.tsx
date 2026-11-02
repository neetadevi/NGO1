import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './PagesCommon.css'

export default function StudentLogin() {
  const [rollNo, setRollNo] = useState('')
  const [dob, setDob] = useState('')
  const [loading, setLoading] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setLoggedIn(true)
    }, 850)
  }

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Student Learning Portal</span>
          <h1 className="inner-hero-title">Student Login</h1>
          <p className="inner-hero-subtitle">
            Access your course learning materials, syllabus, exam admit cards, and online mark sheets.
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Login</span>
            <span>/</span>
            <span>Student Login</span>
          </div>
        </div>
      </section>

      <div className="page-content-container">
        {!loggedIn ? (
          <div className="portal-form-box">
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ fontSize: '42px', marginBottom: '6px' }}>🎓</div>
              <h2 style={{ fontSize: '22px', color: '#1e1b4b', marginBottom: '4px' }}>
                Enrolled Student Sign In
              </h2>
              <p style={{ fontSize: '13.5px', color: '#64748b' }}>
                Enter your Roll Number or Enrollment Number and Date of Birth.
              </p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="form-group-item">
                <label>Roll Number / Enrollment No *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. SWF-202601"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                />
              </div>

              <div className="form-group-item">
                <label>Date of Birth (Password) *</label>
                <input
                  type="date"
                  required
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>

              <button type="submit" disabled={loading} className="submit-portal-btn">
                {loading ? 'Authenticating Student...' : 'Access Student Desk ➔'}
              </button>
            </form>

            <div style={{ marginTop: '24px', textAlign: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '16px', fontSize: '13.5px', color: '#64748b' }}>
              New student?{' '}
              <Link to="/student-zone/registration" style={{ color: '#4b087d', fontWeight: 700 }}>
                Register Online Admission
              </Link>
            </div>
          </div>
        ) : (
          <div className="content-card" style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #f1f5f9', paddingBottom: '16px', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <h2 style={{ margin: 0, color: '#4b087d' }}>Welcome, Student!</h2>
                <small style={{ color: '#64748b' }}>Roll No: {rollNo || 'SWF-202601'} • ADCA Program</small>
              </div>
              <button
                onClick={() => setLoggedIn(false)}
                className="top-logout-btn"
                style={{ padding: '8px 16px', fontSize: '13px' }}
              >
                Sign Out
              </button>
            </div>

            <div className="card-highlight-box">
              ✅ <strong>Enrollment Status:</strong> Active & Verified Student at Shikashvik Computer & Skill Center (Etah HQ).
            </div>

            <div className="feature-grid-3">
              <div className="feature-box">
                <div style={{ fontSize: '26px' }}>📚</div>
                <h4>Course Modules</h4>
                <p>Download PDF notes, lab practice assignments, and study materials.</p>
              </div>

              <div className="feature-box">
                <div style={{ fontSize: '26px' }}>🎟️</div>
                <h4>Exam Admit Card</h4>
                <p>Download official exam hall ticket with center code and exam date.</p>
              </div>

              <div className="feature-box">
                <div style={{ fontSize: '26px' }}>🏆</div>
                <h4>Mark Sheet & Result</h4>
                <p>View your provisional mark sheet and grade report online.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '24px' }}>
              <Link to="/student-zone/result" className="course-apply-btn" style={{ padding: '10px 20px' }}>
                View Examination Result →
              </Link>
              <Link to="/student-zone/verification" className="course-apply-btn" style={{ background: '#0284c7', padding: '10px 20px' }}>
                Online Certificate Verification
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
