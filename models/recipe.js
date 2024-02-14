const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: String, required: true }
});

const stepSchema = new mongoose.Schema({
  description: { type: String, required: true },
  image: { type: String } // Assuming image will be stored as a URL
});

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [ingredientSchema],
  steps: [stepSchema],
  description: { type: String }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
