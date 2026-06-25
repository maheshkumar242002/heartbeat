import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, ClipboardCheck } from 'lucide-react';

export default function Contact({ inquiryList, setInquiryList }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'partnership',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNum, setTicketNum] = useState('');

  // Automatically switch subject to bulk quote if items are in the RFQ list
  useEffect(() => {
    if (inquiryList.length > 0) {
      setFormData((prev) => ({
        ...prev,
        subject: 'quote'
      }));
    }
  }, [inquiryList]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate API request to create ticket
    const randomTicket = 'HB-PHARMA-' + Math.floor(100000 + Math.random() * 900000);
    setTicketNum(randomTicket);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="bg-radial"></div>
      <div className="bg-grid"></div>

      <div className="container">
        <div className="section-header">
          <span className="tag">Partner Desk</span>
          <h2>Wholesale Inquiry Portal</h2>
          <p>Register as a pharmaceutical partner or request a bulk quote. Our supply desk responds within 12 business hours.</p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info & Map Pulse */}
          <div className="contact-info-col">
            <div className="contact-info-card glass">
              <h3>Central Corporate & Pharma Office</h3>
              <p className="card-desc">For contract negotiations, regulatory document filings, and licensing audits.</p>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <MapPin size={18} />
                  </div>
                  <div className="info-details">
                    <span className="label">Corporate Headquarters</span>
                    <span className="value">Logistics Corridor, Building 4, Suite 100, Boston, MA</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Mail size={18} />
                  </div>
                  <div className="info-details">
                    <span className="label">Supply Desk</span>
                    <span className="value">supply@heartbeatpharma.com</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Phone size={18} />
                  </div>
                  <div className="info-details">
                    <span className="label">Wholesale Support Hotlines</span>
                    <span className="value">+1 (555) 832-1200</span>
                  </div>
                </div>
              </div>

              {/* Graphic Pulsing Map locator */}
              <div className="map-locator-box">
                <div className="globe-graphic">
                  <div className="grid-sphere"></div>
                  <div className="pulse-locator-pin location-boston"></div>
                  <div className="pulse-locator-pin location-london"></div>
                  <div className="pulse-locator-pin location-tokyo"></div>
                  <span className="locator-caption">Global Pharma Supply Sync Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-col">
            {isSubmitted ? (
              <div className="contact-success-pane glass animate-fade-in">
                <div className="success-icon-wrapper">
                  <CheckCircle2 size={48} className="text-secondary animate-pulse-glow" />
                </div>
                <h2>Inquiry Submitted Successfully</h2>
                <p>Thank you, <strong>{formData.name}</strong>. Your wholesale request has been logged and queued for pharmaceutical licensing and supply review.</p>
                
                {inquiryList.length > 0 && (
                  <div className="success-rfq-items glass">
                    <div className="success-rfq-header">
                      <ClipboardCheck size={16} className="text-secondary" />
                      <span>Logged B2B RFQ Items ({inquiryList.length})</span>
                    </div>
                    <div className="success-rfq-list">
                      {inquiryList.map((item) => (
                        <div key={item.id} className="success-rfq-item font-mono">
                          <span>{item.name}</span>
                          <span>Qty: {item.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="ticket-badge font-mono">
                  <span className="ticket-label">TICKET ID:</span>
                  <span className="ticket-val">{ticketNum}</span>
                </div>

                <div className="success-meta">
                  <ShieldCheck size={16} className="meta-icon" />
                  <span>Secure B2B Data Transit Active</span>
                </div>

                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'partnership', message: '' });
                    setInquiryList([]); // Clear the cart on successful submit
                  }}
                >
                  New Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form-box glass">
                <h3>B2B Wholesale Request</h3>
                <p className="form-desc">Provide your credentials and wholesale inquiry detail below.</p>

                <div className="form-group">
                  <label htmlFor="name">Pharmacy / Institution Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    placeholder="Enter pharmacy name or clinic body"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Registered Professional Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    placeholder="licensing@pharmacy.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Inquiry Department</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange}
                  >
                    <option value="partnership">Wholesale & Pharma Licensing Partnership</option>
                    <option value="quote">Bulk Procurement Quote Request (RFQ)</option>
                    <option value="logistics">Cold-Chain Therapeutics & Delivery</option>
                    <option value="general">General Corporate Inquiry</option>
                  </select>
                </div>

                {/* RFQ Cart Summary inside the form */}
                {inquiryList.length > 0 && (
                  <div className="form-selected-items-summary glass">
                    <label className="summary-title text-secondary">Attached B2B RFQ Items ({inquiryList.length})</label>
                    <div className="summary-items-list">
                      {inquiryList.map((item) => (
                        <div key={item.id} className="summary-item font-mono">
                          <span className="summary-item-name">{item.name} ({item.packSize})</span>
                          <span className="summary-item-qty text-gradient-blue">Qty: {item.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="message">Message Details / Procurement Info</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    value={formData.message} 
                    onChange={handleChange}
                    placeholder="Please specify licensing IDs, estimated monthly procurement values, or shipment speed requests..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Submit Wholesale Request <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-dark);
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: stretch;
          text-align: left;
        }

        .contact-info-card {
          padding: 2.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .contact-info-card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .card-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .info-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary);
        }

        .info-details {
          display: flex;
          flex-direction: column;
        }

        .info-details .label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .info-details .value {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        /* Map Pulse Locator Box styling */
        .map-locator-box {
          height: 180px;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--border);
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .globe-graphic {
          position: relative;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 80%);
        }

        .grid-sphere {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px);
          background-size: 20px 20px;
          background-position: center;
        }

        /* Location pins */
        .pulse-locator-pin {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary);
          box-shadow: 0 0 10px var(--primary);
        }

        .pulse-locator-pin::after {
          content: '';
          position: absolute;
          top: -6px;
          left: -6px;
          width: 20px;
          height: 20px;
          border: 1.5px solid var(--primary);
          border-radius: 50%;
          animation: pulse 2.2s infinite ease-out;
          opacity: 0;
        }

        .location-boston { top: 35%; left: 25%; }
        .location-london { top: 28%; left: 52%; background: var(--secondary); box-shadow: 0 0 10px var(--secondary); }
        .location-london::after { border-color: var(--secondary); }
        .location-tokyo { top: 48%; left: 82%; background: var(--accent); box-shadow: 0 0 10px var(--accent); }
        .location-tokyo::after { border-color: var(--accent); }

        .locator-caption {
          position: absolute;
          bottom: 12px;
          left: 12px;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .locator-caption::before {
          content: '';
          width: 5px;
          height: 5px;
          background-color: #10b981;
          border-radius: 50%;
          display: inline-block;
          animation: pulse 1.5s infinite;
        }

        /* Form styling */
        .contact-form-box {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-form-box h3 {
          font-size: 1.5rem;
        }

        .form-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        select {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid var(--border);
          color: var(--text-primary);
          border-radius: 8px;
          padding: 0.8rem 1rem;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        select:focus {
          outline: none;
          border-color: var(--secondary);
          box-shadow: 0 0 12px var(--secondary-glow);
        }

        /* Attached RFQ Items block styling */
        .form-selected-items-summary {
          border: 1px solid rgba(59, 130, 246, 0.3);
          background: rgba(59, 130, 246, 0.04);
          border-radius: 10px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-selected-items-summary .summary-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .summary-items-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          max-height: 120px;
          overflow-y: auto;
          padding-right: 0.5rem;
        }

        .summary-items-list::-webkit-scrollbar {
          width: 3px;
        }
        .summary-items-list::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
        }

        .summary-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .summary-item-name {
          color: var(--text-secondary);
        }

        .summary-item-qty {
          font-weight: 700;
        }

        .submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 1rem;
        }

        /* Success screen styling */
        .contact-success-pane {
          padding: 3rem 2.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          justify-content: center;
          height: 100%;
        }

        .success-icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.05);
          border: 1.5px solid rgba(59, 130, 246, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
        }

        .contact-success-pane h2 {
          font-size: 1.8rem;
          color: var(--text-primary);
        }

        .contact-success-pane p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          max-width: 400px;
        }

        /* Success logged RFQ items */
        .success-rfq-items {
          width: 100%;
          max-width: 340px;
          background: rgba(0,0,0,0.2);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1rem;
          text-align: left;
        }

        .success-rfq-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.8rem;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid var(--border);
          padding-bottom: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .success-rfq-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .success-rfq-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .ticket-badge {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          display: flex;
          gap: 0.75rem;
          font-size: 0.9rem;
        }

        .ticket-label {
          color: var(--text-muted);
          font-weight: 500;
        }

        .ticket-val {
          color: var(--secondary);
          font-weight: 700;
        }

        .success-meta {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .meta-icon {
          color: #10b981;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 0.4s ease forwards;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 576px) {
          .contact-info-card, .contact-form-box {
            padding: 1.5rem;
          }
          .contact-success-pane {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
