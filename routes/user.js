const express = require("express");
const router = express.Router();

const user = require("../controllers/user")

// SignUp 
router.post('/signup' , user.signup);
router.post('/login' , user.login);
router.post('/forgotpassword', user.forgotpassword)
module.exports = router;