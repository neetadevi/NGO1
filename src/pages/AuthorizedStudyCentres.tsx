import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PagesCommon.css'

export default function AuthorizedStudyCentres() {
  const [searchQuery, setSearchQuery] = useState('')
  const [districtFilter, setDistrictFilter] = useState('All')

  const centers = [
    {
      code: 'SWF-C-101',
      name: 'Shikashvik Computer & Skill Center (HQ)',
      director: 'Ankit Shakya',
      district: 'Etah',
      state: 'Uttar Pradesh',
      address: 'Main Road Dhumari, Tehsil Aliganj, Etah, UP - 207248',
      mobile: '+91-8445020016',
      courses: 'ADCA, DCA, Tally Prime, Vocational Tailoring, CCC',
      status: 'Active & Verified',
    },
    {
      code: 'SWF-C-102',
      name: 'Pragti Education & Skill Academy',
      director: 'Dinesh Kumar',
      district: 'Muzaffarnagar',
      state: 'Uttar Pradesh',
      address: 'Budhana Road, Near Bus Stand, Muzaffarnagar, UP - 251001',
      mobile: '+91-9870000000',
      courses: 'Computer Applications, PM DAKSH, Hardware Repair',
      status: 'Active & Verified',
    },
    {
      code: 'SWF-C-103',
      name: 'Aarogya & Vocational Training Institute',
      director: 'Sunita Sharma',
      district: 'Etah',
      state: 'Uttar Pradesh',
      address: 'Near Gandhi Market, Aliganj, Etah, UP - 207249',
      mobile: '+91-8445000000',
      courses: 'Cutting & Tailoring, Beautician, General Duty Assistant',
      status: 'Active & Verified',
    },
    {
      code: 'SWF-C-104',
      name: 'Bright Future IT Institute',
      director: 'Ramesh Shakya',
      district: 'Kasganj',
      state: 'Uttar Pradesh',
      address: 'Station Road, Ganjdundwara, Kasganj, UP - 207242',
      mobile: '+91-9411000000',
      courses: 'ADCA, CCC, Web Designing, Spoken English',
      status: 'Active & Verified',
    },
    {
      code: 'SWF-C-105',
      name: 'National Skill & Computer Center',
      director: 'Pooja Verma',
      district: 'Mainpuri',
      state: 'Uttar Pradesh',
      address: 'Kacheri Road, Civil Lines, Mainpuri, UP - 205001',
      mobile: '+91-9557000000',
      courses: 'DCA, Tally Prime + GST, Solar PV Installation',
      status: 'Active & Verified',
    },
    {
      code: 'SWF-C-106',
      name: 'Digital India Youth Academy',
      director: 'Rajesh Yadav',
      district: 'Agra',
      state: 'Uttar Pradesh',
      address: 'Fatehabad Road, Shamsabad, Agra, UP - 283125',
      mobile: '+91-9837000000',
      courses: 'Computer Applications, DTP, Digital Marketing',
      status: 'Active & Verified',
    },
  ]

  const filteredCenters = centers.filter(c => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.district.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesDistrict = districtFilter === 'All' || c.district === districtFilter

    return matchesSearch && matchesDistrict
  })

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Nationwide Center Network</span>
          <h1 className="inner-hero-title">Authorized Study Centres</h1>
          <p className="inner-hero-subtitle">
            Find and verify officially registered Shikashvik Welfare Foundation education & skill training centers.
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Student Zone</span>
            <span>/</span>
            <span>Authorized Study Centre</span>
          </div>
        </div>
      </section>

      <div className="page-content-container">
        <div className="content-card">
          <h2>Verified Training Centers Directory</h2>
          <p>
            All centers listed below are officially affiliated and accredited by Shikashvik Welfare Foundation to enroll students, conduct classes, and submit examination assessments.
          </p>

          {/* SEARCH & FILTER CONTROLS */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', margin: '24px 0' }}>
            <div style={{ flex: '1 1 280px' }}>
              <input
                type="text"
                placeholder="🔍 Search by Center Name, Code (e.g. SWF-C-101), or Director..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1.5px solid #cbd5e1',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
            </div>
            <div style={{ flex: '0 1 200px' }}>
              <select
                value={districtFilter}
                onChange={(e) => setDistrictFilter(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1.5px solid #cbd5e1',
                  fontSize: '14px',
                  outline: 'none',
                  background: '#fff',
                }}
              >
                <option value="All">All Districts</option>
                <option value="Etah">Etah</option>
                <option value="Muzaffarnagar">Muzaffarnagar</option>
                <option value="Kasganj">Kasganj</option>
                <option value="Mainpuri">Mainpuri</option>
                <option value="Agra">Agra</option>
              </select>
            </div>
          </div>

          {/* CENTER CARDS LIST */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '22px' }}>
            {filteredCenters.map((c, idx) => (
              <div key={idx} className="feature-box" style={{ background: '#ffffff', borderColor: '#e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ background: '#4b087d', color: '#fff', fontSize: '11.5px', fontWeight: 800, padding: '3px 10px', borderRadius: '4px' }}>
                    {c.code}
                  </span>
                  <span className="status-badge-verified" style={{ fontSize: '11px', padding: '3px 10px' }}>
                    ✓ {c.status}
                  </span>
                </div>

                <h4 style={{ fontSize: '17px', color: '#1e1b4b', marginBottom: '6px' }}>{c.name}</h4>
                <p style={{ margin: '0 0 6px', fontSize: '13px', color: '#64748b' }}>
                  <strong>Center Director:</strong> {c.director}
                </p>
                <p style={{ margin: '0 0 6px', fontSize: '13px', color: '#64748b' }}>
                  <strong>Location:</strong> {c.district}, {c.state}
                </p>
                <p style={{ margin: '0 0 10px', fontSize: '12.5px', color: '#475569' }}>
                  📍 {c.address}
                </p>

                <div style={{ borderTop: '1px dashed #e2e8f0', paddingTop: '10px', fontSize: '12px', color: '#6b7280' }}>
                  <strong>Courses:</strong> {c.courses}
                </div>

                <div style={{ marginTop: '14px', display: 'flex', gap: '10px' }}>
                  <a
                    href={`tel:${c.mobile}`}
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      background: '#ecfdf5',
                      color: '#065f46',
                      border: '1px solid #a7f3d0',
                      padding: '8px',
                      borderRadius: '6px',
                      fontWeight: 700,
                      fontSize: '12px',
                      textDecoration: 'none',
                    }}
                  >
                    📞 Call Center
                  </a>
                  <Link
                    to="/student-zone/registration"
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      background: '#4b087d',
                      color: '#fff',
                      padding: '8px',
                      borderRadius: '6px',
                      fontWeight: 700,
                      fontSize: '12px',
                      textDecoration: 'none',
                    }}
                  >
                    Admit Here →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredCenters.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
              <p>No study centers found matching your query.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

