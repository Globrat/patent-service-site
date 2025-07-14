import React from 'react';
import './Home.css';

import ipIllustration from '../assets/ipIllustration.png';
import expertIcon from '../assets/expertIcon.png';
import supportIcon from '../assets/supportIcon.png';
import globalIcon from '../assets/globalIcon.png';

const Home = () => {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section" id="home" data-aos="fade-up">
        <div className="hero-text">
          <h1>Site in progress</h1>
          <p>
            Soon we will be live
          </p>
        </div>
        <div className="hero-image">
          <img src={ipIllustration} alt="IP Services" />
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services-section" id="services" data-aos="fade-up">
        <h2>Our Services</h2>
        <p>
          XXXX
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="info-section" id="why-us" data-aos="fade-up">
        <h2>Why Choose Us?</h2>
        <div className="info-cards">
          <div className="card" data-aos="zoom-in" data-aos-delay="100">
            <img src={expertIcon} alt="Expert Team" />
            <h3>Expert Team</h3>
            <p>XXXXXXX</p>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-delay="200">
            <img src={supportIcon} alt="24/7 Support" />
            <h3>24/7 Support</h3>
            <p>Get help from our team anytime, anywhere.</p>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-delay="300">
            <img src={globalIcon} alt="Global Coverage" />
            <h3>Global Coverage</h3>
            <p>ZZZZZZZZZ.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
