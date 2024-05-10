const Recipe = require('../models/recipe');
const multer = require('multer');




// exports.createRecipe = upload.array("file" ,10 ),  async (req, res) => {

  // console.log(req.body);
  // console.log(req.files);

//   res.json({
//     data:req.body,
//     files: req.files,
//   });
//   // try {
//   //   const { recipeName, ingredients, description } = req.body;
//   //   const {steps} = req.files

//   //   const data = new Recipe({
//   //     recipeName,
//   //     ingredients,
//   //     steps,
//   //     description
//   //   });

//   //   console.log(data);
//   //   // const recipe = await Recipe.create(req.body);
//   //   // console.log(recipe);
//   //   res.status(201).json({ success: true, data: data });
//   // } catch (error) {
//   //   res.status(400).json({ success: false, error: error.message });
//   // }
// };

// Controller function to get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    // console.log(recipes)
    res.status(200).json({ success: true, data: recipes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


// exports.testingRecipe = async(req, res) =>{
//   // console.log(req.body);
//   // const images = req.files.map(file => file.path); 
//   // const recipe = new TestRecipe({
//   //     title: req.body.title,
//   //     description: req.body.description,
//   //     image: images
//   // });
//   // console.log(recipe);
//   const { title, description } = req.body;
//   console.log(req.body);
//   // const images = req.files.map(file => file.path); // Extract paths of all uploaded images

//   // Extract step details from request body
//   const steps = req.body.steps?.map(step => ({
//       stepDetails: step.stepDetails,
//       // file: step.file ? req.files.find(file => file.originalname === step.file).path : null // Assign path of associated file if provided
//       file:step.file
//   }));


//   try {
//     const recipe = new TestRecipe({
//       title: title,
//       description: description,
//         steps: steps
//   });
//       const newRecipe = await recipe.save();
//       res.status(201).json(newRecipe);
//   } catch (err) {
//       res.status(400).json({ message: err.message });
//   }
// }