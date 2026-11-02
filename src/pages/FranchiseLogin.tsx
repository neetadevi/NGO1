import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './PagesCommon.css'

export default function FranchiseLogin() {
  const [centerCode, setCenterCode] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setLoggedIn(true)
    }, 900)
  }

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Center Director Portal</span>
          <h1 className="inner-hero-title">Franchise & Center Login</h1>
          <p className="inner-hero-subtitle">
            Secure administrative portal for Authorized Study Center Directors to manage student enrollments, exam entries, and certifications.
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Login</span>
            <span>/</span>
            <span>Franchise Login</span>
          </div>
        </div>
      </section>

      <div className="page-content-container">
        {!loggedIn ? (
          <div className="portal-form-box">
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ fontSize: '42px', marginBottom: '6px' }}>🏢</div>
              <h2 style={{ fontSize: '22px', color: '#1e1b4b', marginBottom: '4px' }}>
                Center Director Sign In
              </h2>
              <p style={{ fontSize: '13.5px', color: '#64748b' }}>
                Enter your Center Code (e.g. <code>SWF-C-101</code>) and password.
              </p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="form-group-item">
                <label>Authorized Center Code *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. SWF-C-101"
                  value={centerCode}
                  onChange={(e) => setCenterCode(e.target.value)}
                />
              </div>

              <div className="form-group-item">
                <label>Director Password *</label>
                <input
                  type="password"
                  required
                  placeholder="Enter your secret password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', fontSize: '13px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', color: '#475569' }}>
                  <input type="checkbox" defaultChecked /> Remember Center
                </label>
                <a href="tel:8445020016" style={{ color: '#4b087d', fontWeight: 600, textDecoration: 'none' }}>
                  Forgot Password?
                </a>
              </div>

              <button type="submit" disabled={loading} className="submit-portal-btn">
                {loading ? 'Authenticating Center...' : 'Access Center Dashboard ➔'}
              </button>
            </form>

            <div style={{ marginTop: '24px', textAlign: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '16px', fontSize: '13.5px', color: '#64748b' }}>
              Want to open a new study center?{' '}
              <Link to="/franchise/apply" style={{ color: '#4b087d', fontWeight: 700 }}>
                Apply For Franchise
              </Link>
            </div>
          </div>
        ) : (
          <div className="content-card" style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #f1f5f9', paddingBottom: '16px', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <h2 style={{ margin: 0, color: '#4b087d' }}>Welcome, Center Director!</h2>
                <small style={{ color: '#64748b' }}>Center Code: {centerCode || 'SWF-C-101'} • Active Authorized Center</small>
              </div>
              <button
                onClick={() => setLoggedIn(false)}
                className="top-logout-btn"
                style={{ padding: '8px 16px', fontSize: '13px' }}
              >
                Sign Out
              </button>
            </div>

            <div className="feature-grid-3">
              <div className="feature-box" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px' }}>👥</div>
                <h4>Enrolled Students</h4>
                <p style={{ fontSize: '20px', fontWeight: 800, color: '#4b087d', margin: '6px 0' }}>48</p>
                <small style={{ color: '#059669', fontWeight: 600 }}>● Active Session</small>
              </div>

              <div className="feature-box" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px' }}>📜</div>
                <h4>Certificates Issued</h4>
                <p style={{ fontSize: '20px', fontWeight: 800, color: '#b45309', margin: '6px 0' }}>134</p>
                <small style={{ color: '#64748b' }}>Verified Online</small>
              </div>

              <div className="feature-box" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px' }}>📝</div>
                <h4>Pending Exams</h4>
                <p style={{ fontSize: '20px', fontWeight: 800, color: '#2563eb', margin: '6px 0' }}>12</p>
                <small style={{ color: '#2563eb' }}>Current Month</small>
              </div>
            </div>

            <h3 style={{ marginTop: '28px' }}>Quick Administrative Actions</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '14px' }}>
              <Link to="/student-zone/registration" className="course-apply-btn" style={{ padding: '10px 20px' }}>
                + Enroll New Student
              </Link>
              <Link to="/student-zone/verification" className="course-apply-btn" style={{ background: '#0284c7', padding: '10px 20px' }}>
                🔍 Verify Student Roll No
              </Link>
              <Link to="/student-zone/result" className="course-apply-btn" style={{ background: '#059669', padding: '10px 20px' }}>
                📊 Enter Marks / Results
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
