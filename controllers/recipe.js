const Recipe = require('../models/recipe');

exports.createRecipe = async (req, res) => {
  try {
    const { recipeName, ingredients, steps, description } = req.body;

    const recipe = new Recipe({
      recipeName,
      ingredients,
      steps,
      description
    });

    console.log(recipe);
    // const {} = req.body;

    // if (!req.file) {
    //   return res.status(400).json({ success: false, error: 'No image uploaded' });
    // }

   await recipe.save();
    // console.log(recipe);
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
