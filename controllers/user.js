
const User = require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const nodemailer = require('nodemailer');
const nodemailer = require('nodemailer')

exports.signup = async (req, res)=>{
    try{

        const hashPassword = await bcrypt.hash(req.body.password , 10 )

        const newUser = await User.create({
            name:req.body.name,
            email:req.body.email,
            password: hashPassword,
        })
        res.status(201).json({status:true, message:'user Created successfully' , user: newUser}  )
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
        
        const token = jwt.sign({usernaem:user.name}, process.env.TOKEN_KEY ,{expiresIn:'10m'})
        res.cookie('token',token , { httpOnly:true, maxAge:36000})
        
        return res.status(200).json({ status:true , message: 'Authentication Successful', user})
    }
    catch(error)
    {
        res.status(500).json({error:error.message})
    }
}

exports.forgotpassword = async(req, res)=>{
 const {email} = req.body;

 try{
    const user = await User.findOne({email})
    // console.log(user);
    if(!user)
    {
        return res.json({message: "User not registered"})
    }
    
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dev.anup2622@gmail.com',
      pass: 'fpzp satz mlwr ufbl'
    }
  });
  
//   console.log(transporter);
  var mailOptions = {
    from: 'dev.anup2622@gmail.com',
    to: email,
    subject: 'Reset Password',
    text: `http://localhost:3000/forgotPassword/${token}`
  };

  
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
       return res.json({message:"error sending email " , error:error})
    } else {
        return res.json({status:true , message:"Email sent"})
    //   console.log('Email sent: ' + info.response);
    }
  });

 }  
 catch(e)
 {
    res.status(500).json({error:e.message})
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