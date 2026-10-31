import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Franchise.css'

export default function Franchise() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    centerName: '',
    directorName: '',
    fatherName: '',
    mobile: '',
    whatsapp: '',
    email: '',
    address: '',
    district: '',
    state: 'Uttar Pradesh',
    pincode: '',
    carpetArea: '',
    classrooms: '2',
    computers: '10',
    internet: 'Yes',
    powerBackup: 'Yes',
    coursesCategory: 'Computer & Vocational Skill Training',
    experienceYears: '2',
    buildingStatus: 'Rented',
    declaration: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.declaration) {
      alert('Please check the declaration checkbox before submitting.')
      return
    }

    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      window.scrollTo({ top: 200, behavior: 'smooth' })
    }, 1200)
  }

  return (
    <div className="franchise-page">
      {/* TOP HEADER */}
      <div className="top-header">
        <div className="top-container">
          <div className="contact-info">
            <a href="tel:+918445020016">☎ +91-84450-20016</a>
            <span>|</span>
            <a href="mailto:shikashvik@gmail.com">✉ shikashvik@gmail.com</a>
            <span>|</span>
            <span>Registration: October 23, 2026</span>
          </div>
          <div className="top-actions">
            <Link to="/" style={{ color: '#fff', fontSize: '13px', fontWeight: 'bold' }}>← Back to Website</Link>
            <Link to="/login" className="top-login-btn">Login</Link>
            <Link to="/signup" className="top-signup-btn">Sign Up</Link>
          </div>
        </div>
      </div>

      {/* HEADER / LOGO */}
      <header className="main-header" style={{ padding: '12px 6%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <img src="./logo.png" alt="Shikashvik Welfare Foundation" style={{ height: '62px', width: 'auto' }} />
            <div>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: '26px', fontWeight: 'bold', color: '#4b087d', lineHeight: 1.1 }}>
                SHIKASHVIK
              </div>
              <small style={{ fontSize: '10px', color: '#6b7280', letterSpacing: '0.8px', textTransform: 'uppercase', fontWeight: 600 }}>
                Welfare Foundation • Section 8 Non-Profit
              </small>
            </div>
          </Link>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Link to="/" style={{ color: '#4b087d', fontWeight: 700, fontSize: '14px' }}>Home</Link>
            <Link to="/#about" style={{ color: '#374151', fontWeight: 600, fontSize: '14px' }}>About Us</Link>
            <Link to="/#projects" style={{ color: '#374151', fontWeight: 600, fontSize: '14px' }}>Projects</Link>
            <Link to="/#gallery" style={{ color: '#374151', fontWeight: 600, fontSize: '14px' }}>Gallery</Link>
          </div>
        </div>
      </header>

      {/* HERO BANNER */}
      <section className="franchise-banner">
        <h1>AFFILIATION & <span>FRANCHISE APPLICATION</span></h1>
        <p>
          Apply for an Authorized Training Center (ATC) with <strong>Shikashvik Welfare Foundation</strong>. 
          Join our mission to empower rural youth, students, and women through government-recognized skill certifications.
        </p>

        <div className="franchise-badges">
          <div className="franchise-badge-item">🏛️ NITI Aayog (NGO Darpan)</div>
          <div className="franchise-badge-item">📜 MCA Govt. of India Registered</div>
          <div className="franchise-badge-item">🎓 Skill & Vocational Certifications</div>
          <div className="franchise-badge-item">💼 100% Online Verification Portal</div>
        </div>
      </section>

      {/* FORM CONTAINER */}
      <div className="franchise-container">
        <div className="franchise-card">
          {submitted ? (
            <div className="success-alert">
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>🎉</div>
              <h3>Franchisee Application Submitted Successfully!</h3>
              <p style={{ fontSize: '15px', color: '#047857', maxWidth: '650px', margin: '0 auto 16px' }}>
                Thank you for applying for an Authorized Training Center with <strong>Shikashvik Welfare Foundation</strong>. 
                Our central verification team will review your center details and contact you within <strong>24-48 business hours</strong> on your registered mobile number <strong>{formData.mobile || '8445020016'}</strong>.
              </p>
              <div style={{ background: '#fff', display: 'inline-block', padding: '10px 24px', borderRadius: '8px', border: '1px solid #a7f3d0', fontWeight: 'bold', color: '#065f46', marginBottom: '20px' }}>
                Application Reference No: SWF-ATC-{Math.floor(100000 + Math.random() * 900000)}
              </div>
              <div>
                <Link to="/" style={{ background: '#4b087d', color: '#fff', padding: '12px 28px', borderRadius: '25px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
                  Return to Website
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 style={{ color: '#2d0757', fontSize: '24px', fontWeight: 800 }}>
                  TRAINING CENTER AFFILIATION FORM
                </h2>
                <p style={{ color: '#6b7280', fontSize: '14px', marginTop: '4px' }}>
                  Please fill out all the mandatory details accurately as per official documentation.
                </p>
              </div>

              {/* SECTION 1: CENTER DETAILS */}
              <div className="form-section-title">
                <span className="badge-num">1</span>
                Center / Institute Information
              </div>

              <div className="form-grid">
                <div className="f-field form-group-full">
                  <label>Proposed Center / Institute Name <span className="req">*</span></label>
                  <input
                    type="text"
                    name="centerName"
                    placeholder="e.g. Apex Computer Academy / Shikashvik Skill Center"
                    value={formData.centerName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="f-field">
                  <label>Category of Training Stream <span className="req">*</span></label>
                  <select name="coursesCategory" value={formData.coursesCategory} onChange={handleChange}>
                    <option value="Computer & Vocational Skill Training">Computer & Information Technology (IT)</option>
                    <option value="Skill India & Vocational Training">Skill Development & Vocational Training</option>
                    <option value="Women Tailoring & Handicraft Center">Women Empowerment, Sewing & Tailoring</option>
                    <option value="Nursery / Primary Teacher Training (NTT)">Teacher Training (NTT / PTT)</option>
                    <option value="Health & Paramedical Aid Awareness">Health Care & First Aid Awareness</option>
                    <option value="Social Welfare & Community Center">Social Welfare & Tuition Center</option>
                  </select>
                </div>

                <div className="f-field">
                  <label>Center Premise Status <span className="req">*</span></label>
                  <select name="buildingStatus" value={formData.buildingStatus} onChange={handleChange}>
                    <option value="Rented">Rented Building</option>
                    <option value="Own Building">Own Premise / Building</option>
                    <option value="Trust / Institutional">Trust / Society Campus</option>
                  </select>
                </div>
              </div>

              {/* SECTION 2: DIRECTOR / APPLICANT DETAILS */}
              <div className="form-section-title">
                <span className="badge-num">2</span>
                Center Head / Director Information
              </div>

              <div className="form-grid">
                <div className="f-field">
                  <label>Director / Center Head Name <span className="req">*</span></label>
                  <input
                    type="text"
                    name="directorName"
                    placeholder="Full Name as per Aadhaar Card"
                    value={formData.directorName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="f-field">
                  <label>Father's / Husband's Name <span className="req">*</span></label>
                  <input
                    type="text"
                    name="fatherName"
                    placeholder="Father / Husband Name"
                    value={formData.fatherName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="f-field">
                  <label>Contact Mobile Number <span className="req">*</span></label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="10-digit calling number (e.g. 8445020016)"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="f-field">
                  <label>WhatsApp Number <span className="req">*</span></label>
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="WhatsApp enabled number"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="f-field form-group-full">
                  <label>Official Email Address <span className="req">*</span></label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. institute@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* SECTION 3: CENTER ADDRESS */}
              <div className="form-section-title">
                <span className="badge-num">3</span>
                Complete Center Location & Address
              </div>

              <div className="form-grid">
                <div className="f-field form-group-full">
                  <label>Complete Street Address / Landmark <span className="req">*</span></label>
                  <textarea
                    rows={3}
                    name="address"
                    placeholder="Plot / Shop No., Building Name, Village / Tehsil, Landmark"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="f-field">
                  <label>District <span className="req">*</span></label>
                  <input
                    type="text"
                    name="district"
                    placeholder="e.g. Etah, Aligarh, Agra, Lucknow"
                    value={formData.district}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="f-field">
                  <label>State <span className="req">*</span></label>
                  <select name="state" value={formData.state} onChange={handleChange}>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Other State">Other State</option>
                  </select>
                </div>

                <div className="f-field">
                  <label>Postal PIN Code <span className="req">*</span></label>
                  <input
                    type="text"
                    name="pincode"
                    placeholder="6-digit PIN code (e.g. 207248)"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="f-field">
                  <label>Years of Experience in Education / Training</label>
                  <select name="experienceYears" value={formData.experienceYears} onChange={handleChange}>
                    <option value="New Center">Starting New Center (0-1 Year)</option>
                    <option value="2">1 to 3 Years</option>
                    <option value="5">3 to 5 Years</option>
                    <option value="10">5+ Years Experienced</option>
                  </select>
                </div>
              </div>

              {/* SECTION 4: INFRASTRUCTURE */}
              <div className="form-section-title">
                <span className="badge-num">4</span>
                Infrastructure & Facility Details
              </div>

              <div className="form-grid-3">
                <div className="f-field">
                  <label>Total Carpet Area (Sq. Ft.) <span className="req">*</span></label>
                  <input
                    type="number"
                    name="carpetArea"
                    placeholder="e.g. 600 sq ft"
                    value={formData.carpetArea}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="f-field">
                  <label>No. of Classrooms</label>
                  <select name="classrooms" value={formData.classrooms} onChange={handleChange}>
                    <option value="1">1 Classroom</option>
                    <option value="2">2 Classrooms</option>
                    <option value="3">3 Classrooms</option>
                    <option value="4+">4 or more Classrooms</option>
                  </select>
                </div>

                <div className="f-field">
                  <label>No. of Computers / Laptops</label>
                  <select name="computers" value={formData.computers} onChange={handleChange}>
                    <option value="5">5 - 8 Computers</option>
                    <option value="10">10 - 15 Computers</option>
                    <option value="20">20+ Computers</option>
                    <option value="NA">Not Applicable (Tailoring/Social)</option>
                  </select>
                </div>

                <div className="f-field">
                  <label>High Speed Internet Available?</label>
                  <select name="internet" value={formData.internet} onChange={handleChange}>
                    <option value="Yes">Yes (Wi-Fi / Broadband)</option>
                    <option value="No">No (Mobile 4G/5G)</option>
                  </select>
                </div>

                <div className="f-field">
                  <label>Power Backup Available?</label>
                  <select name="powerBackup" value={formData.powerBackup} onChange={handleChange}>
                    <option value="Yes">Yes (Inverter / Generator)</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              {/* DECLARATION */}
              <div className="f-checkbox-group">
                <input
                  type="checkbox"
                  id="declaration"
                  name="declaration"
                  checked={formData.declaration}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="declaration">
                  <strong>Applicant Declaration:</strong> I hereby declare that all the information provided above is true and authentic to the best of my knowledge. I agree to abide by the affiliation guidelines, student certification standards, and non-profit ethics laid down by <strong>Shikashvik Welfare Foundation</strong>.
                </label>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="submit-btn-wrap">
                <button type="submit" className="f-submit-btn" disabled={submitting}>
                  {submitting ? 'Submitting Application...' : '🚀 Submit Franchisee Application Now'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* BENEFITS SECTION */}
      <section className="franchise-benefits">
        <h2 style={{ textAlign: 'center', color: '#2d0757', fontSize: '26px', fontWeight: 800 }}>
          BENEFITS OF AFFILIATION WITH SHIKASHVIK
        </h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">📜</div>
            <div>
              <h4>Authorized Center Certificate</h4>
              <p>Receive an official Certificate of Affiliation and Authorization letter to operate in your block/district.</p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">💻</div>
            <div>
              <h4>Central Online Portal Access</h4>
              <p>Direct login credentials to register students, generate roll numbers, online exam management, and download results.</p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🎓</div>
            <div>
              <h4>ISO & Govt. Standard Certifications</h4>
              <p>QR code and hologram verified diplomas and certificates recognized across government and private job applications.</p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">📚</div>
            <div>
              <h4>Complete Study Material & Syllabus</h4>
              <p>Standardized curriculum, examination questions, student books, and digital class support.</p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">📢</div>
            <div>
              <h4>Marketing & Branding Kits</h4>
              <p>High-resolution flex banner designs, admission pamphlets, student ID cards, and social media flyers.</p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🤝</div>
            <div>
              <h4>Dedicated Relationship Manager</h4>
              <p>Prompt support via phone (+91 8445020016) and email for fast student registrations and queries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="simple-footer">
        <div style={{ maxWidth: '1150px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>
            SHIKASHVIK WELFARE FOUNDATION
          </p>
          <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '4px' }}>
            Registered Address: C/o Ankit Shakya, Dhumari, Dhumari, Aliganj, Etah, Uttar Pradesh, India (PIN: 207248)
          </p>
          <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '14px' }}>
            Helpline: +91 8445020016 | Email: shikashvik@gmail.com | Incorporated: October 23, 2026
          </p>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px', fontSize: '12px', color: '#6b7280' }}>
            © {new Date().getFullYear()} Shikashvik Welfare Foundation. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

