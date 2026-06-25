import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-brand-col">
          <div className="footer-logo">
            <svg viewBox="0 0 100 100" className="footer-logo-svg" width="28" height="28">
              <path 
                d="M12 35 C 12 15, 45 10, 50 35 C 55 10, 88 15, 88 35 C 88 60, 60 80, 50 88 C 40 80, 12 60, 12 35 Z" 
                fill="none" 
                stroke="#ef4444" 
                strokeWidth="6"
              />
              <path 
                d="M20 50 L 38 50 L 44 32 L 50 68 L 56 42 L 62 50 L 80 50" 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="6"
              />
            </svg>
            <span className="logo-text">
              HEARTBEAT<span className="logo-subtext">DISTRIBUTION</span>
            </span>
          </div>
          <p className="brand-desc">
            Seamless GDP-compliant pharmaceutical logistics and B2B wholesale supply networks delivering life-critical formulations globally.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links-col">
          <h4>Wholesale Catalog</h4>
          <ul>
            <li><a href="#therapeutics">Prescription (Rx)</a></li>
            <li><a href="#therapeutics">Over-the-Counter (OTC)</a></li>
            <li><a href="#therapeutics">Cold-Chain Biologics</a></li>
            <li><a href="#therapeutics">Medical Supplies</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Smart Logistics</h4>
          <ul>
            <li><a href="#innovation">Smart Warehouse</a></li>
            <li><a href="#innovation">Cold-Chain Telemetry</a></li>
            <li><a href="#innovation">AI Route Dispatch</a></li>
            <li><a href="#innovation">Anti-Counterfeit Audits</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Compliance</h4>
          <ul>
            <li><a href="#">GDP Certification</a></li>
            <li><a href="#">B2B Partner Registration</a></li>
            <li><a href="#">Quality Standards</a></li>
            <li><a href="#">Distribution Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} Heartbeat Distributors Co. All logistics and distribution rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Distribution Policy</a>
          <span>&middot;</span>
          <a href="#">Terms of Supply</a>
        </div>
      </div>

      <style>{`
        .footer-section {
          background-color: #04070d;
          border-top: 1px solid var(--border);
          padding: 5rem 0 2rem;
          position: relative;
          z-index: 10;
          text-align: left;
        }

        .footer-container {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-logo-svg {
          filter: drop-shadow(0 0 5px rgba(239, 68, 68, 0.3));
        }

        .footer-brand-col .logo-text {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.15rem;
          letter-spacing: 0.05em;
          color: var(--text-primary);
        }

        .footer-brand-col .logo-subtext {
          color: var(--secondary);
          font-weight: 400;
        }

        .brand-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 280px;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
        }

        .social-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          color: var(--text-primary);
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-2px);
        }

        .footer-links-col h4 {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }

        .footer-links-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links-col ul li a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.2s ease;
        }

        .footer-links-col ul li a:hover {
          color: var(--secondary);
        }

        /* Footer Bottom */
        .footer-bottom {
          border-top: 1px solid var(--border);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .footer-bottom-links {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .footer-bottom-links a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-bottom-links a:hover {
          color: var(--text-secondary);
        }

        @media (max-width: 992px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 576px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
