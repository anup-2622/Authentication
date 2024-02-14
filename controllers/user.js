
const User = require("../models/user")
const bcrypt = require('bcrypt')


exports.signup = async (req, res)=>{
    try{

        const hashPassword = await bcrypt.hash(req.body.password , 10 )

        const newUser = await User.create({
            name:req.body.name,
            email:req.body.email,
            password: hashPassword,
        })
        res.status(201).json({message:'user Created successfully' , user: newUser}  )
    }catch(e){
        res.status(500).json({error:e.message})
    }
}

exports.login = async(req , res)=>{
    try{
        const { email , password} = req.body;
        const user = await User.findOne({email});   
        if(!user)
        {
            return res.status(401).json({message: 'User not found '})
        }

        const isPasswordValid = await bcrypt.compare(password , user.password)
        if(!isPasswordValid)
        {
            return res.status(401).json({message:'Wrong Password'})
        }
        res.status(200).json({message: 'Authentication Successful', user})
        
    }
    catch(error)
    {
        res.status(500).json({error:error.message})
    }
}


exports.recipe = async (req, res)=>{
    try{

    }
    catch(error)
    {
        console.log(erro);
    }
}

// async function handleUserSignUp(req , res){
//     const {name , email , password} = req.body;
//     await User.create({
//         name,
//         email,
//         password
//     })
//     res.status(201).json({message:"User Created Sucessfully " })
// }


// module.exports={
//     handleUserSignUp
// }