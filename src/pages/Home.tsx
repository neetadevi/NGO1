import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import type { User } from '@supabase/supabase-js'
import './Home.css'

export default function Home() {
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80',
      title: 'Empowering Underprivileged Children',
      subtitle: 'Bringing smiles, quality education, and healthcare to every child in need.',
    },
    {
      img: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1600&q=80',
      title: 'Healthcare & Nutrition for All',
      subtitle: 'Organizing free medical checkup camps, eye care, and distributing balanced nutrition kits.',
    },
    {
      img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=80',
      title: 'Women Empowerment & Skill Development',
      subtitle: 'Vocational training, self-help groups, and financial independence for rural women.',
    },
  ]

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => {
      subscription.unsubscribe()
      clearInterval(interval)
    }
  }, [slides.length])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="home-page">
      {/* TOP CONTACT BAR WITH LOGIN & SIGNUP */}
      <div className="top-header">
        <div className="top-container">
          <div className="contact-info">
            <a href="tel:+918445020016">☎ +91-84450-20016</a>
            <span>|</span>
            <a href="mailto:shikashvik@gmail.com">✉ shikashvik@gmail.com</a>
            <span>|</span>
            <span>Incorporated: 23 October 2026</span>
          </div>

          <div className="top-actions">
            <a href="#about">Support</a>
            <a href="#projects" className="top-btn">Donate Now</a>
            <a href="#partners" className="top-btn">Become A Partner</a>

            {/* LOGIN & SIGNUP BUTTONS AT TOP */}
            {user ? (
              <div className="top-auth-group">
                <span className="top-user-pill">
                  👤 {user.user_metadata?.full_name || user.email?.split('@')[0]}
                </span>
                <button onClick={() => navigate('/dashboard')} className="top-btn" style={{ padding: '6px 12px', fontSize: '11px' }}>
                  Dashboard
                </button>
                <button onClick={handleLogout} className="top-logout-btn">
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="top-auth-group">
                <Link to="/login" className="top-login-btn">
                  🔑 Login
                </Link>
                <Link to="/signup" className="top-signup-btn">
                  ✨ Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <header className="main-header">
        <div className="nav-container">
          <a href="#home" className="logo" aria-label="Shikashvik Welfare Foundation home">
            <div className="logo-main">Shikashvik</div>
            <small>Welfare Foundation • Etah, Uttar Pradesh</small>
          </a>

          <button
            className="menu-toggle"
            aria-label="Toggle Navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>

          <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="home-link">Home</a>
            <a href="#about">About Us</a>
            <a href="#what-we-do">What We Do</a>
            <a href="#projects">Projects</a>
            <a href="#gallery">Gallery</a>
            <a href="#blog">Blog</a>
            <a href="#certificates">Certificates</a>
            <a href="#partners">Partners</a>
            {user ? (
              <a href="#dashboard" onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }} style={{ color: '#4b087d', fontWeight: 'bold' }}>
                My Dashboard
              </a>
            ) : (
              <Link to="/login" style={{ color: '#4b087d', fontWeight: 'bold' }}>
                Login / Sign Up
              </Link>
            )}
          </nav>
        </div>
      </header>

      {/* HERO SLIDER */}
      <section id="home" className="hero-slider">
        <div className="slider-image">
          <img src={slides[currentSlide].img} alt={slides[currentSlide].title} />
          <div className="slider-overlay">
            <div className="slider-content">
              <h2>{slides[currentSlide].title}</h2>
              <p>{slides[currentSlide].subtitle}</p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href="#projects" className="slider-cta-btn">Support A Cause</a>
                {!user && (
                  <Link to="/signup" className="slider-cta-btn" style={{ background: '#4b087d' }}>
                    Join As Volunteer
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <button className="slider-arrow prev" onClick={prevSlide} aria-label="Previous Slide">
          ‹
        </button>
        <button className="slider-arrow next" onClick={nextSlide} aria-label="Next Slide">
          ›
        </button>

        <div className="slider-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2>Welcome to <span>Shikashvik Welfare Foundation</span></h2>
            <div className="about-line"></div>
            <h4>Empowering Communities, Transforming Lives in Uttar Pradesh & Beyond</h4>
            <p>
              <strong>Shikashvik Welfare Foundation</strong> is a registered non-profit organization dedicated to fostering sustainable social transformation through education, healthcare, women empowerment, environmental stewardship, and community development.
            </p>
            <p>
              Incorporated on <strong>23 October 2026</strong>, our mission is to uplift the most marginalized sections of society by delivering direct grassroots interventions, school supplies, medical checkups, and vocational livelihood training programs.
            </p>
            <a href="#projects" className="view-details">
              Explore Our Work →
            </a>
          </div>

          <div className="about-logo">
            <div className="logo-fallback">
              <span>🌿</span>
              SWF
              <small style={{ fontSize: '11px', marginTop: '6px', fontWeight: 'normal' }}>
                Etah, Uttar Pradesh
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CAN WE DO */}
      <section id="what-we-do" className="what-we-do">
        <h2 className="section-title">WHAT <span>CAN WE DO</span></h2>
        <div className="action-grid">
          <div className="action-card">
            <div className="action-icon">📚</div>
            <div>
              <h3>Quality Education</h3>
              <p>Free schooling assistance, books, uniforms, and digital literacy classes for under-privileged children.</p>
            </div>
          </div>

          <div className="action-card">
            <div className="action-icon">🩺</div>
            <div>
              <h3>Health & Medical Aid</h3>
              <p>Free health camps, blood donation drives, maternal care, and emergency medicine distribution.</p>
            </div>
          </div>

          <div className="action-card">
            <div className="action-icon">🧵</div>
            <div>
              <h3>Women Empowerment</h3>
              <p>Skill development, tailoring institutes, financial literacy, and promoting women-led self-help groups.</p>
            </div>
          </div>

          <div className="action-card">
            <div className="action-icon">🌱</div>
            <div>
              <h3>Environment & Plantation</h3>
              <p>Tree plantation drives, plastic-free campaigns, and promoting renewable solar energy in villages.</p>
            </div>
          </div>

          <div className="action-card">
            <div className="action-icon">🍲</div>
            <div>
              <h3>Hunger & Nutrition Relief</h3>
              <p>Mid-day nutritional supplements, ration distribution during crises, and community food kitchens.</p>
            </div>
          </div>

          <div className="action-card">
            <div className="action-icon">🤝</div>
            <div>
              <h3>Community Development</h3>
              <p>Clean water sanitation projects, elder care support, and village infrastructure improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RUNNING PROJECTS */}
      <section id="projects" className="running-projects">
        <h2 className="section-title">RUNNING <span>PROJECTS</span></h2>
        <div className="project-grid">
          <div className="project-card">
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80" alt="Shiksha Jyoti" />
            <div className="project-info">
              <h3>Project Shiksha Jyoti</h3>
              <p className="project-country">📍 Etah & Agra District, UP</p>
              <p>Enabling 500+ rural students with learning material, qualified tutoring, and smart classroom facilities.</p>
              <a href="#about" className="project-read-more">Read More →</a>
            </div>
          </div>

          <div className="project-card">
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80" alt="Aarogya Seva" />
            <div className="project-info">
              <h3>Aarogya Seva Initiative</h3>
              <p className="project-country">📍 Rural Health Clinics</p>
              <p>Providing primary healthcare checkups, diagnostic tests, and free medicines to remote village communities.</p>
              <a href="#about" className="project-read-more">Read More →</a>
            </div>
          </div>

          <div className="project-card">
            <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80" alt="Swavalamban" />
            <div className="project-info">
              <h3>Mission Swavalamban</h3>
              <p className="project-country">📍 Women Livelihood Center</p>
              <p>Training 200+ rural women in sewing, handicraft production, and helping them sell directly in local markets.</p>
              <a href="#about" className="project-read-more">Read More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="gallery-section">
        <h2 className="section-title">PHOTO <span>GALLERY</span></h2>
        <div className="gallery-grid">
          <a href="#gallery">
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=500&q=80" alt="Gallery 1" />
          </a>
          <a href="#gallery">
            <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=500&q=80" alt="Gallery 2" />
          </a>
          <a href="#gallery">
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80" alt="Gallery 3" />
          </a>
          <a href="#gallery">
            <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=500&q=80" alt="Gallery 4" />
          </a>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="blog-section">
        <div className="blog-wrap">
          <h2 className="section-title">LATEST <span>NEWS & UPDATES</span></h2>
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-media">
                <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80" alt="School Kits" />
              </div>
              <div className="blog-body">
                <div className="blog-date">
                  <b>28</b>
                  <small>OCT</small>
                </div>
                <div className="blog-content">
                  <h3>Distribution of 300+ Winter School Kits Completed</h3>
                  <p>Our team successfully distributed textbooks, school bags, and winter jackets to primary students.</p>
                  <a href="#blog" className="read">Read Story</a>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-media">
                <img src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80" alt="Health Camp" />
              </div>
              <div className="blog-body">
                <div className="blog-date">
                  <b>24</b>
                  <small>OCT</small>
                </div>
                <div className="blog-content">
                  <h3>Free Eye & Dental Care Camp in Etah District</h3>
                  <p>Over 450 villagers received complimentary doctor consultations and free corrective eyeglasses.</p>
                  <a href="#blog" className="read">Read Story</a>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-media">
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80" alt="Tree Plantation" />
              </div>
              <div className="blog-body">
                <div className="blog-date">
                  <b>20</b>
                  <small>OCT</small>
                </div>
                <div className="blog-content">
                  <h3>Green Earth Initiative: 1,000 Trees Planted</h3>
                  <p>Community volunteers and youth joined hands to plant indigenous trees across school premises.</p>
                  <a href="#blog" className="read">Read Story</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATES & RECOGNITION */}
      <section id="certificates" className="cert-section">
        <h2 className="section-title">CERTIFICATES & <span>RECOGNITION</span></h2>
        <div className="cert-grid">
          <div className="cert-card">
            <div className="cert-icon">📜</div>
            <h4>Certificate of Incorporation</h4>
            <p>Officially registered non-profit organization under the Ministry of Corporate Affairs, Govt. of India.</p>
          </div>

          <div className="cert-card">
            <div className="cert-icon">🏛️</div>
            <h4>Section 8 Non-Profit</h4>
            <p>Operating exclusively for social welfare, poverty alleviation, education, and charitable objectives.</p>
          </div>

          <div className="cert-card">
            <div className="cert-icon">🛡️</div>
            <h4>100% Transparency & Audit</h4>
            <p>Regular external financial audits ensuring every rupee donated directly serves families in need.</p>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="partners-section">
        <h2 className="section-title">OUR <span>SUPPORTERS & PARTNERS</span></h2>
        <div className="partners-grid">
          <div className="partner-logo-box">
            <span>🤝</span> National Health Mission
          </div>
          <div className="partner-logo-box">
            <span>🎓</span> Rural Education Council
          </div>
          <div className="partner-logo-box">
            <span>🌐</span> CSR Foundation Network
          </div>
          <div className="partner-logo-box">
            <span>🌱</span> Green Earth Alliance
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="simple-footer">
        <div className="footer-container">
          <div className="footer-col">
            <h3>Shikashvik Welfare Foundation</h3>
            <p>
              Dedicated to building an inclusive society where every child gets educated, every woman is self-reliant, and every community thrives with dignity.
            </p>
            <p style={{ marginTop: '14px', fontSize: '13px' }}>
              📍 Etah, Uttar Pradesh, India
            </p>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#what-we-do">What We Do</a></li>
              <li><a href="#projects">Running Projects</a></li>
              <li><a href="#certificates">Certificates</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Account</h3>
            <ul>
              {user ? (
                <>
                  <li><Link to="/dashboard">My Dashboard</Link></li>
                  <li><a href="#logout" onClick={(e) => { e.preventDefault(); handleLogout(); }}>Sign Out</a></li>
                </>
              ) : (
                <>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/signup">Register Account</Link></li>
                </>
              )}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <p><strong>Phone:</strong> +91-84450-20016</p>
            <p><strong>Email:</strong> shikashvik@gmail.com</p>
            <p><strong>Office Hours:</strong> Mon - Sat (9:00 AM - 6:00 PM)</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Shikashvik Welfare Foundation. All Rights Reserved. Reg. 23 October 2026.</p>
        </div>
      </footer>
    </div>
  )
}
