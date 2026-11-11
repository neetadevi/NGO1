import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PagesCommon.css'

export default function BenefitsRequirement() {
  const requirements = [
    { icon: '📐', title: 'Minimum Space / Carpet Area', desc: 'At least 300 to 800 sq. ft. of space containing 1 theory classroom, 1 computer lab, and reception counter.' },
    { icon: '💻', title: 'Computer Hardware Setup', desc: 'Minimum 5 to 10 working desktop PCs or laptops with mouse, keyboard, and Windows/Linux OS.' },
    { icon: '🌐', title: 'High-Speed Internet Connectivity', desc: 'Active broadband / Wi-Fi connection for online admissions, attendance, and exam conduction.' },
    { icon: '🔋', title: 'Power Backup & Inverter', desc: 'Adequate inverter or generator facility to ensure uninterrupted practical classes.' },
    { icon: '👨‍🏫', title: 'Qualified Faculty & Trainers', desc: 'At least 1 qualified computer teacher (DCA / ADCA / PGDCA / BCA) or vocational instructor.' },
    { icon: '🪧', title: 'Front Signboard / Branding', desc: 'Official Shikashvik Welfare Foundation banner displayed prominently at the center entrance.' },
  ]

  const benefits = [
    { icon: '📜', title: 'Official Affiliation Certificate', desc: 'Framed Authorization Certificate naming your center as an Accredited Training Partner.' },
    { icon: '💻', title: 'Director Admin Portal', desc: 'Exclusive login dashboard to register students, submit exam marks, and track student certificates.' },
    { icon: '🔍', title: 'Online Student Verification', desc: 'All your enrolled students can verify their roll numbers and mark sheets 24x7 online.' },
    { icon: '🎨', title: 'Complete Promotional Media Kit', desc: 'Free flex designs, visiting cards, prospectus templates, social media flyers, and syllabus PDFs.' },
    { icon: '📋', title: '100+ Authorized Courses', desc: 'Run Computer, IT, Vocational Tailoring, Beautician, PM DAKSH, and Health courses under 1 single affiliation.' },
    { icon: '💰', title: 'Maximum Revenue Retention', desc: 'Keep 100% of your student tuition fees; only pay nominal certificate issuance charges.' },
  ]

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Center Affiliation Guide</span>
          <h1 className="inner-hero-title">Benefits & Requirements</h1>
          <p className="inner-hero-subtitle">
            Everything you need to know about setting up and running a successful Shikashvik Authorized Study Center.
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Franchise</span>
            <span>/</span>
            <span>Benefits & Requirement</span>
          </div>
        </div>
      </section>

      <div className="page-content-container">
        <div className="content-card">
          <h2>1. Center Infrastructure Requirements</h2>
          <p>
            Shikashvik Welfare Foundation follows transparent, accessible norms so passionate teachers, educators, and rural entrepreneurs can easily set up a center without prohibitive capital.
          </p>

          <div className="feature-grid-3">
            {requirements.map((req, idx) => (
              <div key={idx} className="feature-box">
                <div className="feature-box-icon">{req.icon}</div>
                <h4>{req.title}</h4>
                <p>{req.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: '40px' }}>2. Key Benefits for Center Directors</h2>
          <p>
            Partnering with Shikashvik Welfare Foundation brings statutory prestige, institutional backing, and complete technological support to your institute.
          </p>

          <div className="feature-grid-3">
            {benefits.map((b, idx) => (
              <div key={idx} className="feature-box" style={{ background: '#f5f3ff', borderColor: '#ddd6fe' }}>
                <div className="feature-box-icon">{b.icon}</div>
                <h4 style={{ color: '#4b087d' }}>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="card-gold-box" style={{ textAlign: 'center', marginTop: '36px', padding: '28px' }}>
            <h3 style={{ margin: '0 0 8px', color: '#78350f', fontSize: '20px' }}>
              Start Your Authorized Study Center Today
            </h3>
            <p style={{ margin: '0 0 16px', color: '#92400e', fontSize: '14.5px' }}>
              Affiliation approvals issued within 48 to 72 hours upon verification of center space.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/franchise/apply" className="course-apply-btn" style={{ padding: '12px 28px' }}>
                📋 Apply for Franchise Center →
              </Link>
              <Link to="/franchise/enquiry" className="course-apply-btn" style={{ background: '#b45309', padding: '12px 28px' }}>
                💬 Request Callback
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

