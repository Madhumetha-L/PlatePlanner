import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Suggestion.css';
import { GoogleGenerativeAI } from "@google/generative-ai";

function ReceipeAll() {
  const [ingredient, setIngredient] = useState('');
  const [ingredientsList, setIngredientsList] = useState([]);
  const [predictedRecipes, setPredictedRecipes] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [recipeInput, setRecipeInput] = useState(''); // State for the recipe input
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [error, setError] = useState('');  
  const [story, setStory] = useState('');  // State for the current recipe index

  const handleIngredientChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleRecipeChange = (e) => {
    setRecipeInput(e.target.value); // Update recipe input
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddIngredient();
    }
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
          body: JSON.stringify({ ingredients: ingredientsStr, recipe: recipeInput }), // Include recipe input
        });

        if (!response.ok) {
          throw new Error('Failed to fetch the recipes');
        }

        const data = await response.json();
        setPredictedRecipes(data.predicted_recipes); 
        setCurrentRecipeIndex(0); // Reset to the first recipe
      } catch (err) {
        setError('Error fetching the recipes: ' + err.message); 
      } finally {
        setLoading(false);  
      }
    } else {
      alert('Please add at least one ingredient to search recipes.');
    }
  };

  const handleNextRecipe = () => {
    if (currentRecipeIndex < predictedRecipes.length - 1) {
      setCurrentRecipeIndex(currentRecipeIndex + 1);
    }
  };

  const handlePreviousRecipe = () => {
    if (currentRecipeIndex > 0) {
      setCurrentRecipeIndex(currentRecipeIndex - 1);
    }
  };

  const handleGenerateStory = async () => {
    const genAI = new GoogleGenerativeAI("AIzaSyDhu1S1hpD6QXd_GsR1_XR7I4yArpHq7GI");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Give the recipe for" + recipeInput + "with the ingredients" + ingredientsList;
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
              <li className="nav-item">
              <Link className="nav-link text-danger" to="/profile">Profile</Link>
            </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="content-container">
        <div className="container my-4">
          <h2 className='text-white'>Recipe Finder</h2>
          <p className='text-white'>Enter your ingredients and a recipe to get suggestions:</p>

          <div className="ingredient-input-container">
            <input
              type="text"
              value={ingredient}
              onChange={handleIngredientChange}
              onKeyDown={handleKeyDown} 
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

          {/* New Recipe Input */}
          

          <button onClick={handleSearchRecipes} className="search-button">
            Search Recipes
          </button>

          {loading && <p>Loading...</p>}
          
          {error && <p className="error-message">{error}</p>}

          {predictedRecipes.length > 0 && (
            <div className="predicted-recipes">
              <h3 className='text-white mt-5'>Predicted Recipe:</h3>
              <div className='text-white'>
                <p>{predictedRecipes[currentRecipeIndex]}</p>
              </div>
              <div className="navigation-buttons">
                <button onClick={handlePreviousRecipe} disabled={currentRecipeIndex === 0} className="add-button">Previous</button>
                <button onClick={handleNextRecipe} disabled={currentRecipeIndex === predictedRecipes.length - 1} className="add-button">Next</button>
              </div>
            </div>
          )}
        </div>

       
      </div>
      <div className="container">
            <input
              type="text"
              value={recipeInput}
              onChange={handleRecipeChange}
              placeholder="Enter a recipe name"
              className="inputField"
            />
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
