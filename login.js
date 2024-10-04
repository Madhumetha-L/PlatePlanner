import React from 'react';
import { useState} from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
function Login()
{ 
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  //console.log(email+"\n"+password);

  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      const { user } = response.data;
    localStorage.setItem('userId', user.id);
      alert(response.data.message);
      navigate('/');// Redirect to profile page 
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  
  return(
    <div >
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <body>
          
          <div className='login'>
          <div className='loginImage'>
        <img src="https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg" alt="yummy" className='img1'></img>
        </div>
        <div className='loginform'>
            <h3 style={{marginLeft:"10px",marginBottom:"20px",fontSize:"50px" }}>Login</h3>
            
            <p>Find and share your receipe you like</p>
            <form onSubmit={handleLogin}>
            <input type="email" placeholder='Email'value={email} onChange={(e)=>setEmail(e.target.value)} required/><br></br>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required/><br></br>
            {/*<input type="button" value={"Login"} className='logButton'/>
            <input type="button" value={"Sigin"} className='sigButton'/>*/}
            <button className='loginB' type='submit'>Login</button>
            <Link to="/signup"><button className='siginB'>Signup</button></Link>
            </form>
            
        </div>
        </div>
        
        
        </body>
    </div>
    </div>
  );

}
export default Login;