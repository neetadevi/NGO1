import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PagesCommon.css'

export default function ChairmanMessage() {
  return (
    <div className="page-wrapper">
      <Navbar />

      {/* HERO BANNER */}
      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Leadership & Vision</span>
          <h1 className="inner-hero-title">Chairman's Message</h1>
          <p className="inner-hero-subtitle">
            Words of guidance and inspiration from the Chairman, Shikashvik Welfare Foundation.
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
            <span>/</span>
            <span>Chairman Message</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="page-content-container">
        <div className="content-card">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '24px', flexWrap: 'wrap' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#4b087d', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', boxShadow: '0 4px 15px rgba(75, 8, 125, 0.25)' }}>
                  ✍️
                </div>
                <div>
                  <h2 style={{ margin: 0, color: '#3b0764' }}>Chairman's Desk</h2>
                  <p style={{ margin: '4px 0 0', color: '#64748b', fontWeight: 600 }}>
                    Shikashvik Welfare Foundation • Section 8 Non-Profit Organization
                  </p>
                </div>
              </div>

              <div className="card-highlight-box" style={{ fontStyle: 'italic', fontSize: '16px' }}>
                “Empowering Through Education, Enabling Through Skills.”
              </div>

              <p>
                <strong>Dear Students, Parents, Partners, and Well-Wishers,</strong>
              </p>
              <p>
                It gives me immense pleasure to welcome you to <strong>Shikashvik Welfare Foundation</strong>, an organization committed to promoting education, skill development, vocational training, and social welfare.
              </p>
              <p>
                We strongly believe that education is the foundation of a progressive and empowered society. Our mission is to provide quality education and skill-based learning opportunities to individuals, especially those who wish to build a better future through knowledge, practical skills, and self-confidence.
              </p>
              <p>
                At Shikashvik Welfare Foundation, we strive to create opportunities for everyone by offering educational and vocational training programs that help learners enhance their knowledge, develop professional skills, and become self-reliant. We are dedicated to making education accessible and meaningful for all sections of society.
              </p>
              <p>
                Our vision is to build a network of educational and training centers that promote excellence, integrity, innovation, and social responsibility. Through our dedicated team, training partners, and franchise centers, we aim to extend the benefits of education and skill development to every corner of the country.
              </p>
              <p>
                I sincerely thank our students, faculty members, associates, and supporters for their trust and cooperation. Your continued support inspires us to work harder toward our mission.
              </p>
              <p>
                Let us work together to create a future where education empowers individuals, skills create opportunities, and every learner has the confidence to achieve their dreams.
              </p>

              <div style={{ marginTop: '36px', borderTop: '2px dashed #e2e8f0', paddingTop: '20px' }}>
                <p style={{ margin: '0', color: '#1e1b4b', fontWeight: 700, fontSize: '16px' }}>
                  With best wishes and warm regards,
                </p>
                <div style={{ marginTop: '12px' }}>
                  <strong style={{ fontSize: '18px', color: '#4b087d', fontFamily: 'Georgia, serif' }}>
                    Chairman
                  </strong>
                  <br />
                  <span style={{ fontSize: '14px', color: '#64748b' }}>
                    Shikashvik Welfare Foundation
                  </span>
                  <br />
                  <span style={{ fontSize: '13px', color: '#b45309', fontWeight: 700 }}>
                    “Empowering Through Education, Enabling Through Skills”
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

