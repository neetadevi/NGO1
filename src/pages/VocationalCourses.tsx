import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './PagesCommon.css'

export default function VocationalCourses() {
  const courses = [
    {
      code: 'SWF-VOC-01',
      title: 'Fashion Designing & Cutting Tailoring',
      duration: '6 Months / 1 Year',
      eligibility: '8th / 10th Pass',
      badge: 'Women Empowerment',
      desc: 'Complete training in stitching, embroidery, pattern making, modern garment design, boutique management, and commercial dressmaking.',
    },
    {
      code: 'SWF-VOC-02',
      title: 'Beautician & Cosmetology Diploma',
      duration: '3 Months / 6 Months',
      eligibility: '8th / 10th Pass',
      badge: 'Self-Employment',
      desc: 'Skin care, bridal makeup, hair styling, parlor hygiene, cosmetic applications, and bridal studio management.',
    },
    {
      code: 'SWF-VOC-03',
      title: 'Electrician & Home Appliance Repair',
      duration: '6 Months',
      eligibility: '10th Pass',
      badge: 'Technical Trade',
      desc: 'House wiring, motor rewinding, AC/refrigerator maintenance, inverter wiring, and safety standards.',
    },
    {
      code: 'SWF-VOC-04',
      title: 'Mobile Phone Hardware & Software Repairing',
      duration: '3 Months / 6 Months',
      eligibility: '10th Pass',
      badge: 'High Demand',
      desc: 'Smartphone chip-level repair, circuit testing, flashing, software unlocking, display replacement, and troubleshooting.',
    },
    {
      code: 'SWF-VOC-05',
      title: 'Handicraft & Artisan Handicrafts',
      duration: '3 Months',
      eligibility: 'No Minimum Qualification',
      badge: 'Cottage Industry',
      desc: 'Traditional handloom, clay art, macrame work, bag making, candle craft, and promoting rural artisanal goods.',
    },
    {
      code: 'SWF-VOC-06',
      title: 'Plumbing & Sanitation Technician',
      duration: '3 Months',
      eligibility: '8th Pass',
      badge: 'Job Ready',
      desc: 'Domestic pipe fittings, drainage, water motor installation, PVC welding, and modern sanitary installations.',
    },
  ]

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Employment Oriented</span>
          <h1 className="inner-hero-title">Vocational Trade Courses</h1>
          <p className="inner-hero-subtitle">
            Hands-on practical training programs designed for rural youth and women to build self-reliance and immediate earning capabilities.
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Course Offered</span>
            <span>/</span>
            <span>Vocational Course</span>
          </div>
        </div>
      </section>

      <div className="page-content-container">
        <div className="content-card">
          <h2>Vocational & Livelihood Programs</h2>
          <p>
            Shikashvik Welfare Foundation provides industry-standard curriculum and practical workshops for all vocational streams. Enrolled students receive authorized certificates, toolkits, and placement assistance through our franchise center network.
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
