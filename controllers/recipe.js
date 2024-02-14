const Recipe = require('../models/recipe');


exports.createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    console.log(recipe);
    res.status(201).json({ success: true, data: recipe });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Controller function to get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    console.log(recipes)
    res.status(200).json({ success: true, data: recipes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
