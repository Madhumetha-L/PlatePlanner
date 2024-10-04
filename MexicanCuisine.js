import React, { useState } from "react";
import "./yourReciepe.css";
import { Link } from "react-router-dom";
import './bootstrap/bootstrap.min.css';

function MexicanCuisine() {
  const [filter, setFilter] = useState("all");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const recipes = {
    appetizers: [
      {
        name: "Guacamole",
        type: "veg",
        description: {
          ingredients: [
            "2 ripe avocados",
            "1 lime, juiced",
            "1 small onion, finely chopped",
            "1-2 tomatoes, diced",
            "1 clove garlic, minced",
            "Salt and pepper to taste"
          ],
          procedure: "1. In a bowl, mash the avocados with a fork. \n2. Stir in the lime juice, onion, tomatoes, garlic, salt, and pepper. \n3. Serve immediately with tortilla chips."
        },
        backgroundImage: "/images/mexican/guacamole.png"
      },
      {
        name: "Nachos",
        type: "veg",
        description: {
          ingredients: [
            "Tortilla chips",
            "1 cup shredded cheese (cheddar or Monterey Jack)",
            "1 can black beans, drained",
            "1 jalapeño, sliced",
            "Sour cream and guacamole for serving"
          ],
          procedure: "1. Preheat the oven to 350°F (175°C). \n2. Spread the tortilla chips on a baking sheet. \n3. Sprinkle cheese, black beans, and jalapeños on top. \n4. Bake for about 10 minutes, or until the cheese melts. \n5. Serve with sour cream and guacamole."
        },
        backgroundImage: "/images/mexican/nachos.png"
      },
      {
        name: "Quesadillas",
        type: "veg",
        description: {
          ingredients: [
            "4 flour tortillas",
            "2 cups shredded cheese (cheddar or Monterey Jack)",
            "1 bell pepper, sliced",
            "1 onion, sliced",
            "Optional: cooked chicken or beef"
          ],
          procedure: "1. Heat a skillet over medium heat. \n2. Place one tortilla in the skillet and sprinkle half the cheese on one half of the tortilla. \n3. Add the bell pepper, onion, and any meat. \n4. Fold the tortilla over and cook for 2-3 minutes on each side until golden brown and the cheese is melted. \n5. Cut into wedges and serve."
        },
        backgroundImage: "/images/mexican/quesadillas.png"
      },
      {
        name: "Mexican Street Corn (Elote)",
        type: "veg",
        description: {
          ingredients: [
            "4 ears of corn, husked",
            "1/2 cup mayonnaise",
            "1/2 cup crumbled cotija cheese",
            "1 tsp chili powder",
            "1 lime, cut into wedges"
          ],
          procedure: "1. Grill the corn until slightly charred. \n2. Brush the corn with mayonnaise, then sprinkle with cheese and chili powder. \n3. Serve with lime wedges."
        },
        backgroundImage: "/images/mexican/m_corn.png"
      }
    ],
    mainCourses: [
      {
        name: "Tacos (Carne Asada)",
        type: "non-veg",
        description: {
          ingredients: [
            "1 lb flank steak",
            "1 tbsp olive oil",
            "2 limes, juiced",
            "Corn tortillas",
            "Toppings: onions, cilantro, salsa"
          ],
          procedure: "1. Marinate steak in olive oil and lime juice for 1 hour. \n2. Grill steak to desired doneness; slice thinly. \n3. Serve in tortillas with toppings."
        },
        backgroundImage: "/images/mexican/tacos.png"
      },
      {
        name: "Enchiladas",
        type: "non-veg",
        description: {
          ingredients: [
            "10 corn tortillas",
            "2 cups shredded chicken",
            "2 cups enchilada sauce",
            "2 cups cheese"
          ],
          procedure: "1. Preheat oven to 350°F (175°C). \n2. Fill tortillas with chicken and roll them up; place in a baking dish. \n3. Pour enchilada sauce over the top and sprinkle with cheese. \n4. Bake for 20 minutes until bubbly."
        },
        backgroundImage: "/images/mexican/enchiladas.png"
      },
      {
        name: "Tamales",
        type: "non-veg",
        description: {
          ingredients: [
            "2 cups masa harina",
            "1 cup chicken broth",
            "1 cup cooked chicken, shredded",
            "1/2 cup salsa"
          ],
          procedure: "1. Mix masa harina and broth to form a dough. \n2. Spread dough on corn husks, add filling, and roll up. \n3. Steam for 1-1.5 hours until firm."
        },
        backgroundImage: "/images/mexican/tamales.png"
      },
      {
        name: "Fajitas",
        type: "non-veg",
        description: {
          ingredients: [
            "1 lb chicken or beef",
            "1 bell pepper, sliced",
            "1 onion, sliced",
            "1 tbsp fajita seasoning",
            "Tortillas for serving"
          ],
          procedure: "1. Marinate meat with fajita seasoning. \n2. Grill meat until cooked, add peppers and onions to the grill. \n3. Serve with tortillas."
        },
        backgroundImage: "/images/mexican/fajitas.png"
      },
      {
        name: "Chiles Rellenos",
        type: "veg",
        description: {
          ingredients: [
            "4 poblano peppers",
            "2 cups cheese",
            "3 eggs, separated",
            "1 cup flour"
          ],
          procedure: "1. Roast and peel the poblanos. \n2. Stuff with cheese. \n3. Dip in egg whites, then fry until golden."
        },
        backgroundImage: "/images/mexican/chiles.png"
      }
    ],
    breads: [
      {
        name: "Corn Tortillas",
        type: "veg",
        description: {
          ingredients: [
            "2 cups masa harina",
            "1/2 tsp salt",
            "1.5 cups warm water"
          ],
          procedure: "1. Mix masa harina and salt; gradually add water. \n2. Knead until smooth; divide into balls. \n3. Flatten and cook on a hot skillet for 1 minute per side."
        },
        backgroundImage: "/images/mexican/corn_t.png"
      },
      {
        name: "Flour Tortillas",
        type: "veg",
        description: {
          ingredients: [
            "2 cups flour",
            "1/2 tsp salt",
            "1/4 cup lard or vegetable shortening",
            "3/4 cup warm water"
          ],
          procedure: "1. Mix flour and salt; cut in lard. \n2. Gradually add water until a dough forms. \n3. Knead and divide into balls; roll out and cook."
        },
        backgroundImage: "/images/mexican/f_tortillas.png"
      },
      {
        name: "Mexican Bolillos",
        type: "veg",
        description: {
          ingredients: [
            "4 cups flour",
            "2 cups water",
            "1 packet yeast",
            "1 tsp salt"
          ],
          procedure: "1. Mix all ingredients to form a dough. \n2. Knead until smooth; let rise for 1 hour. \n3. Shape into rolls and bake at 375°F (190°C) for 20 minutes."
        },
        backgroundImage: "/images/mexican/m_bolillos.png"
      }
    ],
    riceVarieties: [
      {
        name: "Mexican Rice",
        type: "veg",
        description: {
          ingredients: [
            "1 cup rice",
            "2 cups chicken broth",
            "1/2 cup tomato sauce",
            "1 tsp cumin",
            "1/2 onion, chopped"
          ],
          procedure: "1. Sauté onion in a pot until soft. \n2. Add rice and toast for a few minutes. \n3. Stir in broth, tomato sauce, and cumin; bring to a boil. \n4. Cover and simmer until rice is cooked."
        },
        backgroundImage: "/images/mexican/m_rice.png"
      },
      {
        name: "Refried Beans",
        type: "veg",
        description: {
          ingredients: [
            "2 cups cooked pinto beans",
            "1/2 onion, chopped",
            "1 clove garlic, minced",
            "1/4 cup cheese (optional)"
          ],
          procedure: "1. Sauté onion and garlic until soft. \n2. Add beans and mash; cook until heated through. \n3. Stir in cheese if using."
        },
        backgroundImage: "/images/mexican/refried_beans.png"
      },
      {
        name: "Black Beans",
        type: "veg",
        description: {
          ingredients: [
            "2 cups cooked black beans",
            "1/2 onion, chopped",
            "1 clove garlic, minced",
            "1 tsp cumin",
            "Salt to taste"
          ],
          procedure: "1. Sauté onion and garlic until soft. \n2. Add beans and cumin; cook until heated through. \n3. Season with salt."
        },
        backgroundImage: "/images/mexican/black_beans.png"
      }
    ],
    desserts: [
      {
        name: "Churros",
        type: "veg",
        description: {
          ingredients: [
            "1 cup water",
            "1/2 cup butter",
            "1 cup flour",
            "2 eggs",
            "1 cup sugar",
            "1 tbsp cinnamon"
          ],
          procedure: "1. Boil water and butter; stir in flour. \n2. Add eggs one at a time. \n3. Pipe into hot oil and fry until golden. \n4. Roll in cinnamon sugar."
        },
        backgroundImage: "/images/mexican/churros.png"
      },
      {
        name: "Flan",
        type: "veg",
        description: {
          ingredients: [
            "1 cup sugar",
            "1 can sweetened condensed milk",
            "1 can evaporated milk",
            "3 eggs",
            "1 tsp vanilla"
          ],
          procedure: "1. Caramelize sugar in a pan. \n2. Blend remaining ingredients; pour over caramel. \n3. Bake in a water bath for 1 hour at 350°F (175°C)."
        },
        backgroundImage: "/images/mexican/flan.png"
      },
      {
        name: "Tres Leches Cake",
        type: "veg",
        description: {
          ingredients: [
            "1 box vanilla cake mix",
            "1 cup evaporated milk",
            "1 cup sweetened condensed milk",
            "1 cup whole milk",
            "Whipped cream for topping"
          ],
          procedure: "1. Bake cake according to box instructions. \n2. Mix milks and pour over cooled cake. \n3. Chill and top with whipped cream."
        },
        backgroundImage: "/images/mexican/tres.png"
      },
      {
        name: "Mexican Hot Chocolate",
        type: "veg",
        description: {
          ingredients: [
            "4 cups milk",
            "1/2 cup cocoa powder",
            "1/2 cup sugar",
            "1 tsp cinnamon",
            "1 tsp vanilla"
          ],
          procedure: "1. In a pot, whisk together cocoa powder, sugar, and cinnamon. \n2. Gradually add milk; heat until warm. \n3. Stir in vanilla before serving."
        },
        backgroundImage: "/images/mexican/m_hot.png"
      }
    ]
  };
  
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
      {renderRecipeCategory("Main Course", "mainCourses")}
      {renderRecipeCategory("Breads", "breads")}
      {renderRecipeCategory("Rice Varieties", "riceVarieties")}
      {renderRecipeCategory("Desserts", "desserts")}

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

export default MexicanCuisine;