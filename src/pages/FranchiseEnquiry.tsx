import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './PagesCommon.css'

export default function FranchiseEnquiry() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [enquiry, setEnquiry] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    district: '',
    state: 'Uttar Pradesh',
    currentBusiness: 'Existing Computer Center',
    spaceAvailable: '500 - 1000 sq ft',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setEnquiry(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      window.scrollTo({ top: 200, behavior: 'smooth' })
    }, 900)
  }

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Center Affiliation Support</span>
          <h1 className="inner-hero-title">Franchise Enquiry & Callback</h1>
          <p className="inner-hero-subtitle">
            Connect with our affiliation team to discuss center setup, affiliation fees, course authorization, and marketing support.
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Franchise</span>
            <span>/</span>
            <span>Franchise Enquiry</span>
          </div>
        </div>
      </section>

      <div className="page-content-container">
        {!submitted ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            <div className="content-card">
              <h2>Quick Franchise Enquiry Form</h2>
              <p style={{ color: '#64748b', fontSize: '14px' }}>
                Fill out the form below. Our national coordinator will call you within 24 hours with the complete Franchise Prospectus & Authorization Kit.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-group-item">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={enquiry.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group-item">
                  <label>Mobile / WhatsApp Number *</label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    value={enquiry.mobile}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group-item">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    value={enquiry.email}
                    onChange={handleChange}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div className="form-group-item">
                    <label>City / Town *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="e.g. Aliganj"
                      value={enquiry.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group-item">
                    <label>District *</label>
                    <input
                      type="text"
                      name="district"
                      required
                      placeholder="e.g. Etah"
                      value={enquiry.district}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group-item">
                  <label>Current Profession / Setup</label>
                  <select name="currentBusiness" value={enquiry.currentBusiness} onChange={handleChange}>
                    <option value="Existing Computer Center">Running Existing Computer Institute</option>
                    <option value="Coaching Institute">Coaching / Tuition Center</option>
                    <option value="Individual Entrepreneur">Individual Entrepreneur / Teacher</option>
                    <option value="School / College">School / College Administrator</option>
                    <option value="NGO / Society">NGO / Social Worker</option>
                  </select>
                </div>

                <div className="form-group-item">
                  <label>Space / Infrastructure Available</label>
                  <select name="spaceAvailable" value={enquiry.spaceAvailable} onChange={handleChange}>
                    <option value="300 - 500 sq ft">300 - 500 sq ft (5 - 8 Computers)</option>
                    <option value="500 - 1000 sq ft">500 - 1000 sq ft (10 - 15 Computers)</option>
                    <option value="1000+ sq ft">1000+ sq ft (Full Campus)</option>
                    <option value="Planning New Setup">Planning New Setup from scratch</option>
                  </select>
                </div>

                <div className="form-group-item">
                  <label>Your Message / Questions</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Any specific questions about courses, center authorization, etc."
                    value={enquiry.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" disabled={loading} className="submit-portal-btn">
                  {loading ? 'Submitting Enquiry...' : 'Submit Enquiry & Request Call ➔'}
                </button>
              </form>
            </div>

            {/* HELPLINE & PERKS */}
            <div>
              <div className="content-card" style={{ background: '#f5f3ff', borderColor: '#c4b5fd' }}>
                <h3 style={{ color: '#4b087d', margin: '0 0 10px' }}>Direct Franchise Helpline</h3>
                <p style={{ fontSize: '14px', color: '#475569', marginBottom: '16px' }}>
                  Speak directly with our National Affiliation Director for instant approval & queries:
                </p>
                <div style={{ background: '#fff', padding: '14px 18px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '12px' }}>
                  <div style={{ fontSize: '13px', color: '#64748b' }}>Direct Helpline:</div>
                  <a href="tel:8445020016" style={{ fontSize: '18px', fontWeight: 800, color: '#4b087d', textDecoration: 'none' }}>
                    📞 +91-8445020016
                  </a>
                </div>
                <div style={{ background: '#fff', padding: '14px 18px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '13px', color: '#64748b' }}>Official Affiliation Email:</div>
                  <a href="mailto:shikashvik@gmail.com" style={{ fontSize: '15px', fontWeight: 700, color: '#4b087d', textDecoration: 'none' }}>
                    ✉ shikashvik@gmail.com
                  </a>
                </div>
              </div>

              <div className="content-card">
                <h3 style={{ color: '#1e1b4b', margin: '0 0 14px' }}>Why Partner with Us?</h3>
                <ul style={{ paddingLeft: '20px', color: '#475569', fontSize: '14px', lineHeight: 1.8 }}>
                  <li>Section 8 Company under MCA, Govt. of India.</li>
                  <li>ISO 9001:2015 Accredited Organization.</li>
                  <li>Online student verification & mark-sheet system.</li>
                  <li>100+ Computer, Vocational & Skill courses authorized.</li>
                  <li>Affordable nominal franchise affiliation charge.</li>
                  <li>Free marketing flex design & syllabus kit.</li>
                </ul>

                <Link to="/franchise/apply" className="course-apply-btn">
                  Ready to Apply? Fill Full Form →
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="result-display-sheet" style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>✅</div>
            <h3>Thank You for Your Enquiry!</h3>
            <p style={{ color: '#475569', fontSize: '15px', margin: '14px 0 20px' }}>
              We have received your franchise request. Our coordinator will contact you at <strong>{enquiry.mobile}</strong> shortly with the complete prospectus and center affiliation package.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="submit-portal-btn"
              style={{ maxWidth: '250px', margin: '0 auto' }}
            >
              Submit Another Enquiry
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
