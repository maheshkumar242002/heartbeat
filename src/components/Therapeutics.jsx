import React, { useState } from 'react';
import { Shield, Brain, Heart, Layers, Sparkles, X, ChevronRight, Activity, ShoppingCart, Plus, Minus, Trash2, ClipboardList } from 'lucide-react';

export default function Therapeutics({ inquiryList, setInquiryList }) {
  const [activeCategory, setActiveCategory] = useState('rx');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);

  const categories = [
    { id: 'rx', name: 'Prescription (Rx)', icon: <Activity size={16} /> },
    { id: 'otc', name: 'Over-the-Counter (OTC)', icon: <Sparkles size={16} /> },
    { id: 'coldchain', name: 'Cold-Chain Biologics', icon: <Heart size={16} /> },
    { id: 'supplies', name: 'Medical Supplies', icon: <Shield size={16} /> }
  ];

  const products = {
    rx: [
      {
        id: 'r1',
        name: 'CardioShield-V',
        target: 'Coronary Vascular Support Complex',
        desc: 'Advanced wholesale formulation engineered to support coronary vascular elasticity, improve arterial blood flow, and shield cardiac tissues.',
        manufacturer: 'Heartbeat Labs',
        packSize: '500 Capsules / Bottle',
        moq: '10 Bottles',
        ingredients: 'Coenzyme Q10, L-Carnitine, Trans-Resveratrol',
        absorb: '94.2% Bio-availability',
        storage: 'Store under 25°C',
        color: '#ef4444'
      },
      {
        id: 'r2',
        name: 'Neuropraxis-X',
        target: 'Synaptic Transmission Complex',
        desc: 'A premium neuro-active complex that preserves cellular membrane integrity, supports acetylcholine synthesis, and increases mental focus.',
        manufacturer: 'Heartbeat Labs',
        packSize: '100 Tablets / Pack',
        moq: '50 Packs',
        ingredients: 'Alpha-GPC, Phosphatidylserine, Bacopa Monnieri',
        absorb: '96.8% Bio-availability',
        storage: 'Store dry under 25°C',
        color: '#3b82f6'
      }
    ],
    otc: [
      {
        id: 'o1',
        name: 'Vitabeat Complete',
        target: 'Mitochondrial Bioenergetics Daily Multivitamin',
        desc: 'An essential bio-active daily formulation designed to replenish core metabolic trace elements and stimulate cellular ATP synthesis.',
        manufacturer: 'Heartbeat Nutritionals',
        packSize: '200 Tablets / Bottle',
        moq: '100 Bottles',
        ingredients: 'Methylated Multivitamins, Organic Trace Minerals, Active Green Blend',
        absorb: '95.0% Bio-availability',
        storage: 'Store dry under 30°C',
        color: '#a855f7'
      },
      {
        id: 'o2',
        name: 'Cytoshield Immunity',
        target: 'Cellular Immune Defense & Radical Neutralizer',
        desc: 'Compounded with immune-modulators to boost adaptive immune response, stimulate defense antibodies, and maintain systemic homeostasis.',
        manufacturer: 'Heartbeat Nutritionals',
        packSize: '90 Capsules / Bottle',
        moq: '100 Bottles',
        ingredients: 'Beta-Glucan, Zinc Picolinate, Echinacea Liposomal Extract',
        absorb: '93.5% Bio-availability',
        storage: 'Store under 25°C',
        color: '#06b6d4'
      }
    ],
    coldchain: [
      {
        id: 'c1',
        name: 'VasoPulse Plus Vials',
        target: 'Endothelial Function & Nitric Oxide Optimization',
        desc: 'Promotes arterial vasodilation, regulates blood vessel tone, and supports sustained cardiovascular endurance. Requires strict refrigeration.',
        manufacturer: 'Heartbeat Biologics',
        packSize: '10 Vials / Box',
        moq: '20 Boxes',
        ingredients: 'L-Arginine Pyroglutamate, Beetroot Bio-Extract, Grape Seed Extract',
        absorb: '89.5% Bio-availability',
        storage: 'Refrigerated Cold-Chain (2°C to 8°C)',
        color: '#3b82f6'
      },
      {
        id: 'c2',
        name: 'MyeloGuard Ampoules',
        target: 'Myelin Sheath Repair & Nerve Conductivity',
        desc: 'Aids in peripheral nerve health, structural nerve sheath maintenance, and reduces neuro-inflammatory markers. Cold-chain certified.',
        manufacturer: 'Heartbeat Biologics',
        packSize: '30 Ampoules / Box',
        moq: '15 Boxes',
        ingredients: 'Methylcobalamin, Benfotiamine, Alpha Lipoic Acid',
        absorb: '91.2% Bio-availability',
        storage: 'Refrigerated Cold-Chain (2°C to 8°C)',
        color: '#10b981'
      }
    ],
    supplies: [
      {
        id: 's1',
        name: 'CardioPulse ECG Monitor',
        target: 'Wireless Clinical Diagnostic Electrocardiograph',
        desc: 'High-fidelity mobile ECG tracking array with smart cloud data sync. Engineered for clinics and outpatient monitoring.',
        manufacturer: 'Heartbeat Diagnostics',
        packSize: '1 Unit / Box',
        moq: '2 Units',
        ingredients: 'Clinical ECG Hardware, Rechargeable Lead Array',
        absorb: 'FDA Cleared / CE Mark',
        storage: 'Store dry under 40°C',
        color: '#f59e0b'
      },
      {
        id: 's2',
        name: 'Cytoshield Protective Suit',
        target: 'Grade-A Biological Containment Gear',
        desc: 'Full-body protective suits with integrated boots and laminate seals. Designed for lab biosafety and infectious environments.',
        manufacturer: 'Heartbeat Protective',
        packSize: '100 Suits / Case',
        moq: '5 Cases',
        ingredients: 'Non-woven protective laminate, double-seam seal',
        absorb: 'EN 14126 Certified',
        storage: 'Store in dry warehouse conditions',
        color: '#ef4444'
      }
    ]
  };

  const handleAddToCart = (product, quantity) => {
    const qty = parseInt(quantity, 10) || 1;
    setInquiryList((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: qty } : item));
      } else {
        return [...prev, { ...product, quantity: qty }];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    setInquiryList((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateCartQty = (productId, delta) => {
    setInquiryList((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: Math.max(1, nextQty) };
          }
          return item;
        })
    );
  };

  const getProductCartQty = (productId) => {
    const item = inquiryList.find((i) => i.id === productId);
    return item ? item.quantity : 0;
  };

  // Temp local qty in detail panel
  const [localQty, setLocalQty] = useState(1);

  return (
    <section id="therapeutics" className="therapeutics-section section">
      <div className="bg-grid"></div>

      <div className="container">
        <div className="section-header">
          <span className="tag">B2B Distribution Catalog</span>
          <h2>Wholesale Pharmaceutical Catalog</h2>
          <p>GDP-compliant wholesale pharmaceutical formulations and medical supplies available for retail pharmacies and healthcare providers.</p>
        </div>

        {/* Categories Tab Selector */}
        <div className="categories-tab-bar glass">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedProduct(null);
                setLocalQty(1);
              }}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid-layout">
          <div className="products-list-col">
            {products[activeCategory].map((prod) => {
              const inCartQty = getProductCartQty(prod.id);
              return (
                <div 
                  key={prod.id} 
                  className={`product-card glass ${selectedProduct?.id === prod.id ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedProduct(prod);
                    setLocalQty(inCartQty > 0 ? inCartQty : 1);
                  }}
                  style={{
                    '--card-accent': prod.color
                  }}
                >
                  <div className="product-card-top">
                    <div className="product-status">
                      <Activity size={12} className="pulse-activity" />
                      <span>{prod.manufacturer}</span>
                    </div>
                    {inCartQty > 0 && (
                      <span className="cart-badge font-mono">In Cart: {inCartQty}</span>
                    )}
                    <span className="product-tag font-mono">{prod.storage}</span>
                  </div>
                  <h3 className="product-name">{prod.name}</h3>
                  <h4 className="product-target">{prod.target}</h4>
                  <p className="product-desc-short">{prod.desc.substring(0, 110)}...</p>
                  
                  <div className="product-card-bottom-actions">
                    <div className="product-card-action">
                      <span>Specifications</span>
                      <ChevronRight size={16} className="arrow-icon" />
                    </div>
                    <span className="product-pack-size font-mono text-muted">{prod.packSize}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Details Column (Dynamic Preview Panel) */}
          <div className="details-preview-col">
            {selectedProduct ? (
              <div 
                className="details-pane glass animate-fade-in"
                style={{
                  borderTop: `4px solid ${selectedProduct.color}`
                }}
              >
                <button 
                  className="close-details-btn" 
                  onClick={() => setSelectedProduct(null)}
                  aria-label="Close details"
                >
                  <X size={18} />
                </button>
                <div className="details-header">
                  <span className="details-badge" style={{ backgroundColor: `${selectedProduct.color}15`, color: selectedProduct.color }}>
                    DISTRIBUTION SPEC SHEET
                  </span>
                  <h2>{selectedProduct.name}</h2>
                  <p className="details-target">{selectedProduct.target}</p>
                </div>

                <div className="details-body">
                  <div className="detail-group">
                    <label>Product Description</label>
                    <p>{selectedProduct.desc}</p>
                  </div>

                  <div className="details-grid-meta-box">
                    <div className="meta-box-row">
                      <span className="meta-label">Manufacturer:</span>
                      <span className="meta-val">{selectedProduct.manufacturer}</span>
                    </div>
                    <div className="meta-box-row">
                      <span className="meta-label">Wholesale Pack Size:</span>
                      <span className="meta-val font-mono">{selectedProduct.packSize}</span>
                    </div>
                    <div className="meta-box-row">
                      <span className="meta-label">Minimum Order Qty (MOQ):</span>
                      <span className="meta-val font-mono text-gradient-blue">{selectedProduct.moq}</span>
                    </div>
                    <div className="meta-box-row">
                      <span className="meta-label">Recommended Storage:</span>
                      <span className="meta-val text-primary font-mono">{selectedProduct.storage}</span>
                    </div>
                  </div>

                  <div className="detail-group">
                    <label>Active Chemical Composition</label>
                    <div className="ingredients-pills">
                      {selectedProduct.ingredients.split(', ').map((ing, idx) => (
                        <span key={idx} className="ing-pill">{ing}</span>
                      ))}
                    </div>
                  </div>

                  {/* Add to RFQ Cart Interface */}
                  <div className="rfq-actions-box glass">
                    <span className="rfq-box-title">Order RFQ Planner</span>
                    <div className="qty-selector-row">
                      <div className="qty-counter">
                        <button 
                          className="qty-btn"
                          onClick={() => setLocalQty(Math.max(1, localQty - 1))}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="qty-value font-mono">{localQty}</span>
                        <button 
                          className="qty-btn"
                          onClick={() => setLocalQty(localQty + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        className="btn btn-primary rfq-add-btn"
                        onClick={() => handleAddToCart(selectedProduct, localQty)}
                      >
                        <ShoppingCart size={16} />
                        {getProductCartQty(selectedProduct.id) > 0 ? 'Update Quantity' : 'Add to RFQ List'}
                      </button>
                    </div>
                    {getProductCartQty(selectedProduct.id) > 0 && (
                      <button 
                        className="rfq-remove-link"
                        onClick={() => {
                          handleRemoveFromCart(selectedProduct.id);
                          setLocalQty(1);
                        }}
                      >
                        <Trash2 size={12} /> Remove from Inquiry List
                      </button>
                    )}
                  </div>

                  <div className="details-disclaimer">
                    <span>* Direct supply available only for licensed retail pharmacies, clinics, and health institutions under active GDP credentials.</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="empty-details-pane glass">
                <Layers size={36} className="text-muted animate-float-slow" />
                <h3>Select a Catalog Product</h3>
                <p>Click any product on the left to inspect distribution specs, storage profiles, packaging sizes, and Minimum Order Quantities (MOQ).</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating RFQ Cart System */}
      {inquiryList.length > 0 && (
        <>
          {/* Floating Cart Launcher Button */}
          <button 
            className="floating-cart-btn animate-pulse-glow"
            onClick={() => setShowCart(true)}
            aria-label="Open B2B Inquiry List"
          >
            <div className="cart-icon-wrapper">
              <ClipboardList size={22} />
              <span className="cart-count-bubble">{inquiryList.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>
            <span className="cart-btn-label">RFQ Inquiry List</span>
          </button>

          {/* Cart Sidebar Modal Drawer */}
          {showCart && (
            <div className="cart-overlay animate-fade-in" onClick={() => setShowCart(false)}>
              <div className="cart-drawer glass animate-slide-left" onClick={(e) => e.stopPropagation()}>
                <div className="cart-drawer-header">
                  <div className="cart-header-title">
                    <ClipboardList size={20} className="text-secondary" />
                    <h3>RFQ Inquiry List</h3>
                  </div>
                  <button className="close-cart-btn" onClick={() => setShowCart(false)}>
                    <X size={20} />
                  </button>
                </div>

                <div className="cart-drawer-desc">
                  Review your wholesale bulk request. Proceeding will populate these items into the Partner Desk inquiry form below.
                </div>

                <div className="cart-drawer-items">
                  {inquiryList.map((item) => (
                    <div key={item.id} className="cart-drawer-item glass" style={{ borderLeft: `3px solid ${item.color}` }}>
                      <div className="cart-item-details">
                        <span className="cart-item-name">{item.name}</span>
                        <span className="cart-item-meta">{item.packSize}</span>
                        <span className="cart-item-moq text-muted">MOQ: {item.moq}</span>
                      </div>
                      <div className="cart-item-actions">
                        <div className="cart-qty-counter">
                          <button className="cart-qty-btn" onClick={() => updateCartQty(item.id, -1)}>
                            <Minus size={12} />
                          </button>
                          <span className="cart-qty-val font-mono">{item.quantity}</span>
                          <button className="cart-qty-btn" onClick={() => updateCartQty(item.id, 1)}>
                            <Plus size={12} />
                          </button>
                        </div>
                        <button className="cart-trash-btn" onClick={() => handleRemoveFromCart(item.id)}>
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-drawer-footer">
                  <a 
                    href="#contact" 
                    className="btn btn-primary cart-checkout-btn"
                    onClick={() => {
                      setShowCart(false);
                      // Smooth scroll happens naturally due to href="#contact"
                    }}
                  >
                    Compile & Send to Partner Desk <ChevronRight size={18} />
                  </a>
                  <button 
                    className="clear-cart-btn"
                    onClick={() => setInquiryList([])}
                  >
                    Clear All Items
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      <style>{`
        .therapeutics-section {
          background-color: var(--bg-dark);
          position: relative;
        }

        .categories-tab-bar {
          display: flex;
          justify-content: center;
          gap: 1rem;
          padding: 0.5rem;
          max-width: 750px;
          margin: 0 auto 3rem;
          border-radius: 9999px;
        }

        .category-tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.8rem 1.2rem;
          background: transparent;
          border: none;
          color: var(--text-muted);
          border-radius: 9999px;
          cursor: pointer;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .category-tab-btn:hover {
          color: var(--text-primary);
        }

        .category-tab-btn.active {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
          box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.1);
        }

        /* Products Layout */
        .products-grid-layout {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2.5rem;
          align-items: stretch;
          text-align: left;
        }

        .products-list-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .product-card {
          padding: 2rem;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-left: 2px solid transparent;
        }

        .product-card:hover {
          transform: translateY(-2px);
          border-color: var(--card-accent);
          background: rgba(20, 30, 55, 0.45);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
        }

        .product-card.selected {
          border-color: var(--card-accent);
          background: rgba(20, 30, 55, 0.65);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
        }

        .product-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .product-status {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .pulse-activity {
          color: var(--card-accent);
          animation: pulse 1.8s infinite;
        }

        .product-tag {
          font-size: 0.75rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          color: var(--text-muted);
        }

        .cart-badge {
          font-size: 0.72rem;
          background: var(--secondary-glow);
          border: 1px solid rgba(59, 130, 246, 0.3);
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
          color: #60a5fa;
          font-weight: 700;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.2);
        }

        .product-name {
          font-size: 1.6rem;
          margin-bottom: 0.25rem;
        }

        .product-target {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--card-accent);
          margin-bottom: 1rem;
        }

        .product-desc-short {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .product-card-bottom-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--border);
          padding-top: 1rem;
        }

        .product-card-action {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--text-primary);
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        .product-card:hover .arrow-icon {
          transform: translateX(4px);
        }

        .product-pack-size {
          font-size: 0.8rem;
        }

        /* Details Pane Column */
        .details-preview-col {
          position: sticky;
          top: 100px;
          height: fit-content;
        }

        .details-pane {
          padding: 2.5rem;
          position: relative;
          box-shadow: var(--glass-shadow);
        }

        .close-details-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .close-details-btn:hover {
          color: var(--text-primary);
        }

        .details-header {
          margin-bottom: 2rem;
        }

        .details-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          margin-bottom: 0.75rem;
        }

        .details-header h2 {
          font-size: 2.2rem;
          margin-bottom: 0.25rem;
        }

        .details-target {
          font-size: 1rem;
          color: var(--text-muted);
        }

        .details-body {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        .detail-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .detail-group label {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .detail-group p {
          font-size: 0.95rem;
          line-height: 1.7;
        }

        /* Wholesale Grid Meta styling */
        .details-grid-meta-box {
          border: 1px solid var(--border);
          background: rgba(0, 0, 0, 0.15);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .meta-box-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          padding-bottom: 0.5rem;
        }

        .meta-box-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .meta-box-row .meta-label {
          color: var(--text-muted);
          font-weight: 500;
        }

        .meta-box-row .meta-val {
          font-weight: 700;
          color: var(--text-primary);
        }

        .ingredients-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .ing-pill {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          padding: 0.35rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        /* RFQ Card Planner section in spec sheet */
        .rfq-actions-box {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid rgba(59, 130, 246, 0.25);
          padding: 1.5rem;
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .rfq-box-title {
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--secondary);
        }

        .qty-selector-row {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .qty-counter {
          display: inline-flex;
          align-items: center;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--border);
          border-radius: 9999px;
          padding: 0.3rem;
        }

        .qty-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          background: transparent;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .qty-btn:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .qty-value {
          width: 40px;
          text-align: center;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .rfq-add-btn {
          flex: 1;
          padding: 0.7rem 1.2rem;
          font-size: 0.9rem;
          justify-content: center;
        }

        .rfq-remove-link {
          background: none;
          border: none;
          color: #f43f5e;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          cursor: pointer;
          padding: 0;
          margin-top: -0.25rem;
          align-self: flex-start;
          font-weight: 500;
        }

        .rfq-remove-link:hover {
          text-decoration: underline;
        }

        .details-disclaimer {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-style: italic;
          border-top: 1px solid var(--border);
          padding-top: 1rem;
        }

        /* Empty details panel */
        .empty-details-pane {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          text-align: center;
          height: 100%;
          min-height: 380px;
          color: var(--text-muted);
          border-style: dashed;
        }

        .empty-details-pane h3 {
          font-size: 1.3rem;
          margin: 1.5rem 0 0.5rem;
          color: var(--text-primary);
        }

        .empty-details-pane p {
          max-width: 320px;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* Floating Cart Launcher Button */
        .floating-cart-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 90;
          background: var(--gradient-tech);
          border: none;
          border-radius: 9999px;
          padding: 0.8rem 1.6rem;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-heading);
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(239, 68, 68, 0.4);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .floating-cart-btn:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 15px 35px rgba(239, 68, 68, 0.5);
        }

        .cart-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cart-count-bubble {
          position: absolute;
          top: -10px;
          right: -10px;
          background: #ffffff;
          color: #ef4444;
          font-size: 0.7rem;
          font-weight: 800;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        }

        .cart-btn-label {
          font-size: 0.95rem;
        }

        /* Cart Drawer Modal overlay */
        .cart-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(8px);
          z-index: 150;
          display: flex;
          justify-content: flex-end;
        }

        .cart-drawer {
          width: 100%;
          max-width: 460px;
          height: 100vh;
          background: rgba(7, 10, 19, 0.95);
          border-left: 1px solid var(--border);
          box-shadow: -10px 0 40px rgba(0,0,0,0.6);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .cart-drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border);
          padding-bottom: 1.25rem;
        }

        .cart-header-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .cart-header-title h3 {
          font-size: 1.4rem;
        }

        .close-cart-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .close-cart-btn:hover {
          color: var(--text-primary);
        }

        .cart-drawer-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 1rem;
          line-height: 1.5;
        }

        .cart-drawer-items {
          flex: 1;
          overflow-y: auto;
          margin: 1.5rem 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding-right: 0.5rem;
        }

        /* Custom Scrollbar for Cart Items */
        .cart-drawer-items::-webkit-scrollbar {
          width: 4px;
        }
        .cart-drawer-items::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
        }

        .cart-drawer-item {
          padding: 1.2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cart-item-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .cart-item-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-primary);
        }

        .cart-item-meta {
          font-size: 0.78rem;
          color: var(--text-secondary);
        }

        .cart-item-moq {
          font-size: 0.72rem;
        }

        .cart-item-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .cart-qty-counter {
          display: inline-flex;
          align-items: center;
          background: rgba(0,0,0,0.25);
          border: 1px solid var(--border);
          border-radius: 9999px;
          padding: 0.2rem;
        }

        .cart-qty-btn {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: none;
          background: transparent;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .cart-qty-btn:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .cart-qty-val {
          width: 28px;
          text-align: center;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .cart-trash-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cart-trash-btn:hover {
          color: #f43f5e;
        }

        .cart-drawer-footer {
          border-top: 1px solid var(--border);
          padding-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .cart-checkout-btn {
          width: 100%;
          justify-content: center;
        }

        .clear-cart-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          align-self: center;
          transition: color 0.2s ease;
        }

        .clear-cart-btn:hover {
          color: var(--text-primary);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease forwards;
        }

        .animate-slide-left {
          animation: slideLeft 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @media (max-width: 992px) {
          .products-grid-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .details-preview-col {
            position: relative;
            top: 0;
          }
        }

        @media (max-width: 576px) {
          .categories-tab-bar {
            flex-wrap: wrap;
            border-radius: 12px;
          }
          .category-tab-btn {
            flex: 0 0 calc(50% - 0.5rem);
            padding: 0.6rem 1rem;
          }
          .details-pane {
            padding: 1.5rem;
          }
          .cart-drawer {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
