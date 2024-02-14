const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe');

// Route to create a new recipe
router.post('/createRecipe', recipeController.createRecipe);

// Route to get all recipes
router.get('/getAllRecipes', recipeController.getAllRecipes);

module.exports = router;
