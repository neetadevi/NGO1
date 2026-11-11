import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom'
import { supabase } from './lib/supabase'
import type { User } from '@supabase/supabase-js'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Franchise from './pages/Franchise'

// About Us Pages
import AboutFoundation from './pages/AboutFoundation'
import ChairmanMessage from './pages/ChairmanMessage'
import MissionVision from './pages/MissionVision'

// Course Offered Pages
import CoursesDirectory from './pages/CoursesDirectory'
import VocationalCourses from './pages/VocationalCourses'
import SkillCourses from './pages/SkillCourses'
import ComputerCourses from './pages/ComputerCourses'
import OtherCourses from './pages/OtherCourses'

// Student Zone Pages
import OfflineAdmissionForm from './pages/OfflineAdmissionForm'
import AuthorizedStudyCentres from './pages/AuthorizedStudyCentres'
import StudentRegistration from './pages/StudentRegistration'
import StudentVerification from './pages/StudentVerification'
import StudentResult from './pages/StudentResult'

// Franchise Pages
import SampleCertificate from './pages/SampleCertificate'
import SampleMarksheet from './pages/SampleMarksheet'
import FranchiseEnquiry from './pages/FranchiseEnquiry'
import BenefitsRequirement from './pages/BenefitsRequirement'

// Login Pages
import FranchiseLogin from './pages/FranchiseLogin'
import StudentLogin from './pages/StudentLogin'
import VolunteerLogin from './pages/VolunteerLogin'

// Admin Portal
import AdminPanel from './pages/AdminPanel'

import './App.css'

function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div style={{ fontSize: '42px', marginBottom: '10px' }}>🌿</div>
        <h1>My Account</h1>
        <p className="user-name">
          {user?.user_metadata?.full_name || 'Member'}
        </p>
        <p className="user-email">{user?.email}</p>

        <div style={{ background: '#f3f4f6', borderRadius: '10px', padding: '16px', margin: '24px 0', textAlign: 'left', fontSize: '14px', color: '#4b5563' }}>
          <p style={{ margin: '0 0 6px' }}><strong>Status:</strong> <span style={{ color: '#10b981' }}>● Active</span></p>
          <p style={{ margin: '0 0 6px' }}><strong>Organization:</strong> Shikashvik Welfare Foundation</p>
          <p style={{ margin: '0' }}><strong>Role:</strong> Supporter / Volunteer</p>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <Link to="/" style={{ padding: '12px 24px', background: '#4b087d', color: '#fff', borderRadius: '10px', fontWeight: '600', textDecoration: 'none' }}>
            Go to Website
          </Link>
          <button onClick={handleLogout} className="logout-button" style={{ margin: 0 }}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* About Us */}
      <Route path="/about-foundation" element={<AboutFoundation />} />
      <Route path="/chairman-message" element={<ChairmanMessage />} />
      <Route path="/mission-vision" element={<MissionVision />} />

      {/* Course Offered */}
      <Route path="/courses/all" element={<CoursesDirectory />} />
      <Route path="/courses" element={<CoursesDirectory />} />
      <Route path="/courses/vocational" element={<VocationalCourses />} />
      <Route path="/courses/skill" element={<SkillCourses />} />
      <Route path="/courses/computer" element={<ComputerCourses />} />
      <Route path="/courses/other" element={<OtherCourses />} />

      {/* Student Zone */}
      <Route path="/student-zone/offline-admission-form" element={<OfflineAdmissionForm />} />
      <Route path="/offline-admission-form" element={<OfflineAdmissionForm />} />
      <Route path="/student-zone/study-centres" element={<AuthorizedStudyCentres />} />
      <Route path="/student-zone/registration" element={<StudentRegistration />} />
      <Route path="/student-zone/verification" element={<StudentVerification />} />
      <Route path="/student-zone/result" element={<StudentResult />} />

      {/* Franchise */}
      <Route path="/franchise" element={<Franchise />} />
      <Route path="/franchise/apply" element={<Franchise />} />
      <Route path="/apply-franchise" element={<Franchise />} />
      <Route path="/franchise/sample-certificate" element={<SampleCertificate />} />
      <Route path="/franchise/sample-marksheet" element={<SampleMarksheet />} />
      <Route path="/franchise/enquiry" element={<FranchiseEnquiry />} />
      <Route path="/franchise/benefits-requirement" element={<BenefitsRequirement />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />
      <Route path="/login/franchise" element={<FranchiseLogin />} />
      <Route path="/login/student" element={<StudentLogin />} />
      <Route path="/login/volunteer" element={<VolunteerLogin />} />
      <Route path="/signup" element={<Signup />} />

      {/* Central Admin Portal */}
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/admin/*" element={<AdminPanel />} />
      <Route path="/admin-panel" element={<AdminPanel />} />
      <Route path="/login/admin" element={<AdminPanel />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
