import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { coursesList } from '../data/coursesData'
import './PagesCommon.css'

export default function OtherCourses() {
  const otherCourses = coursesList.filter(
    (c) => c.category === 'Teacher Training' || c.category === 'Yoga Course'
  )

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Specialized Training</span>
          <h1 className="inner-hero-title">Teacher Training & Yoga Courses</h1>
          <p className="inner-hero-subtitle">
            Nursery Teacher Training (NTT), Early Childhood Care (ECCE), Yoga Teacher Training, and Yogic Therapy diplomas.
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Course Offered</span>
            <span>/</span>
            <span>Other Course</span>
          </div>
        </div>
      </section>

      <div className="page-content-container">
        <div className="content-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '18px' }}>
            <div>
              <h2 style={{ margin: 0 }}>Teaching, Pedagogy & Wellness Diplomas</h2>
              <p style={{ color: '#64748b', fontSize: '14px', margin: '4px 0 0' }}>
                Complete child development theory, yoga asana alignment, and classroom pedagogy.
              </p>
            </div>
            <Link to="/student-zone/offline-admission-form" className="course-apply-btn" style={{ background: '#b45309', padding: '10px 18px', fontSize: '13px' }}>
              📄 Download Offline Admission Form (A4)
            </Link>
          </div>

          <div className="course-card-grid">
            {otherCourses.map((item) => (
              <div key={item.id} className="course-item-card">
                <div className="course-card-header">
                  <span className="course-card-badge">{item.category}</span>
                  <h3>{item.name}</h3>
                </div>
                <div className="course-card-body">
                  <div className="course-meta-row">
                    <span>Course Code:</span>
                    <strong>{item.code}</strong>
                  </div>
                  <div className="course-meta-row">
                    <span>Duration:</span>
                    <strong>{item.duration}</strong>
                  </div>
                  <div className="course-meta-row">
                    <span>Certificate Fee:</span>
                    <strong style={{ color: '#0284c7' }}>₹{item.certificateFee}</strong>
                  </div>
                  <div className="course-meta-row">
                    <span>Course Fee:</span>
                    <strong style={{ color: '#059669', fontSize: '14px' }}>₹{item.courseFee.toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="course-meta-row">
                    <span>Eligibility:</span>
                    <strong>{item.eligibility}</strong>
                  </div>
                  {item.description && <p className="course-desc">{item.description}</p>}
                  <Link to="/student-zone/registration" className="course-apply-btn">
                    Enroll in this Course →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
