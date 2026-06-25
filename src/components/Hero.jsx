import React, { useState } from 'react';
import { ArrowRight, Activity, ShieldCheck, Heart } from 'lucide-react';

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Scale down tilt amount
    setTilt({
      x: (x / box.width) * 20,
      y: -(y / box.height) * 20
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="hero" className="hero-section section">
      {/* Background Enhancements */}
      <div className="bg-grid"></div>
      <div className="bg-radial"></div>
      
      {/* Decorative Glowing Orbs */}
      <div className="orb blue-orb"></div>
      <div className="orb red-orb"></div>

      <div className="container hero-container">
        {/* Left Info Column */}
        <div className="hero-content">
          <div className="hero-tag">
            <Heart size={14} className="tag-icon text-primary animate-pulse-glow" />
            <span>GDP-Certified Supply Chain Partner</span>
          </div>
          
          <h1 className="hero-title">
            Caring <br />
            <span className="text-gradient">Through Global Supply</span>
          </h1>
          
          <p className="hero-subtitle">
            Heartbeat Distributors is a premier, high-integrity pharmaceutical distribution network. We bridge global manufacturers with local pharmacies, hospitals, and clinics, delivering temperature-controlled, authentic medicines on time.
          </p>

          <div className="hero-actions">
            <a href="#therapeutics" className="btn btn-primary">
              Explore B2B Catalog <ArrowRight size={18} />
            </a>
            <a href="#innovation" className="btn btn-secondary">
              Logistics Network
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value text-gradient-blue">99.9%</span>
              <span className="stat-label">On-time Delivery</span>
            </div>
            <div className="stat-item">
              <span className="stat-value text-gradient-blue">150+</span>
              <span className="stat-label">Wholesale Brands</span>
            </div>
            <div className="stat-item">
              <span className="stat-value text-gradient-blue">24/7</span>
              <span className="stat-label">Fleet Dispatch</span>
            </div>
          </div>
        </div>

        {/* Right Graphic Column (Interactive Capsule & Molecule) */}
        <div className="hero-graphic-wrapper">
          <div 
            className="interactive-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {/* Molecular Grid Rotating in Background */}
            <div className="molecular-blueprint animate-rotate">
              <div className="atom-node atom-1"></div>
              <div className="atom-node atom-2"></div>
              <div className="atom-node atom-3"></div>
              <svg viewBox="0 0 200 200" className="molecular-lines">
                <line x1="100" y1="20" x2="40" y2="70" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="40" y1="70" x2="60" y2="150" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="60" y1="150" x2="160" y2="130" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="160" y1="130" x2="100" y2="20" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="100" y1="100" x2="100" y2="20" stroke="rgba(239, 68, 68, 0.2)" strokeWidth="2" />
                <line x1="100" y1="100" x2="40" y2="70" stroke="rgba(239, 68, 68, 0.2)" strokeWidth="2" />
              </svg>
            </div>

            {/* Glowing Medicine Capsule */}
            <div className="digital-capsule animate-float">
              <div className="capsule-half capsule-top"></div>
              <div className="capsule-ring"></div>
              <div className="capsule-half capsule-bottom"></div>
              <div className="capsule-glow"></div>
            </div>

            {/* Float Stats Info Cards overlayed */}
            <div className="floating-badge badge-1 animate-float-slow">
              <ShieldCheck className="badge-icon text-secondary" size={18} />
              <div className="badge-details">
                <span className="badge-title">GDP Certified</span>
                <span className="badge-desc">Supply Standard</span>
              </div>
            </div>

            <div className="floating-badge badge-2 animate-float">
              <Activity className="badge-icon text-primary" size={18} />
              <div className="badge-details">
                <span className="badge-title">Cold Chain Active</span>
                <span className="badge-desc">Stable +4.0°C</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Heartbeat ECG Wave sweeping across the bottom of the section */}
      <div className="ecg-wave-container">
        <svg viewBox="0 0 1000 120" className="ecg-wave" preserveAspectRatio="none">
          <path 
            className="ecg-path-bg"
            d="M0,60 L250,60 L270,40 L285,85 L300,10 L315,100 L330,60 L350,65 L370,60 L620,60 L640,30 L655,90 L670,15 L685,105 L700,60 L720,65 L740,60 L1000,60" 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.03)" 
            strokeWidth="3"
          />
          <path 
            className="ecg-path-animated"
            d="M0,60 L250,60 L270,40 L285,85 L300,10 L315,100 L330,60 L350,65 L370,60 L620,60 L640,30 L655,90 L670,15 L685,105 L700,60 L720,65 L740,60 L1000,60" 
            fill="none" 
            stroke="url(#ecg-gradient)" 
            strokeWidth="3.5"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <defs>
            <linearGradient id="ecg-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#ef4444" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 120px;
          padding-bottom: 6px;
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
          z-index: 2;
        }

        .hero-content {
          text-align: left;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 580px;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          gap: 1.2rem;
          margin-bottom: 3.5rem;
        }

        .hero-stats {
          display: flex;
          gap: 3rem;
          border-top: 1px solid var(--border);
          padding-top: 2rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .stat-value {
          font-size: 2rem;
          font-family: var(--font-heading);
          font-weight: 800;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        /* Graphic Elements / Interactive Card */
        .hero-graphic-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .interactive-card {
          width: 320px;
          height: 420px;
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid var(--border);
          border-radius: 24px;
          position: relative;
          box-shadow: var(--glass-shadow);
          display: flex;
          justify-content: center;
          align-items: center;
          transform-style: preserve-3d;
        }

        .molecular-blueprint {
          position: absolute;
          width: 260px;
          height: 260px;
          opacity: 0.45;
          pointer-events: none;
        }

        .molecular-lines {
          width: 100%;
          height: 100%;
        }

        .atom-node {
          position: absolute;
          width: 10px;
          height: 10px;
          background: var(--secondary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--secondary);
        }

        .atom-1 { top: 18px; left: 95px; }
        .atom-2 { top: 68px; left: 35px; background: var(--primary); box-shadow: 0 0 10px var(--primary); }
        .atom-3 { top: 145px; left: 55px; }

        /* Floating Pill Construction */
        .digital-capsule {
          width: 75px;
          height: 170px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 5;
          transform-style: preserve-3d;
        }

        .capsule-half {
          width: 100%;
          height: 85px;
          border-radius: 9999px 9999px 0 0;
          position: relative;
        }

        .capsule-top {
          background: linear-gradient(135deg, #f43f5e 0%, #e11d48 50%, #9f1239 100%);
          box-shadow: inset 2px 2px 5px rgba(255, 255, 255, 0.4);
        }

        .capsule-bottom {
          border-radius: 0 0 9999px 9999px;
          background: linear-gradient(135deg, #60a5fa 0%, #2563eb 50%, #1d4ed8 100%);
          box-shadow: inset 2px -2px 5px rgba(255, 255, 255, 0.2);
        }

        .capsule-ring {
          width: 82px;
          height: 8px;
          background: #ffffff;
          border-radius: 4px;
          position: absolute;
          top: calc(50% - 4px);
          z-index: 10;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.8), inset 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .capsule-glow {
          position: absolute;
          top: -15px;
          left: -15px;
          right: -15px;
          bottom: -15px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
          pointer-events: none;
          z-index: 2;
        }

        /* Floating Badges styling */
        .floating-badge {
          position: absolute;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 0.6rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          z-index: 10;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        .badge-1 {
          top: 40px;
          right: -30px;
        }

        .badge-2 {
          bottom: 60px;
          left: -40px;
        }

        .badge-icon {
          padding: 0.4rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
        }

        .badge-details {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .badge-title {
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .badge-desc {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        /* Orbs background */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          pointer-events: none;
        }

        .blue-orb {
          width: 400px;
          height: 400px;
          background: var(--secondary);
          top: 10%;
          right: -10%;
        }

        .red-orb {
          width: 300px;
          height: 300px;
          background: var(--primary);
          bottom: 20%;
          left: -5%;
        }

        /* ECG Wave Animation Styling */
        .ecg-wave-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 120px;
          pointer-events: none;
          z-index: 1;
        }

        .ecg-wave {
          width: 100%;
          height: 100%;
        }

        .ecg-path-animated {
          animation: ecg-draw 4s linear infinite;
        }

        @keyframes ecg-draw {
          to {
            stroke-dashoffset: -2000;
          }
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 5rem;
            text-align: center;
          }
          .hero-content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-stats {
            justify-content: center;
            width: 100%;
          }
          .hero-graphic-wrapper {
            margin-top: 2rem;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 2.8rem;
          }
          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
          }
          .badge-1 { right: 0; }
          .badge-2 { left: 0; }
        }
      `}</style>
    </section>
  );
}
