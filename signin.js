import React, { useState } from 'react';
import './signin.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let validationErrors = {};
    let valid = true;

    if (!name) {
      validationErrors.name = 'Name is required';
      valid = false;
    }
    if (!email) {
      validationErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email address is invalid';
      valid = false;
    }
    if (!password) {
      validationErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
      valid = false;
    } else if (!/\d/.test(password)) {
      validationErrors.password = 'Password must contain at least one number';
      valid = false;
    } else if (!/[!@#$%^&*_]/.test(password)) {
      validationErrors.password = 'Password must contain at least one special character';
      valid = false;
    }
    if (!confirmPassword) {
      validationErrors.confirmPassword = 'Confirm Password is required';
      valid = false;
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(validationErrors);
    return valid;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:5000/signup', {
          name,
          email,
          password,
          confirmPassword,
        });
        setMessage(response.data.message);
      } catch (error) {
        setMessage(error.response.data.message);
      }
    }
  };

  return (
    <>
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
          </ul>
        </div>
      </div>
    </nav>
      <div className='bottom'>
        <div className='login' style={{ display: "flex", justify: "spacebetween", alignItems: "center" }}>
          <div className='loginImage'>
            <img src="https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg" alt="yummy" className='img1'></img>
          </div>
          <div className='loginform'>
            <h3 style={{ marginLeft: "10px", marginBottom: "20px", fontSize: "40px" }}>SignUp</h3>
            <p>Find and share your recipe you like</p>
            <form onSubmit={handleSignup}>
              <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
              {errors.name && <p className="error">{errors.name}</p>}
              <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
              {errors.email && <p className="error">{errors.email}</p>}
              <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
              {errors.password && <p className="error">{errors.password}</p>}
              <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
              <Link to="/login"><button className='loginB'>Login</button></Link>
              <button className='siginB' type='submit'>Signup</button>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;