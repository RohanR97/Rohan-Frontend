import React from 'react';

function About() {
  return (
    <div className="container mt-4">
      {/* Phone & Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div><i className="bi bi-telephone"></i> +91 9289200017 - For New Car Loans</div>
        
      </div>

      {/* Main Heading */}
      <h2 className="text-primary text-center mb-3">About Us</h2>
      <p className="text-center fw-light">Driving dreams forward through smart car finance solutions.</p>

      {/* Our Profile */}
      <h4 className="mt-4">Our Profile</h4>
      <p>
        We are innovators in Car Loan Financing, offering streamlined services for individuals and automotive dealers. Our platform has facilitated over 1 million car loan journeys across India with a focus on transparency, affordability, and personalized service.
      </p>

      {/* Experience & Achievements */}
      <h4 className="mt-4">Our Experience</h4>
      <ul>
        <li>Established in 2015 as a tech-driven finance platform</li>
        <li>Cumulative financed vehicles: Over 1 million</li>
        <li>Current gross loan value: ₹1.2 trillion</li>
        <li>Active EMI schedules managed monthly: 800K+</li>
      </ul>

      {/* Core Values */}
      <h4 className="mt-4">Core Values</h4>
      <ul className="list-inline">
        <li className="list-inline-item badge bg-secondary me-2">Trust</li>
        <li className="list-inline-item badge bg-secondary me-2">Efficiency</li>
        <li className="list-inline-item badge bg-secondary me-2">Security</li>
        <li className="list-inline-item badge bg-secondary">Customer Focus</li>
      </ul>

      {/* Objectives & Strategy */}
      <h4 className="mt-4">Our Objectives</h4>
      <p>
        To revolutionize the car finance market by building reliable tools that simplify loan applications, approval processing, and EMI tracking.
      </p>

      <h5 className="mt-3">Growth Strategy</h5>
      <ul>
        <li>Continually improve operational efficiency</li>
        <li>Maintain a low default rate</li>
        <li>Expand reach via digital onboarding</li>
        <li>Enhance cross-platform access (web & mobile)</li>
      </ul>

      {/* Our Team Section */}
      <h4 className="mt-4">Meet Our Team</h4>
      <ul>
        <li><strong>Rohan:</strong> Lead Fullstack Developer — architect our whole project</li>
       
      </ul>

      {/* Contact Section */}
      <h4 className="mt-4">Connect With Us</h4>
      <p><i className="bi bi-phone"></i> Call us: +91 9289200017</p>
      <p><i className="bi bi-whatsapp"></i> WhatsApp: Chat Now</p>
      <p><i className="bi bi-envelope"></i> Email: support@carloans.in</p>
    </div>
  );
}

export default About;
