import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import './home.css';  // Add your external CSS
import './bootstrap/bootstrap.min.css';
import cardImage1 from './assets/card_1.png';
import cardImage2 from './assets/card_2.png';
import cardImage3 from './assets/card_3.png';
import carouselImage from './assets/s-2.png';

const App = () => {
  useEffect(() => {
    const handleScrollAnimation = () => {
      const fadeInElements = document.querySelectorAll('.fade-in');
      const slideInElements = document.querySelectorAll('.slide-in');

      fadeInElements.forEach((el, index) => {
        if (isElementInViewport(el)) {
          setTimeout(() => {
            el.classList.add('visible');
          }, index * 200);
        }
      });

      slideInElements.forEach((el) => {
        if (isElementInViewport(el)) {
          el.classList.add('visible');
        }
      });
    };

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.onload = handleScrollAnimation;
    window.addEventListener("scroll", handleScrollAnimation);

    return () => window.removeEventListener("scroll", handleScrollAnimation);
  }, []);

  return (
    <div className="container-fluid">
      <Header />
      <HeroSection />
      <DiscoverSection />
      <RecipeCollection />
      <CallToAction />
      <Featurette />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="ml-3 navbar-brand text-danger" to="/">PlatePlanner</Link>
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
              <Link className="nav-link text-danger" to="/Faqs">FAQs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-danger" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-danger" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-danger" to="/userRecipe">Recipe</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


const HeroSection = () => {
  return (
    <div className="container-fluid py-1 px-4 bg-custom">
      <div className="row flex-lg-row-reverse align-items-center py-5 g-5 text-light">
        <div className="col-lg-6 py-5 fade-in mb-5">
          <h1 className="text_clr lh-1 mb-3 py-5">Delicious Recipe Discoveries</h1>
          <p className="lead para_font">Easily explore and customize delectable recipes with our platform, designed for food enthusiasts.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <Link to='/login' className="custom-link">
            <button type="button" className="btn btn-danger btn-lg px-4 gap-3 fade-in">Sign In</button>
          </Link>            
          <Link to='/signup' className="custom-link">
            <button type="button" className="btn btn-secondary btn-lg px-4 gap-3 fade-in">Sign Up</button>
          </Link> 
          </div>
        </div>
      </div>
    </div>
  );
};


const DiscoverSection = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="h_disp fade-in">Discover Your Next Meal</h1>
      <div className="col-lg-6 mx-auto fade-in">
        <p className="lead mb-4">Effortlessly create and personalize delicious recipes based on the ingredients you have at hand with our innovative platform. As the go-to solution for culinary enthusiasts, we empower you to explore a diverse array of mouth-watering dishes. Our user-friendly interface allows you to input ingredients, providing tailored recipe suggestions that maximize flavor and creativity. Join a community of passionate cooks, share your culinary masterpieces, and find inspiration for your next meal adventure!</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          {/* Apply a custom class for the hover effect */}
          <Link to='/suggestion' className="custom-link">
            <button type="button" className="btn btn-danger btn-lg px-4 gap-3 fade-in">Try Recipe</button>
          </Link>
          <Link to='/signup' className="custom-link">
            <button type="button" className="btn btn-secondary btn-lg px-4 gap-3 fade-in">Get Started</button>
          </Link> 
          </div>
      </div>
    </div>
  );
};


const RecipeCollection = () => {
  return (
    <div className="container-fluid px-4 py-5" id="custom-cards">
      <h2 className="pb-2">Explore Our Recipe Collections</h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch">
        <Card title="Indian Cuisine" bgImage={cardImage1} link="/cuisine/indian" />
        <Card title="Mexican Cuisine" bgImage={cardImage2} link="/cuisine/mexican" />
        <Card title="Chinese Cuisine" bgImage={cardImage3} link="/cuisine/chinese" />
      </div>
    </div>
  );
};




const Card = ({ title, bgImage, link }) => {
  return (
    <div className="col">
      <Link to={link} className="custom-link"> {/* Add Link around the card */}
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{title}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};


const CallToAction = () => {
  return (
    <div className="container-fluid mb-0 pb-0">
      <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="col text-center">
          <div className="bg-custom1 p-md-5 rounded text-body-emphasis">
            <h1 className="py-5 display-3 font-weight-bold text-white">Let's Create Your Culinary Masterpiece Together</h1>
            <p className="text-white my-3 mb-5">We specialize in transforming your culinary ideas into delicious realities.</p>
            <button className="btn btn-warning rounded-0 btn-lg px-5 p-3" type="button">Know more about us</button>
          </div>
        </div>
      </div>
    </div>
  );
};


const Featurette = () => {
  return (
    <div className="row featurette mt-5 mb-5 mx-auto px-auto">
      <div className="col-md-7 order-md-2 mt-5">
        <h2 className="featurette-heading fw-normal lh-1 my-5 pt-5 pl-5 ml-5 fade-in">Wanna Explore New Flavors... <span className="text-body-secondary">See for yourself.</span></h2>
        <p className="lead fade-in ml-5 pl-5">Our curated selection of recipes is designed to inspire and delight.</p>
      </div>
      <div className="col-md-5 order-md-1">
        <img src={carouselImage} className="px-4 featurette-image rounded slide-in" alt="carousel_image" width="700" height="500" />
      </div>
    </div>
  );
};

// Add Footer here
const Footer = () => {
  return (
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
  );
};

export default App;
