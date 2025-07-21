import React from 'react';
import './Home.css';
import heroImg from '../assets/hero.png'; // Use your custom image
import { Link } from 'react-router-dom'; // Make sure this is imported


const Home = () => {
  return (
    <>
      <div className="hero-split">
        <div className="hero-left">
          <img src={heroImg} alt="Hero" className="hero-table-image" />
        </div>
        <div className="hero-right">
          <h1 className="hero-title">Your Trusted Partner in IP</h1>
          <p className="hero-subtitle">
            Empowering startups, enterprises, and creators to safeguard their innovations through professional IP services—strategically protecting your competitive edge
          </p>
        </div>
      </div>

      <section className="why-choose-us">
        <div className="why-choose-left">
          <h2>Why Choose Us?</h2>
          <Link to="/solutions">
            <button className="why-button">View Services</button>
          </Link>
        </div>
        <div className="why-choose-right">
          <p>
            At our patent services firm, we bring together decades of collective experience, technical excellence, and disciplined legal strategy to deliver unmatched IP protection. Our team includes seasoned experts in engineering, biotechnology, software, and more—each equipped with the insight to understand complex inventions and the precision to protect them. With a rigorous, methodical approach, we conduct thorough prior-art searches, draft well-structured claims, and navigate office actions with strategic finesse to maximize the likelihood of grant. 
          </p>
          <p>
            Our work is grounded in professionalism and integrity. We offer transparent pricing, client-focused service, and cost-effective solutions aligned with your business goals. You receive direct access to senior professionals who provide hands-on guidance and fast, reliable support at every stage. Through our global network, we manage filings across jurisdictions and help you unlock the commercial value of your IP through licensing and monetization strategies. 
          </p>
          <p>
            Choose us for our expertise. Stay with us for our discipline. Partner with us to turn innovation into powerful, protected assets. 
          </p>
        </div>
      </section>
      {/* Services Section */}
      <section className="services">
        <h2>What We Offer</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Patent Seaching</h3>
            <p>Novelty Search (Prior Art Search)</p>
            <p>Freedom to Operate Search </p>
            <p>Patentability Assessment</p>
            <p>Invalidity/Validity Search</p>
            <p>State-of-the art searching</p>
          </div>
          <div className="service-card">
            <h3>Drafting and Prosecution</h3>
            <p>Patent Drafting</p>
            <p>Office Action Response</p>
            <p>Claim Strategy & Refinement</p>
            <p>Defensive Publication</p>
          </div>
          <div className="service-card">
            <h3>Patent Monetization</h3>
            <p>Patent Licensing Strategy</p>
            <p>Patent Valuation</p>
            <p>Evidence of Use (EoU) Study</p>
            <p>Patent Portfolio Optimization</p>
            <p>Enforcement Support</p>
          </div>
                    <div className="service-card">
            <h3>Patent Analytics</h3>
            <p>Landscape Analysis</p>
            <p>Competitor Patent Analysis</p>
            <p>Portfolio Analysis & Benchmarking</p>
            <p>Technology Trend Mapping</p>
            <p>Patent Strength & Quality Metrics</p>
          </div>
                    <div className="service-card">
            <h3>SEP Analysis</h3>
            <p>Essentiality Assessment</p>
            <p>SEP Mapping & Claim Charting</p>
            <p>FRAND Licensing Support</p>
            <p>SEP Portfolio Evaluation:</p>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Home;
