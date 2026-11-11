import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './OfflineAdmissionForm.css'

export default function OfflineAdmissionForm() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="offline-form-page">
      <Navbar />

      {/* TOP TOOLBAR */}
      <div className="form-action-toolbar">
        <div>
          <h3 style={{ margin: 0, color: '#3b0764', fontSize: '18px' }}>
            Official Offline Admission & Registration Form (A4 Printable)
          </h3>
          <p style={{ margin: '2px 0 0', color: '#64748b', fontSize: '13px' }}>
            Download or print this original form for offline candidate admissions at authorized study centers.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <Link to="/student-zone/registration" className="switch-online-link">
            ✍️ Switch to Online Admission Form ➔
          </Link>
          <button onClick={handlePrint} className="print-form-btn">
            🖨️ Print / Download PDF Form
          </button>
        </div>
      </div>

      {/* A4 FORM CONTAINER */}
      <div className="a4-form-container" id="printable-admission-form">
        {/* TOP WARNING STRIP */}
        <div className="form-top-strip">
          <span>* Photocopy not accepted *</span>
          <span>Use only Original Form</span>
        </div>

        {/* HEADER SECTION */}
        <div className="form-header-box">
          <div className="form-header-logo">
            <img src="./logo.png" alt="Shikashvik Welfare Foundation Logo" />
          </div>

          <div className="form-header-title">
            <h1>SHIKASHVIK</h1>
            <h2>INSTITUTE OF EDUCATION</h2>
            <div style={{ fontSize: '11px', color: '#4b087d', fontWeight: 800, marginBottom: '6px' }}>
              An Autonomous Institute of Shikashvik Welfare Foundation
            </div>
            <div className="form-reg-badges">
              <span>🏛️ Registered with MCA, Govt. of India</span>
              <span>📜 NITI Aayog DARPAN</span>
              <span>⭐ An ISO 9001:2015 Certified Institute</span>
            </div>
          </div>

          <div className="form-photo-box">
            Paste Your Recent Passport Size Photograph (Color)
          </div>
        </div>

        {/* FORM NO. & ENROLLMENT NO. BAR */}
        <div className="form-title-bar-row">
          <div className="form-no-label">
            Form No. : <span className="blank-fill-line" style={{ width: '110px' }}></span>
          </div>

          <div className="admission-title-pill">
            ADMISSION / REGISTRATION FORM
          </div>

          <div className="enroll-no-label">
            Enrollment No. : <span className="blank-fill-line" style={{ width: '130px' }}></span>
          </div>
        </div>

        {/* FORM BODY */}
        <div className="form-inner-body">
          {/* 1. COURSE DETAILS */}
          <div className="form-sec-title">1. COURSE DETAILS</div>
          <div className="form-row-grid col-2">
            <div className="field-pair">
              <span className="field-label">Course Name :</span>
              <span className="field-line"></span>
            </div>
            <div className="field-pair">
              <span className="field-label">Course Code :</span>
              <span className="field-line"></span>
            </div>
          </div>
          <div className="form-row-grid col-2">
            <div className="field-pair">
              <span className="field-label">Duration :</span>
              <span className="field-line"></span>
            </div>
            <div className="field-pair">
              <span className="field-label">Batch Timing :</span>
              <span className="field-line"></span>
            </div>
          </div>
          <div className="form-row-grid">
            <div className="field-pair">
              <span className="field-label">Study Centre / Branch :</span>
              <span className="field-line"></span>
            </div>
          </div>
          <div className="form-row-grid col-2">
            <div className="field-pair">
              <span className="field-label">Course Start Date :</span>
              <span className="field-line"></span>
            </div>
            <div className="field-pair">
              <span className="field-label">Course End Date :</span>
              <span className="field-line"></span>
            </div>
          </div>

          {/* 2. PERSONAL DETAILS */}
          <div className="form-sec-title">2. PERSONAL DETAILS</div>
          <div className="form-row-grid">
            <div className="field-pair">
              <span className="field-label">Full Name (In Block Letters) :</span>
              <span className="field-line"></span>
            </div>
          </div>
          <div className="form-row-grid col-2">
            <div className="field-pair">
              <span className="field-label">Father's Name :</span>
              <span className="field-line"></span>
            </div>
            <div className="field-pair">
              <span className="field-label">Mother's Name :</span>
              <span className="field-line"></span>
            </div>
          </div>
          <div className="form-row-grid col-3">
            <div className="field-pair">
              <span className="field-label">Date of Birth :</span>
              <span className="field-line"></span>
            </div>
            <div className="field-pair">
              <span className="field-label">Gender :</span>
              <div className="checkbox-row">
                <span className="check-item"><span className="square-box"></span> Male</span>
                <span className="check-item"><span className="square-box"></span> Female</span>
                <span className="check-item"><span className="square-box"></span> Other</span>
              </div>
            </div>
            <div className="field-pair">
              <span className="field-label">Marital Status :</span>
              <div className="checkbox-row">
                <span className="check-item"><span className="square-box"></span> Single</span>
                <span className="check-item"><span className="square-box"></span> Married</span>
              </div>
            </div>
          </div>
          <div className="form-row-grid col-2">
            <div className="field-pair">
              <span className="field-label">Category :</span>
              <div className="checkbox-row">
                <span className="check-item"><span className="square-box"></span> General</span>
                <span className="check-item"><span className="square-box"></span> OBC</span>
                <span className="check-item"><span className="square-box"></span> SC</span>
                <span className="check-item"><span className="square-box"></span> ST</span>
                <span className="check-item"><span className="square-box"></span> EWS</span>
              </div>
            </div>
            <div className="field-pair">
              <span className="field-label">Nationality :</span>
              <span className="field-line"></span>
            </div>
          </div>
          <div className="form-row-grid col-2">
            <div className="field-pair">
              <span className="field-label">Aadhaar Number :</span>
              <span className="field-line"></span>
            </div>
            <div className="field-pair">
              <span className="field-label">Blood Group :</span>
              <span className="field-line"></span>
            </div>
          </div>

          {/* 3. CONTACT DETAILS */}
          <div className="form-sec-title">3. CONTACT DETAILS</div>
          <div className="form-row-grid col-3">
            <div className="field-pair">
              <span className="field-label">Mobile No. :</span>
              <span className="field-line"></span>
            </div>
            <div className="field-pair">
              <span className="field-label">Alternate Mobile :</span>
              <span className="field-line"></span>
            </div>
            <div className="field-pair">
              <span className="field-label">Email ID :</span>
              <span className="field-line"></span>
            </div>
          </div>
          <div className="form-row-grid">
            <div className="field-pair">
              <span className="field-label">Address :</span>
              <span className="field-line"></span>
            </div>
          </div>
          <div className="form-row-grid col-4">
            <div className="field-pair">
              <span className="field-label">Village / City :</span>
              <span className="field-line"></span>
            </div>
            <div className="field-pair">
              <span className="field-label">Post :</span>
              <span className="field-line"></span>
            </div>
            <div className="field-pair">
              <span className="field-label">District :</span>
              <span className="field-line"></span>
            </div>
            <div className="field-pair">
              <span className="field-label">State :</span>
              <span className="field-line"></span>
            </div>
          </div>
          <div className="form-row-grid" style={{ width: '40%' }}>
            <div className="field-pair">
              <span className="field-label">PIN Code :</span>
              <span className="field-line"></span>
            </div>
          </div>

          {/* 4. ACADEMIC QUALIFICATION */}
          <div className="form-sec-title">4. ACADEMIC QUALIFICATION</div>
          <table className="form-academic-table">
            <thead>
              <tr>
                <th style={{ width: '40px' }}>S.No.</th>
                <th>Examination</th>
                <th>Board / University</th>
                <th style={{ width: '90px' }}>Year of Passing</th>
                <th style={{ width: '80px' }}>Total Marks</th>
                <th style={{ width: '85px' }}>Marks Obtained</th>
                <th style={{ width: '95px' }}>Percentage / CGPA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>High School (10th)</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Higher Secondary (12th)</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Graduation</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Other Qualification</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>

          {/* 5. DOCUMENTS & 6. EMERGENCY CONTACT IN TWO COLUMNS */}
          <div className="two-sec-layout">
            <div>
              <div className="form-sec-title">5. DOCUMENTS SUBMITTED (TICK ✓)</div>
              <div className="docs-check-grid">
                <span className="check-item"><span className="square-box"></span> Aadhaar Card (Self Attested)</span>
                <span className="check-item"><span className="square-box"></span> Address Proof</span>
                <span className="check-item"><span className="square-box"></span> 10th Marksheet & Certificate</span>
                <span className="check-item"><span className="square-box"></span> ID Proof (Voter / PAN / DL)</span>
                <span className="check-item"><span className="square-box"></span> 12th Marksheet & Certificate</span>
                <span className="check-item"><span className="square-box"></span> Disability Cert. (If Applicable)</span>
                <span className="check-item"><span className="square-box"></span> Graduation Marksheet</span>
                <span className="check-item"><span className="square-box"></span> Transfer Certificate (TC)</span>
                <span className="check-item"><span className="square-box"></span> Passport Size Photos (2)</span>
                <span className="check-item"><span className="square-box"></span> Caste / Category Certificate</span>
                <span className="check-item" style={{ gridColumn: 'span 2' }}>
                  <span className="square-box"></span> Other Document : _________________________
                </span>
              </div>
            </div>

            <div>
              <div className="form-sec-title">6. EMERGENCY CONTACT DETAILS</div>
              <div className="form-row-grid">
                <div className="field-pair">
                  <span className="field-label">Contact Person Name :</span>
                  <span className="field-line"></span>
                </div>
              </div>
              <div className="form-row-grid col-2">
                <div className="field-pair">
                  <span className="field-label">Relation :</span>
                  <span className="field-line"></span>
                </div>
                <div className="field-pair">
                  <span className="field-label">Mobile No. :</span>
                  <span className="field-line"></span>
                </div>
              </div>
              <div className="form-row-grid">
                <div className="field-pair">
                  <span className="field-label">Address :</span>
                  <span className="field-line"></span>
                </div>
              </div>
            </div>
          </div>

          {/* 7. DECLARATION & 8. FOR OFFICE USE ONLY */}
          <div className="two-sec-layout" style={{ marginTop: '8px' }}>
            <div>
              <div className="form-sec-title">7. DECLARATION BY APPLICANT</div>
              <p className="declaration-text">
                I hereby declare that the information provided above is true and correct to the best of my knowledge and belief. I have read and understood all the rules and regulations of Shikashvik Welfare Foundation / Shikashvik Institute of Education. I agree to abide by them.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '16px' }}>
                <div>
                  <div style={{ fontSize: '10.5px' }}>Date : _____ / _____ / _________</div>
                  <div style={{ fontSize: '10.5px', marginTop: '4px' }}>Place : _______________________</div>
                </div>
                <div style={{ textAlign: 'center', borderTop: '1px solid #374151', minWidth: '130px', paddingTop: '3px', fontSize: '10px', fontWeight: 700 }}>
                  Signature of Applicant
                </div>
              </div>
            </div>

            <div className="office-use-box">
              <div className="form-sec-title" style={{ marginTop: 0 }}>8. FOR OFFICE USE ONLY</div>
              <div className="form-row-grid">
                <div className="field-pair">
                  <span className="field-label">Admission Approved By :</span>
                  <span className="field-line"></span>
                </div>
              </div>
              <div className="form-row-grid col-2">
                <div className="field-pair">
                  <span className="field-label">Date :</span>
                  <span className="field-line"></span>
                </div>
                <div className="field-pair">
                  <span className="field-label">Fee Paid : ₹</span>
                  <span className="field-line"></span>
                </div>
              </div>
              <div className="form-row-grid">
                <div className="field-pair">
                  <span className="field-label">Receipt No. :</span>
                  <span className="field-line"></span>
                </div>
              </div>
              <div className="form-row-grid">
                <div className="field-pair">
                  <span className="field-label">Payment Mode :</span>
                  <div className="checkbox-row" style={{ fontSize: '10px' }}>
                    <span className="check-item"><span className="square-box"></span> Cash</span>
                    <span className="check-item"><span className="square-box"></span> Online</span>
                    <span className="check-item"><span className="square-box"></span> DD</span>
                  </div>
                </div>
              </div>
              <div className="form-row-grid">
                <div className="field-pair">
                  <span className="field-label">Status :</span>
                  <div className="checkbox-row" style={{ fontSize: '10px' }}>
                    <span className="check-item"><span className="square-box"></span> Approved</span>
                    <span className="check-item"><span className="square-box"></span> Pending</span>
                    <span className="check-item"><span className="square-box"></span> Rejected</span>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right', marginTop: '12px' }}>
                <span style={{ borderTop: '1px solid #374151', display: 'inline-block', paddingTop: '2px', fontSize: '9.5px', fontWeight: 700 }}>
                  Authorized Signatory & Seal
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM OFFICIAL STRIP */}
        <div className="form-bottom-strip">
          <div>
            <strong>Registered Head Office :</strong><br />
            Shikashvik Welfare Foundation<br />
            C/o Ankit Shakya, Dhumari, Dhumari, Aliganj, Etah, Uttar Pradesh, India (PIN: 207248)
          </div>
          <div>
            <strong>Contact & Support :</strong><br />
            📞 +91 8445020016<br />
            ✉ shikashvik@gmail.com
          </div>
          <div style={{ textAlign: 'right' }}>
            <strong style={{ color: '#facc15' }}>Empowering Skills</strong><br />
            Building Future • Transforming Lives<br />
            <span style={{ fontSize: '9px', opacity: 0.85 }}>Section 8 Non-Profit (Govt. of India)</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

