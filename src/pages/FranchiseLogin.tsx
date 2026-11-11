import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PagesCommon.css'

export default function FranchiseLogin() {
  const navigate = useNavigate()
  const [centerCode, setCenterCode] = useState('SALT/UP/046')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/franchise/dashboard')
    }, 600)
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
        <div className="portal-form-box">
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '42px', marginBottom: '6px' }}>🏢</div>
            <h2 style={{ fontSize: '22px', color: '#1e1b4b', marginBottom: '4px' }}>
              Center Director Sign In
            </h2>
            <p style={{ fontSize: '13.5px', color: '#64748b' }}>
              Enter your Center Code (e.g. <code>SALT/UP/046</code> or <code>SWF-C-101</code>) and password.
            </p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="form-group-item">
              <label>Authorized Center Code *</label>
              <input
                type="text"
                required
                placeholder="e.g. SALT/UP/046"
                value={centerCode}
                onChange={(e) => setCenterCode(e.target.value)}
              />
            </div>

            <div className="form-group-item">
              <label>Director Password *</label>
              <input
                type="password"
                placeholder="Enter password (e.g. 8445020016 or admin)"
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

            <button
              type="button"
              onClick={() => navigate('/franchise/dashboard')}
              style={{
                width: '100%',
                marginTop: '10px',
                background: '#f8fafc',
                color: '#1e293b',
                border: '1.5px solid #cbd5e1',
                borderRadius: '8px',
                padding: '11px',
                fontSize: '13.5px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              ⚡ One-Click Direct Center Dashboard Access
            </button>
          </form>

          <div style={{ marginTop: '24px', textAlign: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '16px', fontSize: '13.5px', color: '#64748b' }}>
            Want to open a new study center?{' '}
            <Link to="/franchise/apply" style={{ color: '#4b087d', fontWeight: 700 }}>
              Apply For Franchise
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
