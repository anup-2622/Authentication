const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:String
    }
})

const stepSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    }
})

const RecipeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    ingredients:[IngredientSchema],
    steps:[stepSchema],
    description:{
        type:String
    }
})



const Recipe = mongoose.model('recipe', RecipeSchema)
module.exports = Recipe;