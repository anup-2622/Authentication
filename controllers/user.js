
const User = require("../models/user")


exports.signup = async (req, res)=>{
    try{
        const newUser = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
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
            return res.status(401).json({message: 'Authentication Failed . User not found '})
        }
        if(user.password !== password)
        {
            return res.status(401).json({message:'Authentication Failed. Wrong Password'})
        }
        res.status(200).json({message: 'Authentication Successful', user})
        // const isPasswordValid = await.User.find
        // if(is)
    }
    catch(error)
    {
        res.status(500).json({error:error.message})
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