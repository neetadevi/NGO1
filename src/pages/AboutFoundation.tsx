import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PagesCommon.css'

export default function AboutFoundation() {
  return (
    <div className="page-wrapper">
      <Navbar />

      {/* HERO BANNER */}
      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">About Shikashvik</span>
          <h1 className="inner-hero-title">About Shikashvik Welfare Foundation</h1>
          <p className="inner-hero-subtitle">
            Section 8 Non-Profit Organization registered under Companies Act, 2013, Ministry of Corporate Affairs, Government of India.
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
            <span>/</span>
            <span>About Foundation</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="page-content-container">
        <div className="content-card">
          <h2>Official Overview & Institutional Profile</h2>
          <div className="card-highlight-box">
            <strong>Shikashvik Welfare Foundation</strong> is a Section 8 Company registered under the Companies Act, 2013, with a vision to promote education, computer literacy, vocational training, skill development, and social welfare across India.
          </div>

          <p>
            The Foundation is committed to working in various fields of educational and professional training, with the objective of reaching every section of society. Our mission is to provide accessible, affordable, and quality education that empowers individuals with knowledge, practical skills, and opportunities for a better future.
          </p>
          <p>
            Shikashvik Welfare Foundation aims to contribute to the development of an educated, digitally empowered, and self-reliant India through educational initiatives, skill development programs, and vocational training activities.
          </p>
          <p>
            Shikashvik Welfare Foundation is dedicated to conducting various educational, computer literacy, vocational, and skill development programs. The Foundation aims to establish a strong network of educational and training centers throughout the country.
          </p>
          <p>
            Through its educational initiatives and institutional partnerships, the Foundation seeks to provide learning opportunities to students, youth, women, and individuals from economically weaker sections of society.
          </p>
          <p>
            Our objective is to make education and skill development accessible to all and to encourage individuals to become self-reliant through knowledge and professional training.
          </p>

          <h3>Statutory & Registration Credentials</h3>
          <div className="feature-grid-3">
            <div className="feature-box">
              <div className="feature-box-icon">📜</div>
              <h4>Legal Status</h4>
              <p>Section 8 Non-Profit Company under Companies Act, 2013 (Ministry of Corporate Affairs, Govt. of India)</p>
            </div>
            <div className="feature-box">
              <div className="feature-box-icon">📅</div>
              <h4>Date of Incorporation</h4>
              <p>October 23, 2026 (Registered District: Etah, Uttar Pradesh, India)</p>
            </div>
            <div className="feature-box">
              <div className="feature-box-icon">📍</div>
              <h4>Registered Head Office</h4>
              <p>C/o Ankit Shakya, Dhumari, Aliganj, Etah, Uttar Pradesh, India (PIN: 207248)</p>
            </div>
          </div>

          <h3>Our Guiding Principles</h3>
          <div className="feature-grid-3">
            <div className="feature-box">
              <div className="feature-box-icon">🎓</div>
              <h4>Education Accessibility</h4>
              <p>Bridging urban-rural gaps by setting up recognized training and computer study centers in every block.</p>
            </div>
            <div className="feature-box">
              <div className="feature-box-icon">💼</div>
              <h4>Vocational Self-Reliance</h4>
              <p>Practical hands-on training enabling immediate employment and entrepreneurship opportunities.</p>
            </div>
            <div className="feature-box">
              <div className="feature-box-icon">🤝</div>
              <h4>Community Welfare</h4>
              <p>Dedicated free health camps, school kit distribution, and women empowerment initiatives.</p>
            </div>
          </div>

          <div className="card-gold-box" style={{ textAlign: 'center', marginTop: '30px' }}>
            <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>Join Our Nationwide Educational Network</h4>
            <p style={{ margin: '0 0 16px', color: '#78350f' }}>
              Are you an educational institute, coaching center, or entrepreneur? Partner with us as an Authorized Franchise Center.
            </p>
            <Link to="/franchise/apply" className="course-apply-btn" style={{ display: 'inline-block', padding: '12px 28px' }}>
              📋 Apply For Franchise Center
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

