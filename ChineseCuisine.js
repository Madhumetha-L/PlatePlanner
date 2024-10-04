import React, { useState } from "react";
import "./yourReciepe.css";
import { Link } from "react-router-dom";
import './bootstrap/bootstrap.min.css';

function ChineseCuisine() {
  // State to manage the filter (vegetarian/non-vegetarian)
  const [filter, setFilter] = useState("all");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  // Sample data for recipes
  const recipes = {
    appetizers: [
      {
        name: "Spring Rolls",
        type: "veg",
        description: {
          ingredients: [
            "1 package spring roll wrappers",
            "2 cups shredded cabbage",
            "1 cup shredded carrots",
            "1 cup bean sprouts",
            "2 tablespoons soy sauce",
            "Oil for frying"
          ],
          procedure: "1. In a bowl, mix cabbage, carrots, bean sprouts, and soy sauce. \n2. Place a spoonful of the mixture in a wrapper and roll tightly. \n3. Heat oil in a pan and fry until golden brown. \n4. Serve with dipping sauce."
        },
        backgroundImage: "/images/chinese/rolls.png"
      },
      {
        name: "Dumplings (Veg)",
        type: "veg",
        description: {
          ingredients: [
            "1 package dumpling wrappers",
            "1 cup chopped cabbage",
            "1 cup grated carrots",
            "1/2 cup chopped green onions",
            "1 tablespoon soy sauce"
          ],
          procedure: "1. In a bowl, combine cabbage, carrots, green onions, and soy sauce. \n2. Place a spoonful of the mixture on a wrapper and fold. \n3. Steam or pan-fry until cooked. \n4. Serve with soy sauce."
        },
        backgroundImage: "/images/chinese/veg_dump.png"
      },
      {
        name: "Dumplings (Pork)",
        type: "non-veg",
        description: {
          ingredients: [
            "1 package dumpling wrappers",
            "1 lb ground pork",
            "1 cup chopped cabbage",
            "1/2 cup chopped green onions",
            "1 tablespoon soy sauce"
          ],
          procedure: "1. In a bowl, combine ground pork, cabbage, green onions, and soy sauce. \n2. Place a spoonful of the mixture on a wrapper and fold. \n3. Steam or pan-fry until cooked. \n4. Serve with soy sauce."
        },
        backgroundImage: "/images/chinese/dump_pork.png"
      },
      {
        name: "Crab Rangoon",
        type: "non-veg",
        description: {
          ingredients: [
            "1 package wonton wrappers",
            "8 oz cream cheese, softened",
            "1 cup crab meat",
            "1/2 tsp garlic powder",
            "Oil for frying"
          ],
          procedure: "1. In a bowl, mix cream cheese, crab meat, and garlic powder. \n2. Place a spoonful of the mixture on a wonton wrapper and fold. \n3. Fry in hot oil until golden brown. \n4. Serve with sweet and sour sauce."
        },
        backgroundImage: "/images/chinese/crab_rangoon.png"
      }
    ],
    soups: [
      {
        name: "Hot and Sour Soup",
        type: "veg",
        description: {
          ingredients: [
            "4 cups vegetable broth",
            "1 cup sliced mushrooms",
            "1/2 cup tofu, cubed",
            "1/4 cup soy sauce",
            "1 tbsp vinegar",
            "1 egg, beaten"
          ],
          procedure: "1. In a pot, bring vegetable broth to a boil. \n2. Add mushrooms and tofu; simmer for 5 minutes. \n3. Stir in soy sauce and vinegar. \n4. Slowly pour in the beaten egg while stirring."
        },
        backgroundImage: "/images/chinese/h_s_soup.png"
      },
      {
        name: "Sweet Corn Soup",
        type: "veg",
        description: {
          ingredients: [
            "2 cups corn kernels",
            "4 cups vegetable broth",
            "1/2 cup milk",
            "1 tbsp cornstarch",
            "Salt and pepper to taste"
          ],
          procedure: "1. In a pot, blend corn with vegetable broth until smooth. \n2. Add milk and bring to a simmer. \n3. Mix cornstarch with water; stir into soup until thickened. \n4. Season with salt and pepper."
        },
        backgroundImage: "/images/chinese/Sweet_corn.png"
      },
      {
        name: "Wonton Soup",
        type: "non-veg",
        description: {
          ingredients: [
            "4 cups chicken broth",
            "1 package wontons",
            "1/2 cup chopped green onions",
            "Soy sauce for serving"
          ],
          procedure: "1. In a pot, bring chicken broth to a boil. \n2. Add wontons and cook until they float. \n3. Stir in green onions and serve with soy sauce."
        },
        backgroundImage: "/images/chinese/wonton.png"
      },
      {
        name: "Chicken Noodle Soup",
        type: "non-veg",
        description: {
          ingredients: [
            "4 cups chicken broth",
            "1 cup cooked chicken, shredded",
            "1 cup egg noodles",
            "1/2 cup chopped carrots",
            "1/2 cup chopped celery"
          ],
          procedure: "1. In a pot, bring chicken broth to a boil. \n2. Add carrots and celery; cook until soft. \n3. Stir in egg noodles and chicken; simmer until noodles are cooked."
        },
        backgroundImage: "/images/chinese/chicken_noodle.png"
      }
    ],
    mainCourses: [
      {
        name: "Kung Pao Chicken",
        type: "non-veg",
        description: {
          ingredients: [
            "1 lb chicken breast, cubed",
            "1/2 cup peanuts",
            "2 bell peppers, chopped",
            "2 tablespoons soy sauce",
            "1 tablespoon chili paste"
          ],
          procedure: "1. In a wok, stir-fry chicken until cooked. \n2. Add peanuts and bell peppers; stir-fry for 2 minutes. \n3. Stir in soy sauce and chili paste; cook for another minute."
        },
        backgroundImage: "/images/chinese/kung_pao.png"
      },
      {
        name: "Mapo Tofu",
        type: "veg",
        description: {
          ingredients: [
            "1 block tofu, cubed",
            "1/2 lb ground pork",
            "1 tablespoon doubanjiang (fermented bean paste)",
            "1/2 cup chicken broth",
            "2 green onions, chopped"
          ],
          procedure: "1. In a pan, cook ground pork until browned. \n2. Add tofu and doubanjiang; stir-fry gently. \n3. Pour in chicken broth; simmer for 5 minutes. \n4. Garnish with green onions before serving."
        },
        backgroundImage: "/images/chinese/mapo_tofu.png"
      },
      {
        name: "Sweet and Sour Pork",
        type: "non-veg",
        description: {
          ingredients: [
            "1 lb pork, cubed",
            "1/2 cup pineapple chunks",
            "1/2 cup bell peppers, chopped",
            "1/2 cup sweet and sour sauce"
          ],
          procedure: "1. In a pan, fry pork until golden. \n2. Add pineapple and bell peppers; cook for 3 minutes. \n3. Stir in sweet and sour sauce; cook for another 2 minutes."
        },
        backgroundImage: "/images/chinese/s_s_pork.png"
      },
      {
        name: "Szechuan Vegetables",
        type: "veg",
        description: {
          ingredients: [
            "2 cups mixed vegetables (bell peppers, carrots, broccoli)",
            "2 tablespoons soy sauce",
            "1 tablespoon chili paste",
            "1 tablespoon sesame oil"
          ],
          procedure: "1. Heat sesame oil in a wok. \n2. Add vegetables and stir-fry for 5 minutes. \n3. Stir in soy sauce and chili paste; cook for another minute."
        },
        backgroundImage: "/images/chinese/schezuan.png"
      },
      {
        name: "Beef with Broccoli",
        type: "non-veg",
        description: {
          ingredients: [
            "1 lb beef, sliced",
            "2 cups broccoli florets",
            "2 tablespoons soy sauce",
            "1 tablespoon oyster sauce"
          ],
          procedure: "1. In a pan, stir-fry beef until browned. \n2. Add broccoli and cook for 3 minutes. \n3. Stir in soy sauce and oyster sauce; cook for another minute."
        },
        backgroundImage: "/images/chinese/beef_broccoli.png"
      }
    ],
    noodlesAndRice: [
      {
        name: "Chow Mein",
        type: "veg",
        description: {
          ingredients: [
            "1 package chow mein noodles",
            "2 cups mixed vegetables",
            "2 tablespoons soy sauce",
            "1 tablespoon sesame oil"
          ],
          procedure: "1. Cook noodles according to package instructions. \n2. In a wok, heat sesame oil; stir-fry vegetables. \n3. Add noodles and soy sauce; toss to combine."
        },
        backgroundImage: "/images/chinese/chow_mein.png"
      },
      {
        name: "Hakka Noodles",
        type: "veg",
        description: {
          ingredients: [
            "1 package hakka noodles",
            "2 cups mixed vegetables",
            "2 tablespoons soy sauce",
            "1 tablespoon chili sauce"
          ],
          procedure: "1. Cook noodles according to package instructions. \n2. In a wok, heat oil; stir-fry vegetables. \n3. Add noodles, soy sauce, and chili sauce; toss to combine."
        },
        backgroundImage: "/images/chinese/hakka.png"
      },
      {
        name: "Fried Rice (Chicken)",
        type: "non-veg",
        description: {
          ingredients: [
            "2 cups cooked rice",
            "1 cup cooked chicken, shredded",
            "1/2 cup peas and carrots",
            "2 tablespoons soy sauce",
            "1 egg, beaten"
          ],
          procedure: "1. In a pan, scramble the egg; set aside. \n2. In the same pan, stir-fry rice, chicken, and vegetables. \n3. Add soy sauce and scrambled egg; mix well."
        },
        backgroundImage: "/images/chinese/chicken_fried.png"
      },
      {
        name: "Egg Fried Rice",
        type: "non-veg",
        description: {
          ingredients: [
            "2 cups cooked rice",
            "2 eggs, beaten",
            "1/2 cup peas and carrots",
            "2 tablespoons soy sauce"
          ],
          procedure: "1. In a pan, scramble the eggs; set aside. \n2. Stir-fry rice and vegetables. \n3. Add soy sauce and scrambled eggs; mix well."
        },
        backgroundImage: "/images/chinese/egg_fried.png"
      },
      {
        name: "Vegetable Fried Rice",
        type: "veg",
        description: {
          ingredients: [
            "2 cups cooked rice",
            "1 cup mixed vegetables",
            "2 tablespoons soy sauce",
            "1 tablespoon sesame oil"
          ],
          procedure: "1. In a pan, heat sesame oil; stir-fry vegetables. \n2. Add rice and soy sauce; mix well."
        },
        backgroundImage: "/images/chinese/veg_fried.png"
      }
    ],
    saucesAndSides: [
      {
        name: "Soy Sauce",
        type: "veg",
        description: {
          ingredients: [],
          procedure: "1. Use as a condiment for various dishes."
        },
        backgroundImage: "/images/chinese/soy_sauce.png"
      },
      {
        name: "Chili Oil",
        type: "veg",
        description: {
          ingredients: [
            "1 cup vegetable oil",
            "1/4 cup chili flakes",
            "1 teaspoon garlic, minced"
          ],
          procedure: "1. Heat oil; add chili flakes and garlic. \n2. Let it cool and strain. \n3. Use as a condiment."
        },
        backgroundImage: "/images/chinese/chilli_oil.png"
      },
      {
        name: "Oyster Sauce",
        type: "non-veg",
        description: {
          ingredients: [],
          procedure: "1. Use as a condiment for stir-fried dishes."
        },
        backgroundImage: "/images/chinese/oyster_sauce.png"
      },
      {
        name: "Hoisin Sauce",
        type: "veg",
        description: {
          ingredients: [],
          procedure: "1. Use as a dipping sauce or in stir-fry."
        },
        backgroundImage: "/images/chinese/hoisin.png"
      }
    ],
    desserts: [
      {
        name: "Fortune Cookies",
        type: "veg",
        description: {
          ingredients: [
            "1 cup flour",
            "1/2 cup sugar",
            "1/2 cup water",
            "1/4 cup vegetable oil",
            "1 tsp vanilla extract"
          ],
          procedure: "1. Preheat oven to 400°F (200°C). \n2. Mix all ingredients to form a batter. \n3. Drop spoonfuls on a baking sheet and bake until edges are golden. \n4. Place a fortune in each cookie while still warm and fold."
        },
        backgroundImage: "/images/chinese/fortune.png"
      },
      {
        name: "Sesame Seed Balls",
        type: "veg",
        description: {
          ingredients: [
            "1 cup glutinous rice flour",
            "1/2 cup red bean paste",
            "1/2 cup sesame seeds",
            "Water as needed"
          ],
          procedure: "1. Mix rice flour with enough water to form a dough. \n2. Take a small amount, fill with red bean paste, and shape into balls. \n3. Roll in sesame seeds and deep fry until golden."
        },
        backgroundImage: "/images/chinese/sesame.png"
      },
      {
        name: "Egg Tarts",
        type: "veg",
        description: {
          ingredients: [
            "1 package tart shells",
            "2 eggs",
            "1/2 cup sugar",
            "1 cup milk",
            "1 tsp vanilla extract"
          ],
          procedure: "1. Preheat oven to 375°F (190°C). \n2. Whisk eggs, sugar, milk, and vanilla. \n3. Pour mixture into tart shells and bake until set."
        },
        backgroundImage: "/images/chinese/egg_tarts.png"
      },
      {
        name: "Tangyuan (Glutinous Rice Balls)",
        type: "veg",
        description: {
          ingredients: [
            "1 cup glutinous rice flour",
            "Water as needed",
            "Sweet red bean paste for filling"
          ],
          procedure: "1. Mix rice flour with water to form a dough. \n2. Take a small amount, fill with red bean paste, and shape into balls. \n3. Boil in water until they float; serve in sweet syrup."
        },
        backgroundImage: "/images/chinese/tanguan.png"
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
      {renderRecipeCategory("Main Course", "mainCourses")}
      {renderRecipeCategory("Soups", "soups")}
      {renderRecipeCategory("Noodles and Rice", "noodlesAndRice")}
      {renderRecipeCategory("Desserts", "desserts")}
      {renderRecipeCategory("Sauces and Sides", "saucesAndSides")}

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

export default ChineseCuisine;