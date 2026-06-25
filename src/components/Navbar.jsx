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
    <nav className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="#hero" className="navbar-logo">
          <div className="logo-icon-wrapper animate-heartbeat">
            <svg viewBox="0 0 100 100" className="logo-svg" width="36" height="36">
              {/* Path of Heart combined with heartbeat line */}
              <path 
                d="M12 35 C 12 15, 45 10, 50 35 C 55 10, 88 15, 88 35 C 88 60, 60 80, 50 88 C 40 80, 12 60, 12 35 Z" 
                fill="none" 
                stroke="#ef4444" 
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path 
                d="M20 50 L 38 50 L 44 32 L 50 68 L 56 42 L 62 50 L 80 50" 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="logo-text">
            HEARTBEAT<span className="logo-subtext">DISTRIBUTION</span>
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
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(7, 10, 19, 0.98);
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: all 0.4s ease;
          z-index: 100;
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
          padding: 2rem;
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
