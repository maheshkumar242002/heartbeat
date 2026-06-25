import React, { useState } from 'react';
import { Microscope, Dna, TestTube, CheckCircle2, ChevronRight, Activity, Truck, MapPin, Warehouse, Thermometer, ShieldAlert } from 'lucide-react';

export default function Innovation() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeLanes, setActiveLanes] = useState([true, true, false, false, false]);
  const [selectedNode, setSelectedNode] = useState(0);

  const steps = [
    {
      title: "Cold-Chain Thermal Tracking",
      subtitle: "Active Environmental Sensors",
      desc: "Deploying continuous, cellular-enabled temperature loggers that broadcast status reports every 60 seconds to guarantee thermal bounds.",
      icon: <Thermometer size={20} />
    },
    {
      title: "Anti-Counterfeit Auditing",
      subtitle: "Secured Batch Coding & DNA Seals",
      desc: "Auditing barcode series and secure batch markers at check-in to confirm absolute manufacturer authenticity before local dispatch.",
      icon: <Warehouse size={20} />
    },
    {
      title: "Automated Picking Lines",
      subtitle: "Precision Electronic Sorting",
      desc: "Using digitized warehouse routing algorithms to group product lots, optimizing picker time and eliminating sorting errors.",
      icon: <TestTube size={20} />
    },
    {
      title: "Optimized Fleet Routing",
      subtitle: "Real-time AI Dispatch Planner",
      desc: "Calculating traffic-sensitive routes and dispatch timings for our fleet of climate-regulated trucks to ensure prompt delivery.",
      icon: <Truck size={20} />
    }
  ];

  const nodeDetails = [
    {
      id: 0,
      name: "Central Depot (Boston Hub)",
      location: "Boston Logistics Center, MA",
      status: "Operational - Dispatching",
      temp: "+4.1°C (Stable)",
      range: "2.0°C to 8.0°C",
      gps: "42.3601° N, 71.0589° W",
      details: "Central temperature-regulated warehouse. Standard inventory checks complete.",
      color: "#ef4444"
    },
    {
      id: 1,
      name: "Refrigerated Fleet Cargo",
      location: "In Transit - I-95 Expressway",
      status: "En Route - On Time",
      temp: "+3.6°C (Stable)",
      range: "2.0°C to 8.0°C",
      gps: "41.8240° N, 71.4128° W",
      details: "Climate-controlled vehicle HB-FLEET-409. Telemetry report status normal.",
      color: "#3b82f6"
    },
    {
      id: 2,
      name: "Regional Sorting Hub",
      location: "East Coast Gateway, NJ",
      status: "Active Sorting",
      temp: "+4.8°C (Stable)",
      range: "2.0°C to 8.0°C",
      gps: "40.7128° N, 74.0060° W",
      details: "Secondary routing depot. Preparing localized deliveries for clinics.",
      color: "#06b6d4"
    },
    {
      id: 3,
      name: "Partner Retail Pharmacy",
      location: "Apex Care Pharmacy, NY",
      status: "Order Delivered",
      temp: "+5.2°C (Stable)",
      range: "2.0°C to 8.0°C",
      gps: "40.7580° N, 73.9855° W",
      details: "Secure hand-off complete. Digital delivery token signature confirmed.",
      color: "#a855f7"
    },
    {
      id: 4,
      name: "Emergency Medical Center",
      location: "Mercy General Hospital, NY",
      status: "Arrived - Dispatching Ward",
      temp: "+3.9°C (Stable)",
      range: "2.0°C to 8.0°C",
      gps: "40.7220° N, 73.9980° W",
      details: "Urgent cold-chain biologics batch transferred directly to emergency pharmacy vaults.",
      color: "#10b981"
    }
  ];

  const handleNodeClick = (index) => {
    setSelectedNode(index);
    const next = [...activeLanes];
    next[index] = !next[index];
    setActiveLanes(next);
  };

  return (
    <section id="innovation" className="innovation-section section">
      <div className="bg-radial"></div>
      <div className="bg-grid"></div>

      <div className="container">
        <div className="section-header">
          <span className="tag">Logistics Infrastructure</span>
          <h2>Smart Cold-Chain Logistics</h2>
          <p>We combine active thermal telemetry with digital order validation to deliver life-critical medications safely.</p>
        </div>

        <div className="innovation-grid">
          {/* Left Column: Interactive Formulation Steps */}
          <div className="steps-panel">
            <h3 className="panel-title">The Logistics Lifecycle</h3>
            <div className="steps-list">
              {steps.map((step, idx) => (
                <div 
                  key={idx}
                  className={`step-item glass ${activeStep === idx ? 'active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="step-num-col">
                    <span className="step-num">0{idx + 1}</span>
                    {idx < steps.length - 1 && <div className="step-connector"></div>}
                  </div>
                  <div className="step-content">
                    <div className="step-title-row">
                      <div className="step-icon-wrapper">
                        {step.icon}
                      </div>
                      <div>
                        <h4>{step.title}</h4>
                        <span className="step-subtitle">{step.subtitle}</span>
                      </div>
                    </div>
                    {activeStep === idx && (
                      <p className="step-desc animate-slide-down">
                        {step.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Fleet Sandbox */}
          <div className="molecular-sandbox glass">
            <div className="sandbox-header">
              <div className="sandbox-status">
                <span className="status-pulse-green"></span>
                <span>Active Cold-Chain Sensor Network</span>
              </div>
              <h3>Smart Fleet & Transit Simulator</h3>
              <p>Click transit nodes below to toggle active logistics lanes, check temperature stability, and inspect vehicle status.</p>
            </div>

            {/* Molecule Grid Visualizer -> Rebranded to Transit Map */}
            <div className="molecule-visualization-area">
              <svg className="sandbox-svg" viewBox="0 0 400 300">
                {/* Delivery Lanes connecting hubs */}
                {activeLanes[0] && activeLanes[1] && (
                  <line x1="100" y1="150" x2="200" y2="80" className="covalent-bond animate-dash" />
                )}
                {activeLanes[1] && activeLanes[2] && (
                  <line x1="200" y1="80" x2="300" y2="150" className="covalent-bond" />
                )}
                {activeLanes[0] && activeLanes[3] && (
                  <line x1="100" y1="150" x2="160" y2="230" className="covalent-bond" />
                )}
                {activeLanes[2] && activeLanes[4] && (
                  <line x1="300" y1="150" x2="240" y2="230" className="covalent-bond" />
                )}
                {activeLanes[3] && activeLanes[4] && (
                  <line x1="160" y1="230" x2="240" y2="230" className="covalent-bond" />
                )}
                {activeLanes[1] && activeLanes[3] && (
                  <line x1="200" y1="80" x2="160" y2="230" className="covalent-bond covalent-weak" />
                )}

                {/* Transit Nodes */}
                {/* Node 1: Depot */}
                <g 
                  className={`molecule-node-group ${selectedNode === 0 ? 'bonded' : ''}`}
                  onClick={() => handleNodeClick(0)}
                  transform="translate(100, 150)"
                >
                  <circle r="22" className="node-outer" />
                  <circle r="12" className="node-inner" fill="#ef4444" />
                  <text y="4" textAnchor="middle" className="node-label">DEPOT</text>
                </g>

                {/* Node 2: Cargo Fleet */}
                <g 
                  className={`molecule-node-group ${selectedNode === 1 ? 'bonded' : ''}`}
                  onClick={() => handleNodeClick(1)}
                  transform="translate(200, 80)"
                >
                  <circle r="22" className="node-outer" />
                  <circle r="12" className="node-inner" fill="#3b82f6" />
                  <text y="4" textAnchor="middle" className="node-label">FLEET</text>
                </g>

                {/* Node 3: Regional Hub */}
                <g 
                  className={`molecule-node-group ${selectedNode === 2 ? 'bonded' : ''}`}
                  onClick={() => handleNodeClick(2)}
                  transform="translate(300, 150)"
                >
                  <circle r="22" className="node-outer" />
                  <circle r="12" className="node-inner" fill="#06b6d4" />
                  <text y="4" textAnchor="middle" className="node-label">HUB</text>
                </g>

                {/* Node 4: Clinic */}
                <g 
                  className={`molecule-node-group ${selectedNode === 3 ? 'bonded' : ''}`}
                  onClick={() => handleNodeClick(3)}
                  transform="translate(160, 230)"
                >
                  <circle r="22" className="node-outer" />
                  <circle r="12" className="node-inner" fill="#a855f7" />
                  <text y="4" textAnchor="middle" className="node-label">CLINIC</text>
                </g>

                {/* Node 5: Pharmacy */}
                <g 
                  className={`molecule-node-group ${selectedNode === 4 ? 'bonded' : ''}`}
                  onClick={() => handleNodeClick(4)}
                  transform="translate(240, 230)"
                >
                  <circle r="22" className="node-outer" />
                  <circle r="12" className="node-inner" fill="#10b981" />
                  <text y="4" textAnchor="middle" className="node-label">RX</text>
                </g>
              </svg>
            </div>

            {/* Smart Transit Status Report */}
            <div className="molecule-status-panel">
              <div className="status-row">
                <span className="label">Inspecting Hub:</span>
                <span className="val text-gradient font-mono" style={{ color: nodeDetails[selectedNode].color }}>
                  {nodeDetails[selectedNode].name}
                </span>
              </div>
              <div className="status-row">
                <span className="label">Telemetry Temp:</span>
                <span className="val stable font-mono">{nodeDetails[selectedNode].temp}</span>
              </div>
              <div className="status-row">
                <span className="label">Logistics Range:</span>
                <span className="val font-mono">{nodeDetails[selectedNode].range}</span>
              </div>
              <div className="status-row">
                <span className="label">GPS Coordinates:</span>
                <span className="val font-mono text-muted">{nodeDetails[selectedNode].gps}</span>
              </div>
              <div className="status-row">
                <span className="label">Lane Connectivity:</span>
                <span className="val font-mono" style={{ color: activeLanes[selectedNode] ? '#10b981' : '#f59e0b' }}>
                  {activeLanes[selectedNode] ? 'SECURE TRANSIT' : 'STANDBY ROUTE'}
                </span>
              </div>
              <div className="status-desc-block">
                <p className="font-mono text-muted">{nodeDetails[selectedNode].details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .innovation-section {
          background-color: var(--bg-dark);
          position: relative;
        }

        .innovation-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: stretch;
          text-align: left;
        }

        .steps-panel {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .panel-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .step-item {
          padding: 1.5rem;
          cursor: pointer;
          display: flex;
          gap: 1.5rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .step-item.active {
          background: rgba(20, 30, 55, 0.5);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .step-num-col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .step-num {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-muted);
          transition: color 0.3s ease;
        }

        .step-item.active .step-num {
          color: var(--primary);
        }

        .step-connector {
          width: 2px;
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          margin-top: 0.5rem;
        }

        .step-icon-wrapper {
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          color: var(--text-muted);
          transition: all 0.3s ease;
        }

        .step-item.active .step-icon-wrapper {
          background: var(--primary-glow);
          color: var(--primary);
        }

        .step-title-row {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .step-title-row h4 {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .step-subtitle {
          font-size: 0.8rem;
          color: var(--text-muted);
          display: block;
        }

        .step-desc {
          margin-top: 1rem;
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.6;
        }

        .animate-slide-down {
          animation: slideDown 0.35s ease forwards;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Molecular Sandbox Styles */
        .molecular-sandbox {
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        .sandbox-header {
          margin-bottom: 1.5rem;
        }

        .sandbox-status {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .status-pulse-green {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          display: inline-block;
        }

        .sandbox-header h3 {
          font-size: 1.4rem;
          margin-bottom: 0.25rem;
        }

        .sandbox-header p {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .molecule-visualization-area {
          flex: 1;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          border: 1px solid var(--border);
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 260px;
        }

        .sandbox-svg {
          width: 100%;
          height: 100%;
        }

        /* Node Group styling */
        .molecule-node-group {
          cursor: pointer;
        }

        .node-outer {
          fill: rgba(255, 255, 255, 0.02);
          stroke: rgba(255, 255, 255, 0.08);
          stroke-width: 1;
          transition: all 0.3s ease;
        }

        .molecule-node-group:hover .node-outer {
          fill: rgba(255, 255, 255, 0.05);
          stroke: rgba(255, 255, 255, 0.2);
        }

        .molecule-node-group.bonded .node-outer {
          stroke: var(--secondary);
          stroke-width: 1.5;
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.4));
        }

        .node-inner {
          transition: transform 0.3s ease;
        }

        .molecule-node-group:hover .node-inner {
          transform: scale(1.15);
        }

        .node-label {
          font-family: var(--font-heading);
          font-size: 8px;
          font-weight: 800;
          fill: var(--text-primary);
          pointer-events: none;
        }

        /* Covalent bond lines */
        .covalent-bond {
          stroke: var(--secondary);
          stroke-width: 2.5;
          stroke-linecap: round;
          opacity: 0.7;
          filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.5));
          stroke-dasharray: 8 4;
          animation: bondDash 20s linear infinite;
        }

        @keyframes bondDash {
          to { stroke-dashoffset: -100; }
        }

        .covalent-weak {
          stroke: var(--primary);
          opacity: 0.4;
          filter: drop-shadow(0 0 5px rgba(239, 68, 68, 0.3));
        }

        /* Status Panel */
        .molecule-status-panel {
          border-top: 1px solid var(--border);
          padding-top: 1.25rem;
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .status-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
        }

        .status-row .label {
          color: var(--text-muted);
        }

        .status-row .val {
          font-weight: 700;
        }

        .val.stable { color: #10b981; }
        .val.unstable { color: #f59e0b; }

        .status-desc-block {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          padding: 0.75rem 1rem;
          margin-top: 0.5rem;
          border: 1px solid var(--border);
        }

        .status-desc-block p {
          font-size: 0.78rem;
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .innovation-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 576px) {
          .molecular-sandbox {
            padding: 1.5rem;
          }
          .molecule-visualization-area {
            min-height: 220px;
          }
        }
      `}</style>
    </section>
  );
}
