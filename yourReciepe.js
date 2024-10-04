import React, { useState } from 'react';
import './yourReciepe.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PostReceipe() {
    const [dishName, setDishName] = useState('');
    const [dishStyle, setDishStyle] = useState('');
    const [dishTime, setDishTime] = useState('');
    const [dishIngredients, setDishIngredients] = useState('');
    const [dishProcedure, setDishProcedure] = useState('');
    const [dishImage, setDishImage] = useState(null); // change to store the file object
    const [message, setMessage] = useState('');

    const handleImageChange = (e) => {
        setDishImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try { 
            const userId = localStorage.getItem('userId');
            const formData = new FormData();
            formData.append('userId', userId);
            formData.append('dishName', dishName);
            formData.append('dishStyle', dishStyle);
            formData.append('dishTime', dishTime);
            formData.append('dishIngredients', dishIngredients);
            formData.append('dishProcedure', dishProcedure);
            formData.append('dishImage', dishImage);

            const response = await axios.post('http://localhost:5000/userRecipe', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data.message);
            setMessage(response.data.message);
        } catch (error) {
            console.error('Error adding recipe:', error);
            setMessage(error.response?.data?.message || 'Error adding recipe');
        }
    };

    return (
        <>
            <div>
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
                <div className='bottom pl-5'>
                    <div className='bg_recipe'>
                    <div className='left'>
                        <h3 className='text-white' style={{ display: "inline" }}>Add your Receipe here !!! </h3><p className='text-white' style={{ display: "inline" }}> Let other's enjoy your receipe ...</p>
                        <form className='yourReceipe' onSubmit={handleSubmit}>
                            <input type="text" placeholder="Dish Name" name="dishName" value={dishName} onChange={(e) => setDishName(e.target.value)} /><br />
                            <input type="text" placeholder="Dish Style" name="dishStyle" value={dishStyle} onChange={(e) => setDishStyle(e.target.value)} /><br />
                            <input type="text" placeholder="CookTime" name="dishTime" value={dishTime} onChange={(e) => setDishTime(e.target.value)} /><br />
                            <textarea type="text" placeholder="Ingredients" name="dishIngredients" value={dishIngredients} onChange={(e) => setDishIngredients(e.target.value)} /><br />
                            <textarea placeholder="Procedure" name="dishProcedure" value={dishProcedure} onChange={(e) => setDishProcedure(e.target.value)} /><br /><br />
                            <label htmlFor="images" className="drop-container" id="dropcontainer">
                                <span className="drop-title">Drop files here</span>
                                or
                                <input type="file" id="images" accept="image/*" onChange={handleImageChange} required />
                            </label>
                            <br /><br />
                            <button className='buttonY' type='submit'>Add Receipe</button>
                            <br /><br />
                        </form>
                        {message && <p>{message}</p>}
                    </div>
                    </div>
                   
                    
                </div>
            </div>
        </>
    );
}

export default PostReceipe;
