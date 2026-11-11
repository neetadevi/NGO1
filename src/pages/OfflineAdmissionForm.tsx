import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { coursesList, type CourseItem } from '../data/coursesData'
import './OfflineAdmissionForm.css'

interface AcademicRow {
  exam: string
  board: string
  year: string
  totalMarks: string
  marksObtained: string
  percentage: string
}

export default function OfflineAdmissionForm() {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  // Form State
  const [formNo, setFormNo] = useState('SWF/2026/0482')
  const [enrollmentNo, setEnrollmentNo] = useState('')
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)

  // Course Details
  const [courseName, setCourseName] = useState('')
  const [courseCode, setCourseCode] = useState('')
  const [duration, setDuration] = useState('')
  const [batchTiming, setBatchTiming] = useState('10:00 AM - 12:00 PM')
  const [studyCentre, setStudyCentre] = useState('Youcca Institute Of Computer Education, Etah')
  const [startDate, setStartDate] = useState('2026-04-01')
  const [endDate, setEndDate] = useState('2026-06-30')

  // Personal Details
  const [fullName, setFullName] = useState('')
  const [fatherName, setFatherName] = useState('')
  const [motherName, setMotherName] = useState('')
  const [dob, setDob] = useState('')
  const [gender, setGender] = useState('Male')
  const [maritalStatus, setMaritalStatus] = useState('Single')
  const [category, setCategory] = useState('OBC')
  const [nationality, setNationality] = useState('Indian')
  const [aadhaarNo, setAadhaarNo] = useState('')
  const [bloodGroup, setBloodGroup] = useState('B+')

  // Contact Details
  const [mobile, setMobile] = useState('')
  const [altMobile, setAltMobile] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [villageCity, setVillageCity] = useState('Etah')
  const [post, setPost] = useState('Dhumari')
  const [district, setDistrict] = useState('Etah')
  const [state, setState] = useState('Uttar Pradesh')
  const [pincode, setPincode] = useState('207248')

  // Academic Table
  const [academics, setAcademics] = useState<AcademicRow[]>([
    { exam: 'High School (10th)', board: 'UP Board', year: '2023', totalMarks: '600', marksObtained: '462', percentage: '77.0%' },
    { exam: 'Higher Secondary (12th)', board: 'UP Board', year: '2025', totalMarks: '500', marksObtained: '385', percentage: '77.0%' },
    { exam: 'Graduation', board: '', year: '', totalMarks: '', marksObtained: '', percentage: '' },
    { exam: 'Other Qualification', board: '', year: '', totalMarks: '', marksObtained: '', percentage: '' },
  ])

  // Documents
  const [documents, setDocuments] = useState<Record<string, boolean>>({
    aadhaar: true,
    addressProof: true,
    tenthMarksheet: true,
    idProof: false,
    twelfthMarksheet: true,
    disability: false,
    graduation: false,
    tc: false,
    photos: true,
    caste: true,
  })
  const [otherDoc, setOtherDoc] = useState('')

  // Emergency Contact
  const [emergencyName, setEmergencyName] = useState('')
  const [emergencyRelation, setEmergencyRelation] = useState('')
  const [emergencyMobile, setEmergencyMobile] = useState('')
  const [emergencyAddress, setEmergencyAddress] = useState('')

  // Declaration
  const [declarationDate, setDeclarationDate] = useState('11/11/2026')
  const [declarationPlace, setDeclarationPlace] = useState('Etah, Uttar Pradesh')
  const [applicantSignature, setApplicantSignature] = useState('')

  // Office Use
  const [approvedBy, setApprovedBy] = useState('Admission Director, Etah HQ')
  const [officeDate, setOfficeDate] = useState('11/11/2026')
  const [feePaid, setFeePaid] = useState('1500')
  const [receiptNo, setReceiptNo] = useState('REC-2026-0891')
  const [paymentMode, setPaymentMode] = useState('Online')
  const [admissionStatus, setAdmissionStatus] = useState('Approved')

  // Notification Banner
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null)

  // Handle Course Change
  const handleCourseSelect = (name: string) => {
    setCourseName(name)
    const found = coursesList.find((c: CourseItem) => c.name.toLowerCase() === name.toLowerCase())
    if (found) {
      setCourseCode(found.code)
      setDuration(found.duration)
      if (found.courseFee) {
        setFeePaid(String(found.courseFee))
      }
    }
  }

  // Handle Academic row update
  const handleAcademicChange = (index: number, field: keyof AcademicRow, val: string) => {
    const updated = [...academics]
    updated[index][field] = val
    setAcademics(updated)
  }

  // Handle Photo Upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setPhotoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // Pre-fill Demo Data
  const handleFillDemo = () => {
    setFormNo('SWF/2026/0150')
    setEnrollmentNo('SWF20260150')
    setCourseName('Course On Computer Concepts (CCC)')
    setCourseCode('SWF-IT-005')
    setDuration('3 Months')
    setBatchTiming('10:00 AM - 12:00 PM')
    setStudyCentre('Youcca Institute Of Computer Education, Etah (SALT/UP/046)')
    setStartDate('2026-04-01')
    setEndDate('2026-06-30')

    setFullName('DEVESH KUMAR')
    setFatherName('MAN PAL SINGH')
    setMotherName('SANTOSH DEVI')
    setDob('2006-05-14')
    setGender('Male')
    setMaritalStatus('Single')
    setCategory('OBC')
    setNationality('Indian')
    setAadhaarNo('7845 9210 3456')
    setBloodGroup('B+')

    setMobile('8445020016')
    setAltMobile('9412345678')
    setEmail('deveshkumar.etah@gmail.com')
    setAddress('C/o Ankit Shakya, Dhumari, Aliganj')
    setVillageCity('Dhumari')
    setPost('Dhumari')
    setDistrict('Etah')
    setState('Uttar Pradesh')
    setPincode('207248')

    setAcademics([
      { exam: 'High School (10th)', board: 'UP Board, Prayagraj', year: '2023', totalMarks: '600', marksObtained: '462', percentage: '77.0%' },
      { exam: 'Higher Secondary (12th)', board: 'UP Board, Prayagraj', year: '2025', totalMarks: '500', marksObtained: '385', percentage: '77.0%' },
      { exam: 'Graduation', board: 'Dr. B.R. Ambedkar Univ, Agra', year: 'Pursuing', totalMarks: '-', marksObtained: '-', percentage: '-' },
      { exam: 'Other Qualification', board: 'NIELIT Basics', year: '2025', totalMarks: '100', marksObtained: '82', percentage: '82.0%' },
    ])

    setEmergencyName('Man Pal Singh')
    setEmergencyRelation('Father')
    setEmergencyMobile('8445020016')
    setEmergencyAddress('Dhumari, Aliganj, Etah (UP)')

    setApplicantSignature('Devesh Kumar')
    setDeclarationPlace('Etah')
    setFeePaid('1500')
    setReceiptNo('REC-2026-0150')
    setSaveSuccess('Demo details for Devesh Kumar loaded successfully! You can edit any field or click Print/Save.')
  }

  // Clear Form
  const handleClearForm = () => {
    setFullName('')
    setFatherName('')
    setMotherName('')
    setDob('')
    setMobile('')
    setAltMobile('')
    setEmail('')
    setAddress('')
    setAadhaarNo('')
    setPhotoPreview(null)
    setEnrollmentNo('')
    setCourseName('')
    setCourseCode('')
    setApplicantSignature('')
    setSaveSuccess(null)
  }

  // Save / Submit to Central Database & Admin Panel
  const handleSaveSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName || !mobile) {
      alert('Please fill in at least the Student Full Name and Mobile Number.')
      return
    }

    const regNo = enrollmentNo || `SWF-ADM-${Math.floor(100000 + Math.random() * 900000)}`
    const submissionRecord = {
      regNo,
      formNo: formNo || `SWF/2026/${Math.floor(1000 + Math.random() * 9000)}`,
      enrollmentNo: regNo,
      fullName: fullName.toUpperCase(),
      fatherName: fatherName.toUpperCase(),
      motherName: motherName.toUpperCase(),
      dob,
      gender,
      maritalStatus,
      category,
      nationality,
      aadhaarNo,
      bloodGroup,
      mobile,
      altMobile,
      email: email || 'shikashvik@gmail.com',
      address,
      villageCity,
      post,
      district,
      state,
      pincode,
      course: courseName || 'Course On Computer Concepts (CCC)',
      courseCode: courseCode || 'SWF-IT-005',
      duration: duration || '3 Months',
      batchTiming,
      centerCode: studyCentre || 'Youcca Institute Of Computer Education, Etah',
      startDate,
      endDate,
      academics,
      emergencyName,
      emergencyRelation,
      emergencyMobile,
      emergencyAddress,
      feePaid,
      receiptNo,
      paymentMode,
      date: new Date().toLocaleDateString('en-GB'),
      status: 'Approved',
      timestamp: new Date().toISOString(),
      source: 'Offline Admission Form (A4 Fillable)',
    }

    try {
      // Save to swf_admissions
      const existing = JSON.parse(localStorage.getItem('swf_admissions') || '[]')
      existing.unshift(submissionRecord)
      localStorage.setItem('swf_admissions', JSON.stringify(existing))

      // Also save to swf_offline_admissions
      const offlineExisting = JSON.parse(localStorage.getItem('swf_offline_admissions') || '[]')
      offlineExisting.unshift(submissionRecord)
      localStorage.setItem('swf_offline_admissions', JSON.stringify(offlineExisting))
    } catch (err) {
      console.error('Storage error:', err)
    }

    setSaveSuccess(`Admission Application ${regNo} for ${fullName.toUpperCase()} saved & submitted to Central Admin Desk! Details are ready to print.`)
    window.scrollTo({ top: 150, behavior: 'smooth' })
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="offline-form-page">
      <Navbar />

      {/* TOP ACTION TOOLBAR */}
      <div className="form-action-toolbar no-print">
        <div style={{ flex: '1 1 300px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0', padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 700 }}>
              ✍️ Interactive Fillable Form
            </span>
            <span style={{ background: '#f5f3ff', color: '#6d28d9', border: '1px solid #ddd6fe', padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 700 }}>
              🖨️ A4 Print Ready
            </span>
          </div>
          <h2 style={{ margin: 0, color: '#3b0764', fontSize: '20px', fontWeight: 800 }}>
            Admission / Registration Form (Fill & Print)
          </h2>
          <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: '13px' }}>
            You can type your details directly on this form, upload your photo, save it to the Central Admin Panel, and print your original A4 admission form.
          </p>
        </div>

        <div className="toolbar-btn-group">
          <button type="button" onClick={handleFillDemo} className="toolbar-btn-demo" title="Fill with authentic sample data">
            ⚡ Fill Sample Data
          </button>
          <button type="button" onClick={handleClearForm} className="toolbar-btn-clear" title="Clear all fields">
            🔄 Clear Form
          </button>
          <button type="button" onClick={handleSaveSubmit} className="toolbar-btn-save" title="Save details to Central Server & Admin Panel">
            💾 Save & Submit
          </button>
          <button type="button" onClick={handlePrint} className="print-form-btn" title="Print this A4 Form">
            🖨️ Print A4 Form
          </button>
        </div>
      </div>

      {/* SUCCESS NOTIFICATION */}
      {saveSuccess && (
        <div className="form-success-banner no-print">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '24px' }}>✅</span>
            <div style={{ flex: 1 }}>
              <strong style={{ color: '#065f46', fontSize: '15px' }}>{saveSuccess}</strong>
              <div style={{ fontSize: '13px', color: '#047857', marginTop: '3px' }}>
                Synced with <strong>Central Admin Portal</strong> at{' '}
                <a href="#/admin" style={{ color: '#1e40af', fontWeight: 'bold', textDecoration: 'underline' }}>
                  shikashvikwelfare.org.in/admin
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={handlePrint} className="mini-print-btn">
                🖨️ Print Form Now
              </button>
              <Link to="/admin" className="mini-admin-btn">
                🔐 Open Admin Panel
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* A4 PRINTABLE & FILLABLE CONTAINER */}
      <form onSubmit={handleSaveSubmit}>
        <div className="a4-form-container" id="printable-admission-form">
          {/* TOP WARNING STRIP */}
          <div className="form-top-strip">
            <span>* Photocopy not accepted *</span>
            <span>SHIKASHVIK WELFARE FOUNDATION • ESTD 2026</span>
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
              <div className="form-sub-subtitle">
                An Autonomous Institute of Shikashvik Welfare Foundation
              </div>
              <div className="form-reg-badges">
                <span>🏛️ Reg. with MCA, Govt. of India</span>
                <span>📜 NITI Aayog DARPAN</span>
                <span>⭐ ISO 9001:2015 Certified Institute</span>
              </div>
            </div>

            {/* PHOTO UPLOAD BOX */}
            <div
              className={`form-photo-box ${photoPreview ? 'has-photo' : ''}`}
              onClick={() => fileInputRef.current?.click()}
              title="Click to upload student photo"
            >
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handlePhotoUpload}
              />
              {photoPreview ? (
                <div className="photo-preview-wrap">
                  <img src={photoPreview} alt="Student Photograph" />
                  <span className="change-photo-badge no-print">Change Photo</span>
                </div>
              ) : (
                <div className="photo-placeholder-text">
                  <span style={{ fontSize: '20px', display: 'block', marginBottom: '4px' }}>📷</span>
                  Paste / Upload Recent Passport Size Photograph (Color)
                </div>
              )}
            </div>
          </div>

          {/* FORM NO. & ENROLLMENT NO. BAR */}
          <div className="form-title-bar-row">
            <div className="form-no-label">
              Form No. :{' '}
              <input
                type="text"
                className="fill-input-inline"
                style={{ width: '130px' }}
                value={formNo}
                onChange={(e) => setFormNo(e.target.value)}
                placeholder="SWF/2026/..."
              />
            </div>

            <div className="admission-title-pill">
              ADMISSION / REGISTRATION FORM
            </div>

            <div className="enroll-no-label">
              Enrollment No. :{' '}
              <input
                type="text"
                className="fill-input-inline"
                style={{ width: '140px' }}
                value={enrollmentNo}
                onChange={(e) => setEnrollmentNo(e.target.value)}
                placeholder="SWF2026..."
              />
            </div>
          </div>

          {/* FORM BODY */}
          <div className="form-inner-body">
            {/* 1. COURSE DETAILS */}
            <div className="form-sec-title">1. COURSE DETAILS</div>

            <div className="form-row-grid col-2">
              <div className="field-pair">
                <span className="field-label">Course Name :</span>
                <input
                  type="text"
                  list="courseListOptions"
                  className="fill-input-field"
                  value={courseName}
                  onChange={(e) => handleCourseSelect(e.target.value)}
                  placeholder="Select or enter Course Name"
                />
                <datalist id="courseListOptions">
                  {coursesList.map((c: CourseItem) => (
                    <option key={c.id} value={c.name} />
                  ))}
                </datalist>
              </div>

              <div className="field-pair">
                <span className="field-label">Course Code :</span>
                <input
                  type="text"
                  className="fill-input-field"
                  value={courseCode}
                  onChange={(e) => setCourseCode(e.target.value)}
                  placeholder="e.g. SWF-IT-005"
                />
              </div>
            </div>

            <div className="form-row-grid col-2">
              <div className="field-pair">
                <span className="field-label">Duration :</span>
                <input
                  type="text"
                  className="fill-input-field"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="e.g. 3 Months / 1 Year"
                />
              </div>

              <div className="field-pair">
                <span className="field-label">Batch Timing :</span>
                <input
                  type="text"
                  className="fill-input-field"
                  value={batchTiming}
                  onChange={(e) => setBatchTiming(e.target.value)}
                  placeholder="e.g. 10:00 AM - 12:00 PM"
                />
              </div>
            </div>

            <div className="form-row-grid">
              <div className="field-pair">
                <span className="field-label">Study Centre / Branch :</span>
                <input
                  type="text"
                  className="fill-input-field"
                  value={studyCentre}
                  onChange={(e) => setStudyCentre(e.target.value)}
                  placeholder="Center Name & Code"
                />
              </div>
            </div>

            <div className="form-row-grid col-2">
              <div className="field-pair">
                <span className="field-label">Course Start Date :</span>
                <input
                  type="date"
                  className="fill-input-field"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>

              <div className="field-pair">
                <span className="field-label">Course End Date :</span>
                <input
                  type="date"
                  className="fill-input-field"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>

            {/* 2. PERSONAL DETAILS */}
            <div className="form-sec-title">2. PERSONAL DETAILS</div>

            <div className="form-row-grid">
              <div className="field-pair">
                <span className="field-label">Full Name (In Block Letters) :</span>
                <input
                  type="text"
                  className="fill-input-field"
                  style={{ fontWeight: 700, textTransform: 'uppercase' }}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="ENTER STUDENT FULL NAME"
                  required
                />
              </div>
            </div>

            <div className="form-row-grid col-2">
              <div className="field-pair">
                <span className="field-label">Father's Name :</span>
                <input
                  type="text"
                  className="fill-input-field"
                  style={{ textTransform: 'uppercase' }}
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                  placeholder="ENTER FATHER'S NAME"
                />
              </div>

              <div className="field-pair">
                <span className="field-label">Mother's Name :</span>
                <input
                  type="text"
                  className="fill-input-field"
                  style={{ textTransform: 'uppercase' }}
                  value={motherName}
                  onChange={(e) => setMotherName(e.target.value)}
                  placeholder="ENTER MOTHER'S NAME"
                />
              </div>
            </div>

            <div className="form-row-grid col-3">
              <div className="field-pair">
                <span className="field-label">Date of Birth :</span>
                <input
                  type="date"
                  className="fill-input-field"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>

              <div className="field-pair">
                <span className="field-label">Gender :</span>
                <div className="checkbox-row">
                  {['Male', 'Female', 'Other'].map((g) => (
                    <label key={g} className="radio-label">
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={gender === g}
                        onChange={() => setGender(g)}
                      />
                      <span>{g}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="field-pair">
                <span className="field-label">Marital Status :</span>
                <div className="checkbox-row">
                  {['Single', 'Married'].map((m) => (
                    <label key={m} className="radio-label">
                      <input
                        type="radio"
                        name="marital"
                        value={m}
                        checked={maritalStatus === m}
                        onChange={() => setMaritalStatus(m)}
                      />
                      <span>{m}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="form-row-grid col-2">
              <div className="field-pair">
                <span className="field-label">Category :</span>
                <div className="checkbox-row">
                  {['General', 'OBC', 'SC', 'ST', 'EWS'].map((c) => (
                    <label key={c} className="radio-label">
                      <input
                        type="radio"
                        name="category"
                        value={c}
                        checked={category === c}
                        onChange={() => setCategory(c)}
                      />
                      <span>{c}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="field-pair">
                <span className="field-label">Nationality :</span>
                <input
                  type="text"
                  className="fill-input-field"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  placeholder="Indian"
                />
              </div>
            </div>

            <div className="form-row-grid col-2">
              <div className="field-pair">
                <span className="field-label">Aadhaar Number :</span>
                <input
                  type="text"
                  className="fill-input-field"
                  maxLength={14}
                  value={aadhaarNo}
                  onChange={(e) => setAadhaarNo(e.target.value)}
                  placeholder="XXXX XXXX XXXX"
                />
              </div>

              <div className="field-pair">
                <span className="field-label">Blood Group :</span>
                <input
                  type="text"
                  className="fill-input-field"
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  placeholder="e.g. B+, O+, A+"
                />
              </div>
            </div>

            {/* 3. CONTACT DETAILS */}
            <div className="form-sec-title">3. CONTACT DETAILS</div>

            <div className="form-row-grid col-3">
              <div className="field-pair">
                <span className="field-label">Mobile No. :</span>
                <input
                  type="tel"
                  className="fill-input-field"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="10-digit Mobile"
                  required
                />
              </div>

              <div className="field-pair">
                <span className="field-label">Alternate Mobile :</span>
                <input
                  type="tel"
                  className="fill-input-field"
                  value={altMobile}
                  onChange={(e) => setAltMobile(e.target.value)}
                  placeholder="Optional Alternate"
                />
              </div>

              <div className="field-pair">
                <span className="field-label">Email ID :</span>
                <input
                  type="email"
                  className="fill-input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@example.com"
                />
              </div>
            </div>

            <div className="form-row-grid">
              <div className="field-pair">
                <span className="field-label">Address :</span>
                <input
                  type="text"
                  className="fill-input-field"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Complete Street / Village Address"
                />
              </div>
            </div>

            <div className="form-row-grid col-4">
              <div className="field-pair">
                <span className="field-label">Village / City :</span>
                <input
                  type="text"
                  className="fill-input-field"
                  value={villageCity}
                  onChange={(e) => setVillageCity(e.target.value)}
                  placeholder="City / Village"
                />
              </div>

              <div className="field-pair">
                <span className="field-label">Post :</span>
                <input
                  type="text"
                  className="fill-input-field"
                  value={post}
                  onChange={(e) => setPost(e.target.value)}
                  placeholder="Post Office"
                />
              </div>

              <div className="field-pair">
                <span className="field-label">District :</span>
                <input
                  type="text"
                  className="fill-input-field"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder="District"
                />
              </div>

              <div className="field-pair">
                <span className="field-label">State :</span>
                <input
                  type="text"
                  className="fill-input-field"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="State"
                />
              </div>
            </div>

            <div className="form-row-grid" style={{ width: '45%' }}>
              <div className="field-pair">
                <span className="field-label">PIN Code :</span>
                <input
                  type="text"
                  className="fill-input-field"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="207248"
                />
              </div>
            </div>

            {/* 4. ACADEMIC QUALIFICATION */}
            <div className="form-sec-title">4. ACADEMIC QUALIFICATION</div>
            <table className="form-academic-table">
              <thead>
                <tr>
                  <th style={{ width: '38px' }}>S.No.</th>
                  <th>Examination</th>
                  <th>Board / University</th>
                  <th style={{ width: '100px' }}>Year of Passing</th>
                  <th style={{ width: '90px' }}>Total Marks</th>
                  <th style={{ width: '95px' }}>Marks Obtained</th>
                  <th style={{ width: '105px' }}>Percentage / CGPA</th>
                </tr>
              </thead>
              <tbody>
                {academics.map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ textAlign: 'center', fontWeight: 700 }}>{idx + 1}</td>
                    <td style={{ fontWeight: 600 }}>{row.exam}</td>
                    <td>
                      <input
                        type="text"
                        className="table-cell-input"
                        value={row.board}
                        onChange={(e) => handleAcademicChange(idx, 'board', e.target.value)}
                        placeholder="Board / Univ"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="table-cell-input"
                        value={row.year}
                        onChange={(e) => handleAcademicChange(idx, 'year', e.target.value)}
                        placeholder="Year"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="table-cell-input"
                        value={row.totalMarks}
                        onChange={(e) => handleAcademicChange(idx, 'totalMarks', e.target.value)}
                        placeholder="Total"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="table-cell-input"
                        value={row.marksObtained}
                        onChange={(e) => handleAcademicChange(idx, 'marksObtained', e.target.value)}
                        placeholder="Obtained"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="table-cell-input"
                        value={row.percentage}
                        onChange={(e) => handleAcademicChange(idx, 'percentage', e.target.value)}
                        placeholder="e.g. 75%"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* 5. DOCUMENTS & 6. EMERGENCY CONTACT IN TWO COLUMNS */}
            <div className="two-sec-layout">
              <div>
                <div className="form-sec-title">5. DOCUMENTS SUBMITTED (TICK ✓)</div>
                <div className="docs-check-grid">
                  <label className="doc-check-item">
                    <input
                      type="checkbox"
                      checked={documents.aadhaar}
                      onChange={(e) => setDocuments({ ...documents, aadhaar: e.target.checked })}
                    />
                    <span>Aadhaar Card (Self Attested)</span>
                  </label>

                  <label className="doc-check-item">
                    <input
                      type="checkbox"
                      checked={documents.addressProof}
                      onChange={(e) => setDocuments({ ...documents, addressProof: e.target.checked })}
                    />
                    <span>Address Proof</span>
                  </label>

                  <label className="doc-check-item">
                    <input
                      type="checkbox"
                      checked={documents.tenthMarksheet}
                      onChange={(e) => setDocuments({ ...documents, tenthMarksheet: e.target.checked })}
                    />
                    <span>10th Marksheet & Certificate</span>
                  </label>

                  <label className="doc-check-item">
                    <input
                      type="checkbox"
                      checked={documents.idProof}
                      onChange={(e) => setDocuments({ ...documents, idProof: e.target.checked })}
                    />
                    <span>ID Proof (Voter / PAN / DL)</span>
                  </label>

                  <label className="doc-check-item">
                    <input
                      type="checkbox"
                      checked={documents.twelfthMarksheet}
                      onChange={(e) => setDocuments({ ...documents, twelfthMarksheet: e.target.checked })}
                    />
                    <span>12th Marksheet & Certificate</span>
                  </label>

                  <label className="doc-check-item">
                    <input
                      type="checkbox"
                      checked={documents.disability}
                      onChange={(e) => setDocuments({ ...documents, disability: e.target.checked })}
                    />
                    <span>Disability Cert. (If Applicable)</span>
                  </label>

                  <label className="doc-check-item">
                    <input
                      type="checkbox"
                      checked={documents.graduation}
                      onChange={(e) => setDocuments({ ...documents, graduation: e.target.checked })}
                    />
                    <span>Graduation Marksheet</span>
                  </label>

                  <label className="doc-check-item">
                    <input
                      type="checkbox"
                      checked={documents.tc}
                      onChange={(e) => setDocuments({ ...documents, tc: e.target.checked })}
                    />
                    <span>Transfer Certificate (TC)</span>
                  </label>

                  <label className="doc-check-item">
                    <input
                      type="checkbox"
                      checked={documents.photos}
                      onChange={(e) => setDocuments({ ...documents, photos: e.target.checked })}
                    />
                    <span>Passport Size Photos (2)</span>
                  </label>

                  <label className="doc-check-item">
                    <input
                      type="checkbox"
                      checked={documents.caste}
                      onChange={(e) => setDocuments({ ...documents, caste: e.target.checked })}
                    />
                    <span>Caste / Category Certificate</span>
                  </label>

                  <div className="doc-check-item" style={{ gridColumn: 'span 2' }}>
                    <span style={{ whiteSpace: 'nowrap', fontWeight: 600 }}>Other Document :</span>
                    <input
                      type="text"
                      className="fill-input-inline"
                      style={{ flex: 1 }}
                      value={otherDoc}
                      onChange={(e) => setOtherDoc(e.target.value)}
                      placeholder="Specify if any"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="form-sec-title">6. EMERGENCY CONTACT DETAILS</div>
                <div className="form-row-grid">
                  <div className="field-pair">
                    <span className="field-label">Contact Person Name :</span>
                    <input
                      type="text"
                      className="fill-input-field"
                      value={emergencyName}
                      onChange={(e) => setEmergencyName(e.target.value)}
                      placeholder="Parent / Guardian Name"
                    />
                  </div>
                </div>

                <div className="form-row-grid col-2">
                  <div className="field-pair">
                    <span className="field-label">Relation :</span>
                    <input
                      type="text"
                      className="fill-input-field"
                      value={emergencyRelation}
                      onChange={(e) => setEmergencyRelation(e.target.value)}
                      placeholder="e.g. Father / Mother"
                    />
                  </div>

                  <div className="field-pair">
                    <span className="field-label">Mobile No. :</span>
                    <input
                      type="tel"
                      className="fill-input-field"
                      value={emergencyMobile}
                      onChange={(e) => setEmergencyMobile(e.target.value)}
                      placeholder="Emergency Mobile"
                    />
                  </div>
                </div>

                <div className="form-row-grid">
                  <div className="field-pair">
                    <span className="field-label">Address :</span>
                    <input
                      type="text"
                      className="fill-input-field"
                      value={emergencyAddress}
                      onChange={(e) => setEmergencyAddress(e.target.value)}
                      placeholder="Guardian Address"
                    />
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

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '16px', gap: '14px' }}>
                  <div>
                    <div className="field-pair" style={{ marginBottom: '4px' }}>
                      <span style={{ fontSize: '10.5px', fontWeight: 700 }}>Date :</span>
                      <input
                        type="text"
                        className="fill-input-inline"
                        style={{ width: '110px', fontSize: '11px' }}
                        value={declarationDate}
                        onChange={(e) => setDeclarationDate(e.target.value)}
                      />
                    </div>
                    <div className="field-pair">
                      <span style={{ fontSize: '10.5px', fontWeight: 700 }}>Place :</span>
                      <input
                        type="text"
                        className="fill-input-inline"
                        style={{ width: '140px', fontSize: '11px' }}
                        value={declarationPlace}
                        onChange={(e) => setDeclarationPlace(e.target.value)}
                      />
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', minWidth: '150px' }}>
                    <input
                      type="text"
                      className="fill-input-inline signature-font-input"
                      style={{ textAlign: 'center', borderBottom: '1.5px solid #1f2937', fontWeight: 'bold' }}
                      value={applicantSignature || fullName}
                      onChange={(e) => setApplicantSignature(e.target.value)}
                      placeholder="Applicant Signature"
                    />
                    <div style={{ fontSize: '10px', fontWeight: 700, color: '#4b5563', marginTop: '2px' }}>
                      Signature of Applicant
                    </div>
                  </div>
                </div>
              </div>

              <div className="office-use-box">
                <div className="form-sec-title" style={{ marginTop: 0 }}>8. FOR OFFICE USE ONLY</div>

                <div className="form-row-grid">
                  <div className="field-pair">
                    <span className="field-label">Admission Approved By :</span>
                    <input
                      type="text"
                      className="fill-input-field"
                      value={approvedBy}
                      onChange={(e) => setApprovedBy(e.target.value)}
                      placeholder="Authorized Officer"
                    />
                  </div>
                </div>

                <div className="form-row-grid col-2">
                  <div className="field-pair">
                    <span className="field-label">Date :</span>
                    <input
                      type="text"
                      className="fill-input-field"
                      value={officeDate}
                      onChange={(e) => setOfficeDate(e.target.value)}
                    />
                  </div>

                  <div className="field-pair">
                    <span className="field-label">Fee Paid : ₹</span>
                    <input
                      type="text"
                      className="fill-input-field"
                      value={feePaid}
                      onChange={(e) => setFeePaid(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row-grid">
                  <div className="field-pair">
                    <span className="field-label">Receipt No. :</span>
                    <input
                      type="text"
                      className="fill-input-field"
                      value={receiptNo}
                      onChange={(e) => setReceiptNo(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row-grid">
                  <div className="field-pair">
                    <span className="field-label">Payment Mode :</span>
                    <div className="checkbox-row" style={{ fontSize: '10px' }}>
                      {['Cash', 'Online', 'DD'].map((pm) => (
                        <label key={pm} className="radio-label">
                          <input
                            type="radio"
                            name="paymentMode"
                            value={pm}
                            checked={paymentMode === pm}
                            onChange={() => setPaymentMode(pm)}
                          />
                          <span>{pm}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="form-row-grid">
                  <div className="field-pair">
                    <span className="field-label">Status :</span>
                    <div className="checkbox-row" style={{ fontSize: '10px' }}>
                      {['Approved', 'Pending', 'Rejected'].map((st) => (
                        <label key={st} className="radio-label">
                          <input
                            type="radio"
                            name="status"
                            value={st}
                            checked={admissionStatus === st}
                            onChange={() => setAdmissionStatus(st)}
                          />
                          <span>{st}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'right', marginTop: '10px' }}>
                  <div style={{ display: 'inline-block', textAlign: 'center' }}>
                    <div style={{ color: '#4b087d', fontWeight: 800, fontSize: '10.5px' }}>
                      [ SHIKASHVIK REG. SEAL ]
                    </div>
                    <span style={{ borderTop: '1px solid #374151', display: 'inline-block', paddingTop: '2px', fontSize: '9.5px', fontWeight: 700 }}>
                      Authorized Signatory & Seal
                    </span>
                  </div>
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

        {/* BOTTOM ACTION BAR */}
        <div className="form-bottom-actions no-print">
          <button type="submit" className="toolbar-btn-save">
            💾 Save & Submit Application to Admin
          </button>
          <button type="button" onClick={handlePrint} className="print-form-btn">
            🖨️ Print / Download PDF Form
          </button>
        </div>
      </form>

      <Footer />
    </div>
  )
}
