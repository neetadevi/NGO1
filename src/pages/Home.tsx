import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Home.css'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Top Hero Slider customized to showcase the official courses provided
  const slides = [
    {
      img: './gallery/field-6.jpg',
      badge: 'IT & Computer Software',
      title: 'ADCA, DCA, Tally Prime + GST & Web Designing',
      subtitle: 'Government recognized 3, 6, and 12-month computer applications, programming, accounting, and DTP courses for career readiness.',
      link: '/courses/all',
      btnText: 'Explore Computer Courses →',
    },
    {
      img: './gallery/field-5.jpg',
      badge: 'Tailoring & Fashion Technology',
      title: 'Cutting, Stitching, Tailoring & Boutique Management',
      subtitle: 'Professional certification and diploma courses in advanced garment making, pattern drafting, and fashion technology.',
      link: '/courses/all',
      btnText: 'View Tailoring Courses →',
    },
    {
      img: './gallery/field-1.jpg',
      badge: 'Beauty & Wellness Cosmetology',
      title: 'Advanced Makeup, Bridal Styling & Cosmetology Diploma',
      subtitle: 'Professional salon training, bridal artistry, skin aesthetics, and beauty wellness diplomas with authorized certification.',
      link: '/courses/all',
      btnText: 'View Beauty Courses →',
    },
    {
      img: './gallery/field-7.jpg',
      badge: 'Skill Development & Technical Trades',
      title: 'Electrician, Solar Technician, AC/HVAC & CCTV Training',
      subtitle: 'Hands-on technical trade diplomas in electrical wiring, solar panel installation, plumbing, and surveillance engineering.',
      link: '/courses/all',
      btnText: 'Explore Technical Trades →',
    },
    {
      img: './gallery/field-8.jpg',
      badge: 'Teacher Training & Yoga',
      title: 'Nursery Teacher Training (NTT), Stenography & Yoga',
      subtitle: '1 & 2-Year NTT teacher diplomas, bilingual Hindi/English typing, stenographer certifications, and Yoga teacher training.',
      link: '/courses/all',
      btnText: 'View Teacher & Yoga Courses →',
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5500)

    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="home-page">
      {/* STRUCTURED TOP NAVIGATION WITH DROPDOWNS */}
      <Navbar />

      {/* HERO SLIDER (CUSTOMIZED TO REFLECT COURSES) */}
      <section id="home" className="hero-slider">
        <div className="slider-image">
          <img src={slides[currentSlide].img} alt={slides[currentSlide].title} />
          <div className="slider-overlay">
            <div className="slider-content">
              <span className="slider-badge">{slides[currentSlide].badge}</span>
              <h2>{slides[currentSlide].title}</h2>
              <p>{slides[currentSlide].subtitle}</p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to={slides[currentSlide].link} className="slider-cta-btn">
                  {slides[currentSlide].btnText}
                </Link>
                <Link to="/student-zone/offline-admission-form" className="slider-cta-alt">
                  📄 Offline Admission Form (A4)
                </Link>
                <Link
                  to="/franchise/apply"
                  style={{
                    background: '#ffffff',
                    color: '#4b087d',
                    padding: '13px 24px',
                    borderRadius: '30px',
                    fontWeight: 800,
                    fontSize: '14px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  🎓 Apply Franchise
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

      {/* SITE FOOTER WITH COMPLETE STATUTORY & ADDRESS DETAILS */}
      <Footer />
    </div>
  )
}
