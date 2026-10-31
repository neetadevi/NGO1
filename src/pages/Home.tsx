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

  // 8 Individual high-resolution real field activity photos for Gallery
  const galleryImages = [
    {
      img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=700&q=80',
      title: 'Primary School Classroom & Quality Education',
      tag: 'Education',
    },
    {
      img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=700&q=80',
      title: 'Women Vocational Tailoring & Skill Institute',
      tag: 'Skill Training',
    },
    {
      img: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&q=80',
      title: 'Free Rural Health Consultation & Eye Checkup Camp',
      tag: 'Healthcare',
    },
    {
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80',
      title: 'School Bags, Books & Winter Uniform Distribution',
      tag: 'Distribution',
    },
    {
      img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80',
      title: 'Computer Training Lab & Digital Literacy Workshop',
      tag: 'Digital Literacy',
    },
    {
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80',
      title: 'Youth Certificate Award Ceremony & Graduation',
      tag: 'Certifications',
    },
    {
      img: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb7?auto=format&fit=crop&w=700&q=80',
      title: 'Community Food Kitchen & Essential Ration Relief',
      tag: 'Relief Aid',
    },
    {
      img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=700&q=80',
      title: 'Green Earth Plantation Drive & Village Awareness',
      tag: 'Environment',
    },
  ]

  // Clean cropped individual certificates for single line display
  const certificates = [
    {
      img: './certificates/cert-nhrc.jpg',
      title: 'National Human Rights Commission (NHRC)',
      subtitle: 'Human Rights Pledge Certificate',
    },
    {
      img: './certificates/cert-registration.jpg',
      title: 'Certificate of Registration',
      subtitle: 'Societies Registration Act',
    },
    {
      img: './certificates/cert-iso-management.jpg',
      title: 'ISO 9001:2015 Management System',
      subtitle: 'QPS Quality Standard',
    },
    {
      img: './certificates/cert-iso-qro.jpg',
      title: 'QRO ISO Certificate',
      subtitle: 'Quality Certification System',
    },
    {
      img: './certificates/cert-cvc.jpg',
      title: 'Central Vigilance Commission (CVC)',
      subtitle: 'Certificate of Commitment',
    },
    {
      img: './certificates/cert-pcra.jpg',
      title: 'PCRA Ministry of Petroleum',
      subtitle: 'Fuel Conservation Pledge',
    },
  ]

  // Partner logos (ONLY LOGOS - NO GOVT NAMES)
  const partnerLogos = [
    { id: 1, name: 'PM DAKSH', img: './partners/pm-daksh.png' },
    { id: 2, name: 'Jan Aushadhi', img: './partners/jan-aushadhi.png' },
    { id: 3, name: 'Rural Development', img: './partners/rural-dev.png' },
    { id: 4, name: 'Skill India', img: './partners/skill-india.png' },
    { id: 5, name: 'TSSC India', img: './partners/tssc.png' },
    { id: 6, name: 'Labour Ministry', img: './partners/labour-ministry.png' },
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
      {/* TOP CONTACT BAR (WHITE LOGIN REMOVED) */}
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

            {/* AUTH BUTTONS AT TOP - WHITE LOGIN REMOVED */}
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
                <Link to="/signup" className="top-signup-btn">
                  ✨ Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION WITH BIGGER PROMINENT LOGO */}
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
            <a href="#certificates" onClick={() => setMobileMenuOpen(false)}>Certificates</a>
            <a href="#partners" onClick={() => setMobileMenuOpen(false)}>Partners</a>

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
      {/* VERIFIED & REGISTERED (CENTERED - ONLY LOGOS - NO NAMES)   */}
      {/* ========================================================== */}
      <section className="govt-ticker-section">
        <div className="ticker-header">
          <div className="ticker-title-badge">
            ✓ 100% Government Recognized & Registered
          </div>
          <h3 className="ticker-heading">
            VERIFIED & REGISTERED WITH <span>GOVERNMENT OF INDIA</span>
          </h3>
        </div>

        {/* CENTERED LOGO BADGES (NO LONG TEXT NAMES) */}
        <div className="govt-logos-center-row">
          <div className="govt-logo-badge" title="Ministry of Corporate Affairs (MCA)">
            <span className="govt-badge-icon">🏛️</span>
            <span className="govt-badge-tag">MCA Govt. of India</span>
          </div>

          <div className="govt-logo-badge" title="NITI Aayog (NGO-DARPAN)">
            <span className="govt-badge-icon">🇮🇳</span>
            <span className="govt-badge-tag">NITI Aayog</span>
          </div>

          <div className="govt-logo-badge" title="MSME Udyam">
            <span className="govt-badge-icon">🏭</span>
            <span className="govt-badge-tag">MSME Udyam</span>
          </div>

          <div className="govt-logo-badge" title="Income Tax Section 12A">
            <span className="govt-badge-icon">🧾</span>
            <span className="govt-badge-tag">12A Certified</span>
          </div>

          <div className="govt-logo-badge" title="Income Tax Section 80G">
            <span className="govt-badge-icon">💰</span>
            <span className="govt-badge-tag">80G Approved</span>
          </div>

          <div className="govt-logo-badge" title="CSR-1 Registration">
            <span className="govt-badge-icon">💼</span>
            <span className="govt-badge-tag">CSR-1 Registered</span>
          </div>

          <div className="govt-logo-badge" title="Skill India Mission">
            <span className="govt-badge-icon">🎯</span>
            <span className="govt-badge-tag">Skill India</span>
          </div>

          <div className="govt-logo-badge" title="Digital India">
            <span className="govt-badge-icon">🌐</span>
            <span className="govt-badge-tag">Digital India</span>
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
      {/* OUR GALLERY (8 INDIVIDUAL REAL PHOTOS)                     */}
      {/* ========================================================== */}
      <section id="gallery" className="gallery-section">
        <h2 className="section-title">OUR <span>GALLERY</span></h2>
        <p className="section-subtitle">
          Real glimpses of our ongoing social welfare, skill development classes, and medical relief camps in Uttar Pradesh.
        </p>

        <div className="gallery-grid-8">
          {galleryImages.map((item, idx) => (
            <div key={idx} className="gallery-card">
              <img src={item.img} alt={item.title} loading="lazy" />
              <span className="gallery-overlay-badge">{item.tag}</span>
              <div className="gallery-card-caption">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================== */}
      {/* OUR CERTIFICATES (SINGLE LINE CROPPED CERTIFICATES)         */}
      {/* ========================================================== */}
      <section id="certificates" className="cert-section">
        <h2 className="section-title">OUR <span>CERTIFICATES</span></h2>
        <p className="section-subtitle">
          Verified & recognized legal registration documents, human rights pledges, and ISO quality accreditations.
        </p>

        {/* SINGLE HORIZONTAL LINE OF CROPPED CERTIFICATES */}
        <div className="cert-single-line-track">
          <div className="cert-marquee-row">
            {certificates.concat(certificates).map((c, idx) => (
              <div key={`cert-${idx}`} className="cert-cropped-card">
                <div className="cert-paper-wrapper">
                  <img src={c.img} alt={c.title} className="cert-paper-img" />
                </div>
                <div className="cert-card-caption">
                  <h4>{c.title}</h4>
                  <p>{c.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* OUR PARTNERS (SINGLE LINE - ONLY LOGOS - NO GOVT NAMES)    */}
      {/* ========================================================== */}
      <section id="partners" className="partners-section">
        <h2 className="section-title">OUR <span>PARTNERS</span></h2>

        {/* SINGLE CONTINUOUS SLIDING TRACK - ONLY LOGOS */}
        <div className="partners-single-line-track">
          <div className="partners-single-marquee">
            {partnerLogos.concat(partnerLogos).concat(partnerLogos).map((p, idx) => (
              <div key={`partner-${idx}`} className="partner-logo-item" title={p.name}>
                <img src={p.img} alt={p.name} className="partner-logo-only" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER HAS BEEN REMOVED */}
    </div>
  )
}
