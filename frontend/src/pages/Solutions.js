import React from 'react';
import Scrollspy from 'react-scrollspy';
import './Solutions.css';

const Solutions = () => {
  return (
    <div className="solutions-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3>Our Solutions</h3>
        <Scrollspy
          items={['patent-services', 'trademark-services', 'industrial-design', 'copyright-services', 'global-ip']}
          currentClassName="active"
          componentTag="div"
          className="sidebar-links"
        >
          <a href="#patent-services" className="sidebar-item">
            <i className="fas fa-lightbulb"></i> Patent Searching
          </a>
          <a href="#trademark-services" className="sidebar-item">
            <i className="fas fa-copyright"></i> Drafting & Prosecution
          </a>
          <a href="#industrial-design" className="sidebar-item">
            <i className="fas fa-drafting-compass"></i> Patent Monetization
          </a>
          <a href="#copyright-services" className="sidebar-item">
            <i className="fas fa-file-alt"></i> Patent Analytics
          </a>
          <a href="#global-ip" className="sidebar-item">
            <i className="fas fa-globe"></i> SEP Analysis
          </a>
        </Scrollspy>
      </aside>

      {/* Main Content */}
      <main className="solutions-content">
        <section id="patent-services">
          <h2>Patent Searching</h2>
          <p>
            Our Patent Searching service helps you uncover existing patents and published applications 
            to determine the novelty of your invention, assess risks, and guide your IP strategy.
          </p>
          <h4>✔️ What We Offer:</h4>
          <ul>
            <li><strong>Novelty Search (Prior Art Search):</strong> Discover whether your invention is new or already known in public or patent literature.</li>
            <li><strong>Freedom to Operate (FTO) Search:</strong> Determine if your product or process infringes any existing enforceable patents in your target market.</li>
            <li><strong>Patentability Assessment:</strong> Expert analysis of search results to evaluate if your invention meets patent eligibility criteria.</li>
            <li><strong>State of the Art Search:</strong> Understand the current technological landscape to make informed R&D decisions.</li>
            <li><strong>Validity/Invalidity Search:</strong> Challenge or defend the strength of a patent in litigation or opposition.</li>
          </ul>
        </section>

        <section id="trademark-services">
          <h2>Drafting & Prosecution</h2>
          <p>
            Our Patent Drafting and Prosecution services are designed to protect your invention 
            with well-crafted patent applications and strategic representation before patent offices globally.
          </p>
          <h4>✔️ What We Offer:</h4>
          <ul>
            <li><strong>Patent Drafting (Provisional & Non-Provisional):</strong> Technically accurate and legally robust patent specifications that meet global filing standards.</li>
            <li><strong>Drafted Prosecution Strategy:</strong> Tailored prosecution plans designed to align with your business goals and streamline the patent granting process.</li>
            <li><strong>Office Action Responses:</strong> Expert handling of objections, rejections, and examiner queries to advance your application.</li>
            <li><strong>PCT Application Drafting & Filing:</strong> Seamless preparation and filing under the Patent Cooperation Treaty for international protection.</li>
            <li><strong>Claim Strategy & Refinement:</strong> Carefully constructed claims that maximize protection and reduce prosecution delays.</li>
          </ul>
        </section>

        <section id="industrial-design">
          <h2>Patent Monetization</h2>
          <p>
            Our Patent Monetization services help you unlock the commercial value of your patents through 
            licensing, sales, partnerships, and enforcement strategies.
          </p>
          <h4>✔️ What We Offer:</h4>
          <ul>
            <li><strong>Patent Licensing Strategy:</strong> Identify and engage with potential licensees, negotiate licensing terms, and structure agreements.</li>
            <li><strong>Patent Valuation:</strong> Comprehensive assessment of a patent’s commercial potential, market relevance, and enforceability.</li>
            <li><strong>Evidence of Use (EoU) Study:</strong> Identify real-world products or services that potentially infringe on your patent claims, backed by clear technical mapping and visual documentation.</li>
            <li><strong>Patent Portfolio Optimization:</strong> Identify high-value assets in your portfolio and streamline non-performing ones to maximize returns.</li>
            <li><strong>Technology Transfer & Commercialization:</strong> Facilitate collaborations with industry players to bring your patented innovation to market.</li>
            <li><strong>Enforcement Support & Litigation Readiness:</strong> Assist with enforcement actions, evidence preparation, and infringement analysis to protect your IP rights.</li>
          </ul>
        </section>

        <section id="copyright-services">
          <h2>Patent Analytics</h2>
          <p>
            Our Patent Analytics services transform complex patent data into clear, strategic intelligence 
            that supports innovation, investment, and competitive positioning.
          </p>
          <h4>✔️ What We Offer:</h4>
          <ul>
            <li><strong>Landscape Analysis:</strong> Understand the innovation trends, white spaces, and competitive IP activity within your technology domain.</li>
            <li><strong>Competitor Patent Analysis:</strong> Monitor and benchmark your competitors’ patenting activity, R&D focus, and filing jurisdictions.</li>
            <li><strong>Portfolio Analysis & Benchmarking:</strong> Assess the quality, strength, and market coverage of your own or third-party patent portfolios.</li>
            <li><strong>Technology Trend Mapping:</strong> Identify how specific technologies are evolving and who the key innovators are across regions.</li>
            <li><strong>Patent Strength & Quality Metrics:</strong> Analyze citation patterns, legal status, claim breadth, and family coverage to evaluate patent strength.</li>
          </ul>
        </section>

        <section id="global-ip">
          <h2>SEP Analysis</h2>
          <p>
            Our SEP Analysis services help you identify, evaluate, and manage patents that may be essential 
            to industry standards, ensuring strategic advantage and licensing clarity.
          </p>
          <h4>✔️ What We Offer:</h4>
          <ul>
            <li><strong>Essentiality Assessment:</strong> Determine whether your or third-party patents are essential to specific technical standards (e.g., 5G, Wi-Fi, HEVC).</li>
            <li><strong>SEP Mapping & Claim Charting:</strong> Detailed claim-to-standard mapping supported by technical documentation and evidence for licensing or litigation.</li>
            <li><strong>FRAND Licensing Support:</strong> Assist with fair, reasonable, and non-discriminatory (FRAND) licensing strategy and negotiation preparation.</li>
            <li><strong>SEP Portfolio Evaluation:</strong> Analyze the size, quality, and relevance of SEP portfolios held by you or competitors.</li>
            <li><strong>Standards Tracking & Compliance Monitoring:</strong> Stay informed on evolving standards and their implications for IP strategy and enforcement.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Solutions;
