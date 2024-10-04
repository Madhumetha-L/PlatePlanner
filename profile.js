import React, { useState, useEffect } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noOfRe, setNoOfRe] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [details, setDetails] = useState([]);
  const [editRecipeId, setEditRecipeId] = useState(null);
  const [editRecipeData, setEditRecipeData] = useState({
    dishName: "",
    dishStyle: "",
    dishTime: "",
    dishIngredients: "",
    dishProcedure: "",
    dishImage: "",
  });

  const style = {
    backgroundImage:
      "url('https://www.pexels.com/photo/pink-petaled-flower-plant-inside-white-hanging-pot-906150/')", // Replace with your image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // Full height of the viewport
  };
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
    fetchDetail();
  }, []);
  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchRecipes = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.get("http://localhost:5000/userRecipe", {
        headers: { userId: userId },
      });
      setRecipes(response.data.recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const fetchDetail = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.get("http://localhost:5000/users", {
        headers: { userId: userId },
      });
      setDetails(response.data.user);
      setName(response.data.user[0].name);
      setEmail(response.data.user[0].email);
      console.log(response.data.user[0].name);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  const handleDelete = async (recipeId) => {
    try {
      await axios.delete(
        `http://localhost:5000/userRecipe/recipes/${recipeId}`
      );
      fetchRecipes();
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  const handleEdit = (recipe) => {
    setEditRecipeId(recipe.recid);
    setEditRecipeData(recipe);
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:5000/userRecipe/recipes/${editRecipeId}`,
        editRecipeData
      );
      setEditRecipeId(null);
      fetchRecipes();
    } catch (error) {
      console.error("Error saving recipe:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditRecipeData({ ...editRecipeData, [name]: value });
  };

  return (
    <div style={style}>
      <div className="nav">
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
                  <Link className="nav-link text-danger" to="/Faqs">
                    FAQs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger" to="/profile">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="bottom" style={style}>
        <div className="iden">
          {/*<h2 style={{marginLeft:"300px"}}>Profile of <p>{details.name}</p></h2>*/}
          <h2 style={{ marginLeft: "300px", paddingTop: "20px" }}>
            Profile of {name}
            {/*details.length > 0 ? details[0].name : 'Loading...'*/}
          </h2>
          <div className="identity">
            <button
              className="button1"
              style={{ width: "150px", marginLeft: "400px" }}
              onClick={handleEditToggle}
            >
              {isEditing ? "Save" : "Edit"}
            </button>
            <br></br>
            <div className="profile">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!isEditing}
              />
              <br></br>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isEditing}
              />
              <br></br>
            </div>
          </div>
        </div>
        <div>
          <div className="cont8">
            <img
              src="https://img.buzzfeed.com/buzzfeed-static/static/2014-06/23/15/campaign_images/webdr07/26-traditional-indian-foods-that-will-change-your-1-7312-1403550756-15_big.jpg?resize=1200:*"
              alt="imgg"
              style={{ width: "200px", height: "150px" }}
            />
            <h3>PooriMasal</h3>
            <h4>Cook time : 30 minutes</h4>
            <h4>Ingredients : </h4>
            <br></br>
            <p>
              1.Water<p></p>2.Salt<p></p>3.Wheat Flour<p></p>4.Refined Oil
            </p>
            <h4>Procedure:</h4>
            <p>1.Make dough</p>
            <p>2.Heat Oil </p>
            <p>3.Make poori balls</p>
            <p>4.Frying</p>
            <br></br>
            <br></br>
            <button className="button1" style={{ width: "80px" }}>
              Edit
            </button>
            <button className="button2">Delete</button>
          </div>
          <div className="cont8">
            <img
              src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/5-samosas-canva-phppf0Q4I"
              alt="imgg"
              style={{ width: "200px", height: "150px" }}
            />
            <h3>Samosa</h3>
            <h4>Cook time : 30 minutes</h4>
            <h4>Ingredients : </h4>
            <br></br>
            <p> 1.Flour</p>
            <p>2.Oil</p>
            <p>3.GreenChilli</p>
            <p>4.Potato</p>
            <p>5.Coriander</p>
            <h4>Procedure:</h4>
            <p>1.The spiced potato filling;</p>
            <p>2.The Samosa dough;</p>
            <p>3.Making the Samosa parcels and fry</p>
            <br></br>
            <br></br>
            <button className="button1" style={{ width: "80px" }}>
              Edit
            </button>
            <button className="button2">Delete</button>
          </div>

          {recipes.map((recipe) => (
            <div className="cont8" key={recipe.recid}>
              {editRecipeId === recipe.recid ? (
                <>
                  <input
                    type="text"
                    name="dishName"
                    value={editRecipeData.dishName}
                    onChange={handleInputChange}
                  />
                  <br />
                  <input
                    type="text"
                    name="dishStyle"
                    value={editRecipeData.dishStyle}
                    onChange={handleInputChange}
                  />
                  <br />
                  <input
                    type="text"
                    name="dishTime"
                    value={editRecipeData.dishTime}
                    onChange={handleInputChange}
                  />
                  <br />
                  <textarea
                    name="dishIngredients"
                    value={editRecipeData.dishIngredients}
                    onChange={handleInputChange}
                  ></textarea>
                  <br />
                  <textarea
                    name="dishProcedure"
                    value={editRecipeData.dishProcedure}
                    onChange={handleInputChange}
                  ></textarea>
                  <br />
                  <input
                    type="text"
                    name="dishImage"
                    value={editRecipeData.dishImage}
                    onChange={handleInputChange}
                  />
                  <br />
                  <button
                    className="button1"
                    style={{ width: "80px" }}
                    onClick={handleSave}
                  >
                    Save
                  </button>{" "}
                  {/* Save button calls handleSave */}
                </>
              ) : (
                <>
                  <img
                    src={`http://localhost:5000/uploads/${recipe.dishImage}`}
                    alt={recipe.dishName}
                    style={{ width: "200px", height: "150px" }}
                  />
                  <p>{recipe.dishStyle}</p>
                  <h3>{recipe.dishName}</h3>
                  <h4>Cook time: {recipe.dishTime}</h4>
                  <h4>Ingredients:</h4>
                  <p>{recipe.dishIngredients}</p>
                  <h4>Procedure:</h4>
                  <p>{recipe.dishProcedure}</p>
                  <p
                    style={{ color: "blue", fontSize: "20px" }}
                    className="link1"
                  >
                    By {name}
                  </p>
                  <button
                    className="button1"
                    style={{ width: "80px" }}
                    onClick={() => handleEdit(recipe)}
                  >
                    Edit
                  </button>
                  <button
                    className="button2"
                    onClick={() => handleDelete(recipe.recid)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Profile;
