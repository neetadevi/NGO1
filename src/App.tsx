import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom'
import { supabase } from './lib/supabase'
import type { User } from '@supabase/supabase-js'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Franchise from './pages/Franchise'
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
      <Route path="/" element={<Home />} />
      <Route path="/franchise" element={<Franchise />} />
      <Route path="/apply-franchise" element={<Franchise />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
