import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';


function About() {
  return (
    <>
    <div className='bg'>
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand text-danger" to="/">PlatePlanner</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active text-danger" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger" to="/suggestion">Suggestion</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger" to="/faqs">FAQs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger" to="/about">About</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-danger" to="/profile">Profile</Link>
            </li>
            </ul>
          </div>
        </div>
      </nav>


          <div className='about-box'>
            <div className='col-12'>
              <h2 className="about-title text-danger">About Us</h2>
              <p className="about-text">
                Welcome to PlatePlanner, your personal recipe suggestion platform designed to help you make the best culinary choices based on your preferences. 
                Whether you're an experienced cook or a kitchen novice, PlatePlanner is here to simplify your meal planning process with tailored suggestions 
                and easy-to-follow recipes. Our goal is to inspire creativity in the kitchen, reduce food waste, and make cooking more enjoyable for everyone.
              </p>
            </div>
          </div>
      
          </div>
    </>
  );
}

export default About;
