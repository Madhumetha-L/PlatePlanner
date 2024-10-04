import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home.js';
import Login from './components/login.js';
import SignIn from './components/signin.js';
import PostReceipe from './components/yourReciepe.js';
import Profile from './components/profile.js';
import ReceipeAll from './components/allReceipe.js';
import Suggestion from './components/Suggestion.js';
import IndianCuisine from './components/IndianCuisine.js';
import MexicanCuisine from './components/MexicanCuisine.js';
import ChineseCuisine from './components/ChineseCuisine.js';
import About from './components/About.js';
import Faqs from './components/faqs.js';
import Pricing from './components/pricing.js';
function App()
{ 
 return(
  <>
  <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/userRecipe" element={<PostReceipe/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<SignIn/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/recipe" element={<ReceipeAll/>}/>
      <Route exact path="/Suggestion" element={<Suggestion/>}/>
      <Route exact path="/cuisine/mexican" element={<MexicanCuisine/>}/>
      <Route exact path="/cuisine/indian" element={<IndianCuisine/>}/>
      <Route exact path="/cuisine/chinese" element={<ChineseCuisine/>}/>
      <Route exact path="/About" element={<About/>}/>
      <Route exact path="/Faqs" element={<Faqs/>}/>
      <Route exact path="/pricing" element={<Pricing/>}/>
    </Routes>
  </Router>
  </>
 );


}
export default App;
