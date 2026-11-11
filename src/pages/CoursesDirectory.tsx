import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { coursesList, courseCategories } from '../data/coursesData'
import './PagesCommon.css'

export default function CoursesDirectory() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Courses')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCourses = coursesList.filter((course) => {
    const matchesCategory =
      selectedCategory === 'All Courses' || course.category === selectedCategory
    const matchesSearch =
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.duration.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="page-wrapper">
      <Navbar />

      {/* HERO BANNER */}
      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Comprehensive Course Catalog</span>
          <h1 className="inner-hero-title">All Authorized Courses & Fee Structure</h1>
          <p className="inner-hero-subtitle">
            Explore 45+ certified vocational, IT software, beauty & wellness, tailoring, technical trade, typing, and teacher training programs with official duration and fee details.
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Course Offered</span>
            <span>/</span>
            <span>All Courses Directory</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="page-content-container">
        <div className="content-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <div>
              <h2 style={{ margin: 0, color: '#3b0764' }}>Search & Filter Courses</h2>
              <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: '14px' }}>
                Showing <strong>{filteredCourses.length}</strong> of {coursesList.length} total certified courses
              </p>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <Link to="/student-zone/offline-admission-form" className="course-apply-btn" style={{ background: '#b45309', padding: '10px 18px', fontSize: '13px' }}>
                📄 Offline Admission Form (Printable A4)
              </Link>
              <Link to="/student-zone/registration" className="course-apply-btn" style={{ padding: '10px 18px', fontSize: '13px' }}>
                ✍️ Online Admission Form
              </Link>
            </div>
          </div>

          {/* SEARCH BOX */}
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="🔍 Search course by name (e.g. ADCA, Makeup, Tailoring, Electrician, Yoga, Stenographer)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '13px 18px',
                borderRadius: '10px',
                border: '1.5px solid #cbd5e1',
                fontSize: '15px',
                outline: 'none',
              }}
            />
          </div>

          {/* CATEGORY PILLS */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
            {courseCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  background: selectedCategory === cat ? '#4b087d' : '#f1f5f9',
                  color: selectedCategory === cat ? '#ffffff' : '#334155',
                  border: selectedCategory === cat ? '1px solid #4b087d' : '1px solid #cbd5e1',
                  borderRadius: '20px',
                  padding: '7px 16px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* COURSES TABLE */}
          <div style={{ overflowX: 'auto', borderRadius: '10px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <table className="result-table" style={{ margin: 0 }}>
              <thead>
                <tr style={{ background: '#250549', color: '#fff' }}>
                  <th style={{ color: '#fff', background: '#250549', width: '90px' }}>Code</th>
                  <th style={{ color: '#fff', background: '#250549' }}>Course Name</th>
                  <th style={{ color: '#fff', background: '#250549', width: '160px' }}>Category</th>
                  <th style={{ color: '#fff', background: '#250549', width: '100px' }}>Duration</th>
                  <th style={{ color: '#fff', background: '#250549', width: '110px' }}>Cert. Fee</th>
                  <th style={{ color: '#fff', background: '#250549', width: '110px' }}>Course Fee</th>
                  <th style={{ color: '#fff', background: '#250549', width: '110px', textAlign: 'center' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((c) => (
                  <tr key={c.id}>
                    <td>
                      <span style={{ background: '#f5f3ff', color: '#4b087d', fontWeight: 800, fontSize: '11px', padding: '3px 8px', borderRadius: '4px', border: '1px solid #ddd6fe' }}>
                        {c.code}
                      </span>
                    </td>
                    <td>
                      <strong style={{ color: '#1e1b4b', fontSize: '14px' }}>{c.name}</strong>
                      {c.description && (
                        <p style={{ margin: '3px 0 0', fontSize: '12px', color: '#64748b', lineHeight: 1.4 }}>
                          {c.description}
                        </p>
                      )}
                      <small style={{ color: '#059669', fontSize: '11px', fontWeight: 600 }}>
                        Eligibility: {c.eligibility}
                      </small>
                    </td>
                    <td>
                      <span style={{ fontSize: '12px', background: '#fef3c7', color: '#92400e', padding: '3px 9px', borderRadius: '12px', fontWeight: 700 }}>
                        {c.category}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontWeight: 600, color: '#334155', fontSize: '13px' }}>
                        {c.duration}
                      </span>
                    </td>
                    <td>
                      <span style={{ color: '#0284c7', fontWeight: 700 }}>
                        {c.certificateFee ? `₹${c.certificateFee.toLocaleString('en-IN')}` : 'Included'}
                      </span>
                    </td>
                    <td>
                      <strong style={{ color: '#059669', fontSize: '14px' }}>
                        {c.courseFee ? `₹${c.courseFee.toLocaleString('en-IN')}` : 'Contact Center'}
                      </strong>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <Link
                        to="/student-zone/registration"
                        style={{
                          display: 'inline-block',
                          background: '#4b087d',
                          color: '#fff',
                          padding: '6px 12px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: 700,
                          textDecoration: 'none',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Enroll ➔
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredCourses.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: '#64748b' }}>
              <p style={{ fontSize: '16px', margin: 0 }}>No courses found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All Courses') }}
                className="course-apply-btn"
                style={{ display: 'inline-block', marginTop: '12px', padding: '8px 18px' }}
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

