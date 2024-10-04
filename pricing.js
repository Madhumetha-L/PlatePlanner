import React from "react";
import { Link } from "react-router-dom";
import "./yourReciepe.css";
import './bootstrap/bootstrap.min.css';

function Pricing() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="ml-3 navbar-brand text-danger" to="/">
              PlatePlanner
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active text-danger" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger" to="/suggestion">
                    Suggestion
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger" to="/faqs">
                    FAQs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
              <Link className="nav-link text-danger" to="/profile">Profile</Link>
            </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Pricing Section */}
      <div className="bgcustom pricing-section">
        <div className="container">
          <h2 className="text-center mb-5 text-white">Pricing Plans</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card pricing-card">
                <div className="card-body">
                  <h5 className="card-title">Basic Plan</h5>
                  <h6 className="card-price">$0/month</h6>
                  <ul className="list-unstyled">
                    <li>Access to basic recipes</li>
                    <li>Personalized meal suggestions</li>
                    <li>Community support</li>
                  </ul>
                  <Link to="/signup" className="btn btn-danger">Choose Plan</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card pricing-card">
                <div className="card-body">
                  <h5 className="card-title">Pro Plan</h5>
                  <h6 className="card-price">$9.99/month</h6>
                  <ul className="list-unstyled">
                    <li>Everything in Basic</li>
                    <li>Exclusive recipes</li>
                    <li>Ad-free experience</li>
                    <li>Priority support</li>
                  </ul>
                  <Link to="/signup" className="btn btn-danger">Choose Plan</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card pricing-card">
                <div className="card-body">
                  <h5 className="card-title">Premium Plan</h5>
                  <h6 className="card-price">$19.99/month</h6>
                  <ul className="list-unstyled">
                    <li>Everything in Pro</li>
                    <li>Custom meal plans</li>
                    <li>Nutrition tracking</li>
                    <li>Personalized coaching</li>
                  </ul>
                  <Link to="/signup" className="btn btn-danger">Choose Plan</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light py-4">
        <div className="container-fluid p-4">
          <div className="row">
            <div className="col-md-4">
              <h5 className="text-danger">About Us</h5>
              <p>PlatePlanner helps you discover and personalize recipes to create your culinary masterpiece. Join our community and explore new flavors every day!</p>
            </div>
            <div className="col-md-4">
              <h5 className="text-danger">Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link className="text-light" to="/">Home</Link></li>
                <li><Link className="text-light" to="/suggestion">Suggestion</Link></li>
                <li><Link className="text-light" to="/pricing">Pricing</Link></li>
                <li><Link className="text-light" to="/faqs">FAQs</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className="text-danger">Contact Us</h5>
              <p>Email: support@plateplanner.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
          </div>
          <div className="text-center mt-3">
            <p>&copy; 2024 PlatePlanner. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Pricing;
