import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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

  // Seed 22 students matching the user's screenshot (22 Registered, 20 Approved, 2 Pending, 17 Paid, 16 Admit Cards, 16 Certificates)
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

  // New Student Form State
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
        // Integrate additional submitted students
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

        // Prevent duplicate IDs
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

  // Calculate Stat Metrics matching screenshot
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

  // Approve a pending student
  const handleApprove = (id: string) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: 'Approved', admitCardIssued: true } : s))
    )
  }

  // Toggle Fee
  const handleToggleFee = (id: string) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, feePaid: !s.feePaid } : s))
    )
  }

  // Add new student
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

  const handleLogout = () => {
    navigate('/login/franchise')
  }

  return (
    <div className={`fd-dashboard-wrapper ${sidebarOpen ? '' : 'sidebar-collapsed'}`}>
      {/* ------------------------------------------------------------------ */}
      {/* 1. LEFT SIDEBAR                                                   */}
      {/* ------------------------------------------------------------------ */}
      <aside className="fd-sidebar">
        {/* SIDEBAR HEADER / USER PANEL */}
        <div className="fd-user-panel">
          <div className="fd-user-avatar">
            <span className="fd-avatar-icon">💻</span>
          </div>
          <div className="fd-user-info">
            <div className="fd-user-name">Ankit Shakya</div>
            <button onClick={handleLogout} className="fd-logout-link">
              Logout
            </button>
          </div>
        </div>

        {/* SIDEBAR MENU */}
        <nav className="fd-sidebar-menu">
          <ul>
            <li className={activeMenu === 'dashboard' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('dashboard')}>
                <span className="fd-menu-icon">⏲</span>
                <span className="fd-menu-text">Dashboard</span>
              </button>
            </li>

            <li className={activeMenu === 'students' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('students')}>
                <span className="fd-menu-icon">👤</span>
                <span className="fd-menu-text">Students Managements</span>
              </button>
            </li>

            <li className={activeMenu === 'pending' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('pending')}>
                <span className="fd-menu-icon">📝</span>
                <span className="fd-menu-text">Pending Students</span>
                <span className="fd-badge fd-badge-warning">{pendingCount}</span>
              </button>
            </li>

            <li className={activeMenu === 'approved' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('approved')}>
                <span className="fd-menu-icon">👥</span>
                <span className="fd-menu-text">Approved Students</span>
                <span className="fd-badge fd-badge-success">{approvedCount}</span>
              </button>
            </li>

            <li className={activeMenu === 'internship' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('internship')}>
                <span className="fd-menu-icon">📑</span>
                <span className="fd-menu-text">Internship</span>
                <span className="fd-badge fd-badge-new">NEW</span>
              </button>
            </li>

            <li className={activeMenu === 'online_class' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('online_class')}>
                <span className="fd-menu-icon">📹</span>
                <span className="fd-menu-text">Online Class</span>
              </button>
            </li>

            <li className={activeMenu === 'assign_fee' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('assign_fee')}>
                <span className="fd-menu-icon">😊</span>
                <span className="fd-menu-text">Assign Student Fee</span>
              </button>
            </li>

            <li className={activeMenu === 'manage_fee' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('manage_fee')}>
                <span className="fd-menu-icon">🗂</span>
                <span className="fd-menu-text">Manage Student Fee</span>
              </button>
            </li>

            <li className={activeMenu === 'paid' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('paid')}>
                <span className="fd-menu-icon">💵</span>
                <span className="fd-menu-text">Paid Students</span>
              </button>
            </li>

            <li className={activeMenu === 'admit_cards' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('admit_cards')}>
                <span className="fd-menu-icon">👤</span>
                <span className="fd-menu-text">Admit Cards</span>
              </button>
            </li>

            <li className={activeMenu === 'certificates' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('certificates')}>
                <span className="fd-menu-icon">📜</span>
                <span className="fd-menu-text">Certificate & Marksheets</span>
              </button>
            </li>

            <li className={activeMenu === 'latest_cert' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('latest_cert')}>
                <span className="fd-menu-icon">📄</span>
                <span className="fd-menu-text">Latest Certificate & Mark</span>
              </button>
            </li>

            <li className={activeMenu === 'online_meeting' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('online_meeting')}>
                <span className="fd-menu-icon">🎥</span>
                <span className="fd-menu-text">Online Meeting</span>
              </button>
            </li>

            <li className={activeMenu === 'commission' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('commission')}>
                <span className="fd-menu-icon">💼</span>
                <span className="fd-menu-text">Commission Management</span>
              </button>
            </li>

            <li className={activeMenu === 'staff' ? 'active' : ''}>
              <button onClick={() => setActiveMenu('staff')}>
                <span className="fd-menu-icon">👔</span>
                <span className="fd-menu-text">Staff Managements</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* ------------------------------------------------------------------ */}
      {/* 2. MAIN VIEW AREA                                                 */}
      {/* ------------------------------------------------------------------ */}
      <div className="fd-main-wrapper">
        {/* TOP NAVBAR */}
        <header className="fd-header-nav">
          <div className="fd-nav-left">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="fd-toggle-btn"
              title="Toggle Sidebar"
            >
              ☰
            </button>
            <span className="fd-nav-title">Dashboard</span>
          </div>

          <div className="fd-nav-right">
            <div className="fd-breadcrumb">
              <Link to="/franchise/dashboard" style={{ color: '#007bff', textDecoration: 'none' }}>
                Dashboard
              </Link>{' '}
              / <span>Dashboard</span>
            </div>

            <button className="fd-camera-btn" title="Capture Snapshot" onClick={() => window.print()}>
              📷
            </button>

            <Link to="/" className="fd-home-back-btn" title="View Public Portal">
              🌐 Website
            </Link>
          </div>
        </header>

        {/* DASHBOARD CONTENT BODY */}
        <main className="fd-content">
          <div className="fd-content-header">
            <h1>Dashboard</h1>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* 8 BIG STAT TILES (MATCHING USER'S SCREENSHOT EXACTLY)             */}
          {/* ---------------------------------------------------------------- */}
          <div className="fd-stat-grid">
            {/* 1. REGISTERED STUDENTS (CYAN) */}
            <div className="fd-card fd-card-cyan">
              <div className="fd-card-inner">
                <div className="fd-card-number">{registeredCount} +</div>
                <div className="fd-card-label">Registered Students</div>
              </div>
              <div className="fd-card-icon">👤</div>
              <button
                onClick={() => setActiveMenu('students')}
                className="fd-card-footer"
              >
                More info <span className="fd-arrow-circle">➔</span>
              </button>
            </div>

            {/* 2. UNAPPROVED / PENDING (YELLOW/AMBER) */}
            <div className="fd-card fd-card-amber">
              <div className="fd-card-inner">
                <div className="fd-card-number">{pendingCount} +</div>
                <div className="fd-card-label">Unapproved/Pending Students</div>
              </div>
              <div className="fd-card-icon">🕒</div>
              <button
                onClick={() => setActiveMenu('pending')}
                className="fd-card-footer"
              >
                More info <span className="fd-arrow-circle">➔</span>
              </button>
            </div>

            {/* 3. APPROVED STUDENTS (GREEN) */}
            <div className="fd-card fd-card-green">
              <div className="fd-card-inner">
                <div className="fd-card-number">{approvedCount} +</div>
                <div className="fd-card-label">Approved Students</div>
              </div>
              <div className="fd-card-icon">🌐</div>
              <button
                onClick={() => setActiveMenu('approved')}
                className="fd-card-footer"
              >
                More info <span className="fd-arrow-circle">➔</span>
              </button>
            </div>

            {/* 4. PAID STUDENTS (MAROON / PINK) */}
            <div className="fd-card fd-card-maroon">
              <div className="fd-card-inner">
                <div className="fd-card-number">{paidCount} +</div>
                <div className="fd-card-label">Paid Students</div>
              </div>
              <div className="fd-card-icon">👤</div>
              <button
                onClick={() => setActiveMenu('paid')}
                className="fd-card-footer"
              >
                More info <span className="fd-arrow-circle">➔</span>
              </button>
            </div>

            {/* 5. TOTAL ADMIT CARDS (ROYAL BLUE) */}
            <div className="fd-card fd-card-blue">
              <div className="fd-card-inner">
                <div className="fd-card-number">{admitCardsCount} +</div>
                <div className="fd-card-label">Total Admit Cards</div>
              </div>
              <div className="fd-card-icon">✉</div>
              <button
                onClick={() => setActiveMenu('admit_cards')}
                className="fd-card-footer"
              >
                More info <span className="fd-arrow-circle">➔</span>
              </button>
            </div>

            {/* 6. TOTAL CERTIFICATES (RED) */}
            <div className="fd-card fd-card-red">
              <div className="fd-card-inner">
                <div className="fd-card-number">{certificatesCount} +</div>
                <div className="fd-card-label">Total Certificates</div>
              </div>
              <div className="fd-card-icon">📋</div>
              <button
                onClick={() => setActiveMenu('certificates')}
                className="fd-card-footer"
              >
                More info <span className="fd-arrow-circle">➔</span>
              </button>
            </div>

            {/* 7. CERTIFICATE FEES (PURPLE) */}
            <div className="fd-card fd-card-purple">
              <div className="fd-card-inner">
                <div className="fd-card-number">{certificateFees} +</div>
                <div className="fd-card-label">Certificate Fees</div>
              </div>
              <div className="fd-card-icon">📊</div>
              <button
                onClick={() => setActiveMenu('manage_fee')}
                className="fd-card-footer"
              >
                More info <span className="fd-arrow-circle">➔</span>
              </button>
            </div>

            {/* 8. LATE FEES (TEAL) */}
            <div className="fd-card fd-card-teal">
              <div className="fd-card-inner">
                <div className="fd-card-number">{lateFees} +</div>
                <div className="fd-card-label">Late Fees</div>
              </div>
              <div className="fd-card-icon">🛍</div>
              <button
                onClick={() => setActiveMenu('assign_fee')}
                className="fd-card-footer"
              >
                More info <span className="fd-arrow-circle">➔</span>
              </button>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* DATA TABLES / ACTIVE SECTION                                      */}
          {/* ---------------------------------------------------------------- */}
          <div className="fd-table-container">
            <div className="fd-table-header">
              <div className="fd-table-title-area">
                <h3>
                  {activeMenu === 'dashboard' && 'Center Student Registry & Performance'}
                  {activeMenu === 'students' && 'Students Management System'}
                  {activeMenu === 'pending' && 'Pending / Unapproved Student Admissions'}
                  {activeMenu === 'approved' && 'Approved & Verified Students'}
                  {activeMenu === 'paid' && 'Fee Paid Students Register'}
                  {activeMenu === 'admit_cards' && 'Student Examination Admit Cards'}
                  {activeMenu === 'certificates' && 'Issued Certificates & Marksheets'}
                  {activeMenu === 'internship' && 'Skill Internship Programs [NEW]'}
                  {activeMenu === 'online_class' && 'Digital Classroom & Live Lecture Schedule'}
                  {activeMenu === 'assign_fee' && 'Student Fee Structure & Assignments'}
                  {activeMenu === 'manage_fee' && 'Center Fee Collection Ledger'}
                  {activeMenu === 'latest_cert' && 'Latest Certificate & Mark Entries'}
                  {activeMenu === 'online_meeting' && 'Center Directors Online Meetings'}
                  {activeMenu === 'commission' && 'Center Affiliation Commission Ledger'}
                  {activeMenu === 'staff' && 'Institute Faculty & Staff Management'}
                </h3>
                <span className="fd-center-tag">
                  Center: Youcca Institute Of Education, Etah (Code: SALT/UP/046)
                </span>
              </div>

              <div className="fd-table-actions">
                <input
                  type="text"
                  placeholder="🔍 Search name, roll, mobile..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="fd-search-box"
                />

                <select
                  value={filterCourse}
                  onChange={(e) => setFilterCourse(e.target.value)}
                  className="fd-filter-select"
                >
                  <option value="ALL">All Courses</option>
                  <option value="Course On Computer Concepts (CCC)">CCC</option>
                  <option value="ADCA (Advanced Diploma In Computer Application)">ADCA</option>
                  <option value="DCA (Diploma In Computer Application)">DCA</option>
                  <option value="Tally Prime With GST & Accounting">Tally Prime</option>
                </select>

                <button onClick={() => setShowAddModal(true)} className="fd-btn-add">
                  + Add New Student
                </button>
              </div>
            </div>

            {/* TABLE CONTENT */}
            <div className="fd-table-responsive">
              <table className="fd-data-table">
                <thead>
                  <tr>
                    <th>Roll No</th>
                    <th>Enrollment No</th>
                    <th>Student Name</th>
                    <th>Father Name</th>
                    <th>Course Name</th>
                    <th>Duration</th>
                    <th>Mobile</th>
                    <th>Status</th>
                    <th>Fee</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.length === 0 ? (
                    <tr>
                      <td colSpan={10} style={{ textAlign: 'center', padding: '30px', color: '#6c757d' }}>
                        No student records found in this category.
                      </td>
                    </tr>
                  ) : (
                    filteredStudents.map((st) => (
                      <tr key={st.id}>
                        <td><strong style={{ color: '#007bff' }}>{st.rollNo}</strong></td>
                        <td>{st.enrollmentNo}</td>
                        <td><strong>{st.name}</strong></td>
                        <td>{st.fatherName}</td>
                        <td><span className="fd-course-tag">{st.course}</span></td>
                        <td>{st.duration}</td>
                        <td>
                          <a href={`tel:${st.phone}`} style={{ color: '#28a745', textDecoration: 'none' }}>
                            📞 {st.phone}
                          </a>
                        </td>
                        <td>
                          <span className={`fd-pill ${st.status === 'Approved' ? 'fd-pill-approved' : 'fd-pill-pending'}`}>
                            {st.status}
                          </span>
                        </td>
                        <td>
                          <button
                            onClick={() => handleToggleFee(st.id)}
                            className={`fd-fee-badge ${st.feePaid ? 'fd-fee-paid' : 'fd-fee-unpaid'}`}
                            title="Click to toggle fee status"
                          >
                            {st.feePaid ? '✓ Paid' : '⏳ Pending'}
                          </button>
                        </td>
                        <td>
                          <div className="fd-action-btn-group">
                            <button
                              onClick={() => setSelectedStudent(st)}
                              className="fd-act-btn fd-btn-view"
                              title="View full dossier"
                            >
                              👁️
                            </button>

                            {st.status === 'Pending' && (
                              <button
                                onClick={() => handleApprove(st.id)}
                                className="fd-act-btn fd-btn-approve"
                                title="Approve Student"
                              >
                                ✓
                              </button>
                            )}

                            <Link
                              to="/franchise/sample-certificate"
                              className="fd-act-btn fd-btn-cert"
                              title="View Certificate"
                            >
                              📜
                            </Link>

                            <Link
                              to="/franchise/sample-marksheet"
                              className="fd-act-btn fd-btn-mark"
                              title="View Statement of Marks"
                            >
                              📊
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="fd-table-footer">
              <div>
                Showing <strong>{filteredStudents.length}</strong> of <strong>{students.length}</strong> registered students
              </div>
              <div className="fd-support-contact">
                Director Helpline: <strong>+91-8445020016</strong> • Etah H.Q.
              </div>
            </div>
          </div>
        </main>

        {/* ACTIVATE WINDOWS WATERMARK (MATCHING USER SCREENSHOT) */}
        <div className="fd-activate-windows-notice">
          Activate Windows<br />
          <span>Go to Settings to activate Windows.</span>
        </div>

        {/* FLOATING GREEN CHAT BUTTON (MATCHING USER SCREENSHOT) */}
        <a
          href="https://wa.me/918445020016?text=Hello%20Shikashvik%20Welfare%20Foundation%20Center%20Support"
          target="_blank"
          rel="noopener noreferrer"
          className="fd-floating-chat-btn"
          title="Direct Support on WhatsApp"
        >
          💬
        </a>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 3. STUDENT DETAILS MODAL                                          */}
      {/* ------------------------------------------------------------------ */}
      {selectedStudent && (
        <div className="fd-modal-overlay" onClick={() => setSelectedStudent(null)}>
          <div className="fd-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="fd-modal-header">
              <h4>Candidate Profile • {selectedStudent.enrollmentNo}</h4>
              <button onClick={() => setSelectedStudent(null)} className="fd-modal-close">✕</button>
            </div>
            <div className="fd-modal-body">
              <div className="fd-profile-grid">
                <div><strong>Full Name:</strong> {selectedStudent.name}</div>
                <div><strong>Father's Name:</strong> {selectedStudent.fatherName}</div>
                <div><strong>Roll No:</strong> {selectedStudent.rollNo}</div>
                <div><strong>Enrollment:</strong> {selectedStudent.enrollmentNo}</div>
                <div><strong>Course:</strong> {selectedStudent.course}</div>
                <div><strong>Duration:</strong> {selectedStudent.duration}</div>
                <div><strong>Mobile:</strong> {selectedStudent.phone}</div>
                <div><strong>Fee Status:</strong> {selectedStudent.feePaid ? 'Paid (₹' + selectedStudent.feeAmount + ')' : 'Pending'}</div>
                <div><strong>Registration Date:</strong> {selectedStudent.regDate}</div>
                <div><strong>Center:</strong> Youcca Institute Of Education, Etah</div>
              </div>
            </div>
            <div className="fd-modal-footer">
              <Link to="/franchise/sample-certificate" className="fd-modal-action-btn" style={{ background: '#4b087d', color: '#fff' }}>
                📜 Certificate Preview
              </Link>
              <Link to="/franchise/sample-marksheet" className="fd-modal-action-btn" style={{ background: '#007bff', color: '#fff' }}>
                📊 Marksheet Preview
              </Link>
              <button onClick={() => setSelectedStudent(null)} className="fd-modal-action-btn" style={{ background: '#6c757d', color: '#fff' }}>
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
        <div className="fd-modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="fd-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="fd-modal-header" style={{ background: '#007bff' }}>
              <h4>+ Direct Student Enrollment (Center Desk)</h4>
              <button onClick={() => setShowAddModal(false)} className="fd-modal-close">✕</button>
            </div>
            <form onSubmit={handleAddStudent}>
              <div className="fd-modal-body">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div className="fd-form-grp">
                    <label>Student Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. RAHUL SHARMA"
                      value={newStudent.name}
                      onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                    />
                  </div>
                  <div className="fd-form-grp">
                    <label>Father's Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. MOHAN SHARMA"
                      value={newStudent.fatherName}
                      onChange={(e) => setNewStudent({ ...newStudent, fatherName: e.target.value })}
                    />
                  </div>
                  <div className="fd-form-grp">
                    <label>Course Name</label>
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
                    </select>
                  </div>
                  <div className="fd-form-grp">
                    <label>Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile"
                      value={newStudent.phone}
                      onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="fd-modal-footer">
                <button type="submit" className="fd-modal-action-btn" style={{ background: '#28a745', color: '#fff' }}>
                  ✓ Enroll Student
                </button>
                <button type="button" onClick={() => setShowAddModal(false)} className="fd-modal-action-btn" style={{ background: '#6c757d', color: '#fff' }}>
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
