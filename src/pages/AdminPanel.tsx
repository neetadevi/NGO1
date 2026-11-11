import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './AdminPanel.css'

interface StudentRecord {
  regNo: string
  formNo?: string
  enrollmentNo: string
  fullName: string
  fatherName: string
  motherName?: string
  dob?: string
  gender?: string
  category?: string
  mobile: string
  email?: string
  course: string
  courseCode?: string
  centerCode?: string
  district?: string
  state?: string
  date: string
  status: string
  source?: string
  timestamp?: string
}

interface FranchiseRecord {
  centerName?: string
  directorName?: string
  mobile?: string
  email?: string
  city?: string
  district?: string
  state?: string
  refNo?: string
  submittedAt?: string
  status?: string
}

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('swf_admin_auth') === 'true'
  })
  const [adminUsername, setAdminUsername] = useState('admin')
  const [adminPassword, setAdminPassword] = useState('')
  const [loginError, setLoginError] = useState('')

  const [activeTab, setActiveTab] = useState<'students' | 'franchise' | 'certificates' | 'settings'>('students')
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('ALL')

  const [students, setStudents] = useState<StudentRecord[]>([])
  const [franchises, setFranchises] = useState<FranchiseRecord[]>([])
  const [selectedStudent, setSelectedStudent] = useState<StudentRecord | null>(null)

  // Default seed record for Devesh Kumar
  const defaultStudent: StudentRecord = {
    regNo: 'SWF20260150',
    formNo: 'SWF/2026/0150',
    enrollmentNo: 'SWF20260150',
    fullName: 'DEVESH KUMAR',
    fatherName: 'MAN PAL SINGH',
    motherName: 'SANTOSH DEVI',
    dob: '14/05/2006',
    gender: 'Male',
    category: 'OBC',
    mobile: '8445020016',
    email: 'deveshkumar.etah@gmail.com',
    course: 'Course On Computer Concepts (CCC)',
    courseCode: 'SWF-IT-005',
    centerCode: 'Youcca Institute Of Computer Education, Etah (SALT/UP/046)',
    district: 'Etah',
    state: 'Uttar Pradesh',
    date: '17/07/2026',
    status: 'Approved & Issued',
    source: 'Central Enrollment Registry',
  }

  const defaultFranchise: FranchiseRecord = {
    centerName: 'Youcca Institute Of Computer Education',
    directorName: 'Ankit Shakya',
    mobile: '8445020016',
    email: 'shikashvik@gmail.com',
    city: 'Dhumari, Aliganj',
    district: 'Etah',
    state: 'Uttar Pradesh',
    refNo: 'SWF-ATC-202601',
    submittedAt: '2026-10-23T10:00:00.000Z',
    status: 'Approved & Affiliated',
  }

  // Load records from localStorage
  const loadRecords = () => {
    try {
      const storedAdmissions: StudentRecord[] = JSON.parse(localStorage.getItem('swf_admissions') || '[]')
      // Merge with default student if not present
      const hasDefault = storedAdmissions.some((s) => s.enrollmentNo === defaultStudent.enrollmentNo || s.regNo === defaultStudent.regNo)
      const mergedStudents = hasDefault ? storedAdmissions : [defaultStudent, ...storedAdmissions]
      setStudents(mergedStudents)

      const storedFranchise: FranchiseRecord[] = JSON.parse(localStorage.getItem('swf_franchise_apps') || '[]')
      const hasDefaultFran = storedFranchise.some((f) => f.refNo === defaultFranchise.refNo)
      const mergedFranchise = hasDefaultFran ? storedFranchise : [defaultFranchise, ...storedFranchise]
      setFranchises(mergedFranchise)
    } catch (err) {
      console.error('Error loading admin records:', err)
      setStudents([defaultStudent])
      setFranchises([defaultFranchise])
    }
  }

  useEffect(() => {
    loadRecords()
  }, [])

  // Handle Admin Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Accept standard defaults or master PIN
    if (
      (adminUsername.toLowerCase().trim() === 'admin' || adminUsername.toLowerCase().trim() === 'shikashvik@gmail.com') &&
      (adminPassword.trim() === 'admin' || adminPassword.trim() === 'admin123' || adminPassword.trim() === '8445020016' || adminPassword.trim() === '')
    ) {
      localStorage.setItem('swf_admin_auth', 'true')
      setIsAuthenticated(true)
      setLoginError('')
    } else {
      setLoginError('Invalid Username or Password. Use admin / 8445020016 or click Quick Access.')
    }
  }

  const handleQuickAccess = () => {
    localStorage.setItem('swf_admin_auth', 'true')
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('swf_admin_auth')
    setIsAuthenticated(false)
  }

  // Approve a student
  const handleApproveStudent = (enrollmentNo: string) => {
    const updated = students.map((s) => {
      if (s.enrollmentNo === enrollmentNo || s.regNo === enrollmentNo) {
        return { ...s, status: 'Approved' }
      }
      return s
    })
    setStudents(updated)
    try {
      localStorage.setItem('swf_admissions', JSON.stringify(updated.filter((s) => s.enrollmentNo !== defaultStudent.enrollmentNo)))
    } catch (err) {
      console.error(err)
    }
  }

  // Approve a franchise center
  const handleApproveFranchise = (refNo: string) => {
    const updated = franchises.map((f) => {
      if (f.refNo === refNo) {
        return { ...f, status: 'Approved & Affiliated' }
      }
      return f
    })
    setFranchises(updated)
    try {
      localStorage.setItem('swf_franchise_apps', JSON.stringify(updated.filter((f) => f.refNo !== defaultFranchise.refNo)))
    } catch (err) {
      console.error(err)
    }
  }

  // Filter students
  const filteredStudents = students.filter((s) => {
    const matchesSearch =
      (s.fullName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.enrollmentNo || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.mobile || '').includes(searchQuery) ||
      (s.course || '').toLowerCase().includes(searchQuery.toLowerCase())

    if (statusFilter === 'ALL') return matchesSearch
    return matchesSearch && (s.status || '').toLowerCase().includes(statusFilter.toLowerCase())
  })

  // Export CSV
  const handleExportCSV = () => {
    const headers = ['Enrollment No', 'Full Name', "Father's Name", 'Mobile', 'Email', 'Course', 'Center', 'Date', 'Status']
    const rows = students.map((s) => [
      `"${s.enrollmentNo || s.regNo}"`,
      `"${s.fullName}"`,
      `"${s.fatherName}"`,
      `"${s.mobile}"`,
      `"${s.email || ''}"`,
      `"${s.course}"`,
      `"${s.centerCode || ''}"`,
      `"${s.date}"`,
      `"${s.status}"`,
    ])
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `shikashvik_admissions_${new Date().toISOString().slice(0, 10)}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // -------------------------------------------------------------
  // LOGIN SCREEN
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="admin-portal-wrapper">
        <Navbar />

        <div className="admin-login-container">
          <div className="admin-login-card">
            <div className="admin-login-header">
              <img src="./logo.png" alt="Shikashvik Welfare Foundation" className="admin-login-logo" />
              <h2>CENTRAL ADMINISTRATION DESK</h2>
              <p>Shikashvik Welfare Foundation • Head Office Etah, UP</p>
              <div className="admin-login-badge">
                🔐 Official Portal: shikashvikwelfare.org.in/admin
              </div>
            </div>

            {loginError && <div className="admin-alert-error">{loginError}</div>}

            <form onSubmit={handleLogin} className="admin-login-form">
              <div className="form-group">
                <label>Admin Username / Email</label>
                <input
                  type="text"
                  value={adminUsername}
                  onChange={(e) => setAdminUsername(e.target.value)}
                  placeholder="admin or shikashvik@gmail.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Admin Access Password / PIN</label>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="Enter Password (e.g. 8445020016 or admin)"
                />
              </div>

              <button type="submit" className="admin-btn-primary">
                🔐 Login to Administration Panel
              </button>

              <button type="button" onClick={handleQuickAccess} className="admin-btn-secondary">
                ⚡ One-Click Administrator Quick Access
              </button>
            </form>

            <div className="admin-login-footer">
              <strong>Official Head Office Support:</strong><br />
              📞 +91 8445020016 | ✉ shikashvik@gmail.com<br />
              <span style={{ fontSize: '11px', color: '#64748b' }}>
                C/o Ankit Shakya, Dhumari, Aliganj, Etah (UP) - 207248
              </span>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }

  // -------------------------------------------------------------
  // AUTHENTICATED ADMIN DASHBOARD
  // -------------------------------------------------------------
  return (
    <div className="admin-portal-wrapper">
      <Navbar />

      {/* ADMIN TOP CONTROL BAR */}
      <div className="admin-top-bar">
        <div className="admin-brand-info">
          <img src="./logo.png" alt="Shikashvik Logo" className="admin-top-logo" />
          <div>
            <h1>SHIKASHVIK CENTRAL ADMIN DESK</h1>
            <p>Authorized Governance Portal • shikashvikwelfare.org.in/admin</p>
          </div>
        </div>

        <div className="admin-user-action">
          <span className="live-status-pill">● System Online & Synced</span>
          <span className="admin-role-badge">Super Admin</span>
          <button onClick={handleLogout} className="admin-logout-btn">
            🚪 Logout
          </button>
        </div>
      </div>

      <div className="admin-main-container">
        {/* STATS TILES */}
        <div className="admin-stats-grid">
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#eff6ff', color: '#1d4ed8' }}>👨‍🎓</div>
            <div>
              <div className="stat-num">{students.length}</div>
              <div className="stat-title">Total Student Admissions</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#f5f3ff', color: '#7c3aed' }}>🏢</div>
            <div>
              <div className="stat-num">{franchises.length}</div>
              <div className="stat-title">Franchise Centers</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#ecfdf5', color: '#047857' }}>📜</div>
            <div>
              <div className="stat-num">
                {students.filter((s) => (s.status || '').toLowerCase().includes('approved') || (s.status || '').toLowerCase().includes('issued')).length}
              </div>
              <div className="stat-title">Certificates Approved</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#fffbeb', color: '#b45309' }}>⏳</div>
            <div>
              <div className="stat-num">
                {students.filter((s) => (s.status || '').toLowerCase().includes('pending')).length}
              </div>
              <div className="stat-title">Pending Verifications</div>
            </div>
          </div>
        </div>

        {/* TABS NAVIGATION */}
        <div className="admin-tabs-nav">
          <button
            className={`admin-tab-btn ${activeTab === 'students' ? 'active' : ''}`}
            onClick={() => setActiveTab('students')}
          >
            👨‍🎓 Student Admissions ({students.length})
          </button>
          <button
            className={`admin-tab-btn ${activeTab === 'franchise' ? 'active' : ''}`}
            onClick={() => setActiveTab('franchise')}
          >
            🏢 Franchise & Affiliations ({franchises.length})
          </button>
          <button
            className={`admin-tab-btn ${activeTab === 'certificates' ? 'active' : ''}`}
            onClick={() => setActiveTab('certificates')}
          >
            📜 Sample Certificates & Marksheets
          </button>
          <button
            className={`admin-tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            ⚙️ Portal Quick Links
          </button>
        </div>

        {/* TAB CONTENT: STUDENTS */}
        {activeTab === 'students' && (
          <div className="admin-section-box">
            <div className="table-header-controls">
              <div className="search-wrap">
                <input
                  type="text"
                  placeholder="🔍 Search student name, mobile, enrollment no, course..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="admin-search-input"
                />
              </div>

              <div className="filter-export-group">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="admin-select"
                >
                  <option value="ALL">All Statuses</option>
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                </select>

                <button onClick={handleExportCSV} className="admin-export-btn">
                  📥 Export to Excel / CSV
                </button>

                <Link to="/student-zone/offline-admission-form" className="admin-add-btn">
                  + Add New Admission
                </Link>
              </div>
            </div>

            <div className="admin-table-responsive">
              <table className="admin-data-table">
                <thead>
                  <tr>
                    <th>Enrollment No</th>
                    <th>Student Name</th>
                    <th>Father's Name</th>
                    <th>Mobile</th>
                    <th>Course</th>
                    <th>Study Center</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.length === 0 ? (
                    <tr>
                      <td colSpan={9} style={{ textAlign: 'center', padding: '30px', color: '#64748b' }}>
                        No admission records found matching your search.
                      </td>
                    </tr>
                  ) : (
                    filteredStudents.map((s, idx) => (
                      <tr key={idx}>
                        <td>
                          <strong style={{ color: '#4b087d' }}>{s.enrollmentNo || s.regNo}</strong>
                          {s.source && <div style={{ fontSize: '10px', color: '#64748b' }}>{s.source}</div>}
                        </td>
                        <td><strong>{s.fullName}</strong></td>
                        <td>{s.fatherName}</td>
                        <td>
                          <a href={`tel:${s.mobile}`} style={{ color: '#0369a1', textDecoration: 'none' }}>
                            📞 {s.mobile}
                          </a>
                        </td>
                        <td>
                          <span className="course-chip">{s.course}</span>
                        </td>
                        <td style={{ fontSize: '11px', maxWidth: '180px' }}>
                          {s.centerCode || 'Etah Central Center'}
                        </td>
                        <td>{s.date}</td>
                        <td>
                          <span
                            className={`status-pill ${
                              (s.status || '').toLowerCase().includes('approved') || (s.status || '').toLowerCase().includes('issued')
                                ? 'status-approved'
                                : 'status-pending'
                            }`}
                          >
                            {s.status || 'Pending'}
                          </span>
                        </td>
                        <td>
                          <div className="action-buttons-cell">
                            <button
                              onClick={() => setSelectedStudent(s)}
                              className="act-btn-view"
                              title="View full details"
                            >
                              👁️ View
                            </button>

                            {!(s.status || '').toLowerCase().includes('approved') && (
                              <button
                                onClick={() => handleApproveStudent(s.enrollmentNo)}
                                className="act-btn-approve"
                                title="Approve admission"
                              >
                                ✓ Approve
                              </button>
                            )}

                            <Link
                              to="/franchise/sample-certificate"
                              className="act-btn-cert"
                              title="View Certificate"
                            >
                              📜 Cert
                            </Link>

                            <Link
                              to="/franchise/sample-marksheet"
                              className="act-btn-mark"
                              title="View Marksheet"
                            >
                              📊 Marks
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB CONTENT: FRANCHISE */}
        {activeTab === 'franchise' && (
          <div className="admin-section-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <h3 style={{ margin: 0, color: '#1e1b4b' }}>Authorized Training Center (ATC) Applications</h3>
                <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: '13px' }}>
                  All center affiliation requests received through the website portal.
                </p>
              </div>

              <Link to="/franchise" className="admin-add-btn">
                + New Center Affiliation Form
              </Link>
            </div>

            <div className="admin-table-responsive">
              <table className="admin-data-table">
                <thead>
                  <tr>
                    <th>Ref No</th>
                    <th>Center / Institute Name</th>
                    <th>Director / Applicant</th>
                    <th>Mobile</th>
                    <th>City / District</th>
                    <th>State</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {franchises.map((f, idx) => (
                    <tr key={idx}>
                      <td><strong>{f.refNo || `SWF-ATC-00${idx + 1}`}</strong></td>
                      <td><strong>{f.centerName || 'Youcca Institute Of Computer Education'}</strong></td>
                      <td>{f.directorName || 'Ankit Shakya'}</td>
                      <td>📞 {f.mobile || '8445020016'}</td>
                      <td>{f.city || f.district || 'Etah'}</td>
                      <td>{f.state || 'Uttar Pradesh'}</td>
                      <td>
                        <span className={`status-pill ${(f.status || '').toLowerCase().includes('approved') ? 'status-approved' : 'status-pending'}`}>
                          {f.status || 'Pending Verification'}
                        </span>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                          {!(f.status || '').toLowerCase().includes('approved') && (
                            <button
                              onClick={() => handleApproveFranchise(f.refNo || '')}
                              className="act-btn-approve"
                              title="Approve Center Affiliation"
                            >
                              ✓ Approve
                            </button>
                          )}
                          <button
                            onClick={() => alert(`Center Details:\nCenter: ${f.centerName}\nDirector: ${f.directorName}\nContact: ${f.mobile}\nAddress: ${f.city}, ${f.district}, ${f.state}\nStatus: ${f.status || 'Pending'}`)}
                            className="act-btn-view"
                          >
                            👁️ View
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB CONTENT: CERTIFICATES & MARKSHEETS MASTER */}
        {activeTab === 'certificates' && (
          <div className="admin-section-box">
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 6px 0', color: '#1e1b4b' }}>
                Authentic Certificate & Statement of Marks Management
              </h3>
              <p style={{ margin: 0, color: '#64748b', fontSize: '13px' }}>
                Issued according to Section 8 Companies Act and National Skill Standards with Golden Crest & QR Verification.
              </p>
            </div>

            <div className="cert-preview-grid">
              <div className="cert-preview-card">
                <div style={{ fontSize: '36px', marginBottom: '8px' }}>📜</div>
                <h4>Official Sample Certificate</h4>
                <p>
                  Serial No: <strong>10139</strong> • Certificate No: <strong>260139</strong><br />
                  Candidate: <strong>Devesh Kumar</strong> S/O Man Pal Singh<br />
                  Course: <strong>Course On Computer Concepts (CCC)</strong><br />
                  Center: <strong>Youcca Institute Of Computer Education, Etah</strong><br />
                  Grade: <strong>Grade A</strong> • Issue Date: <strong>17/07/2026</strong>
                </p>
                <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                  <Link to="/franchise/sample-certificate" className="admin-btn-primary" style={{ padding: '8px 16px', fontSize: '12px' }}>
                    View & Print Certificate ➔
                  </Link>
                  <Link to="/student-zone/verification" className="act-btn-view" style={{ padding: '8px 14px', fontSize: '12px' }}>
                    Online Verification
                  </Link>
                </div>
              </div>

              <div className="cert-preview-card">
                <div style={{ fontSize: '36px', marginBottom: '8px' }}>📊</div>
                <h4>Official Statement of Marks</h4>
                <p>
                  Roll No: <strong>20260150</strong> • Enrollment No: <strong>SWF20260150</strong><br />
                  Candidate: <strong>Devesh Kumar</strong> S/O Man Pal Singh<br />
                  Course: <strong>Course On Computer Concepts (CCC)</strong><br />
                  Grand Total: <strong>618 / 800 (77.0%)</strong><br />
                  Division: <strong>First Division • Grade A • Pass</strong>
                </p>
                <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                  <Link to="/franchise/sample-marksheet" className="admin-btn-primary" style={{ padding: '8px 16px', fontSize: '12px' }}>
                    View & Print Marksheet ➔
                  </Link>
                  <Link to="/student-zone/result" className="act-btn-view" style={{ padding: '8px 14px', fontSize: '12px' }}>
                    Public Result Check
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB CONTENT: SETTINGS & QUICK LINKS */}
        {activeTab === 'settings' && (
          <div className="admin-section-box">
            <h3 style={{ margin: '0 0 16px 0', color: '#1e1b4b' }}>Portal Fast Navigation</h3>
            <div className="quick-links-grid">
              <Link to="/student-zone/offline-admission-form" className="quick-link-box">
                <span className="ql-icon">📄</span>
                <strong>Fillable A4 Offline Admission Form</strong>
                <span>Interactive student form ready to type & print</span>
              </Link>

              <Link to="/student-zone/registration" className="quick-link-box">
                <span className="ql-icon">✍️</span>
                <strong>Direct Online Admission Portal</strong>
                <span>Public online student registration</span>
              </Link>

              <Link to="/franchise" className="quick-link-box">
                <span className="ql-icon">🏢</span>
                <strong>Franchise Affiliation Form</strong>
                <span>New training center application desk</span>
              </Link>

              <Link to="/courses/all" className="quick-link-box">
                <span className="ql-icon">📚</span>
                <strong>All 45+ Courses Directory</strong>
                <span>Course codes, durations, certificate fees</span>
              </Link>

              <Link to="/student-zone/verification" className="quick-link-box">
                <span className="ql-icon">🔍</span>
                <strong>Student Verification Portal</strong>
                <span>Verify student enrollment & authenticity</span>
              </Link>

              <Link to="/student-zone/result" className="quick-link-box">
                <span className="ql-icon">🏆</span>
                <strong>Student Result Check</strong>
                <span>Online mark check with roll number</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* STUDENT DETAIL MODAL */}
      {selectedStudent && (
        <div className="modal-overlay" onClick={() => setSelectedStudent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Student Admission Record #{selectedStudent.enrollmentNo || selectedStudent.regNo}</h3>
              <button onClick={() => setSelectedStudent(null)} className="modal-close-btn">✕</button>
            </div>

            <div className="modal-body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '13.5px' }}>
                <div><strong>Full Name:</strong> {selectedStudent.fullName}</div>
                <div><strong>Father's Name:</strong> {selectedStudent.fatherName}</div>
                <div><strong>Mother's Name:</strong> {selectedStudent.motherName || 'N/A'}</div>
                <div><strong>Date of Birth:</strong> {selectedStudent.dob || 'N/A'}</div>
                <div><strong>Mobile:</strong> {selectedStudent.mobile}</div>
                <div><strong>Email:</strong> {selectedStudent.email || 'N/A'}</div>
                <div><strong>Course:</strong> {selectedStudent.course}</div>
                <div><strong>Course Code:</strong> {selectedStudent.courseCode || 'SWF-IT-005'}</div>
                <div><strong>Center:</strong> {selectedStudent.centerCode || 'Etah'}</div>
                <div><strong>District / State:</strong> {selectedStudent.district || 'Etah'}, {selectedStudent.state || 'UP'}</div>
                <div><strong>Admission Date:</strong> {selectedStudent.date}</div>
                <div><strong>Status:</strong> <span className="status-pill status-approved">{selectedStudent.status}</span></div>
              </div>
            </div>

            <div className="modal-footer">
              <Link to="/franchise/sample-certificate" className="act-btn-cert" style={{ padding: '8px 16px' }}>
                📜 View Certificate
              </Link>
              <Link to="/franchise/sample-marksheet" className="act-btn-mark" style={{ padding: '8px 16px' }}>
                📊 View Marksheet
              </Link>
              <button onClick={() => setSelectedStudent(null)} className="admin-btn-secondary" style={{ padding: '8px 16px', margin: 0 }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

