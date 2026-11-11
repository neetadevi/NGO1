import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PagesCommon.css'

export default function MissionVision() {
  return (
    <div className="page-wrapper">
      <Navbar />

      {/* HERO BANNER */}
      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Our Commitment</span>
          <h1 className="inner-hero-title">Our Mission & Vision</h1>
          <p className="inner-hero-subtitle">
            Shikashvik Welfare Foundation: “Education for All – Skill Development for a Better Future.”
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
            <span>/</span>
            <span>Mission & Vision</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="page-content-container">
        <div className="content-card">
          <h2>Our Core Philosophy</h2>
          <div className="card-highlight-box" style={{ fontSize: '16.5px' }}>
            <strong>Shikashvik Welfare Foundation</strong> believes that education and information technology are essential for the development of modern India.
          </div>

          <p>
            With the growing importance of computers, digital technology, and professional skills, our Foundation aims to provide computer education, digital literacy, vocational training, and employment-oriented learning opportunities.
          </p>
          <p>
            We strive to support the development of skilled human resources required in IT, industries, small-scale businesses, offices, and other professional sectors.
          </p>

          <div className="feature-grid-2" style={{ margin: '32px 0' }}>
            <div className="feature-box" style={{ background: '#f5f3ff', borderColor: '#c4b5fd' }}>
              <div className="feature-box-icon">🎯</div>
              <h3 style={{ margin: '0 0 10px', color: '#4b087d', fontSize: '20px' }}>Our Mission</h3>
              <p style={{ color: '#334155', fontSize: '14.5px', lineHeight: 1.65 }}>
                Our mission is to bridge the digital divide, promote skill-based education, and create opportunities for individuals to develop their professional capabilities. We aim to reach underprivileged rural youth and women with accessible job-ready skills.
              </p>
            </div>

            <div className="feature-box" style={{ background: '#fffbeb', borderColor: '#fde68a' }}>
              <div className="feature-box-icon">🌟</div>
              <h3 style={{ margin: '0 0 10px', color: '#b45309', fontSize: '20px' }}>Our Vision</h3>
              <p style={{ color: '#334155', fontSize: '14.5px', lineHeight: 1.65 }}>
                Shikashvik Welfare Foundation aspires to contribute to the vision of an educated, skilled, digitally empowered, and self-reliant India. We envision a society where geography or financial constraints never block quality learning.
              </p>
            </div>
          </div>

          <p>
            We believe that every individual deserves an opportunity to learn, grow, and achieve their goals. Through our educational programs and training initiatives, we aim to empower communities, improve access to education, and contribute to the overall development of the nation.
          </p>

          <div className="card-gold-box" style={{ textAlign: 'center', padding: '24px' }}>
            <h3 style={{ margin: '0 0 8px', color: '#78350f', fontSize: '20px' }}>
              Shikashvik Welfare Foundation
            </h3>
            <p style={{ margin: 0, fontSize: '17px', fontWeight: 700, color: '#92400e' }}>
              “Education for All – Skill Development for a Better Future.”
            </p>
          </div>

          <h3 style={{ marginTop: '36px' }}>Strategic Goals & Key Pillars</h3>
          <div className="feature-grid-3">
            <div className="feature-box">
              <div className="feature-box-icon">💻</div>
              <h4>Digital Literacy for All</h4>
              <p>Ensuring youth and rural women become fluent with modern computers, internet tools, and digital governance.</p>
            </div>
            <div className="feature-box">
              <div className="feature-box-icon">⚡</div>
              <h4>Practical Skill Training</h4>
              <p>Conducting market-aligned courses in electronics, accounting, data entry, and trade crafts.</p>
            </div>
            <div className="feature-box">
              <div className="feature-box-icon">🏢</div>
              <h4>Nationwide Franchise Network</h4>
              <p>Enabling educational entrepreneurs to set up standardized training institutes in their local blocks.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

