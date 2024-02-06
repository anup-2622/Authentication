const express = require("express");
const router = express.Router();

const user = require("../controllers/user")

// SignUp 
router.post('/signup' , user.signup)

module.exports = router;