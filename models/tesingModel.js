const mongoose = require('mongoose');

// const stepSchema = new mongoose.Schema({
//     stepDetails: { type: String, required: true },
//     file: { type: String } // Assuming image will be stored as a URL
//   });
const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    steps:[{
        stepDetails: { type: String, required: true },
        file: { type: String } // Assuming image will be stored as a URL
       }]
    
});




module.exports = mongoose.model('testingRecipe', recipeSchema);
