import React, { useEffect, useState } from 'react';
import './Home.css';

import ipIllustration from '../assets/ipIllustration.png';
import expertIcon from '../assets/expertIcon.png';
import supportIcon from '../assets/supportIcon.png';
import globalIcon from '../assets/globalIcon.png';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error('Failed to fetch blogs:', err));
  }, []);

  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section" id="home" data-aos="fade-up">
        <div className="hero-text">
          <h1>Site in progress</h1>
          <p>Soon we will be live</p>
        </div>
        <div className="hero-image">
          <img src={ipIllustration} alt="IP Services" />
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services-section" id="services" data-aos="fade-up">
        <h2>Our Services</h2>
        <p>XXXX</p>
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

      {/* Blog Section */}
      <section className="blog-section" id="blogs" data-aos="fade-up">
        <h2>Latest Blogs</h2>
        {blogs.length === 0 ? (
          <p>No blogs available yet.</p>
        ) : (
          <div className="blog-list">
            {blogs.map((blog) => (
              <div key={blog._id} className="blog-card">
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                <small>{new Date(blog.date).toLocaleString()}</small>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
