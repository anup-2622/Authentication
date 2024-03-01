const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const nodemailer = require('nodemailer');
const nodemailer = require("nodemailer");

exports.signup = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
    });
    res.status(201).json({
      status: true,
      message: "user Created successfully",
      user: newUser,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found " });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Wrong Password" });
    }

    const token = jwt.sign({ usernaem: user.name }, process.env.TOKEN_KEY, {
      expiresIn: "10m",
    });
    res.cookie("token", token, { httpOnly: true, maxAge: 36000 });

    return res
      .status(200)
      .json({ status: true, message: "Authentication Successful", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.forgotpassword = async (req, res) => {
  const { email } = req.body;

  try {
      const user = await User.findOne({ email });
    //   console.log(email);
    // console.log(user);
    if (!user) {
      return res.json({ message: "User not registered" });
    }

    const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, {
      expiresIn: "5m",
    });
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dev.anup2622@gmail.com",
        pass: "iynzieijzxwszdhl",
      },
    });

    // console.log(transporter);
    var mailOptions = {
      from: "dev.anup2622@gmail.com",
      to: email,
      subject: "Reset Password",
      text: `This Link will be expires after 5 mins `,
      text: `http://localhost:3000/resetpassword/${token}`,
    };
    //   console.log(mailOptions);

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.json({ message: "error sending email ", error: error });
      } else {
        return res.json({ status: true, message: "Email sent" });
        //   console.log('Email sent: ' + info.response);
      }
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

//   console.log(token + password);
  try {
    const decoded = await jwt.verify(token, process.env.TOKEN_KEY);

    const id = decoded.id;

    const hashPassword = await bcrypt.hash(password, 10);
    
    await User.findByIdAndUpdate({ _id: id }, { password: hashPassword });
    return res.json({ status: true, message: "Password Updated" });
  } catch (error) {
    // console.log(error);
    //    return res.status(500).json({ error: error.message , message:"Invalid Token" });
    return res.json("Invalid Token");
  }
};

exports.recipe = async (req, res) => {
  try {
  } catch (error) {
    console.log(erro);
  }
};

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
