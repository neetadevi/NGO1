import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './PagesCommon.css'

export default function StudentRegistration() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [regSlip, setRegSlip] = useState<{
    regNo: string
    name: string
    course: string
    center: string
    date: string
  } | null>(null)

  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    motherName: '',
    dob: '',
    gender: 'Male',
    category: 'General',
    mobile: '',
    email: '',
    address: '',
    district: 'Etah',
    state: 'Uttar Pradesh',
    pincode: '',
    centerCode: 'SWF-C-101 (Etah HQ)',
    course: 'ADCA (Advanced Diploma in Computer Applications) - 12 Months',
    qualification: '12th Pass',
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
      alert('Please check the confirmation declaration box.')
      return
    }

    setLoading(true)
    setTimeout(() => {
      const generatedNo = `SWF-${Math.floor(100000 + Math.random() * 900000)}`
      setRegSlip({
        regNo: generatedNo,
        name: formData.fullName,
        course: formData.course,
        center: formData.centerCode,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
      })
      setLoading(false)
      setSubmitted(true)
      window.scrollTo({ top: 250, behavior: 'smooth' })
    }, 1200)
  }

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Direct Online Admission</span>
          <h1 className="inner-hero-title">Student Registration Form</h1>
          <p className="inner-hero-subtitle">
            Apply online for admission across our authorized vocational, skill, and computer training centers.
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Student Zone</span>
            <span>/</span>
            <span>Student Registration Form</span>
          </div>
        </div>
      </section>

      <div className="page-content-container">
        {!submitted ? (
          <div className="content-card" style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <h2 style={{ color: '#3b0764' }}>Online Student Enrollment Portal</h2>
              <p style={{ color: '#64748b', fontSize: '14px' }}>
                Please fill in your correct personal and educational details as per high school documents.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <h3 style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '8px' }}>1. Personal Information</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div className="form-group-item">
                  <label>Student's Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group-item">
                  <label>Father's Name *</label>
                  <input
                    type="text"
                    name="fatherName"
                    required
                    placeholder="Enter father's name"
                    value={formData.fatherName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group-item">
                  <label>Mother's Name *</label>
                  <input
                    type="text"
                    name="motherName"
                    required
                    placeholder="Enter mother's name"
                    value={formData.motherName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group-item">
                  <label>Date of Birth *</label>
                  <input
                    type="date"
                    name="dob"
                    required
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group-item">
                  <label>Gender *</label>
                  <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group-item">
                  <label>Category *</label>
                  <select name="category" value={formData.category} onChange={handleChange}>
                    <option value="General">General</option>
                    <option value="OBC">OBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="EWS">EWS</option>
                  </select>
                </div>
              </div>

              <h3 style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '8px', marginTop: '24px' }}>
                2. Contact & Address Details
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div className="form-group-item">
                  <label>Mobile Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group-item">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="student@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group-item" style={{ gridColumn: '1 / -1' }}>
                  <label>Residential Postal Address *</label>
                  <textarea
                    name="address"
                    required
                    rows={2}
                    placeholder="Village / Mohalla, Post office, Tehsil"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group-item">
                  <label>District *</label>
                  <input
                    type="text"
                    name="district"
                    required
                    value={formData.district}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group-item">
                  <label>State *</label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group-item">
                  <label>Pincode *</label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    maxLength={6}
                    placeholder="e.g. 207248"
                    value={formData.pincode}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <h3 style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '8px', marginTop: '24px' }}>
                3. Course & Study Centre Selection
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div className="form-group-item">
                  <label>Preferred Study Center *</label>
                  <select name="centerCode" value={formData.centerCode} onChange={handleChange}>
                    <option value="SWF-C-101 (Etah HQ)">SWF-C-101 (Etah Head Center - Dhumari)</option>
                    <option value="SWF-C-102 (Muzaffarnagar)">SWF-C-102 (Muzaffarnagar - Budhana Road)</option>
                    <option value="SWF-C-103 (Aliganj)">SWF-C-103 (Aliganj - Gandhi Market)</option>
                    <option value="SWF-C-104 (Kasganj)">SWF-C-104 (Kasganj - Ganjdundwara)</option>
                    <option value="SWF-C-105 (Mainpuri)">SWF-C-105 (Mainpuri - Civil Lines)</option>
                    <option value="SWF-C-106 (Agra)">SWF-C-106 (Agra - Shamsabad)</option>
                  </select>
                </div>

                <div className="form-group-item">
                  <label>Course Selected *</label>
                  <select name="course" value={formData.course} onChange={handleChange}>
                    <option value="ADCA (12 Months)">ADCA (Advanced Diploma in Computer Applications) - 12 Months</option>
                    <option value="DCA (6 Months)">DCA (Diploma in Computer Applications) - 6 Months</option>
                    <option value="CCC (3 Months)">CCC (Course on Computer Concepts) - 3 Months</option>
                    <option value="Tally Prime + GST (3 Months)">Tally Prime with GST - 3 Months</option>
                    <option value="Cutting & Tailoring (6 Months)">Cutting & Tailoring Fashion Design - 6 Months</option>
                    <option value="Beautician Course (3 Months)">Beautician & Cosmetology Diploma - 3 Months</option>
                    <option value="Mobile Phone Repairing (3 Months)">Mobile Phone Hardware & Software Repair - 3 Months</option>
                    <option value="PM DAKSH Skill Program (3 Months)">PM DAKSH Aligned Skill Program - 3 Months</option>
                    <option value="Solar PV Installation (3 Months)">Solar PV System Installation - 3 Months</option>
                  </select>
                </div>

                <div className="form-group-item">
                  <label>Highest Qualification *</label>
                  <select name="qualification" value={formData.qualification} onChange={handleChange}>
                    <option value="8th Pass">8th Pass</option>
                    <option value="10th Pass">10th / High School</option>
                    <option value="12th Pass">12th / Intermediate</option>
                    <option value="Graduate">Graduate (BA / B.Com / B.Sc etc.)</option>
                    <option value="Post Graduate">Post Graduate</option>
                  </select>
                </div>
              </div>

              <div style={{ margin: '24px 0', background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#475569', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    name="declaration"
                    required
                    checked={formData.declaration}
                    onChange={handleChange}
                    style={{ width: '18px', height: '18px', marginTop: '2px' }}
                  />
                  <span>
                    I hereby declare that all information furnished above is true and authentic. I agree to abide by the rules and examination guidelines of Shikashvik Welfare Foundation.
                  </span>
                </label>
              </div>

              <button type="submit" disabled={loading} className="submit-portal-btn">
                {loading ? 'Submitting Application...' : 'Submit Student Registration Form ➔'}
              </button>
            </form>
          </div>
        ) : (
          <div className="result-display-sheet" style={{ maxWidth: '750px', margin: '0 auto' }}>
            <div className="result-sheet-header">
              <div style={{ fontSize: '42px', marginBottom: '8px' }}>🎉</div>
              <h3>Registration Successful!</h3>
              <p>Your provisional enrollment has been received by Shikashvik Welfare Foundation.</p>
            </div>

            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <span className="status-badge-verified">
                ✓ PROVISIONAL ADMISSION CONFIRMED
              </span>
            </div>

            <table className="result-table">
              <tbody>
                <tr>
                  <th>Registration / Roll No:</th>
                  <td style={{ fontWeight: 800, color: '#4b087d', fontSize: '16px' }}>{regSlip?.regNo}</td>
                </tr>
                <tr>
                  <th>Student Name:</th>
                  <td><strong>{regSlip?.name}</strong></td>
                </tr>
                <tr>
                  <th>Course Allotted:</th>
                  <td>{regSlip?.course}</td>
                </tr>
                <tr>
                  <th>Allotted Study Center:</th>
                  <td>{regSlip?.center}</td>
                </tr>
                <tr>
                  <th>Registration Date:</th>
                  <td>{regSlip?.date}</td>
                </tr>
              </tbody>
            </table>

            <div className="card-highlight-box" style={{ fontSize: '13.5px', marginTop: '20px' }}>
              💡 <strong>Next Step:</strong> Please visit your allotted study center along with 2 passport size photographs, Aadhaar Card copy, and educational marksheets to complete physical document verification and collect your ID card.
            </div>

            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', marginTop: '24px' }}>
              <button
                onClick={() => window.print()}
                style={{
                  background: '#4b087d',
                  color: '#fff',
                  border: 'none',
                  padding: '10px 24px',
                  borderRadius: '6px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                🖨️ Print Slip
              </button>
              <button
                onClick={() => setSubmitted(false)}
                style={{
                  background: '#f1f5f9',
                  color: '#334155',
                  border: '1px solid #cbd5e1',
                  padding: '10px 24px',
                  borderRadius: '6px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                New Registration
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
