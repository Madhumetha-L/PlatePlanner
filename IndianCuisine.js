import React, { useState } from "react";
import "./yourReciepe.css";
import { Link } from "react-router-dom";
import './bootstrap/bootstrap.min.css';

function IndianCuisine() {
  const [filter, setFilter] = useState("all");

  // State to handle selected recipe for the modal
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = {
    appetizers: [
      {
        name: "Samosa",
        type: "veg",
        description: {
          ingredients: [
            "2 cups all-purpose flour",
            "4 medium potatoes (boiled and mashed)",
            "1 teaspoon cumin seeds",
            "1 teaspoon garam masala",
            "1 teaspoon chili powder",
            "Salt to taste",
            "Oil for frying",
          ],
          procedure: "1. In a bowl, mix flour with a pinch of salt and water to form a dough. Knead it for 10 minutes. \n2. In another bowl, mix mashed potatoes, cumin seeds, garam masala, chili powder, and salt. \n3. Roll out the dough, cut it into circles, and fill each circle with the potato mixture. Fold and seal the edges. \n4. Heat oil in a pan and deep fry the samosas until golden brown."
        },
        backgroundImage: "/images/indian/samosa.png"
      },
      {
        name: "Dhokla",
        type: "veg",
        description: {
          ingredients: [
            "1 cup chickpea flour (besan)",
            "1/2 cup yogurt",
            "1 teaspoon ginger paste",
            "1 teaspoon green chili paste",
            "1 teaspoon baking soda",
            "Salt to taste",
            "1 tablespoon oil",
            "Mustard seeds and coriander leaves for garnish",
          ],
          procedure: "1. Mix chickpea flour, yogurt, ginger paste, green chili paste, baking soda, salt, and water to make a smooth batter. \n2. Pour the batter into a greased steaming tray. \n3. Steam for 15-20 minutes until cooked. \n4. Allow to cool, cut into pieces, and temper with mustard seeds and coriander leaves."
        },
        backgroundImage: "/images/indian/dholka.png"
      },
      {
        name: "Chicken Tikka",
        type: "non-veg",
        description: {
          ingredients: [
            "500g chicken (boneless, cut into cubes)",
            "1/2 cup yogurt",
            "2 tablespoons tikka masala",
            "1 tablespoon ginger-garlic paste",
            "1 tablespoon lemon juice",
            "Salt to taste",
            "Skewers",
          ],
          procedure: "1. Marinate chicken in yogurt, tikka masala, ginger-garlic paste, lemon juice, and salt for at least 2 hours. \n2. Preheat the grill or oven. \n3. Thread marinated chicken onto skewers. \n4. Grill for 15-20 minutes, turning occasionally, until cooked through."
        },
        backgroundImage: "/images/indian/c_tikka.png"
      }
    ],
    mainCourse: [
      {
        name: "Chicken Curry",
        type: "non-veg",
        description: {
          ingredients: [
            "500g chicken (cut into pieces)",
            "2 onions (finely chopped)",
            "2 tomatoes (pureed)",
            "2 tablespoons ginger-garlic paste",
            "2 tablespoons curry powder",
            "Salt to taste",
            "2 tablespoons oil",
            "Fresh coriander for garnish",
          ],
          procedure: "1. Heat oil in a pan and sauté onions until golden. \n2. Add ginger-garlic paste and cook for 2 minutes. \n3. Add chicken pieces and brown them. \n4. Stir in tomato puree, curry powder, and salt. \n5. Simmer until chicken is cooked through. Garnish with coriander."
        },
        backgroundImage: "/images/indian/c_curry.png"
      },
      {
        name: "Butter Chicken",
        type: "non-veg",
        description: {
          ingredients: [
            "500g chicken (boneless, cut into pieces)",
            "1 cup butter",
            "2 onions (finely chopped)",
            "2 tomatoes (pureed)",
            "1/2 cup cream",
            "2 tablespoons ginger-garlic paste",
            "1 tablespoon garam masala",
            "Salt to taste",
          ],
          procedure: "1. Heat butter in a pan and sauté onions until golden. \n2. Add ginger-garlic paste and cook for 2 minutes. \n3. Add chicken pieces and cook until browned. \n4. Stir in tomato puree, garam masala, and salt. \n5. Add cream and simmer for 10 minutes."
        },
        backgroundImage: "/images/indian/c_butter.png"
      },
      {
        name: "Fish Curry",
        type: "non-veg",
        description: {
          ingredients: [
            "500g fish (cut into pieces)",
            "2 onions (finely chopped)",
            "2 tomatoes (pureed)",
            "1 tablespoon ginger-garlic paste",
            "2 tablespoons fish curry masala",
            "Salt to taste",
            "2 tablespoons oil",
          ],
          procedure: "1. Heat oil in a pan and sauté onions until golden. \n2. Add ginger-garlic paste and cook for 2 minutes. \n3. Add fish pieces and cook until browned. \n4. Stir in tomato puree, fish curry masala, and salt. Simmer until the fish is cooked through."
        },
        backgroundImage: "/images/indian/f_curry.png"
      },
      {
        name: "Paneer Butter Masala",
        type: "veg",
        description: {
          ingredients: [
            "250g paneer (cubed)",
            "2 onions (finely chopped)",
            "2 tomatoes (pureed)",
            "1/2 cup cream",
            "1 tablespoon butter",
            "2 tablespoons ginger-garlic paste",
            "1 tablespoon garam masala",
            "Salt to taste",
          ],
          procedure: "1. Heat butter in a pan and sauté onions until golden. \n2. Add ginger-garlic paste and cook for 2 minutes. \n3. Add tomato puree, garam masala, and salt. \n4. Stir in paneer and cream, and cook for 5 minutes."
        },
        backgroundImage: "/images/indian/p_masala.png"
      },
      {
        name: "Aloo Gobi",
        type: "veg",
        description: {
          ingredients: [
            "2 potatoes (cubed)",
            "1 cauliflower (cut into florets)",
            "1 onion (finely chopped)",
            "2 tablespoons oil",
            "1 teaspoon cumin seeds",
            "1 teaspoon turmeric powder",
            "1 teaspoon chili powder",
            "Salt to taste",
          ],
          procedure: "1. Heat oil in a pan and add cumin seeds. \n2. Sauté onions until golden. \n3. Add potatoes and cauliflower, along with turmeric, chili powder, and salt. \n4. Cover and cook until vegetables are tender."
        },
        backgroundImage: "/images/indian/aloo_gobi.png"
      }
    ],
    breads: [
      {
        name: "Naan",
        type: "veg",
        description: {
          ingredients: [
            "2 cups all-purpose flour",
            "1/2 cup yogurt",
            "1 teaspoon baking powder",
            "1 teaspoon salt",
            "Water as needed",
            "Butter for brushing",
          ],
          procedure: "1. Mix flour, yogurt, baking powder, and salt. Knead to form a soft dough. \n2. Let it rest for 30 minutes. \n3. Divide into balls, roll out into ovals. \n4. Cook on a hot tawa or grill until bubbly, brushing with butter."
        },
        backgroundImage: "/images/indian/naan.png"
      },
      {
        name: "Roti",
        type: "veg",
        description: {
          ingredients: [
            "2 cups whole wheat flour",
            "1/2 teaspoon salt",
            "Water as needed",
          ],
          procedure: "1. Mix flour and salt. Gradually add water to form a dough. \n2. Divide into balls and roll into thin circles. \n3. Cook on a hot tawa until golden brown on both sides."
        },
        backgroundImage: "/images/indian/roti.png"
      },
      {
        name: "Paratha",
        type: "veg",
        description: {
          ingredients: [
            "2 cups all-purpose flour",
            "1 teaspoon salt",
            "Water as needed",
            "Oil or ghee for frying",
          ],
          procedure: "1. Mix flour and salt. Gradually add water to form a dough. \n2. Roll out a ball, spread some oil, and fold to make layers. \n3. Roll again and cook on a hot tawa until golden brown on both sides."
        },
        backgroundImage: "/images/indian/paratha.png"
      }
    ],
    riceVarieties: [
      {
        name: "Chicken Biryani",
        type: "non-veg",
        description: {
          ingredients: [
            "500g chicken (cut into pieces)",
            "2 cups basmati rice",
            "2 onions (sliced)",
            "2 tomatoes (chopped)",
            "1 tablespoon ginger-garlic paste",
            "2 tablespoons biryani masala",
            "Salt to taste",
            "4 cups water",
            "Fresh coriander and mint for garnish",
          ],
          procedure: "1. Heat oil in a pot and sauté onions until golden. \n2. Add ginger-garlic paste, chicken, and tomatoes; cook until chicken is done. \n3. Add biryani masala, salt, and water; bring to a boil. \n4. Add rinsed rice, cover, and cook until rice is tender. Garnish with coriander and mint."
        },
        backgroundImage: "/images/indian/c_briyani.png"
      },
      {
        name: "Jeera Rice",
        type: "veg",
        description: {
          ingredients: [
            "1 cup basmati rice",
            "2 tablespoons cumin seeds",
            "2 tablespoons oil",
            "Salt to taste",
            "2 cups water",
          ],
          procedure: "1. Rinse rice until water runs clear. \n2. Heat oil in a pot, add cumin seeds, and sauté until fragrant. \n3. Add rice and water, bring to a boil, then cover and simmer until rice is cooked."
        },
        backgroundImage: "/images/indian/j_rice.png"
      },
      {
        name: "Lemon Rice",
        type: "veg",
        description: {
          ingredients: [
            "2 cups cooked rice",
            "2 tablespoons oil",
            "1 teaspoon mustard seeds",
            "1 teaspoon turmeric powder",
            "1 lemon (juiced)",
            "Salt to taste",
            "Fresh coriander for garnish",
          ],
          procedure: "1. Heat oil in a pan and add mustard seeds; sauté until they pop. \n2. Add turmeric, cooked rice, salt, and lemon juice; mix well. \n3. Garnish with coriander."
        },
        backgroundImage: "/images/indian/l_rice.png"
      }
    ],
    chutneys: [
      {
        name: "Mint Chutney",
        type: "veg",
        description: {
          ingredients: [
            "1 cup fresh mint leaves",
            "1/2 cup yogurt",
            "1 tablespoon lemon juice",
            "1 green chili",
            "Salt to taste",
          ],
          procedure: "1. Blend mint leaves, yogurt, lemon juice, green chili, and salt until smooth. \n2. Serve chilled."
        },
        backgroundImage: "/images/indian/mint_chutney.png"
      },
      {
        name: "Tamarind Chutney",
        type: "veg",
        description: {
          ingredients: [
            "1/2 cup tamarind pulp",
            "1/2 cup jaggery",
            "1 teaspoon chili powder",
            "Salt to taste",
            "Water as needed",
          ],
          procedure: "1. Mix tamarind pulp, jaggery, chili powder, and salt in a pan. \n2. Add water and cook until jaggery dissolves. \n3. Let it cool before serving."
        },
        backgroundImage: "/images/indian/t_chutney.png"
      },
      {
        name: "Fish Chutney",
        type: "non-veg",
        description: {
          ingredients: [
            "1 cup fish (boiled and mashed)",
            "1/2 cup yogurt",
            "1 tablespoon mustard seeds",
            "1 green chili",
            "Salt to taste",
          ],
          procedure: "1. Blend mashed fish, yogurt, mustard seeds, green chili, and salt until smooth. \n2. Serve chilled."
        },
        backgroundImage: "/images/indian/f_chutney.png"
      }
    ]
  };
  
  // Function to filter recipes based on type (veg/non-veg)
  const filterRecipes = (category) => {
    return recipes[category].filter((recipe) => filter === "all" || recipe.type === filter);
  };

  const handleCardClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  const renderRecipeCategory = (categoryTitle, categoryKey) => (
    <div className="container-fluid px-4 py-3" id="custom-cards">
      <h2 className="pb-2 border-bottom">{categoryTitle}</h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {filterRecipes(categoryKey).map((recipe, index) => (
          <div className="col" key={index}>
            <div
              className="card card-cover h-80 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url(${recipe.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer'
              }}
              onClick={() => handleCardClick(recipe)}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{recipe.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

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

      <div className="container-fluid px-4 py-3" id="filter-buttons">
        <div className="d-flex justify-content-center mb-4">
          <button
            className={`btn btn-${filter === "all" ? "danger" : "secondary"} mx-2`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`btn btn-${filter === "veg" ? "danger" : "secondary"} mx-2`}
            onClick={() => setFilter("veg")}
          >
            Vegetarian
          </button>
          <button
            className={`btn btn-${filter === "non-veg" ? "danger" : "secondary"} mx-2`}
            onClick={() => setFilter("non-veg")}
          >
            Non-Vegetarian
          </button>
        </div>
      </div>

      {renderRecipeCategory("Appetizers (Starters)", "appetizers")}
      {renderRecipeCategory("Main Course", "mainCourse")}
      {renderRecipeCategory("Breads", "breads")}
      {renderRecipeCategory("Rice Varieties", "riceVarieties")}
      {renderRecipeCategory("Chutneys", "chutneys")}

      {/* Modal */}
      {selectedRecipe && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedRecipe.name}</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <h6>Ingredients:</h6>
                <ul>
                  {selectedRecipe.description.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <h6>Procedure:</h6>
                <p>{selectedRecipe.description.procedure}</p>
                <img
                  src={selectedRecipe.backgroundImage}
                  alt={selectedRecipe.name}
                  className="img-fluid"
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default IndianCuisine;