import React, { useState, useEffect } from 'react';
import { Award, Compass, Heart, Globe, Atom } from 'lucide-react';

function Counter({ endValue, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(endValue, 10);
    if (isNaN(end)) return;
    
    const totalSteps = 60;
    const increment = end / totalSteps;
    const stepTime = duration / totalSteps;
    
    let timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function About() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      icon: <Globe className="pillar-icon" />,
      title: "Global Supply Network",
      desc: "Operating temperature-controlled distribution networks across 50+ countries. We ensure rapid, temperature-sensitive delivery to pharmacies, hospitals, and clinics.",
      glowColor: "rgba(59, 130, 246, 0.4)"
    },
    {
      icon: <Award className="pillar-icon" />,
      title: "GDP Standard Safety",
      desc: "Strictly adhering to Good Distribution Practice (GDP) protocols. Every batch is tracked and checked to eliminate any counterfeit or compromised products.",
      glowColor: "rgba(239, 68, 68, 0.4)"
    },
    {
      icon: <Heart className="pillar-icon" />,
      title: "B2B Client Portal",
      desc: "Providing wholesale partners with direct inventory access, transparent bulk pricing schedules, and real-time shipment monitoring systems.",
      glowColor: "rgba(6, 182, 212, 0.4)"
    },
    {
      icon: <Atom className="pillar-icon" />,
      title: "Cold Chain Logistics",
      desc: "Maintaining strict thermal bounds (e.g., 2°C to 8°C) for vaccines, insulin, and biologics through specialized refrigerated storage and transport fleet.",
      glowColor: "rgba(139, 92, 246, 0.4)"
    }
  ];

  return (
    <section id="about" className="about-section section">
      <div className="bg-grid"></div>
      
      <div className="container">
        <div className="section-header">
          <span className="tag">Our Identity</span>
          <h2>A Heritage of Pharmaceutical Supply</h2>
          <p>We are a forward-looking pharmaceutical logistics company dedicated to bridging manufacturers with clinical points of care efficiently.</p>
        </div>

        <div className="about-content">
          {/* Left Column: Interactive Pillar Panels */}
          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className={`pillar-card glass ${activePillar === index ? 'active' : ''}`}
                onClick={() => setActivePillar(index)}
                style={{
                  '--pillar-glow': pillar.glowColor
                }}
              >
                <div className="pillar-header">
                  <div className="pillar-icon-box">
                    {pillar.icon}
                  </div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                </div>
                <p className="pillar-desc">{pillar.desc}</p>
                <div className="card-indicator"></div>
              </div>
            ))}
          </div>

          {/* Right Column: Mission Detail and Animated Counters */}
          <div className="about-narrative">
            <div className="narrative-text glass">
              <h3 className="text-gradient">Powering Healthcare Logistics</h3>
              <p>
                Heartbeat Distributors was founded with a clear ambition: to build a more resilient, transparent, and secure pharmaceutical supply chain for global healthcare.
              </p>
              <p>
                We do not just ship medical cargo; we coordinate full logistics systems, verify temperature profiles, and validate product integrity. Our smart logistics centers operate around the clock, ensuring that critical cardiac, neurological, metabolic, and emergency care supplies reach retail and clinical hubs safely.
              </p>
              
              <blockquote className="narrative-quote">
                "A supply chain is only as strong as its weakest link. We ensure every link—from loading dock to patient—is perfect."
                <cite>— Sarah Jenkins, VP of Global Logistics</cite>
              </blockquote>
            </div>

            {/* Live Stats Counters */}
            <div className="about-metrics">
              <div className="metric-box glass">
                <span className="metric-num"><Counter endValue="18" suffix="+" /></span>
                <span className="metric-name">Years in Logistics</span>
              </div>
              <div className="metric-box glass">
                <span className="metric-num"><Counter endValue="1200" suffix="+" /></span>
                <span className="metric-name">Wholesale Clients</span>
              </div>
              <div className="metric-box glass">
                <span className="metric-num"><Counter endValue="12" suffix="M+" /></span>
                <span className="metric-name">Units Shipped Yearly</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: linear-gradient(180deg, var(--bg-dark) 0%, rgba(15, 23, 42, 0.4) 50%, var(--bg-dark) 100%);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: flex-start;
          text-align: left;
        }

        /* Pillars Grid Styles */
        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .pillar-card {
          padding: 1.8rem;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .pillar-card:hover, .pillar-card.active {
          transform: translateX(10px);
          border-color: var(--border-hover);
          background: rgba(20, 30, 55, 0.7);
          box-shadow: 0 10px 30px var(--pillar-glow);
        }

        .pillar-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .pillar-icon-box {
          padding: 0.6rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary);
          transition: transform 0.3s ease;
        }

        .pillar-card:hover .pillar-icon-box, 
        .pillar-card.active .pillar-icon-box {
          transform: scale(1.1) rotate(5deg);
          color: var(--primary);
        }

        .pillar-title {
          font-size: 1.25rem;
          font-weight: 600;
        }

        .pillar-desc {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
          transition: color 0.3s ease;
        }

        .pillar-card:hover .pillar-desc, 
        .pillar-card.active .pillar-desc {
          color: var(--text-secondary);
        }

        .card-indicator {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: var(--gradient-tech);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .pillar-card.active .card-indicator, 
        .pillar-card:hover .card-indicator {
          opacity: 1;
        }

        /* Narrative Column Styles */
        .about-narrative {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .narrative-text {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .narrative-text h3 {
          font-size: 1.8rem;
          font-weight: 700;
        }

        .narrative-text p {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.7;
        }

        .narrative-quote {
          border-left: 3px solid var(--primary);
          padding-left: 1.5rem;
          margin-top: 1rem;
          font-style: italic;
          color: var(--text-primary);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .narrative-quote cite {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          font-style: normal;
        }

        /* Metrics grid */
        .about-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .metric-box {
          padding: 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .metric-num {
          font-size: 2.2rem;
          font-family: var(--font-heading);
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1;
        }

        .metric-name {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        @media (max-width: 992px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 576px) {
          .about-metrics {
            grid-template-columns: 1fr;
          }
          .narrative-text {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
