
const User = require("../models/user")

async function handleUserSignUp(req , res){
    const {name , email , password} = req.body;
    await User.create({
        name,
        email,
        password
    })
    res.status(201).json({message:"User Created Sucessfully " })
}


module.exports={
    handleUserSignUp,
}