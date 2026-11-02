import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './PagesCommon.css'

export default function ComputerCourses() {
  const courses = [
    {
      code: 'SWF-COM-01',
      title: 'ADCA (Advanced Diploma in Computer Applications)',
      duration: '12 Months',
      eligibility: '10th / 12th Pass',
      badge: 'Flagship Diploma',
      desc: 'Complete computer foundations, MS Office (Word, Excel, PowerPoint), Tally Prime + GST, DTP (Photoshop, PageMaker, CorelDRAW), Web Design basics & Internet technology.',
    },
    {
      code: 'SWF-COM-02',
      title: 'DCA (Diploma in Computer Applications)',
      duration: '6 Months',
      eligibility: '10th Pass',
      badge: 'Popular Course',
      desc: 'Computer fundamentals, Operating Systems (Windows/Linux), MS Office suite, Internet tools, typing skills in Hindi & English, and office documentation.',
    },
    {
      code: 'SWF-COM-03',
      title: 'CCC (Course on Computer Concepts)',
      duration: '3 Months',
      eligibility: '8th / 10th Pass',
      badge: 'Govt. Job Essential',
      desc: 'Intro to computers, GUI based OS, word processing, spreadsheets, presentations, digital financial services, internet banking, and cyber safety.',
    },
    {
      code: 'SWF-COM-04',
      title: 'Tally Prime with GST & E-Way Bill',
      duration: '3 Months',
      eligibility: '10th / 12th Pass (Any Stream)',
      badge: 'Accounting & Finance',
      desc: 'Double-entry accounting, ledger creation, inventory management, GST invoicing, return filing concepts, balance sheet generation, and payroll management.',
    },
    {
      code: 'SWF-COM-05',
      title: 'DTP (Desktop Publishing Specialist)',
      duration: '4 Months',
      eligibility: '10th Pass',
      badge: 'Graphic Design',
      desc: 'Adobe Photoshop, CorelDRAW, Adobe InDesign, typography, printing press layouts, flex banners, visiting cards, and magazine layout design.',
    },
    {
      code: 'SWF-COM-06',
      title: 'PGDCA (Post Graduate Diploma in Computer Applications)',
      duration: '12 Months',
      eligibility: 'Graduation (Any Stream)',
      badge: 'Post Graduate',
      desc: 'Advanced software systems, RDBMS (SQL), Programming concepts (Python/C++), Data Structures, Software Engineering, and Enterprise project work.',
    },
  ]

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Information Technology</span>
          <h1 className="inner-hero-title">Computer Applications & IT Courses</h1>
          <p className="inner-hero-subtitle">
            Industry recognized computer education programs transforming students into confident, digitally empowered professionals.
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Course Offered</span>
            <span>/</span>
            <span>Computer</span>
          </div>
        </div>
      </section>

      <div className="page-content-container">
        <div className="content-card">
          <h2>Computer Literacy & Professional IT Programs</h2>
          <p>
            With digital skills being paramount in both government and private careers, Shikashvik Welfare Foundation provides practical lab sessions, verified course certificates, and complete exam preparation.
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
