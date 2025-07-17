import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ marginTop: '100px' }}>
      {/* Hero Section */}
      <div className="container mb-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-5 fw-bold text-primary">Drive Your Dream Car Today!</h1>
            <p className="lead mt-3">
              Fast, flexible, and affordable car loans at your fingertips. We help you get on the road without the hassle.
            </p>
            <p>Compare offers, calculate EMIs, and apply in minutes.</p>
            <div className="mt-4">
              <Link to="/enquiry" className="btn btn-primary me-3">Apply Now</Link>
              <Link to="/emi" className="btn btn-outline-secondary">Calculate EMI</Link>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="https://www.spinny.com/blog/wp-content/uploads/2024/09/videoframe_0.webp"
              alt="Dream Car"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mb-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <i className="bi bi-cash-stack display-4 text-primary"></i>
            <h5 className="mt-3">Low Interest Rates</h5>
            <p>Get the best deals from top lenders with minimal interest rates and flexible terms.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-clock-history display-4 text-primary"></i>
            <h5 className="mt-3">Quick Approvals</h5>
            <p>Apply online in minutes and get approved within 24 hours.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-shield-check display-4 text-primary"></i>
            <h5 className="mt-3">Secure & Transparent</h5>
            <p>Your data is secure with us. No hidden charges, no surprises.</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mb-5">
        <h2 className="text-center mb-4">How It Works</h2>
        <div className="row">
          <div className="col-md-3 text-center">
            <div className="p-3 border rounded">
              <h5>1. Apply Online</h5>
              <p>Fill out a simple form and submit your details.</p>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="p-3 border rounded">
              <h5>2. Check Eligibility</h5>
              <p>We’ll assess your profile instantly for pre-approval.</p>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="p-3 border rounded">
              <h5>3. Upload Documents</h5>
              <p>Upload KYC, salary proof, and ID documents online.</p>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="p-3 border rounded">
              <h5>4. Get Disbursed</h5>
              <p>Loan amount is disbursed directly to your account.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="container mb-5">
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <div className="row text-center">
          <div className="col-md-6">
            <blockquote className="blockquote">
              <p>"The process was smooth and I got my loan approved in just 2 days!"</p>
              <footer className="blockquote-footer">Anjali Sharma</footer>
            </blockquote>
          </div>
          <div className="col-md-6">
            <blockquote className="blockquote">
              <p>"Best car loan platform! They explained everything clearly and were super responsive."</p>
              <footer className="blockquote-footer">Rohit Mehta</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
