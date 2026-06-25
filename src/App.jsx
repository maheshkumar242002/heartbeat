import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Therapeutics from './components/Therapeutics';
import Innovation from './components/Innovation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [inquiryList, setInquiryList] = useState([]);

  return (
    <div className="app-layout">
      {/* Sleek Floating Header */}
      <Navbar />

      {/* Hero Intro */}
      <Hero />

      {/* Scientific Pillars & Story */}
      <About />

      {/* Product Categories & Details */}
      <Therapeutics inquiryList={inquiryList} setInquiryList={setInquiryList} />

      {/* Labs & Molecular Sandbox */}
      <Innovation />

      {/* Inquiry Desk */}
      <Contact inquiryList={inquiryList} setInquiryList={setInquiryList} />

      {/* Bio-Footer */}
      <Footer />

      <style>{`
        .app-layout {
          min-height: 100vh;
          background-color: var(--bg-dark);
          position: relative;
        }
      `}</style>
    </div>
  );
}

export default App;
