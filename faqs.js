import React, { useState } from "react";
import "./yourReciepe.css";
import { Link } from "react-router-dom";
import './bootstrap/bootstrap.min.css';

function Faqs() {
  const [faqs, setFaqs] = useState([
    {
      question: "What is PlatePlanner?",
      answer: "PlatePlanner is a recipe suggestion platform that helps you discover, personalize, and create amazing dishes.",
      open: false
    },
    {
      question: "How do I get personalized recipe suggestions?",
      answer: "Simply go to the Suggestion page, answer a few questions about your preferences, and get tailored recipes just for you.",
      open: false
    },
    {
      question: "Is PlatePlanner free to use?",
      answer: "Yes! PlatePlanner has a free version that gives you access to a wide range of recipes. We also offer premium services with advanced features.",
      open: false
    },
    {
      question: "How can I contact support?",
      answer: "You can reach out to our support team via email at support@plateplanner.com or by phone at +123 456 7890.",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

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

      {/* FAQ Section */}
      <div className="faq-section bg">
        <div className="container mt-5">
          <h2 className="text-white">Frequently Asked Questions</h2>
          <div className="accordion">
            {faqs.map((faq, index) => (
              <div key={index} className="card mb-2">
                <div className="card-header">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      onClick={() => toggleFAQ(index)}
                    >
                      {faq.question}
                    </button>
                  </h5>
                </div>
                <div className={`collapse ${faq.open ? 'show' : ''}`}>
                  <div className="card-body">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
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

export default Faqs;
