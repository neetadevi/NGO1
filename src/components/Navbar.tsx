import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import type { User } from '@supabase/supabase-js'
import './Navbar.css'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [user, setUser] = useState<User | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    navigate('/')
  }

  const toggleDropdown = (name: string) => {
    setActiveDropdown(prev => (prev === name ? null : name))
  }

  return (
    <header className="site-header-wrapper">
      {/* TOP CONTACT & INFO BAR */}
      <div className="top-header">
        <div className="top-container">
          <div className="contact-info">
            <a href="tel:8445020016">📞 +91-8445020016</a>
            <span className="contact-divider">|</span>
            <a href="mailto:shikashvik@gmail.com">✉ shikashvik@gmail.com</a>
            <span className="contact-divider">|</span>
            <span>📍 Etah, Uttar Pradesh</span>
            <span className="contact-divider">|</span>
            <span>CIN / Reg: 23 October 2026</span>
          </div>

          <div className="top-actions">
            <Link to="/franchise/apply" className="top-franchise-btn">
              📋 Apply Franchise
            </Link>

            <Link to="/#projects" className="top-donate-btn">
              Donate Now
            </Link>

            {user ? (
              <div className="top-auth-group">
                <span className="top-user-pill">
                  👤 {user.user_metadata?.full_name || user.email?.split('@')[0]}
                </span>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="top-dash-btn"
                >
                  Dashboard
                </button>
                <button onClick={handleLogout} className="top-logout-btn">
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="top-auth-group">
                <Link to="/signup" className="top-signup-btn">
                  ✨ Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR WITH STRUCTURED MENUS */}
      <nav className="main-header">
        <div className="nav-container">
          {/* BRAND LOGO */}
          <Link to="/" className="brand-logo" aria-label="Shikashvik Welfare Foundation Home">
            <img src="./logo.png" alt="Shikashvik Welfare Foundation Official Logo" className="site-logo-img" />
            <div className="brand-text">
              <span className="brand-title">SHIKASHVIK</span>
              <span className="brand-sub">WELFARE FOUNDATION</span>
              <small className="brand-reg">Section 8 Company • MCA, Govt. of India</small>
            </div>
          </Link>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button
            className="menu-toggle"
            aria-label="Toggle Navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          {/* NAVIGATION MENU ITEMS */}
          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            {/* HOME */}
            <Link to="/" className={`nav-item home-link ${location.pathname === '/' ? 'active-link' : ''}`}>
              🏠 Home
            </Link>

            {/* ABOUT US DROPDOWN */}
            <div
              className={`nav-item dropdown ${activeDropdown === 'about' ? 'open' : ''}`}
              onMouseEnter={() => window.innerWidth > 992 && setActiveDropdown('about')}
              onMouseLeave={() => window.innerWidth > 992 && setActiveDropdown(null)}
            >
              <button
                type="button"
                className="dropdown-toggle"
                onClick={() => toggleDropdown('about')}
                aria-expanded={activeDropdown === 'about'}
              >
                <span>About Us</span>
                <span className="dropdown-arrow">▾</span>
              </button>
              <div className="dropdown-menu">
                <Link to="/about-foundation" className="dropdown-link">
                  <span className="dd-icon">🏛️</span>
                  <div>
                    <strong>About Foundation</strong>
                    <small>Registration & Overview</small>
                  </div>
                </Link>
                <Link to="/chairman-message" className="dropdown-link">
                  <span className="dd-icon">✍️</span>
                  <div>
                    <strong>Chairman Message</strong>
                    <small>Vision & Guidance</small>
                  </div>
                </Link>
                <Link to="/mission-vision" className="dropdown-link">
                  <span className="dd-icon">🎯</span>
                  <div>
                    <strong>Mission & Vision</strong>
                    <small>Goals & Social Commitments</small>
                  </div>
                </Link>
              </div>
            </div>

            {/* COURSE OFFERED DROPDOWN */}
            <div
              className={`nav-item dropdown ${activeDropdown === 'courses' ? 'open' : ''}`}
              onMouseEnter={() => window.innerWidth > 992 && setActiveDropdown('courses')}
              onMouseLeave={() => window.innerWidth > 992 && setActiveDropdown(null)}
            >
              <button
                type="button"
                className="dropdown-toggle"
                onClick={() => toggleDropdown('courses')}
                aria-expanded={activeDropdown === 'courses'}
              >
                <span>Course Offered</span>
                <span className="dropdown-arrow">▾</span>
              </button>
              <div className="dropdown-menu">
                <Link to="/courses/all" className="dropdown-link highlight-link">
                  <span className="dd-icon">📋</span>
                  <div>
                    <strong>All 45+ Courses & Fees</strong>
                    <small>Complete Fee & Duration Directory</small>
                  </div>
                </Link>
                <Link to="/courses/computer" className="dropdown-link">
                  <span className="dd-icon">💻</span>
                  <div>
                    <strong>IT Software & Computer</strong>
                    <small>ADCA, DCA, Tally Prime, Web & DTP</small>
                  </div>
                </Link>
                <Link to="/courses/vocational" className="dropdown-link">
                  <span className="dd-icon">✂️</span>
                  <div>
                    <strong>Beauty & Tailoring Courses</strong>
                    <small>Makeup, Cosmetology, Fashion & Craft</small>
                  </div>
                </Link>
                <Link to="/courses/skill" className="dropdown-link">
                  <span className="dd-icon">⚡</span>
                  <div>
                    <strong>Skill Development Courses</strong>
                    <small>Electrician, Solar, AC, Plumbing & CCTV</small>
                  </div>
                </Link>
                <Link to="/courses/other" className="dropdown-link">
                  <span className="dd-icon">📚</span>
                  <div>
                    <strong>Teacher Training, Typing & Yoga</strong>
                    <small>NTT, Stenography, Spoken English & Yoga</small>
                  </div>
                </Link>
              </div>
            </div>

            {/* STUDENT ZONE DROPDOWN */}
            <div
              className={`nav-item dropdown ${activeDropdown === 'student' ? 'open' : ''}`}
              onMouseEnter={() => window.innerWidth > 992 && setActiveDropdown('student')}
              onMouseLeave={() => window.innerWidth > 992 && setActiveDropdown(null)}
            >
              <button
                type="button"
                className="dropdown-toggle"
                onClick={() => toggleDropdown('student')}
                aria-expanded={activeDropdown === 'student'}
              >
                <span>Student Zone</span>
                <span className="dropdown-arrow">▾</span>
              </button>
              <div className="dropdown-menu">
                <Link to="/student-zone/offline-admission-form" className="dropdown-link highlight-link">
                  <span className="dd-icon">📄</span>
                  <div>
                    <strong>Offline Admission Form</strong>
                    <small>Printable Official A4 Application</small>
                  </div>
                </Link>
                <Link to="/student-zone/registration" className="dropdown-link">
                  <span className="dd-icon">📝</span>
                  <div>
                    <strong>Student Registration form</strong>
                    <small>Direct Online Admission</small>
                  </div>
                </Link>
                <Link to="/student-zone/study-centres" className="dropdown-link">
                  <span className="dd-icon">🏫</span>
                  <div>
                    <strong>Authorized Study centre</strong>
                    <small>Verified Training Centers List</small>
                  </div>
                </Link>
                <Link to="/student-zone/verification" className="dropdown-link">
                  <span className="dd-icon">🔍</span>
                  <div>
                    <strong>Student Verification</strong>
                    <small>Instant Roll No. Verification</small>
                  </div>
                </Link>
                <Link to="/student-zone/result" className="dropdown-link">
                  <span className="dd-icon">🏆</span>
                  <div>
                    <strong>Result</strong>
                    <small>Check Online Mark Sheet</small>
                  </div>
                </Link>
              </div>
            </div>

            {/* FRANCHISE DROPDOWN */}
            <div
              className={`nav-item dropdown ${activeDropdown === 'franchise' ? 'open' : ''}`}
              onMouseEnter={() => window.innerWidth > 992 && setActiveDropdown('franchise')}
              onMouseLeave={() => window.innerWidth > 992 && setActiveDropdown(null)}
            >
              <button
                type="button"
                className="dropdown-toggle franchise-toggle"
                onClick={() => toggleDropdown('franchise')}
                aria-expanded={activeDropdown === 'franchise'}
              >
                <span>Franchise</span>
                <span className="dropdown-arrow">▾</span>
              </button>
              <div className="dropdown-menu">
                <Link to="/franchise/dashboard" className="dropdown-link" style={{ background: '#f0fdf4' }}>
                  <span className="dd-icon">💻</span>
                  <div>
                    <strong style={{ color: '#047857' }}>Center Director Dashboard</strong>
                    <small>Ankit Shakya • SALT/UP/046</small>
                  </div>
                </Link>
                <Link to="/franchise/sample-certificate" className="dropdown-link">
                  <span className="dd-icon">📜</span>
                  <div>
                    <strong>Sample Certificate</strong>
                    <small>Official Certificate Preview</small>
                  </div>
                </Link>
                <Link to="/franchise/sample-marksheet" className="dropdown-link">
                  <span className="dd-icon">📊</span>
                  <div>
                    <strong>Sample Mark sheet</strong>
                    <small>Official Grade Sheet Preview</small>
                  </div>
                </Link>
                <Link to="/franchise/enquiry" className="dropdown-link">
                  <span className="dd-icon">💬</span>
                  <div>
                    <strong>Franchise Enquiry</strong>
                    <small>Ask Questions & Details</small>
                  </div>
                </Link>
                <Link to="/franchise/apply" className="dropdown-link highlight-link">
                  <span className="dd-icon">📋</span>
                  <div>
                    <strong>Apply Franchise</strong>
                    <small>Center Affiliation Form</small>
                  </div>
                </Link>
                <Link to="/franchise/benefits-requirement" className="dropdown-link">
                  <span className="dd-icon">⭐</span>
                  <div>
                    <strong>Benefits & Requirement</strong>
                    <small>Space, Facilities & Support</small>
                  </div>
                </Link>
              </div>
            </div>

            {/* LOGIN DROPDOWN */}
            <div
              className={`nav-item dropdown login-dropdown ${activeDropdown === 'login' ? 'open' : ''}`}
              onMouseEnter={() => window.innerWidth > 992 && setActiveDropdown('login')}
              onMouseLeave={() => window.innerWidth > 992 && setActiveDropdown(null)}
            >
              <button
                type="button"
                className="dropdown-toggle login-toggle-btn"
                onClick={() => toggleDropdown('login')}
                aria-expanded={activeDropdown === 'login'}
              >
                <span>🔐 Login</span>
                <span className="dropdown-arrow">▾</span>
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <Link
                  to="/admin"
                  className="dropdown-link highlight-link"
                >
                  <span className="dd-icon">⚙️</span>
                  <div>
                    <strong>Central Admin Panel</strong>
                    <small>shikashvikwelfare.org.in/admin</small>
                  </div>
                </Link>
                <Link to="/login/franchise" className="dropdown-link">
                  <span className="dd-icon">🏢</span>
                  <div>
                    <strong>Franchise Login</strong>
                    <small>Center Director Portal</small>
                  </div>
                </Link>
                <Link to="/login/student" className="dropdown-link">
                  <span className="dd-icon">🎓</span>
                  <div>
                    <strong>Student Login</strong>
                    <small>Enrolled Learner Portal</small>
                  </div>
                </Link>
                <Link to="/login/volunteer" className="dropdown-link">
                  <span className="dd-icon">🤝</span>
                  <div>
                    <strong>Volunteer Login</strong>
                    <small>Member & Supporter Portal</small>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

