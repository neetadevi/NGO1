import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-container">
        {/* COLUMN 1: BRAND & STATUTORY DETAILS */}
        <div className="footer-col-brand">
          <Link to="/" className="footer-logo-row">
            <img src="./logo.png" alt="Shikashvik Welfare Foundation" />
            <div>
              <div className="footer-brand-title">SHIKASHVIK</div>
              <div className="footer-brand-sub">WELFARE FOUNDATION</div>
            </div>
          </Link>

          <div className="footer-statutory-pill">
            🏛️ Section 8 Non-Profit • MCA, Govt. of India
          </div>

          <p className="footer-desc">
            Dedicated to promoting vocational training, IT computer literacy, women self-reliance, and certified skill education across Uttar Pradesh and India.
          </p>

          <div className="footer-reg-grid">
            <div className="footer-reg-card">
              <strong>Date of Incorporation</strong>
              <span>October 23, 2026</span>
            </div>
            <div className="footer-reg-card">
              <strong>Registered District</strong>
              <span>Etah, Uttar Pradesh, India</span>
            </div>
          </div>
        </div>

        {/* COLUMN 2: QUICK LINKS */}
        <div className="footer-col">
          <h4>About & Accreditation</h4>
          <ul className="footer-nav-list">
            <li><Link to="/about-foundation">➔ About Foundation</Link></li>
            <li><Link to="/chairman-message">➔ Chairman Message</Link></li>
            <li><Link to="/mission-vision">➔ Mission & Vision</Link></li>
            <li><Link to="/franchise/benefits-requirement">➔ Benefits & Requirements</Link></li>
            <li><Link to="/franchise/sample-certificate">➔ Sample Certificate</Link></li>
            <li><Link to="/franchise/sample-marksheet">➔ Sample Mark Sheet</Link></li>
          </ul>
        </div>

        {/* COLUMN 3: STUDENT & COURSES */}
        <div className="footer-col">
          <h4>Courses & Student Zone</h4>
          <ul className="footer-nav-list">
            <li><Link to="/courses/all">➔ All 45+ Courses & Fees</Link></li>
            <li><Link to="/student-zone/offline-admission-form" style={{ color: '#facc15', fontWeight: 700 }}>➔ Offline Admission Form (A4)</Link></li>
            <li><Link to="/student-zone/registration">➔ Online Student Registration</Link></li>
            <li><Link to="/student-zone/verification">➔ Student Verification Portal</Link></li>
            <li><Link to="/student-zone/result">➔ Online Examination Result</Link></li>
            <li><Link to="/student-zone/study-centres">➔ Authorized Study Centres</Link></li>
            <li><Link to="/franchise/apply">➔ Apply For Franchise Center</Link></li>
          </ul>
        </div>

        {/* COLUMN 4: OFFICIAL REGISTERED OFFICE & CONTACT */}
        <div className="footer-col">
          <h4>Registered Head Office</h4>
          <ul className="footer-contact-list">
            <li className="footer-contact-item">
              <span className="f-icon">📍</span>
              <div>
                <strong>Registered Address:</strong>
                <span>C/o Ankit Shakya, Dhumari, Dhumari, Aliganj, Etah, Uttar Pradesh, India (PIN: 207248)</span>
              </div>
            </li>
            <li className="footer-contact-item">
              <span className="f-icon">📞</span>
              <div>
                <strong>Helpline / Contact:</strong>
                <a href="tel:8445020016">+91-8445020016</a>
              </div>
            </li>
            <li className="footer-contact-item">
              <span className="f-icon">✉</span>
              <div>
                <strong>Official Email:</strong>
                <a href="mailto:shikashvik@gmail.com">shikashvik@gmail.com</a>
              </div>
            </li>
            <li className="footer-contact-item">
              <span className="f-icon">⏰</span>
              <div>
                <strong>Office Working Hours:</strong>
                <span>Monday - Saturday: 09:30 AM to 06:00 PM</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <div>
            © 2026 <strong>Shikashvik Welfare Foundation</strong>. All Rights Reserved. (CIN / Reg: 23-10-2026, Etah, UP).
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link to="/student-zone/offline-admission-form">Offline Admission Form</Link>
            <span>•</span>
            <Link to="/franchise/apply">Franchise Affiliation</Link>
            <span>•</span>
            <Link to="/login/student">Student Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

