import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
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
      const generatedRef = `SWF-ATC-${Math.floor(100000 + Math.random() * 900000)}`
      try {
        const existing = JSON.parse(localStorage.getItem('swf_franchise_apps') || '[]')
        existing.unshift({
          ...formData,
          status: 'Pending Verification',
          isApproved: false,
          submittedAt: new Date().toISOString(),
          refNo: generatedRef,
        })
        localStorage.setItem('swf_franchise_apps', JSON.stringify(existing))
      } catch (err) {
        console.error('Error saving franchise application:', err)
      }

      setSubmitting(false)
      setSubmitted(true)
      window.scrollTo({ top: 200, behavior: 'smooth' })
    }, 1200)
  }

  return (
    <div className="franchise-page">
      <Navbar />

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
            <div className="success-alert" style={{ background: '#fffbeb', borderColor: '#fde68a' }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>⏳</div>
              <h3 style={{ color: '#92400e' }}>Center Application Submitted — Under Administrative Review</h3>
              
              <div style={{ background: '#fef3c7', display: 'inline-block', padding: '10px 24px', borderRadius: '8px', border: '1.5px solid #f59e0b', fontWeight: 'bold', color: '#b45309', margin: '14px 0' }}>
                STATUS: ⏳ PENDING CENTRAL INSPECTION & APPROVAL
              </div>

              <p style={{ fontSize: '15px', color: '#78350f', maxWidth: '650px', margin: '0 auto 16px', lineHeight: 1.6 }}>
                Thank you for applying for center affiliation with <strong>Shikashvik Welfare Foundation</strong>. 
                Your center is currently <strong>NOT APPROVED</strong> and is placed under formal review. 
                The Central Inspection Desk at Etah Head Office will verify your premises, computer lab setup, and director credentials before allotting your official Authorized Center Code.
              </p>

              <div style={{ background: '#ffffff', border: '1px solid #fed7aa', borderRadius: '10px', padding: '16px 20px', maxWidth: '620px', margin: '0 auto 24px', textAlign: 'left', color: '#9a3412', fontSize: '13.5px' }}>
                <strong>📋 Affiliation Next Steps:</strong>
                <ul style={{ margin: '8px 0 0', paddingLeft: '20px', lineHeight: 1.6 }}>
                  <li>Center dossier forwarded to Admin Panel: <strong>shikashvikwelfare.org.in/admin</strong></li>
                  <li>Our verification officer will contact registered mobile: <strong>{formData.mobile || '8445020016'}</strong></li>
                  <li>Physical or digital inspection of computers, internet connection, and classroom space.</li>
                  <li>Final approval & issuance of ATC Center Certificate signed by Head Office.</li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link 
                  to="/franchise/dashboard" 
                  style={{ background: '#4b087d', color: '#fff', padding: '12px 24px', borderRadius: '25px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  🏢 Center Portal (View Status)
                </Link>
                <Link 
                  to="/admin" 
                  style={{ background: '#1e3a8a', color: '#fff', padding: '12px 24px', borderRadius: '25px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  🔐 Head Office Admin Desk (For Approvals)
                </Link>
                <Link to="/" style={{ background: '#64748b', color: '#fff', padding: '12px 28px', borderRadius: '25px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
                  Return to Home
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
      <Footer />
    </div>
  )
}

