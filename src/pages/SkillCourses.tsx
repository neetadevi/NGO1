import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './PagesCommon.css'

export default function SkillCourses() {
  const courses = [
    {
      code: 'SWF-SKL-01',
      title: 'PM DAKSH Aligned Skill Certification',
      duration: '3 Months / 360 Hours',
      eligibility: '10th / 12th Pass',
      badge: 'National Mission',
      desc: 'Government aligned skill development curriculum covering practical trades, industrial work safety, workplace soft skills, and placement preparation.',
    },
    {
      code: 'SWF-SKL-02',
      title: 'Telecom & Tower Technician (TSSC Aligned)',
      duration: '3 Months',
      eligibility: '10th / ITI Pass',
      badge: 'Telecom Sector',
      desc: 'Optical fiber splicing, RF installation, broadband network maintenance, tower equipment safety, and mobile network diagnostics.',
    },
    {
      code: 'SWF-SKL-03',
      title: 'Solar PV System Installation & Maintenance',
      duration: '3 Months',
      eligibility: '10th Pass',
      badge: 'Green Energy',
      desc: 'Solar panel sizing, inverter wiring, rooftop array installation, battery bank maintenance, and net metering concepts.',
    },
    {
      code: 'SWF-SKL-04',
      title: 'Retail Store Operations & Customer Service',
      duration: '2 Months',
      eligibility: '10th / 12th Pass',
      badge: 'Service Sector',
      desc: 'Point of Sale (POS) operation, retail inventory tracking, customer communication, merchandising, and store billing systems.',
    },
    {
      code: 'SWF-SKL-05',
      title: 'Logistics & Warehouse Operations Assistant',
      duration: '3 Months',
      eligibility: '10th Pass',
      badge: 'E-Commerce Growth',
      desc: 'Supply chain principles, barcode scanner handling, inventory management, dispatch coordination, and freight handling safety.',
    },
    {
      code: 'SWF-SKL-06',
      title: 'General Duty Healthcare Assistant (GDA)',
      duration: '6 Months',
      eligibility: '10th / 12th Pass',
      badge: 'Healthcare Sector',
      desc: 'Patient care, vitals monitoring (BP, sugar, pulse), first aid, medication administration basics, and hospital hygiene.',
    },
  ]

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Nation Building</span>
          <h1 className="inner-hero-title">Skill Development Courses</h1>
          <p className="inner-hero-subtitle">
            Sector-specific skill training programs focused on youth employability in emerging industrial and technical domains.
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Course Offered</span>
            <span>/</span>
            <span>Skill Course</span>
          </div>
        </div>
      </section>

      <div className="page-content-container">
        <div className="content-card">
          <h2>Market-Driven Skill Qualifications</h2>
          <p>
            Shikashvik Welfare Foundation works in coordination with key skill frameworks to ensure that student credentials meet industry demand and employer standards across India.
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
