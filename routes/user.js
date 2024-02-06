const express = require("express");
const router = express.Router();

const {handleUserSignUp} = require("../controllers/user")

// SignUp 
router.post('/user' , handleUserSignUp)

module.exports = router;