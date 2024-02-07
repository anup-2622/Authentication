const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { 
        type:String,
        required:true
    },
    email :{
        type: String,
        required:true,
        unique:true,
    },
    password :{
        type:String,
        required:true,
    }
},{timestamps:true})


// const recipeSchema = new mongoose.Schema({
    
// })


const User = mongoose.model('user', userSchema)
module.exports = User;