import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import type { User } from '@supabase/supabase-js'
import './Home.css'

export default function Home() {
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Authentic Indian imagery for social welfare, rural education, health camps, and women empowerment
  const slides = [
    {
      img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80',
      badge: 'Education For All Children',
      title: 'Empowering Underprivileged Children in Rural India',
      subtitle: 'Bringing smiles, quality school education, digital literacy, and books to every child across Etah and Uttar Pradesh.',
    },
    {
      img: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1600&q=80',
      badge: 'Free Healthcare & Medicine',
      title: 'Aarogya Seva: Rural Health & Medical Camps',
      subtitle: 'Organizing free doctor checkups, eye testing, dental hygiene, and distributing vital nutrition kits for rural families.',
    },
    {
      img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1600&q=80',
      badge: 'Women Empowerment & Skills',
      title: 'Vocational Training & Women Self-Reliance',
      subtitle: 'Tailoring centers, computer literacy, handicrafts, and self-help groups fostering self-reliance for rural women.',
    },
  ]

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5500)

    return () => {
      subscription.unsubscribe()
      clearInterval(interval)
    }
  }, [slides.length])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="home-page">
      {/* TOP CONTACT BAR WITH AUTH & FRANCHISE */}
      <div className="top-header">
        <div className="top-container">
          <div className="contact-info">
            <a href="tel:8445020016">📞 +91-8445020016</a>
            <span className="contact-divider">|</span>
            <a href="mailto:shikashvik@gmail.com">✉ shikashvik@gmail.com</a>
            <span className="contact-divider">|</span>
            <span>📍 Etah, Uttar Pradesh</span>
            <span className="contact-divider">|</span>
            <span>Inc: 23 October 2026</span>
          </div>

          <div className="top-actions">
            {/* APPLY FRANCHISE PROMINENT BUTTON */}
            <Link to="/franchise" className="top-franchise-btn">
              📋 Apply Franchise
            </Link>

            <a href="#projects" className="top-btn">Donate Now</a>

            {/* LOGIN & SIGNUP BUTTONS AT TOP */}
            {user ? (
              <div className="top-auth-group">
                <span className="top-user-pill">
                  👤 {user.user_metadata?.full_name || user.email?.split('@')[0]}
                </span>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="top-btn"
                  style={{ padding: '5px 10px', fontSize: '11px' }}
                >
                  Dashboard
                </button>
                <button onClick={handleLogout} className="top-logout-btn">
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="top-auth-group">
                <Link to="/login" className="top-login-btn">
                  🔑 Login
                </Link>
                <Link to="/signup" className="top-signup-btn">
                  ✨ Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <header className="main-header">
        <div className="nav-container">
          <a href="#home" className="brand-logo" aria-label="Shikashvik Welfare Foundation Home">
            <img src="./logo.png" alt="Shikashvik Welfare Foundation Official Logo" className="site-logo-img" />
            <div className="brand-text">
              <span className="brand-title">SHIKASHVIK</span>
              <span className="brand-sub">WELFARE FOUNDATION</span>
              <small className="brand-reg">Reg. Etah, Uttar Pradesh • India</small>
            </div>
          </a>

          <button
            className="menu-toggle"
            aria-label="Toggle Navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>

          <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="home-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <a href="#what-we-do" onClick={() => setMobileMenuOpen(false)}>What We Do</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
            <Link to="/franchise" className="nav-franchise-link" onClick={() => setMobileMenuOpen(false)}>
              🎓 Apply Franchise
            </Link>
            <a href="#blog" onClick={() => setMobileMenuOpen(false)}>News</a>
            <a href="#certificates" onClick={() => setMobileMenuOpen(false)}>Certificates</a>
            <a href="#partners" onClick={() => setMobileMenuOpen(false)}>Govt. Partners</a>

            {user ? (
              <a
                href="#dashboard"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  navigate('/dashboard')
                }}
                style={{ color: '#4b087d', fontWeight: 'bold' }}
              >
                Dashboard
              </a>
            ) : (
              <Link to="/login" onClick={() => setMobileMenuOpen(false)} style={{ color: '#4b087d', fontWeight: 'bold' }}>
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>

      {/* HERO SLIDER (EXPANSIVE DESKTOP VIEW) */}
      <section id="home" className="hero-slider">
        <div className="slider-image">
          <img src={slides[currentSlide].img} alt={slides[currentSlide].title} />
          <div className="slider-overlay">
            <div className="slider-content">
              <span className="slider-badge">{slides[currentSlide].badge}</span>
              <h2>{slides[currentSlide].title}</h2>
              <p>{slides[currentSlide].subtitle}</p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href="#projects" className="slider-cta-btn">
                  Support Our Mission →
                </a>
                <Link to="/franchise" className="slider-cta-alt">
                  🎓 Apply For Franchise
                </Link>
              </div>
            </div>
          </div>
        </div>

        <button className="slider-arrow prev" onClick={prevSlide} aria-label="Previous Slide">
          ‹
        </button>
        <button className="slider-arrow next" onClick={nextSlide} aria-label="Next Slide">
          ›
        </button>

        <div className="slider-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ========================================================== */}
      {/* GOVERNMENT VERIFIED & REGISTERED WITH TICKER (LEFT & RIGHT) */}
      {/* ========================================================== */}
      <section className="govt-ticker-section">
        <div className="ticker-header">
          <div className="ticker-title-badge">
            ✓ 100% Government Recognized & Registered
          </div>
          <h3 className="ticker-heading">
            VERIFIED & REGISTERED WITH <span>GOVERNMENT OF INDIA</span>
          </h3>
          <p className="ticker-subtext">
            Operating in complete statutory compliance with National & State Government portals and regulatory bodies
          </p>
        </div>

        {/* TRACK 1: SCROLLING LEFT */}
        <div className="marquee-wrapper">
          <div className="marquee-track-left">
            <div className="govt-badge-card">
              <div className="govt-emblem-icon">🏛️</div>
              <div className="govt-badge-info">
                <h4>Ministry of Corporate Affairs (MCA)</h4>
                <p>Section 8 Non-Profit Licensed Foundation</p>
                <span className="govt-badge-tag">Govt. of India</span>
              </div>
            </div>

            <div className="govt-badge-card">
              <div className="govt-emblem-icon">🇮🇳</div>
              <div className="govt-badge-info">
                <h4>NITI Aayog (NGO-DARPAN)</h4>
                <p>Registered Non-Governmental Organization</p>
                <span className="govt-badge-tag">NITI-DARPAN ID Active</span>
              </div>
            </div>

            <div className="govt-badge-card">
              <div className="govt-emblem-icon">🏭</div>
              <div className="govt-badge-info">
                <h4>MSME Udyam Registration</h4>
                <p>Ministry of Micro, Small & Medium Enterprises</p>
                <span className="govt-badge-tag">Udyam Verified</span>
              </div>
            </div>

            <div className="govt-badge-card">
              <div className="govt-emblem-icon">🧾</div>
              <div className="govt-badge-info">
                <h4>Income Tax Department (12A)</h4>
                <p>Tax Exemption Certificate under Section 12A</p>
                <span className="govt-badge-tag">12A Approved</span>
              </div>
            </div>

            <div className="govt-badge-card">
              <div className="govt-emblem-icon">💼</div>
              <div className="govt-badge-info">
                <h4>CSR-1 Registration</h4>
                <p>Eligible for Corporate Social Responsibility Grants</p>
                <span className="govt-badge-tag">MCA CSR-1 Form</span>
              </div>
            </div>

            <div className="govt-badge-card">
              <div className="govt-emblem-icon">🎯</div>
              <div className="govt-badge-info">
                <h4>Skill India Mission</h4>
                <p>Vocational & Skill Development Initiative</p>
                <span className="govt-badge-tag">Empanelment Ready</span>
              </div>
            </div>

            {/* Duplicate for seamless infinite loop */}
            <div className="govt-badge-card">
              <div className="govt-emblem-icon">🏛️</div>
              <div className="govt-badge-info">
                <h4>Ministry of Corporate Affairs (MCA)</h4>
                <p>Section 8 Non-Profit Licensed Foundation</p>
                <span className="govt-badge-tag">Govt. of India</span>
              </div>
            </div>

            <div className="govt-badge-card">
              <div className="govt-emblem-icon">🇮🇳</div>
              <div className="govt-badge-info">
                <h4>NITI Aayog (NGO-DARPAN)</h4>
                <p>Registered Non-Governmental Organization</p>
                <span className="govt-badge-tag">NITI-DARPAN ID Active</span>
              </div>
            </div>

            <div className="govt-badge-card">
              <div className="govt-emblem-icon">🏭</div>
              <div className="govt-badge-info">
                <h4>MSME Udyam Registration</h4>
                <p>Ministry of Micro, Small & Medium Enterprises</p>
                <span className="govt-badge-tag">Udyam Verified</span>
              </div>
            </div>

            <div className="govt-badge-card">
              <div className="govt-emblem-icon">🧾</div>
              <div className="govt-badge-info">
                <h4>Income Tax Department (12A)</h4>
                <p>Tax Exemption Certificate under Section 12A</p>
                <span className="govt-badge-tag">12A Approved</span>
              </div>
            </div>

            <div className="govt-badge-card">
              <div className="govt-emblem-icon">💼</div>
              <div className="govt-badge-info">
                <h4>CSR-1 Registration</h4>
                <p>Eligible for Corporate Social Responsibility Grants</p>
                <span className="govt-badge-tag">MCA CSR-1 Form</span>
              </div>
            </div>

            <div className="govt-badge-card">
              <div className="govt-emblem-icon">🎯</div>
              <div className="govt-badge-info">
                <h4>Skill India Mission</h4>
                <p>Vocational & Skill Development Initiative</p>
                <span className="govt-badge-tag">Empanelment Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* TRACK 2: SCROLLING RIGHT */}
        <div className="marquee-wrapper">
          <div className="marquee-track-right">
            <div className="govt-badge-card">
              <div className="govt-emblem-icon">💰</div>
              <div className="govt-badge-info">
                <h4>Section 80G Tax Exemption</h4>
                <p>50% Income Tax Benefit for Donor Contributions</p>
                <span className="govt-badge-tag">80G Certified</span>
              </div>
            </div>

            <div className="govt-badge-card">
              <div className="govt-emblem-icon">🌐</div>
              <div className="govt-badge-info">
                <h4>Digital India & e-Governance</h4>
                <p>Promoting Digital Inclusion in Rural Districts</p>
                <span className="govt-badge-tag">Digital Literacy</span>
              </div>
            </div>

            <div className="govt-badge-card">
              <div className="govt-emblem-icon">🎓</div>
              <div className="govt-badge-info">
                <h4>Department of Education (UP)</h4>
                <p>Sarva Shiksha Abhiyan & Rural Child Education</p>
                <span className="govt-badge-tag">Uttar Pradesh</span>
              </div>
            </div>

            <div className="govt-badge-card">
              <div className="govt-emblem-icon">🩺</div>
              <div className="govt-badge-info">
                <h4>National Health Mission (NHM)</h4>
                <p>Health & Hygiene Awareness Partnerships</p>
                <span className="govt-badge-tag">Health Partner</span>
              </div>
            </div>

            <div className="govt-badge-card">
              <div className="govt-emblem-icon">📜</div>
              <div className="govt-badge-info">
                <h4>Govt. Registration: Etah (UP)</h4>
                <p>Registered Office: Dhumari, Aliganj, Etah - 207248</p>
                <span className="govt-badge-tag">Incorporated Oct 2026</span>
              </div>
            </div>

            {/* Duplicate for seamless infinite loop */}
            <div className="govt-badge-card">
              <div className="govt-emblem-icon">💰</div>
              <div className="govt-badge-info">
                <h4>Section 80G Tax Exemption</h4>
                <p>50% Income Tax Benefit for Donor Contributions</p>
                <span className="govt-badge-tag">80G Certified</span>
              </div>
            </div>

            <div className="govt-badge-card">
              <div className="govt-emblem-icon">🌐</div>
              <div className="govt-badge-info">
                <h4>Digital India & e-Governance</h4>
                <p>Promoting Digital Inclusion in Rural Districts</p>
                <span className="govt-badge-tag">Digital Literacy</span>
              </div>
            </div>

            <div className="govt-badge-card">
              <div className="govt-emblem-icon">🎓</div>
              <div className="govt-badge-info">
                <h4>Department of Education (UP)</h4>
                <p>Sarva Shiksha Abhiyan & Rural Child Education</p>
                <span className="govt-badge-tag">Uttar Pradesh</span>
              </div>
            </div>

            <div className="govt-badge-card">
              <div className="govt-emblem-icon">🩺</div>
              <div className="govt-badge-info">
                <h4>National Health Mission (NHM)</h4>
                <p>Health & Hygiene Awareness Partnerships</p>
                <span className="govt-badge-tag">Health Partner</span>
              </div>
            </div>

            <div className="govt-badge-card">
              <div className="govt-emblem-icon">📜</div>
              <div className="govt-badge-info">
                <h4>Govt. Registration: Etah (UP)</h4>
                <p>Registered Office: Dhumari, Aliganj, Etah - 207248</p>
                <span className="govt-badge-tag">Incorporated Oct 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* ABOUT SECTION WITH LOGO & FRANCHISE BUTTON */}
      {/* ========================================================== */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2>Welcome to <span>SHIKASHVIK WELFARE FOUNDATION</span></h2>
            <div className="about-line"></div>
            <h4 className="about-tagline">
              Dedicated to Rural Upliftment, Quality Education, Healthcare & Skill Development
            </h4>
            <p>
              <strong>SHIKASHVIK WELFARE FOUNDATION</strong> is a registered non-profit organization established under the Ministry of Corporate Affairs (MCA), Government of India. Our foundation is deeply committed to empowering underprivileged sections of society, fostering education for children, healthcare access in remote villages, and vocational training for women and youth.
            </p>
            <p>
              Through grassroots initiatives across Uttar Pradesh and adjoining regions, we bring tangible, life-changing interventions—from school kits and community computer training centers to free medical checkup camps and livelihood support.
            </p>

            {/* OFFICIAL REGISTRATION DETAILS */}
            <div className="about-key-details">
              <div className="about-detail-item">
                <span>Date of Incorporation</span>
                <span>October 23, 2026</span>
              </div>
              <div className="about-detail-item">
                <span>Registered District</span>
                <span>Etah, Uttar Pradesh, India</span>
              </div>
              <div className="about-detail-item" style={{ gridColumn: 'span 2' }}>
                <span>Registered Address</span>
                <span>C/o Ankit Shakya, Dhumari, Dhumari, Aliganj, Etah, Uttar Pradesh, India (PIN: 207248)</span>
              </div>
              <div className="about-detail-item">
                <span>Helpline / Contact</span>
                <span>+91-8445020016</span>
              </div>
              <div className="about-detail-item">
                <span>Official Email</span>
                <span>shikashvik@gmail.com</span>
              </div>
            </div>

            <div className="about-actions-group">
              <a href="#projects" className="view-details">
                Explore Our Projects →
              </a>
              <Link to="/franchise" className="franchise-highlight-btn">
                🎓 Apply For Franchise Center
              </Link>
            </div>
          </div>

          {/* OFFICIAL LOGO DISPLAY */}
          <div className="about-logo">
            <div className="about-logo-card">
              <img
                src="./logo.png"
                alt="Shikashvik Welfare Foundation Official Logo"
                className="about-official-logo"
              />
              <div className="about-seal-text">
                <h4>SHIKASHVIK WELFARE FOUNDATION</h4>
                <p>Registered Non-Profit (Govt. of India)</p>
                <span>Dhumari, Aliganj, Etah, Uttar Pradesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* WHAT CAN WE DO */}
      {/* ========================================================== */}
      <section id="what-we-do" className="what-we-do">
        <h2 className="section-title">WHAT <span>CAN WE DO</span></h2>
        <p className="section-subtitle">
          Holistic social intervention models designed to transform rural lives and create sustainable community growth.
        </p>

        <div className="action-grid">
          <div className="action-card">
            <div className="action-icon">📚</div>
            <div>
              <h3>Quality Education & Literacy</h3>
              <p>Providing free textbooks, uniforms, bags, and modern digital study centers for underprivileged rural children.</p>
            </div>
          </div>

          <div className="action-card">
            <div className="action-icon">🩺</div>
            <div>
              <h3>Free Health & Medical Camps</h3>
              <p>Primary health consultations, eye checkups, blood pressure screenings, and free distribution of essential medicines.</p>
            </div>
          </div>

          <div className="action-card">
            <div className="action-icon">🧵</div>
            <div>
              <h3>Women Empowerment & Tailoring</h3>
              <p>Vocational sewing institutes, handicraft centers, financial literacy, and promoting rural women entrepreneurship.</p>
            </div>
          </div>

          <div className="action-card">
            <div className="action-icon">💻</div>
            <div>
              <h3>Skill & Computer Training</h3>
              <p>Equipping rural youth with computer applications, coding, data entry, and job-oriented vocational certificates.</p>
            </div>
          </div>

          <div className="action-card">
            <div className="action-icon">🍲</div>
            <div>
              <h3>Hunger & Nutrition Relief</h3>
              <p>Nutritional grain distributions, clean drinking water access, and emergency dry ration support for rural families.</p>
            </div>
          </div>

          <div className="action-card">
            <div className="action-icon">🌱</div>
            <div>
              <h3>Environmental Stewardship</h3>
              <p>Community tree plantations, plastic-free rural drives, and solar awareness workshops across villages in Etah district.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* RUNNING PROJECTS (INDIAN PHOTOS) */}
      {/* ========================================================== */}
      <section id="projects" className="running-projects">
        <h2 className="section-title">RUNNING <span>PROJECTS</span></h2>
        <p className="section-subtitle">
          Direct impactful interventions currently underway across districts of Uttar Pradesh.
        </p>

        <div className="project-grid">
          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
              alt="Project Shiksha Jyoti"
            />
            <div className="project-info">
              <h3>Project Shiksha Jyoti</h3>
              <p className="project-country">📍 Etah & Aliganj Tehsil, UP</p>
              <p>Enabling 650+ rural students with complimentary school bags, notebooks, uniforms, and qualified daily tutoring.</p>
              <a href="#about" className="project-read-more">Learn More →</a>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
              alt="Aarogya Seva Initiative"
            />
            <div className="project-info">
              <h3>Aarogya Seva Rural Health</h3>
              <p className="project-country">📍 Remote Villages, Etah District</p>
              <p>Weekly mobile medical camps delivering doctor consultations, optical spectacles, and free prescription medicines.</p>
              <a href="#about" className="project-read-more">Learn More →</a>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80"
              alt="Mission Swavalamban"
            />
            <div className="project-info">
              <h3>Mission Swavalamban</h3>
              <p className="project-country">📍 Women Vocational Training Centers</p>
              <p>Empowering over 300 rural women through sewing machine training, embroidery craft, and micro-livelihood self-reliance.</p>
              <a href="#about" className="project-read-more">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* GALLERY & FRANCHISE BANNER */}
      {/* ========================================================== */}
      <section id="gallery" className="gallery-section">
        <h2 className="section-title">FIELD <span>PHOTO GALLERY</span></h2>
        <p className="section-subtitle">
          Real glimpses of our ongoing social welfare, educational, and medical initiatives in Uttar Pradesh.
        </p>

        <div className="gallery-grid">
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80"
              alt="Rural Classroom"
            />
            <div className="gallery-caption">Primary Education Session</div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80"
              alt="Health Checkup Camp"
            />
            <div className="gallery-caption">Free Health Checkup Camp</div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80"
              alt="Women Skill Workshop"
            />
            <div className="gallery-caption">Women Skill Workshop</div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb7?auto=format&fit=crop&w=600&q=80"
              alt="Food & Ration Relief"
            />
            <div className="gallery-caption">Ration & Relief Support</div>
          </div>
        </div>

        {/* APPLY FRANCHISE BANNER UNDER GALLERY */}
        <div className="franchise-cta-strip">
          <div className="franchise-cta-content">
            <h3>Start a Shikashvik Skill & Training Center in Your District</h3>
            <p>
              Partner with Shikashvik Welfare Foundation (Govt. of India Registered) • Get recognized authorization, student certification support, and syllabus assistance.
            </p>
          </div>
          <Link to="/franchise" className="franchise-cta-button">
            Apply For Franchise Online →
          </Link>
        </div>
      </section>

      {/* ========================================================== */}
      {/* BLOG / NEWS SECTION */}
      {/* ========================================================== */}
      <section id="blog" className="blog-section">
        <div className="blog-wrap">
          <h2 className="section-title">LATEST <span>NEWS & ACTIVITIES</span></h2>
          <p className="section-subtitle">
            Updates and milestones achieved by our grassroots teams and volunteer network.
          </p>

          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-media">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80"
                  alt="School Kit Distribution"
                />
              </div>
              <div className="blog-body">
                <div className="blog-date">
                  <b>28</b>
                  <small>OCT</small>
                </div>
                <div className="blog-content">
                  <h3>Distribution of 400+ School Kits Completed</h3>
                  <p>Textbooks, geometry boxes, and bags were distributed to primary students across rural schools in Etah district.</p>
                  <a href="#about" className="read">Read Update</a>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-media">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80"
                  alt="Medical Camp"
                />
              </div>
              <div className="blog-body">
                <div className="blog-date">
                  <b>25</b>
                  <small>OCT</small>
                </div>
                <div className="blog-content">
                  <h3>Special Eye & Health Checkup in Aliganj</h3>
                  <p>Over 380 elderly villagers received doctor examinations, blood sugar tests, and complimentary prescription glasses.</p>
                  <a href="#about" className="read">Read Update</a>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-media">
                <img
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80"
                  alt="Women Tailoring Batch"
                />
              </div>
              <div className="blog-body">
                <div className="blog-date">
                  <b>23</b>
                  <small>OCT</small>
                </div>
                <div className="blog-content">
                  <h3>Official Incorporation & 1st Skill Batch</h3>
                  <p>Shikashvik Welfare Foundation officially marks its foundation day and commenced its first women tailoring program.</p>
                  <a href="#about" className="read">Read Update</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* CERTIFICATES & RECOGNITION */}
      {/* ========================================================== */}
      <section id="certificates" className="cert-section">
        <h2 className="section-title">CERTIFICATES & <span>RECOGNITION</span></h2>
        <p className="section-subtitle">
          Committed to 100% legal compliance, complete accountability, and audited financial transparency.
        </p>

        <div className="cert-grid">
          <div className="cert-card">
            <div className="cert-icon">📜</div>
            <h4>Certificate of Incorporation</h4>
            <p>Registered non-profit entity under the Ministry of Corporate Affairs, Govt. of India (Oct 23, 2026).</p>
          </div>

          <div className="cert-card">
            <div className="cert-icon">🏛️</div>
            <h4>Section 8 Non-Profit Licence</h4>
            <p>Operating exclusively for charitable welfare, poverty alleviation, education, and skill advancement.</p>
          </div>

          <div className="cert-card">
            <div className="cert-icon">🇮🇳</div>
            <h4>NITI Aayog NGO-DARPAN</h4>
            <p>Listed on Government of India's official NGO portal facilitating public-private development partnerships.</p>
          </div>

          <div className="cert-card">
            <div className="cert-icon">🛡️</div>
            <h4>12A & 80G Certified</h4>
            <p>Income Tax Department certifications offering maximum tax benefits and complete donor transparency.</p>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* GOVERNMENT SUPPORTERS & PARTNERS (ALL GOVT. BODIES) */}
      {/* ========================================================== */}
      <section id="partners" className="partners-section">
        <h2 className="section-title">OUR <span>GOVERNMENT SUPPORTERS & PARTNERS</span></h2>
        <p className="section-subtitle">
          Affiliated and verified with statutory bodies and national developmental missions across India.
        </p>

        <div className="partners-grid">
          <div className="partner-logo-box">
            <div className="partner-icon">🏛️</div>
            <div className="partner-text">
              <h4>Ministry of Corporate Affairs</h4>
              <p>Government of India (Sec-8)</p>
            </div>
          </div>

          <div className="partner-logo-box">
            <div className="partner-icon">🇮🇳</div>
            <div className="partner-text">
              <h4>NITI Aayog (NGO-Darpan)</h4>
              <p>Planning & Policy Commission of India</p>
            </div>
          </div>

          <div className="partner-logo-box">
            <div className="partner-icon">🏭</div>
            <div className="partner-text">
              <h4>Ministry of MSME</h4>
              <p>Govt. of India Udyam Scheme</p>
            </div>
          </div>

          <div className="partner-logo-box">
            <div className="partner-icon">🎯</div>
            <div className="partner-text">
              <h4>Skill India Mission</h4>
              <p>National Skill Development (MSDE)</p>
            </div>
          </div>

          <div className="partner-logo-box">
            <div className="partner-icon">🧾</div>
            <div className="partner-text">
              <h4>Income Tax Department</h4>
              <p>Ministry of Finance, Govt. of India</p>
            </div>
          </div>

          <div className="partner-logo-box">
            <div className="partner-icon">🎓</div>
            <div className="partner-text">
              <h4>Department of Basic Education</h4>
              <p>Government of Uttar Pradesh</p>
            </div>
          </div>

          <div className="partner-logo-box">
            <div className="partner-icon">🩺</div>
            <div className="partner-text">
              <h4>National Health Mission (NHM)</h4>
              <p>State Health Society, Uttar Pradesh</p>
            </div>
          </div>

          <div className="partner-logo-box">
            <div className="partner-icon">🌐</div>
            <div className="partner-text">
              <h4>Digital India Initiative</h4>
              <p>Ministry of Electronics & IT (MeitY)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* FOOTER */}
      {/* ========================================================== */}
      <footer className="simple-footer">
        <div className="footer-container">
          {/* COL 1: ABOUT & ADDRESS */}
          <div className="footer-col">
            <div className="footer-brand-header">
              <img src="./logo.png" alt="Shikashvik Welfare Foundation" className="footer-logo-img" />
              <div>
                <h3 style={{ margin: 0, fontSize: '18px' }}>SHIKASHVIK</h3>
                <p style={{ margin: 0, fontSize: '11px', color: '#facc15', letterSpacing: '1px' }}>
                  WELFARE FOUNDATION
                </p>
              </div>
            </div>
            <p>
              A registered non-profit organization dedicated to fostering sustainable social transformation through education, healthcare, women empowerment, and vocational livelihood skills.
            </p>

            <div className="footer-registered-card">
              <p><strong>• Date of Incorporation:</strong> October 23, 2026</p>
              <p><strong>• Registered District:</strong> Etah, Uttar Pradesh, India</p>
              <p><strong>• Registered Address:</strong> C/o Ankit Shakya, Dhumari, Dhumari, Aliganj, Etah, Uttar Pradesh, India (PIN: 207248)</p>
            </div>
          </div>

          {/* COL 2: QUICK LINKS */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Foundation</a></li>
              <li><a href="#what-we-do">What We Do</a></li>
              <li><a href="#projects">Running Projects</a></li>
              <li><a href="#gallery">Field Gallery</a></li>
              <li><Link to="/franchise" style={{ color: '#facc15', fontWeight: 'bold' }}>🎓 Apply Franchise</Link></li>
              <li><a href="#certificates">Certificates</a></li>
              <li><a href="#partners">Government Partners</a></li>
            </ul>
          </div>

          {/* COL 3: MEMBER / PORTAL */}
          <div className="footer-col">
            <h3>Member Portal</h3>
            <ul>
              {user ? (
                <>
                  <li><Link to="/dashboard">👤 My Dashboard</Link></li>
                  <li>
                    <a
                      href="#logout"
                      onClick={(e) => {
                        e.preventDefault()
                        handleLogout()
                      }}
                    >
                      🚪 Sign Out
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li><Link to="/login">🔑 Login to Account</Link></li>
                  <li><Link to="/signup">✨ Register New Member</Link></li>
                </>
              )}
              <li><Link to="/franchise">📋 Franchise Application</Link></li>
              <li><a href="#projects">❤️ Support / Donate</a></li>
            </ul>
          </div>

          {/* COL 4: CONTACT US */}
          <div className="footer-col">
            <h3>Official Contact</h3>
            <div className="footer-contact-item">
              <span>📞</span>
              <div>
                <strong>Helpline Number:</strong>
                <p><a href="tel:8445020016" style={{ color: '#fff' }}>+91-8445020016</a></p>
              </div>
            </div>

            <div className="footer-contact-item">
              <span>✉</span>
              <div>
                <strong>Official Email:</strong>
                <p><a href="mailto:shikashvik@gmail.com" style={{ color: '#fff' }}>shikashvik@gmail.com</a></p>
              </div>
            </div>

            <div className="footer-contact-item">
              <span>📍</span>
              <div>
                <strong>District:</strong>
                <p>Etah, Uttar Pradesh (PIN: 207248)</p>
              </div>
            </div>

            <div className="footer-contact-item">
              <span>🕒</span>
              <div>
                <strong>Office Hours:</strong>
                <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SHIKASHVIK WELFARE FOUNDATION. All Rights Reserved.</p>
          <p style={{ marginTop: '5px', fontSize: '11.5px', color: '#64748b' }}>
            Incorporated: October 23, 2026 • Registered District: Etah, Uttar Pradesh, India
          </p>
        </div>
      </footer>
    </div>
  )
}
