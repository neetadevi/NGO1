import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './PagesCommon.css'

export default function OtherCourses() {
  const courses = [
    {
      code: 'SWF-OTH-01',
      title: 'Spoken English & Professional Personality Development',
      duration: '3 Months',
      eligibility: 'All Welcome',
      badge: 'Communication',
      desc: 'Confidence building, English grammar, public speaking, interview facing techniques, body language, and formal workplace conversation.',
    },
    {
      code: 'SWF-OTH-02',
      title: 'NTT (Nursery Teacher Training Diploma)',
      duration: '1 Year',
      eligibility: '12th Pass',
      badge: 'Teaching Career',
      desc: 'Child psychology, play-way education methods, modern kindergarten teaching aids, rhyme presentation, and school administration.',
    },
    {
      code: 'SWF-OTH-03',
      title: 'Yoga & Naturopathy Wellness Instructor',
      duration: '6 Months',
      eligibility: '10th / 12th Pass',
      badge: 'Health & Wellness',
      desc: 'Traditional asanas, pranayama, yogic diet, meditation techniques, stress management, and community wellness camp management.',
    },
    {
      code: 'SWF-OTH-04',
      title: 'Digital Marketing & Social Media Management',
      duration: '3 Months',
      eligibility: '10th / 12th Pass',
      badge: 'Modern Media',
      desc: 'Search Engine Optimization (SEO), Facebook/Instagram Ads, YouTube content creation, Canva design, and lead generation.',
    },
    {
      code: 'SWF-OTH-05',
      title: 'First Aid & Emergency Community Responder',
      duration: '2 Months',
      eligibility: '8th Pass',
      badge: 'Community Health',
      desc: 'CPR training, trauma management, burn care, disaster relief coordination, and emergency medical assistance protocols.',
    },
    {
      code: 'SWF-OTH-06',
      title: 'Organic Farming & Rural Vermicomposting',
      duration: '1 Month / 3 Months',
      eligibility: 'Open to All',
      badge: 'Agriculture Upliftment',
      desc: 'Zero-budget natural farming, bio-fertilizer preparation, soil health testing, micro-irrigation, and organic crop marketing.',
    },
  ]

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Specialized Training</span>
          <h1 className="inner-hero-title">Other Professional & Community Courses</h1>
          <p className="inner-hero-subtitle">
            Holistic skill courses in teaching, language communication, health wellness, and modern media.
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
          <h2>Specialized Certification Programs</h2>
          <p>
            Shikashvik Welfare Foundation believes in multi-dimensional community empowerment. Our allied courses assist rural professionals, teachers, and agriculturalists in enhancing their potential.
          </p>

          <div className="course-card-grid">
            {courses.map((item, idx) => (
              <div key={idx} className="course-item-card">
                <div className="course-card-header">
                  <span className="course-card-badge">{item.badge}</span>
                  <h3>{item.title}</h3>
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
                    <span>Eligibility:</span>
                    <strong>{item.eligibility}</strong>
                  </div>
                  <p className="course-desc">{item.desc}</p>
                  <Link to="/student-zone/registration" className="course-apply-btn">
                    Enroll in this Course →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
