import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { coursesList } from '../data/coursesData'
import './FranchiseDashboard.css'

interface Student {
  id: string
  rollNo: string
  enrollmentNo: string
  name: string
  fatherName: string
  course: string
  duration: string
  phone: string
  status: 'Approved' | 'Pending'
  feePaid: boolean
  feeAmount: number
  admitCardIssued: boolean
  certificateIssued: boolean
  regDate: string
}

export default function FranchiseDashboard() {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeMenu, setActiveMenu] = useState<string>('dashboard')
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCourse, setFilterCourse] = useState('ALL')
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const [showAddModal, setShowAddModal] = useState(false)

  // Center Affiliation Status
  const [centerStatus] = useState({
    code: 'SALT/UP/046',
    name: 'Youcca Institute Of Computer Education',
    director: 'Ankit Shakya',
    district: 'Etah',
    state: 'Uttar Pradesh',
    status: 'Approved & Affiliated', // Or 'Pending Inspection'
    approvalDate: '23/10/2026',
    isApproved: true,
  })

  // 22 Seeded Students matching the center's real records
  const [students, setStudents] = useState<Student[]>([
    {
      id: 'st-01',
      rollNo: '20260150',
      enrollmentNo: 'SWF20260150',
      name: 'DEVESH KUMAR',
      fatherName: 'MAN PAL SINGH',
      course: 'Course On Computer Concepts (CCC)',
      duration: '3 Months',
      phone: '8445020016',
      status: 'Approved',
      feePaid: true,
      feeAmount: 1500,
      admitCardIssued: true,
      certificateIssued: true,
      regDate: '10/04/2026',
    },
    {
      id: 'st-02',
      rollNo: '20260151',
      enrollmentNo: 'SWF20260151',
      name: 'PRIYA SHARMA',
      fatherName: 'RAMESH SHARMA',
      course: 'ADCA (Advanced Diploma In Computer Application)',
      duration: '1 Year',
      phone: '9837123450',
      status: 'Approved',
      feePaid: true,
      feeAmount: 3500,
      admitCardIssued: true,
      certificateIssued: true,
      regDate: '12/04/2026',
    },
    {
      id: 'st-03',
      rollNo: '20260152',
      enrollmentNo: 'SWF20260152',
      name: 'ROHIT VERMA',
      fatherName: 'DINESH VERMA',
      course: 'DCA (Diploma In Computer Application)',
      duration: '6 Months',
      phone: '8791054321',
      status: 'Approved',
      feePaid: true,
      feeAmount: 2200,
      admitCardIssued: true,
      certificateIssued: true,
      regDate: '14/04/2026',
    },
    {
      id: 'st-04',
      rollNo: '20260153',
      enrollmentNo: 'SWF20260153',
      name: 'POOJA YADAV',
      fatherName: 'SURESH YADAV',
      course: 'Advanced Makeup Course & Cosmetology',
      duration: '6 Months',
      phone: '7500112233',
      status: 'Approved',
      feePaid: true,
      feeAmount: 1200,
      admitCardIssued: true,
      certificateIssued: true,
      regDate: '15/04/2026',
    },
    {
      id: 'st-05',
      rollNo: '20260154',
      enrollmentNo: 'SWF20260154',
      name: 'AMIT KUMAR SHAKYA',
      fatherName: 'VINOD SHAKYA',
      course: 'Tally Prime With GST & Accounting',
      duration: '3 Months',
      phone: '9412987654',
      status: 'Approved',
      feePaid: true,
      feeAmount: 1800,
      admitCardIssued: true,
      certificateIssued: true,
      regDate: '18/04/2026',
    },
    {
      id: 'st-06',
      rollNo: '20260155',
      enrollmentNo: 'SWF20260155',
      name: 'ARTI DEVI',
      fatherName: 'MAHESH PAL',
      course: 'Advance Diploma In Tailoring & Fashion',
      duration: '1 Year',
      phone: '8954332211',
      status: 'Approved',
      feePaid: true,
      feeAmount: 1200,
      admitCardIssued: true,
      certificateIssued: true,
      regDate: '20/04/2026',
    },
    {
      id: 'st-07',
      rollNo: '20260156',
      enrollmentNo: 'SWF20260156',
      name: 'SANJAY SINGH',
      fatherName: 'JITENDRA SINGH',
      course: 'Computer Typing Hindi & English',
      duration: '3 Months',
      phone: '9149234567',
      status: 'Approved',
      feePaid: true,
      feeAmount: 800,
      admitCardIssued: true,
      certificateIssued: true,
      regDate: '22/04/2026',
    },
    {
      id: 'st-08',
      rollNo: '20260157',
      enrollmentNo: 'SWF20260157',
      name: 'NEHA GUPTA',
      fatherName: 'RAJESH GUPTA',
      course: 'Nursery Teacher Training (NTT)',
      duration: '1 Year',
      phone: '8445123890',
      status: 'Approved',
      feePaid: true,
      feeAmount: 4000,
      admitCardIssued: true,
      certificateIssued: true,
      regDate: '24/04/2026',
    },
    {
      id: 'st-09',
      rollNo: '20260158',
      enrollmentNo: 'SWF20260158',
      name: 'VIKAS LODHI',
      fatherName: 'BRAHM SINGH',
      course: 'Electrician & Wireman Trade Diploma',
      duration: '1 Year',
      phone: '9759887766',
      status: 'Approved',
      feePaid: true,
      feeAmount: 3000,
      admitCardIssued: true,
      certificateIssued: true,
      regDate: '25/04/2026',
    },
    {
      id: 'st-10',
      rollNo: '20260159',
      enrollmentNo: 'SWF20260159',
      name: 'KAVITA RATHORE',
      fatherName: 'OM PRAKASH',
      course: 'Diploma In Yoga Teacher Training',
      duration: '1 Year',
      phone: '7906543210',
      status: 'Approved',
      feePaid: true,
      feeAmount: 2500,
      admitCardIssued: true,
      certificateIssued: true,
      regDate: '26/04/2026',
    },
    {
      id: 'st-11',
      rollNo: '20260160',
      enrollmentNo: 'SWF20260160',
      name: 'PANKAJ KASHYAP',
      fatherName: 'SATISH KASHYAP',
      course: 'Web Designing & Full Stack Basics',
      duration: '6 Months',
      phone: '9458112233',
      status: 'Approved',
      feePaid: true,
      feeAmount: 2800,
      admitCardIssued: true,
      certificateIssued: true,
      regDate: '28/04/2026',
    },
    {
      id: 'st-12',
      rollNo: '20260161',
      enrollmentNo: 'SWF20260161',
      name: 'MONIKA SINGH',
      fatherName: 'HARISH SINGH',
      course: 'Course On Computer Concepts (CCC)',
      duration: '3 Months',
      phone: '8865998877',
      status: 'Approved',
      feePaid: true,
      feeAmount: 1500,
      admitCardIssued: true,
      certificateIssued: true,
      regDate: '30/04/2026',
    },
    {
      id: 'st-13',
      rollNo: '20260162',
      enrollmentNo: 'SWF20260162',
      name: 'SUNIL KUMAR',
      fatherName: 'RAM BILAS',
      course: 'Hardware & Networking Technician',
      duration: '6 Months',
      phone: '7088123456',
      status: 'Approved',
      feePaid: true,
      feeAmount: 2000,
      admitCardIssued: true,
      certificateIssued: true,
      regDate: '02/05/2026',
    },
    {
      id: 'st-14',
      rollNo: '20260163',
      enrollmentNo: 'SWF20260163',
      name: 'SHIVANI DIXIT',
      fatherName: 'ANIL DIXIT',
      course: 'ADCA (Advanced Diploma In Computer Application)',
      duration: '1 Year',
      phone: '9837990011',
      status: 'Approved',
      feePaid: true,
      feeAmount: 3500,
      admitCardIssued: true,
      certificateIssued: true,
      regDate: '04/05/2026',
    },
    {
      id: 'st-15',
      rollNo: '20260164',
      enrollmentNo: 'SWF20260164',
      name: 'AJAY CHAUHAN',
      fatherName: 'VIJAY CHAUHAN',
      course: 'CCTV Camera & Security Installation',
      duration: '3 Months',
      phone: '8445778899',
      status: 'Approved',
      feePaid: true,
      feeAmount: 1800,
      admitCardIssued: true,
      certificateIssued: true,
      regDate: '06/05/2026',
    },
    {
      id: 'st-16',
      rollNo: '20260165',
      enrollmentNo: 'SWF20260165',
      name: 'RASHMI VERMA',
      fatherName: 'PREM CHANDRA',
      course: 'Cutting & Tailoring Basic Certificate',
      duration: '3 Months',
      phone: '9634554433',
      status: 'Approved',
      feePaid: true,
      feeAmount: 800,
      admitCardIssued: true,
      certificateIssued: true,
      regDate: '08/05/2026',
    },
    {
      id: 'st-17',
      rollNo: '20260166',
      enrollmentNo: 'SWF20260166',
      name: 'DEEPAK BAGHEL',
      fatherName: 'SUBHASH CHANDRA',
      course: 'DCA (Diploma In Computer Application)',
      duration: '6 Months',
      phone: '7895112244',
      status: 'Approved',
      feePaid: true,
      feeAmount: 2200,
      admitCardIssued: false,
      certificateIssued: false,
      regDate: '10/05/2026',
    },
    {
      id: 'st-18',
      rollNo: '20260167',
      enrollmentNo: 'SWF20260167',
      name: 'ANJALI SHARMA',
      fatherName: 'KRISHNA SHARMA',
      course: 'Beauty Parlour Basic Course',
      duration: '3 Months',
      phone: '8445667788',
      status: 'Approved',
      feePaid: false,
      feeAmount: 1000,
      admitCardIssued: false,
      certificateIssued: false,
      regDate: '12/05/2026',
    },
    {
      id: 'st-19',
      rollNo: '20260168',
      enrollmentNo: 'SWF20260168',
      name: 'MANOJ KUSHWAHA',
      fatherName: 'DHARMENDRA KUSHWAHA',
      course: 'Solar Technician & Panel Setup',
      duration: '6 Months',
      phone: '9557889900',
      status: 'Approved',
      feePaid: false,
      feeAmount: 2500,
      admitCardIssued: false,
      certificateIssued: false,
      regDate: '15/05/2026',
    },
    {
      id: 'st-20',
      rollNo: '20260169',
      enrollmentNo: 'SWF20260169',
      name: 'SIMRAN KAUR',
      fatherName: 'GURMEET SINGH',
      course: 'Stenography & Office Executive',
      duration: '6 Months',
      phone: '9897112233',
      status: 'Approved',
      feePaid: false,
      feeAmount: 1800,
      admitCardIssued: false,
      certificateIssued: false,
      regDate: '18/05/2026',
    },
    {
      id: 'st-21',
      rollNo: '20260170',
      enrollmentNo: 'SWF20260170',
      name: 'KULDEEP YADAV',
      fatherName: 'NETRAPAL YADAV',
      course: 'Course On Computer Concepts (CCC)',
      duration: '3 Months',
      phone: '8126778899',
      status: 'Pending',
      feePaid: false,
      feeAmount: 1500,
      admitCardIssued: false,
      certificateIssued: false,
      regDate: '20/05/2026',
    },
    {
      id: 'st-22',
      rollNo: '20260171',
      enrollmentNo: 'SWF20260171',
      name: 'REENA SHAKYA',
      fatherName: 'SANTOSH SHAKYA',
      course: 'Bridal Artistry & Cosmetology',
      duration: '6 Months',
      phone: '7505667788',
      status: 'Pending',
      feePaid: false,
      feeAmount: 1200,
      admitCardIssued: false,
      certificateIssued: false,
      regDate: '22/05/2026',
    },
  ])

  // New Student Modal Form State
  const [newStudent, setNewStudent] = useState({
    name: '',
    fatherName: '',
    course: 'Course On Computer Concepts (CCC)',
    duration: '3 Months',
    phone: '',
    feeAmount: 1500,
  })

  // Synchronize new admissions from localStorage if any
  useEffect(() => {
    try {
      const storedAdmissions = JSON.parse(localStorage.getItem('swf_admissions') || '[]')
      if (storedAdmissions.length > 0) {
        const mapped = storedAdmissions.map((s: any, i: number) => ({
          id: `local-${i}`,
          rollNo: s.rollNo || s.regNo || `2026018${i}`,
          enrollmentNo: s.enrollmentNo || s.regNo || `SWF2026018${i}`,
          name: (s.fullName || 'New Candidate').toUpperCase(),
          fatherName: (s.fatherName || 'Parent Name').toUpperCase(),
          course: s.course || 'Vocational Training',
          duration: s.duration || '6 Months',
          phone: s.mobile || '8445020016',
          status: (s.status?.toLowerCase().includes('approved') ? 'Approved' : 'Pending') as 'Approved' | 'Pending',
          feePaid: true,
          feeAmount: 1500,
          admitCardIssued: true,
          certificateIssued: false,
          regDate: s.date || 'Today',
        }))

        const existingRolls = new Set(students.map((st) => st.rollNo))
        const novel = mapped.filter((st: Student) => !existingRolls.has(st.rollNo))
        if (novel.length > 0) {
          setStudents((prev) => [...novel, ...prev])
        }
      }
    } catch (err) {
      console.error(err)
    }
  }, [])

  // KPI Metrics
  const registeredCount = students.length // 22+
  const pendingCount = students.filter((s) => s.status === 'Pending').length // 2+
  const approvedCount = students.filter((s) => s.status === 'Approved').length // 20+
  const paidCount = students.filter((s) => s.feePaid).length // 17+
  const admitCardsCount = students.filter((s) => s.admitCardIssued).length // 16+
  const certificatesCount = students.filter((s) => s.certificateIssued).length // 16+
  const certificateFees = 5150 // 5150+
  const lateFees = 0 // 0+

  // Filter students based on activeMenu & search
  const filteredStudents = students.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.rollNo.includes(searchQuery) ||
      s.phone.includes(searchQuery) ||
      s.course.toLowerCase().includes(searchQuery.toLowerCase())

    const matchCourse = filterCourse === 'ALL' || s.course === filterCourse

    if (activeMenu === 'pending' || activeMenu === 'unapproved') {
      return matchSearch && matchCourse && s.status === 'Pending'
    }
    if (activeMenu === 'approved') {
      return matchSearch && matchCourse && s.status === 'Approved'
    }
    if (activeMenu === 'paid') {
      return matchSearch && matchCourse && s.feePaid
    }
    if (activeMenu === 'admit_cards') {
      return matchSearch && matchCourse && s.admitCardIssued
    }
    if (activeMenu === 'certificates') {
      return matchSearch && matchCourse && s.certificateIssued
    }

    return matchSearch && matchCourse
  })

  const handleApprove = (id: string) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: 'Approved', admitCardIssued: true } : s))
    )
  }

  const handleToggleFee = (id: string) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, feePaid: !s.feePaid } : s))
    )
  }

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newStudent.name || !newStudent.phone) return
    const newId = `st-${Date.now()}`
    const randomRoll = String(20260200 + Math.floor(Math.random() * 800))
    const item: Student = {
      id: newId,
      rollNo: randomRoll,
      enrollmentNo: `SWF${randomRoll}`,
      name: newStudent.name.toUpperCase(),
      fatherName: newStudent.fatherName.toUpperCase(),
      course: newStudent.course,
      duration: newStudent.duration,
      phone: newStudent.phone,
      status: 'Approved',
      feePaid: true,
      feeAmount: Number(newStudent.feeAmount) || 1500,
      admitCardIssued: true,
      certificateIssued: false,
      regDate: new Date().toLocaleDateString('en-GB'),
    }
    setStudents([item, ...students])
    setShowAddModal(false)
    setNewStudent({
      name: '',
      fatherName: '',
      course: 'Course On Computer Concepts (CCC)',
      duration: '3 Months',
      phone: '',
      feeAmount: 1500,
    })
  }

  return (
    <div className={`pro-dash-wrapper ${sidebarOpen ? '' : 'sidebar-collapsed'}`}>
      {/* ------------------------------------------------------------------ */}
      {/* 1. PROFESSIONAL EXECUTIVE SIDEBAR                                 */}
      {/* ------------------------------------------------------------------ */}
      <aside className="pro-sidebar">
        {/* BRAND & DIRECTOR PROFILE */}
        <div className="pro-sidebar-brand">
          <div className="pro-brand-avatar">
            <span className="pro-brand-icon">🎓</span>
          </div>
          <div className="pro-brand-text">
            <h3>{centerStatus.director}</h3>
            <span className="pro-brand-center">Center Director</span>
          </div>
        </div>

        {/* CENTER VERIFICATION BADGE */}
        <div className="pro-center-status-badge">
          <div className="pro-cs-dot"></div>
          <div className="pro-cs-info">
            <strong>{centerStatus.code}</strong>
            <small>Active Authorized Center</small>
          </div>
        </div>

        {/* SIDEBAR NAVIGATION */}
        <nav className="pro-nav-menu">
          <div className="pro-menu-category">MAIN DESK</div>
          <ul>
            <li className={activeMenu === 'dashboard' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('dashboard')}>
                <span className="p-icon">📊</span>
                <span className="p-title">Overview Dashboard</span>
              </button>
            </li>
            <li className={activeMenu === 'students' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('students')}>
                <span className="p-icon">👥</span>
                <span className="p-title">Students Management</span>
                <span className="p-count">{registeredCount}</span>
              </button>
            </li>
            <li className={activeMenu === 'pending' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('pending')}>
                <span className="p-icon">⏳</span>
                <span className="p-title">Pending Students</span>
                <span className="p-count p-count-warn">{pendingCount}</span>
              </button>
            </li>
            <li className={activeMenu === 'approved' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('approved')}>
                <span className="p-icon">✓</span>
                <span className="p-title">Approved Students</span>
                <span className="p-count p-count-success">{approvedCount}</span>
              </button>
            </li>
          </ul>

          <div className="pro-menu-category">EXAMINATION & CERTIFICATION</div>
          <ul>
            <li className={activeMenu === 'admit_cards' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('admit_cards')}>
                <span className="p-icon">🪪</span>
                <span className="p-title">Exam Admit Cards</span>
                <span className="p-count">{admitCardsCount}</span>
              </button>
            </li>
            <li className={activeMenu === 'certificates' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('certificates')}>
                <span className="p-icon">📜</span>
                <span className="p-title">Certificate & Marksheets</span>
                <span className="p-count">{certificatesCount}</span>
              </button>
            </li>
            {/* ONLY FOR CENTERS: CONFIDENTIAL CERTIFICATE FEE LEDGER */}
            <li className={activeMenu === 'cert_fee_schedule' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('cert_fee_schedule')}>
                <span className="p-icon">💰</span>
                <span className="p-title">Center Cert. Fees</span>
                <span className="p-badge-secret">Center Only</span>
              </button>
            </li>
          </ul>

          <div className="pro-menu-category">FINANCE & ACADEMICS</div>
          <ul>
            <li className={activeMenu === 'paid' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('paid')}>
                <span className="p-icon">💵</span>
                <span className="p-title">Paid Students Ledger</span>
                <span className="p-count">{paidCount}</span>
              </button>
            </li>
            <li className={activeMenu === 'internship' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('internship')}>
                <span className="p-icon">📑</span>
                <span className="p-title">Internship Portal</span>
                <span className="p-badge-new">NEW</span>
              </button>
            </li>
            <li className={activeMenu === 'online_class' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('online_class')}>
                <span className="p-icon">📹</span>
                <span className="p-title">Digital Classes</span>
              </button>
            </li>
            <li className={activeMenu === 'staff' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('staff')}>
                <span className="p-icon">👔</span>
                <span className="p-title">Faculty & Staff</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* LOGOUT & SUPPORT FOOTER */}
        <div className="pro-sidebar-footer">
          <button onClick={() => navigate('/login/franchise')} className="pro-logout-btn">
            <span>🚪</span> Sign Out Portal
          </button>
        </div>
      </aside>

      {/* ------------------------------------------------------------------ */}
      {/* 2. MAIN EXECUTIVE WORKSPACE                                       */}
      {/* ------------------------------------------------------------------ */}
      <div className="pro-main-area">
        {/* TOP EXECUTIVE BAR */}
        <header className="pro-top-nav">
          <div className="pro-nav-left">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="pro-toggle-btn" title="Toggle Navigation">
              ☰
            </button>
            <div className="pro-header-meta">
              <h2>{centerStatus.name}</h2>
              <div className="pro-crumbs">
                <span>Authorized Study Center</span> • <span style={{ color: '#0284c7', fontWeight: 'bold' }}>{centerStatus.code}</span> • <span>Etah, Uttar Pradesh</span>
              </div>
            </div>
          </div>

          <div className="pro-nav-right">
            <Link to="/student-zone/offline-admission-form" className="pro-btn-secondary" title="Fill & Print A4 Admission Form">
              📄 A4 Admission Form
            </Link>

            <button onClick={() => setShowAddModal(true)} className="pro-btn-primary">
              + Direct Admission
            </button>

            <Link to="/" className="pro-btn-ghost" title="Open Main Website">
              🌐 Website
            </Link>
          </div>
        </header>

        {/* MAIN BODY CONTENT */}
        <main className="pro-content-body">
          {/* CENTER VERIFICATION ALERT BANNER */}
          <div className="pro-verification-strip">
            <div className="pro-vs-content">
              <span className="pro-vs-icon">🏛️</span>
              <div>
                <strong>Official Center Affiliation Active • Verified with MCA & Govt. Skill Registry</strong>
                <p>
                  Center Code <code>{centerStatus.code}</code> registered under Shikashvik Welfare Foundation (Etah, UP). 
                  Student registrations and exams conducted through this portal are eligible for government-valid certifications.
                </p>
              </div>
            </div>
            <span className="pro-verified-pill">✓ Affiliation Approved</span>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* 8 EXECUTIVE KPI METRIC CARDS (HIGH-END MODERN SAAS DESIGN)       */}
          {/* ---------------------------------------------------------------- */}
          <div className="pro-kpi-grid">
            {/* 1. REGISTERED STUDENTS */}
            <div className="pro-kpi-card pro-kpi-cyan" onClick={() => setActiveMenu('students')}>
              <div className="pro-kpi-header">
                <span className="pro-kpi-label">Registered Students</span>
                <span className="pro-kpi-icon-wrap">👥</span>
              </div>
              <div className="pro-kpi-metric">{registeredCount} <span className="pro-kpi-plus">+</span></div>
              <div className="pro-kpi-footer">
                <span className="pro-kpi-trend">● 100% Active</span>
                <span className="pro-kpi-link">View List ➔</span>
              </div>
            </div>

            {/* 2. UNAPPROVED / PENDING */}
            <div className="pro-kpi-card pro-kpi-amber" onClick={() => setActiveMenu('pending')}>
              <div className="pro-kpi-header">
                <span className="pro-kpi-label">Pending Verifications</span>
                <span className="pro-kpi-icon-wrap">⏳</span>
              </div>
              <div className="pro-kpi-metric">{pendingCount} <span className="pro-kpi-plus">+</span></div>
              <div className="pro-kpi-footer">
                <span className="pro-kpi-trend" style={{ color: '#b45309' }}>Action Required</span>
                <span className="pro-kpi-link">Review Now ➔</span>
              </div>
            </div>

            {/* 3. APPROVED STUDENTS */}
            <div className="pro-kpi-card pro-kpi-green" onClick={() => setActiveMenu('approved')}>
              <div className="pro-kpi-header">
                <span className="pro-kpi-label">Approved Students</span>
                <span className="pro-kpi-icon-wrap">✓</span>
              </div>
              <div className="pro-kpi-metric">{approvedCount} <span className="pro-kpi-plus">+</span></div>
              <div className="pro-kpi-footer">
                <span className="pro-kpi-trend">Enrolled & Validated</span>
                <span className="pro-kpi-link">Manage ➔</span>
              </div>
            </div>

            {/* 4. PAID STUDENTS */}
            <div className="pro-kpi-card pro-kpi-rose" onClick={() => setActiveMenu('paid')}>
              <div className="pro-kpi-header">
                <span className="pro-kpi-label">Paid Students</span>
                <span className="pro-kpi-icon-wrap">💳</span>
              </div>
              <div className="pro-kpi-metric">{paidCount} <span className="pro-kpi-plus">+</span></div>
              <div className="pro-kpi-footer">
                <span className="pro-kpi-trend">Fees Received</span>
                <span className="pro-kpi-link">Ledger ➔</span>
              </div>
            </div>

            {/* 5. TOTAL ADMIT CARDS */}
            <div className="pro-kpi-card pro-kpi-blue" onClick={() => setActiveMenu('admit_cards')}>
              <div className="pro-kpi-header">
                <span className="pro-kpi-label">Exam Admit Cards</span>
                <span className="pro-kpi-icon-wrap">🪪</span>
              </div>
              <div className="pro-kpi-metric">{admitCardsCount} <span className="pro-kpi-plus">+</span></div>
              <div className="pro-kpi-footer">
                <span className="pro-kpi-trend">Hall Tickets Ready</span>
                <span className="pro-kpi-link">Download ➔</span>
              </div>
            </div>

            {/* 6. TOTAL CERTIFICATES */}
            <div className="pro-kpi-card pro-kpi-red" onClick={() => setActiveMenu('certificates')}>
              <div className="pro-kpi-header">
                <span className="pro-kpi-label">Total Certificates</span>
                <span className="pro-kpi-icon-wrap">📜</span>
              </div>
              <div className="pro-kpi-metric">{certificatesCount} <span className="pro-kpi-plus">+</span></div>
              <div className="pro-kpi-footer">
                <span className="pro-kpi-trend">Issued & Verified</span>
                <span className="pro-kpi-link">Preview ➔</span>
              </div>
            </div>

            {/* 7. CERTIFICATE FEES (ONLY FOR CENTERS) */}
            <div className="pro-kpi-card pro-kpi-purple" onClick={() => setActiveMenu('cert_fee_schedule')}>
              <div className="pro-kpi-header">
                <span className="pro-kpi-label">Certificate Fee Ledger</span>
                <span className="pro-kpi-icon-wrap">💰</span>
              </div>
              <div className="pro-kpi-metric">₹{certificateFees.toLocaleString('en-IN')} <span className="pro-kpi-plus">+</span></div>
              <div className="pro-kpi-footer">
                <span className="pro-kpi-trend">Center Fee Rates</span>
                <span className="pro-kpi-link">Fee Schedule ➔</span>
              </div>
            </div>

            {/* 8. LATE FEES */}
            <div className="pro-kpi-card pro-kpi-teal" onClick={() => setActiveMenu('students')}>
              <div className="pro-kpi-header">
                <span className="pro-kpi-label">Late Fees / Dues</span>
                <span className="pro-kpi-icon-wrap">🛡️</span>
              </div>
              <div className="pro-kpi-metric">₹{lateFees} <span className="pro-kpi-plus">+</span></div>
              <div className="pro-kpi-footer">
                <span className="pro-kpi-trend">Zero Penalties</span>
                <span className="pro-kpi-link">Details ➔</span>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* TAB: CONFIDENTIAL CENTER CERTIFICATE FEE SCHEDULE (CENTER ONLY)   */}
          {/* ---------------------------------------------------------------- */}
          {activeMenu === 'cert_fee_schedule' ? (
            <div className="pro-card-panel">
              <div className="pro-panel-header">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span className="pro-badge-confidential">🔒 Confidential Center Rates</span>
                    <span className="pro-badge-active">Head Office Approved</span>
                  </div>
                  <h3>Authorized Center Certificate Fee Schedule</h3>
                  <p>
                    <strong>Confidential Notice:</strong> These certificate fees are examination & certification charges 
                    applicable strictly to authorized training centers and are <u>NOT displayed</u> to public students on the general website.
                  </p>
                </div>
              </div>

              <div className="pro-table-wrapper">
                <table className="pro-table">
                  <thead>
                    <tr>
                      <th>Course Code</th>
                      <th>Course Title</th>
                      <th>Category</th>
                      <th>Duration</th>
                      <th>Center Certificate Fee</th>
                      <th>Student Course Fee</th>
                      <th>Center Share / Margin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coursesList.slice(0, 15).map((c) => (
                      <tr key={c.id}>
                        <td><code>{c.code}</code></td>
                        <td><strong>{c.name}</strong></td>
                        <td><span className="pro-tag">{c.category}</span></td>
                        <td>{c.duration}</td>
                        <td>
                          <strong style={{ color: '#0284c7', fontSize: '14px' }}>
                            ₹{c.certificateFee}
                          </strong>
                        </td>
                        <td>₹{c.courseFee.toLocaleString('en-IN')}</td>
                        <td>
                          <span style={{ color: '#059669', fontWeight: 'bold' }}>
                            ₹{(c.courseFee - c.certificateFee).toLocaleString('en-IN')}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* ---------------------------------------------------------------- */
            /* DEFAULT TAB: STUDENTS MANAGEMENT TABLE                            */
            /* ---------------------------------------------------------------- */
            <div className="pro-card-panel">
              <div className="pro-panel-header">
                <div>
                  <h3>
                    {activeMenu === 'dashboard' && 'Center Student Enrolment Registry'}
                    {activeMenu === 'students' && 'All Enrolled Students Registry'}
                    {activeMenu === 'pending' && 'Pending Candidate Approvals'}
                    {activeMenu === 'approved' && 'Verified & Approved Candidates'}
                    {activeMenu === 'paid' && 'Fee Paid Students Register'}
                    {activeMenu === 'admit_cards' && 'Examination Admit Card Generator'}
                    {activeMenu === 'certificates' && 'Official Issued Certificates & Marksheets'}
                    {activeMenu === 'internship' && 'Skill Internship Enrollments'}
                    {activeMenu === 'online_class' && 'Digital Class & Live Session Schedule'}
                    {activeMenu === 'staff' && 'Faculty & Institute Staff Directory'}
                  </h3>
                  <p>
                    Showing <strong>{filteredStudents.length}</strong> of <strong>{students.length}</strong> total registered records for Center Code: <code>{centerStatus.code}</code>
                  </p>
                </div>

                <div className="pro-panel-controls">
                  <input
                    type="text"
                    placeholder="🔍 Search name, roll, mobile, course..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pro-search-field"
                  />

                  <select
                    value={filterCourse}
                    onChange={(e) => setFilterCourse(e.target.value)}
                    className="pro-select-field"
                  >
                    <option value="ALL">All Course Streams</option>
                    <option value="Course On Computer Concepts (CCC)">CCC (3 Months)</option>
                    <option value="ADCA (Advanced Diploma In Computer Application)">ADCA (1 Year)</option>
                    <option value="DCA (Diploma In Computer Application)">DCA (6 Months)</option>
                    <option value="Tally Prime With GST & Accounting">Tally Prime (3 Months)</option>
                    <option value="Advanced Makeup Course & Cosmetology">Advanced Makeup</option>
                  </select>

                  <button onClick={() => setShowAddModal(true)} className="pro-btn-primary">
                    + Enroll Student
                  </button>
                </div>
              </div>

              {/* TABLE */}
              <div className="pro-table-wrapper">
                <table className="pro-table">
                  <thead>
                    <tr>
                      <th>Roll Number</th>
                      <th>Enrollment No</th>
                      <th>Candidate Name</th>
                      <th>Father's Name</th>
                      <th>Course Stream</th>
                      <th>Mobile</th>
                      <th>Status</th>
                      <th>Fee Status</th>
                      <th style={{ textAlign: 'center' }}>Official Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.length === 0 ? (
                      <tr>
                        <td colSpan={9} style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
                          No student records found in this category.
                        </td>
                      </tr>
                    ) : (
                      filteredStudents.map((st) => (
                        <tr key={st.id}>
                          <td>
                            <strong style={{ color: '#1e40af' }}>{st.rollNo}</strong>
                          </td>
                          <td>
                            <code>{st.enrollmentNo}</code>
                          </td>
                          <td>
                            <div className="pro-cand-cell">
                              <span className="pro-cand-avatar">{st.name.charAt(0)}</span>
                              <div>
                                <strong>{st.name}</strong>
                                <small>Reg: {st.regDate}</small>
                              </div>
                            </div>
                          </td>
                          <td>{st.fatherName}</td>
                          <td>
                            <span className="pro-course-pill">{st.course}</span>
                            <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                              Duration: {st.duration}
                            </div>
                          </td>
                          <td>
                            <a href={`tel:${st.phone}`} className="pro-tel-link">
                              📞 {st.phone}
                            </a>
                          </td>
                          <td>
                            <span className={`pro-status-badge ${st.status === 'Approved' ? 'badge-approved' : 'badge-pending'}`}>
                              {st.status === 'Approved' ? '✓ Approved' : '⏳ Pending'}
                            </span>
                          </td>
                          <td>
                            <button
                              onClick={() => handleToggleFee(st.id)}
                              className={`pro-fee-pill ${st.feePaid ? 'fee-paid' : 'fee-due'}`}
                              title="Click to toggle payment state"
                            >
                              {st.feePaid ? '✓ Paid (₹' + st.feeAmount + ')' : '⏳ Due'}
                            </button>
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <div className="pro-actions-cluster">
                              <button
                                onClick={() => setSelectedStudent(st)}
                                className="pro-act-view"
                                title="View Candidate Profile"
                              >
                                👁️ View
                              </button>

                              {st.status === 'Pending' && (
                                <button
                                  onClick={() => handleApprove(st.id)}
                                  className="pro-act-approve"
                                  title="Approve Candidate"
                                >
                                  ✓ Approve
                                </button>
                              )}

                              <Link
                                to="/franchise/sample-certificate"
                                className="pro-act-cert"
                                title="Official Certificate"
                              >
                                📜 Cert
                              </Link>

                              <Link
                                to="/franchise/sample-marksheet"
                                className="pro-act-mark"
                                title="Statement of Marks"
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

              {/* FOOTER */}
              <div className="pro-panel-footer">
                <div>
                  Center Verification: <strong>Youcca Institute Of Computer Education (SALT/UP/046)</strong>
                </div>
                <div>
                  Head Office Directorate Contact: <strong>+91-8445020016</strong> • Etah (UP)
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 3. STUDENT PROFILE MODAL                                          */}
      {/* ------------------------------------------------------------------ */}
      {selectedStudent && (
        <div className="pro-modal-backdrop" onClick={() => setSelectedStudent(null)}>
          <div className="pro-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="pro-modal-head">
              <h3>Candidate Academic Dossier • {selectedStudent.enrollmentNo}</h3>
              <button onClick={() => setSelectedStudent(null)} className="pro-modal-close">✕</button>
            </div>
            <div className="pro-modal-body">
              <div className="pro-dossier-grid">
                <div><span>Full Name:</span> <strong>{selectedStudent.name}</strong></div>
                <div><span>Father's Name:</span> <strong>{selectedStudent.fatherName}</strong></div>
                <div><span>Roll Number:</span> <strong>{selectedStudent.rollNo}</strong></div>
                <div><span>Enrollment ID:</span> <strong>{selectedStudent.enrollmentNo}</strong></div>
                <div><span>Course Stream:</span> <strong>{selectedStudent.course}</strong></div>
                <div><span>Course Duration:</span> <strong>{selectedStudent.duration}</strong></div>
                <div><span>Contact Mobile:</span> <strong>{selectedStudent.phone}</strong></div>
                <div><span>Registration Date:</span> <strong>{selectedStudent.regDate}</strong></div>
                <div><span>Study Center:</span> <strong>Youcca Institute Of Education, Etah</strong></div>
                <div>
                  <span>Status:</span>{' '}
                  <strong style={{ color: selectedStudent.status === 'Approved' ? '#059669' : '#b45309' }}>
                    {selectedStudent.status}
                  </strong>
                </div>
              </div>
            </div>
            <div className="pro-modal-foot">
              <Link to="/franchise/sample-certificate" className="pro-btn-primary" style={{ padding: '8px 18px', fontSize: '13px' }}>
                📜 View Certificate
              </Link>
              <Link to="/franchise/sample-marksheet" className="pro-btn-secondary" style={{ padding: '8px 18px', fontSize: '13px' }}>
                📊 View Marksheet
              </Link>
              <button onClick={() => setSelectedStudent(null)} className="pro-btn-ghost" style={{ padding: '8px 18px', fontSize: '13px' }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* 4. ADD NEW STUDENT MODAL                                          */}
      {/* ------------------------------------------------------------------ */}
      {showAddModal && (
        <div className="pro-modal-backdrop" onClick={() => setShowAddModal(false)}>
          <div className="pro-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="pro-modal-head" style={{ background: '#1e3a8a' }}>
              <h3>+ Direct Center Student Registration</h3>
              <button onClick={() => setShowAddModal(false)} className="pro-modal-close">✕</button>
            </div>
            <form onSubmit={handleAddStudent}>
              <div className="pro-modal-body">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div className="pro-f-group">
                    <label>Candidate Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. AMIT SHARMA"
                      value={newStudent.name}
                      onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                    />
                  </div>
                  <div className="pro-f-group">
                    <label>Father's Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. SURESH SHARMA"
                      value={newStudent.fatherName}
                      onChange={(e) => setNewStudent({ ...newStudent, fatherName: e.target.value })}
                    />
                  </div>
                  <div className="pro-f-group">
                    <label>Course Program</label>
                    <select
                      value={newStudent.course}
                      onChange={(e) => setNewStudent({ ...newStudent, course: e.target.value })}
                    >
                      <option value="Course On Computer Concepts (CCC)">CCC (3 Months)</option>
                      <option value="ADCA (Advanced Diploma In Computer Application)">ADCA (1 Year)</option>
                      <option value="DCA (Diploma In Computer Application)">DCA (6 Months)</option>
                      <option value="Tally Prime With GST & Accounting">Tally Prime (3 Months)</option>
                      <option value="Advanced Makeup Course & Cosmetology">Advanced Makeup (6 Months)</option>
                      <option value="Advance Diploma In Tailoring & Fashion">Tailoring Diploma (1 Year)</option>
                      <option value="Electrician & Wireman Trade Diploma">Electrician Trade (1 Year)</option>
                      <option value="Diploma In Yoga Teacher Training">Yoga Diploma (1 Year)</option>
                    </select>
                  </div>
                  <div className="pro-f-group">
                    <label>Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={newStudent.phone}
                      onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="pro-modal-foot">
                <button type="submit" className="pro-btn-primary">
                  ✓ Register & Save Candidate
                </button>
                <button type="button" onClick={() => setShowAddModal(false)} className="pro-btn-ghost">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
