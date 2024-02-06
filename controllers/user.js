
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