import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PagesCommon.css'

export default function VolunteerLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        navigate('/dashboard')
      }
    })
  }, [navigate])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (authError) {
      setError(authError.message)
      setLoading(false)
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Social Service & Community</span>
          <h1 className="inner-hero-title">Volunteer & Member Login</h1>
          <p className="inner-hero-subtitle">
            Sign in to your volunteer account to view community relief projects, blood donation camps, and social drives.
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Login</span>
            <span>/</span>
            <span>Volunteer Login</span>
          </div>
        </div>
      </section>

      <div className="page-content-container">
        <div className="portal-form-box">
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '42px', marginBottom: '6px' }}>🤝</div>
            <h2 style={{ fontSize: '22px', color: '#1e1b4b', marginBottom: '4px' }}>
              Volunteer Sign In
            </h2>
            <p style={{ fontSize: '13.5px', color: '#64748b' }}>
              Sign in with your registered volunteer email and password.
            </p>
          </div>

          {error && (
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '12px', borderRadius: '8px', fontSize: '13.5px', marginBottom: '18px' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="form-group-item">
              <label>Email Address *</label>
              <input
                type="email"
                required
                placeholder="volunteer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group-item">
              <label>Password *</label>
              <input
                type="password"
                required
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" disabled={loading} className="submit-portal-btn">
              {loading ? 'Signing In...' : 'Sign In as Volunteer ➔'}
            </button>
          </form>

          <div style={{ marginTop: '24px', textAlign: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '16px', fontSize: '13.5px', color: '#64748b' }}>
            Don't have a volunteer account yet?{' '}
            <Link to="/signup" style={{ color: '#4b087d', fontWeight: 700 }}>
              Register Here
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

