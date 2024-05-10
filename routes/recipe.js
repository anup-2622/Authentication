const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe');

const TestRecipe = require('../models/tesingModel')


// Route to create a new recipe
// router.post('/createRecipe', upload.array("file", 10), recipeController.createRecipe);
// router.post('/createRecipe', recipeController.createRecipe);


// Route to get all recipes
router.get('/getAllRecipes', recipeController.getAllRecipes);



module.exports = router;
