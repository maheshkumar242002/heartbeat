import React, { useState, useEffect } from 'react';
import { Heart, Activity, Menu, X, ShieldAlert, CheckCircle } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container container">
        <a href="#hero" className="navbar-logo">
          <div className="logo-icon-wrapper animate-heartbeat">
            <svg viewBox="0 0 200 200" className="logo-svg" width="40" height="40">
              <defs>
                <linearGradient id="nav-logo-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
                <linearGradient id="nav-logo-green" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#84cc16" />
                </linearGradient>
                <linearGradient id="nav-logo-teal" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient id="nav-logo-cross" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
                <linearGradient id="nav-logo-circle" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
                <path id="nav-text-path" d="M 32,82 A 72,72 0 0,1 168,82" fill="none" />
              </defs>

              {/* Outer Double Ring Arcs (Top) */}
              <path d="M 25,75 A 80,80 0 0,1 175,75" fill="none" stroke="url(#nav-logo-circle)" strokeWidth="3" strokeLinecap="round" />
              <path d="M 36,77 A 68,68 0 0,1 164,77" fill="none" stroke="url(#nav-logo-circle)" strokeWidth="1.5" strokeLinecap="round" />

              {/* Outer Double Ring Arcs (Bottom) */}
              <path d="M 25,125 A 80,80 0 0,0 155,135" fill="none" stroke="url(#nav-logo-circle)" strokeWidth="3" strokeLinecap="round" />
              <path d="M 36,123 A 68,68 0 0,0 148,128" fill="none" stroke="url(#nav-logo-circle)" strokeWidth="1.5" strokeLinecap="round" />

              {/* Curved Text */}
              <text>
                <textPath href="#nav-text-path" startOffset="50%" textAnchor="middle" fill="var(--text-primary)" fontSize="13" fontFamily="var(--font-heading)" fontWeight="800" letterSpacing="1.2">
                  CARE IN EVERY BEAT
                </textPath>
              </text>

              {/* ECG Wave on Left */}
              <path d="M 5,115 L 23,115 L 28,103 L 32,115 L 35,118 L 39,80 L 43,145 L 48,105 L 53,115 L 65,115" 
                    fill="none" stroke="url(#nav-logo-teal)" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />

              {/* Medical Cross on Right */}
              <path d="M 155,115 L 185,115 M 170,100 L 170,130" 
                    fill="none" stroke="url(#nav-logo-cross)" strokeWidth="10" strokeLinecap="round" />

              {/* Heart Left Side */}
              <path d="M 100,160 C 65,138 48,110 48,90 C 48,70 65,58 82,75 C 91,84 100,95 100,102" 
                    fill="none" stroke="url(#nav-logo-blue)" strokeWidth="12" strokeLinecap="round" />

              {/* Heart Right Side (Green Leaf) */}
              <path d="M 100,160 C 105,145 142,130 142,100 C 142,80 132,70 122,80 C 112,90 102,99 100,102 Z" 
                    fill="url(#nav-logo-green)" />
                    
              {/* Leaf Center Vein */}
              <path d="M 102,150 C 112,132 122,118 132,95" 
                    fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />

              {/* Letters "HB" */}
              <text x="94" y="125" fontFamily="var(--font-heading)" fontWeight="900" fontSize="36" fill="var(--text-primary)" textAnchor="middle" letterSpacing="-1.5">
                HB
              </text>
            </svg>
          </div>
          <span className="logo-text">
            HEARTBEAT<span className="logo-subtext">PHARMA</span>
          </span>
        </a>

        {/* Live Logistics Status */}
        <div className="navbar-status-badge">
          <span className="status-dot"></span>
          <span className="status-text">Cold Chain Fleet Active</span>
        </div>

        {/* Nav Links - Desktop */}
        <div className="navbar-links">
          <a href="#about" className="nav-link">Our Network</a>
          <a href="#therapeutics" className="nav-link">B2B Catalog</a>
          <a href="#innovation" className="nav-link">Smart Logistics</a>
          <a href="#contact" className="nav-link btn btn-secondary">Partner Desk</a>
        </div>

        {/* Hamburger Menu - Mobile */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          <a href="#about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Our Network</a>
          <a href="#therapeutics" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>B2B Catalog</a>
          <a href="#innovation" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Smart Logistics</a>
          <a href="#contact" className="mobile-nav-link btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Partner Desk</a>
        </div>
      </div>
      
      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 100;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid transparent;
        }

        .navbar-wrapper.scrolled {
          height: 70px;
          background: rgba(7, 10, 19, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          z-index: 101;
        }

        .logo-svg {
          filter: drop-shadow(0 0 8px rgba(239, 68, 68, 0.4));
        }

        .logo-text {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.3rem;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.15rem;
        }

        .logo-subtext {
          color: var(--secondary);
          font-weight: 400;
        }

        .navbar-status-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.2);
          padding: 0.35rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #10b981;
          letter-spacing: 0.02em;
          animation: pulse-blue 2s infinite;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #10b981;
          display: inline-block;
          box-shadow: 0 0 8px #10b981;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link:not(.btn)::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--gradient-tech);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:not(.btn):hover {
          color: var(--text-primary);
        }

        .nav-link:not(.btn):hover::after {
          width: 100%;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          z-index: 101;
        }

        /* Mobile Menu */
        .mobile-menu-overlay {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          height: calc(100vh - 100%);
          background: rgba(7, 10, 19, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 3rem 1.5rem;
          opacity: 0;
          pointer-events: none;
          transition: all 0.4s ease;
          z-index: 100;
          overflow-y: auto;
        }

        .mobile-menu-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.5rem;
          width: 100%;
          margin: auto 0;
        }

        .navbar-wrapper.menu-open {
          background: rgba(7, 10, 19, 0.98) !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
          border-bottom: 1px solid var(--border);
        }

        .mobile-nav-link {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .mobile-nav-link:hover {
          transform: scale(1.1);
          color: var(--secondary);
        }

        @media (max-width: 768px) {
          .navbar-status-badge {
            display: none;
          }
          .navbar-links {
            display: none;
          }
          .mobile-menu-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
