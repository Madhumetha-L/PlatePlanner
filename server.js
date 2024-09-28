const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Set up multer for file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, `${uuidv4()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// In-memory user store (for simplicity, in a real application you would use a database)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

let users = [];
let recipes = [];

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Signup route
app.post('/signup', (req, res) => {
  console.log('Received signup request');
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    console.log('Passwords do not match');
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  const userExists = users.find(user => user.email === email);
  if (userExists) {
    console.log('User already exists');
    return res.status(400).json({ message: 'User already exists' });
  }

  users.push({ id: uuidv4(), name, email, password });
  console.log('User created successfully');
  res.status(201).json({ message: 'User created successfully' });
});

// Login route
app.post('/login', (req, res) => {
  console.log('Received login request');
  const { email, password } = req.body;

  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  res.status(200).json({ message: 'Login successful', user });
});

// Route to fetch all users (for debugging purposes)
app.get('/users', (req, res) => {
  const userId = req.headers['userid'];
  const user = users.filter(user => user.id == userId);

  console.log('Fetching all users', users);
  res.json({ user: user });
});

// Add recipe route with image upload
app.post('/userRecipe', upload.single('dishImage'), (req, res) => {
  console.log('Received add recipe request');
  const { userId, dishName, dishStyle, dishTime, dishIngredients, dishProcedure } = req.body;
  const dishImage = req.file ? req.file.filename : null;

  // Create a new recipe object
  const newRecipe = {
    recid: uuidv4(),
    userId,
    dishName,
    dishStyle,
    dishTime,
    dishIngredients,
    dishProcedure,
    dishImage
  };

  // Store the recipe in memory (for simplicity, in a real application you would use a database)
  recipes.push(newRecipe);

  console.log('Recipe added successfully');
  res.status(201).json({ message: 'Recipe added successfully' });
});

// Route to fetch all recipes (for debugging purposes)
app.get('/userRecipe', (req, res) => {
  const userId = req.headers['userid'];
  const userRecipes = recipes.filter(recipe => recipe.userId == userId);
  res.json({ recipes: userRecipes });
});

app.get('/signup', (req, res) => {
  const userId = req.headers['userid'];

  const userDetails = users.filter(user => user.id == userId);
  console.log(userDetails);
  res.json({ details: userDetails });
});

app.delete('/userRecipe/recipes/:id', (req, res) => {
  const { id } = req.params;
  recipes = recipes.filter(recipe => recipe.recid !== id);
  console.log(`Deleted recipe with ID: ${id}`);
  res.status(200).json({ message: 'Recipe deleted successfully' });
});

app.put('/userRecipe/recipes/:id', upload.single('dishImage'), (req, res) => {
  const { id } = req.params;
  const { dishName, dishStyle, dishTime, dishIngredients, dishProcedure } = req.body;
  const dishImage = req.file ? req.file.filename : req.body.dishImage;

  let recipe = recipes.find(recipe => recipe.recid === id);
  if (recipe) {
    recipe.dishName = dishName;
    recipe.dishStyle = dishStyle;
    recipe.dishTime = dishTime;
    recipe.dishIngredients = dishIngredients;
    recipe.dishProcedure = dishProcedure;
    recipe.dishImage = dishImage;

    console.log(`Updated recipe with ID: ${id}`);
    res.status(200).json({ message: 'Recipe updated successfully' });
  } else {
    res.status(404).json({ message: 'Recipe not found' });
  }
});

app.get('/ty', (req, res) => {
  res.send({ recipes: recipes });
});

app.get('/persons', (req, res) => {
  res.send({ users: users });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
