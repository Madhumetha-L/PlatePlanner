import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Suggestion.css';
import { GoogleGenerativeAI } from "@google/generative-ai";

function ReceipeAll() {
  const [ingredient, setIngredient] = useState('');
  const [ingredientsList, setIngredientsList] = useState([]);
  const [predictedRecipe, setPredictedRecipe] = useState(''); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState('');  
  const [story, setStory] = useState(''); 

  const handleInputChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleAddIngredient = () => {
    if (ingredient.trim() !== '') {
      setIngredientsList([...ingredientsList, ingredient]);
      setIngredient(''); 
    }
  };

  const handleRemoveIngredient = (index) => {
    const updatedList = ingredientsList.filter((_, i) => i !== index);
    setIngredientsList(updatedList);
  };

  const handleSearchRecipes = async () => {
    if (ingredientsList.length > 0) {
      const ingredientsStr = ingredientsList.join(','); 

      setLoading(true); 
      setError('');  
      try {
        const response = await fetch('http://localhost:5000/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ingredients: ingredientsStr }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch the recipe');
        }

        const data = await response.json();
        setPredictedRecipe(data.predicted_recipe); 
      } catch (err) {
        setError('Error fetching the recipe: ' + err.message); 
      } finally {
        setLoading(false);  
      }
    } else {
      alert('Please add at least one ingredient to search recipes.');
    }
  };

  const handleGenerateStory = async () => {
    const genAI = new GoogleGenerativeAI("AIzaSyDhu1S1hpD6QXd_GsR1_XR7I4yArpHq7GI");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Give the recipe for" + predictedRecipe + "with the ingredients" + ingredientsList;
    try {
      const result = await model.generateContent(prompt);
      setStory(result.response.text());  
    } catch (err) {
      setError('Error generating story: ' + err.message);  
    }
  };

  return (
    <div className="main-container">
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
                <Link className="nav-link text-danger" to="/faqs">FAQs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="content-container">
        <div className="container my-4">
          <h2 className='text-white'>Recipe Finder</h2>
          <p className='text-white'>Enter your ingredients to get recipe suggestions:</p>

          <div className="ingredient-input-container">
            <input
              type="text"
              value={ingredient}
              onChange={handleInputChange}
              placeholder="Enter an ingredient"
              className="inputField"
            />
            <button onClick={handleAddIngredient} className="add-button">
              Add
            </button>
          </div>

          <div className="ingredient-cards">
            {ingredientsList.map((item, index) => (
              <div key={index} className="ingredient-card">
                <span className="ingredient-name">{item}</span>
                <button onClick={() => handleRemoveIngredient(index)} className="remove-button">
                  Remove
                </button>
              </div>
            ))}
          </div>

          <button onClick={handleSearchRecipes} className="search-button">
            Search Recipes
          </button>

          {loading && <p>Loading...</p>}
          
          {error && <p className="error-message">{error}</p>}

          {predictedRecipe && (
            <div className="predicted-recipe">
              <h3 className='text-white mt-5'>Predicted Recipe:</h3>
              <p className='text-white'>{predictedRecipe}</p>
            </div>
          )}

          <button onClick={handleGenerateStory} className="ml-5 search-button" >
            Procedure
          </button>

          {story && (
            <div className="generated-story">
              <h3 className='text-white mt-5'>Procedure:</h3>
              <p className='text-white'>{story}</p>
            </div>
          )}
        </div>

        <div className="beehive-container col-5">
          <h3 className='ml-5 text-white'>Available Recipes</h3>
          <div className="beehive">
            {["Briyani", "Stuffed Mushrooms", "Buffalo Chicken Wings", "Caprese Skewers", "Chicken Alfredo Pasta", "Beef Tacos with Fresh Salsa", "Vegetarian Stir-Fry", "Grilled Salmon", "Eggplant Parmesan"].map((food, index) => (
              <div key={index} className="beehive-item">{food}</div>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-5 text-light py-4">
        <div className="container-fluid p-4">
          <div className="text-center mt-3">
            <p>&copy; 2024 PlatePlanner. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ReceipeAll;
