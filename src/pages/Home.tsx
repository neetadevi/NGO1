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

  // Authentic Real Indian Field & Community photos from Shikashvik Welfare Foundation operations
  const slides = [
    {
      img: './gallery/field-3.jpg',
      badge: 'Education For All Children',
      title: 'Empowering Underprivileged Children in Rural India',
      subtitle: 'Free school kit distribution, daily tutoring, books, and digital literacy across Etah and Uttar Pradesh.',
    },
    {
      img: './gallery/field-4.jpg',
      badge: 'Free Healthcare & Medicine',
      title: 'Aarogya Seva: Rural Free Health & Medical Camps',
      subtitle: 'Free doctor checkups, vital health screenings, and distributing free medicines to underprivileged rural families.',
    },
    {
      img: './gallery/field-7.jpg',
      badge: 'PM DAKSH & Skill Training',
      title: 'Youth Vocational & Professional Career Empowerment',
      subtitle: 'Job-oriented skill programs, digital computer training, and livelihood skills fostering self-reliance.',
    },
    {
      img: './gallery/field-12.jpg',
      badge: 'Student Certification & Honors',
      title: 'Official Accreditation & Skill Certificate Distribution',
      subtitle: 'Awarding government-recognized skill certificates and recognizing students transforming their communities.',
    },
  ]

  // 12 Authentic Cropped Field Photos from Foundation Events
  const galleryImages = [
    {
      img: './gallery/field-1.jpg',
      title: 'Community Social Welfare & Rural Empowerment Assembly',
      tag: 'Field Meet',
    },
    {
      img: './gallery/field-2.jpg',
      title: 'Press Media Coverage & Recognition of Social Work',
      tag: 'Media Report',
    },
    {
      img: './gallery/field-3.jpg',
      title: 'Free Distribution of School Bags, Books & Stationeries',
      tag: 'Education Kits',
    },
    {
      img: './gallery/field-4.jpg',
      title: 'Aarogya Seva Free Medical Checkup & Diagnostic Camp',
      tag: 'Medical Relief',
    },
    {
      img: './gallery/field-5.jpg',
      title: 'Rural Women Empowerment & Livelihood Training Center',
      tag: 'Women Upliftment',
    },
    {
      img: './gallery/field-6.jpg',
      title: 'Digital Literacy & Computer Lab Learning Session',
      tag: 'Digital Learning',
    },
    {
      img: './gallery/field-7.jpg',
      title: 'PM DAKSH Skill Training & Career Development Workshop',
      tag: 'PM DAKSH',
    },
    {
      img: './gallery/field-8.jpg',
      title: 'Rural Student Assembly & Mentoring Seminar in UP',
      tag: 'Youth Workshop',
    },
    {
      img: './gallery/field-9.jpg',
      title: 'Grassroots Education Awareness & Classroom Guidance',
      tag: 'Rural Classroom',
    },
    {
      img: './gallery/field-10.jpg',
      title: 'Self-Help Group Discussion & Community Development',
      tag: 'Community Meet',
    },
    {
      img: './gallery/field-11.jpg',
      title: 'Interactive Skill Orientation for Rural Youth & Students',
      tag: 'Skill Seminar',
    },
    {
      img: './gallery/field-12.jpg',
      title: 'Official Certificate Distribution & Valedictory Ceremony',
      tag: 'Certification',
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

  // Verified & Registered Government Badges (ONLY LOGOS - NO NAMES)
  const govtLogos = [
    { id: 1, name: 'State Emblem of India', img: './govt/emblem-india.svg' },
    { id: 2, name: 'Ministry of Corporate Affairs', img: './govt/mca-govt.png' },
    { id: 3, name: 'NITI Aayog (NGO-DARPAN)', img: './govt/niti-aayog.svg' },
    { id: 4, name: 'MSME Government of India', img: './govt/msme.svg' },
    { id: 5, name: 'Income Tax Department India', img: './govt/income-tax.png' },
    { id: 6, name: 'Skill India Mission', img: './govt/skill-india.png' },
    { id: 7, name: 'Digital India', img: './govt/digital-india.svg' },
    { id: 8, name: 'PM DAKSH Yojana', img: './govt/pm-daksh.png' },
  ]

  // Partner logos (ENLARGED - TRANSPARENT BACKGROUND - ONLY LOGOS)
  const partnerLogos = [
    { id: 1, name: 'PM DAKSH', img: './partners/pm-daksh.png' },
    { id: 2, name: 'Pradhan Mantri Bhartiya Jan Aushadhi', img: './partners/jan-aushadhi.png' },
    { id: 3, name: 'Ministry of Rural Development', img: './partners/rural-dev.png' },
    { id: 4, name: 'Skill India Mission', img: './partners/skill-india.png' },
    { id: 5, name: 'Telecom Sector Skill Council', img: './partners/tssc.png' },
    { id: 6, name: 'Ministry of Labour & Employment', img: './partners/labour-ministry.png' },
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

      {/* HERO SLIDER (AUTHENTIC REAL FIELD PHOTOS) */}
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
      {/* VERIFIED & REGISTERED (SINGLE LINE SLIDING RIGHT TO LEFT)  */}
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

        {/* SINGLE HORIZONTAL LINE SLIDING RIGHT-TO-LEFT (ONLY REAL LOGOS - BUTTON STYLE) */}
        <div className="govt-single-line-track">
          <div className="govt-marquee-row">
            {govtLogos.concat(govtLogos).concat(govtLogos).map((g, idx) => (
              <div key={`govt-${idx}`} className="govt-logo-badge" title={g.name}>
                <img src={g.img} alt={g.name} className="govt-badge-img" />
              </div>
            ))}
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
      {/* RUNNING PROJECTS (AUTHENTIC FIELD PHOTOS)                 */}
      {/* ========================================================== */}
      <section id="projects" className="running-projects">
        <h2 className="section-title">RUNNING <span>PROJECTS</span></h2>
        <p className="section-subtitle">
          Direct impactful interventions currently underway across districts of Uttar Pradesh.
        </p>

        <div className="project-grid">
          <div className="project-card">
            <img
              src="./gallery/field-8.jpg"
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
              src="./gallery/field-4.jpg"
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
              src="./gallery/field-7.jpg"
              alt="Mission Swavalamban"
            />
            <div className="project-info">
              <h3>Mission Swavalamban</h3>
              <p className="project-country">📍 Women Vocational Training Centers</p>
              <p>Empowering over 300 rural women and youth through PM DAKSH skills, computer courses, and micro-livelihood self-reliance.</p>
              <a href="#about" className="project-read-more">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* OUR GALLERY (ALL 12 REAL CROPPED FIELD EVENT PHOTOS)       */}
      {/* ========================================================== */}
      <section id="gallery" className="gallery-section">
        <h2 className="section-title">OUR <span>GALLERY</span></h2>
        <p className="section-subtitle">
          Real glimpses of our ongoing social welfare, skill development classes, and medical relief camps in Uttar Pradesh.
        </p>

        <div className="gallery-grid-12">
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
      {/* OUR PARTNERS (ENLARGED - TRANSPARENT - ONLY GOVT LOGOS)    */}
      {/* ========================================================== */}
      <section id="partners" className="partners-section">
        <h2 className="section-title">OUR <span>PARTNERS</span></h2>

        {/* SINGLE CONTINUOUS SLIDING TRACK - ONLY ENLARGED LOGOS WITH TRANSPARENT BACKGROUND */}
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

      {/* FOOTER REMOVED AS REQUESTED */}
    </div>
  )
}
