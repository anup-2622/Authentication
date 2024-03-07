const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const db = require("./db/db")
const userRoute = require("./routes/user")
const recipeRoute = require("./routes/recipe")
var cookieParser = require('cookie-parser')
require('dotenv').config()
const multer = require('multer');
// const recipeRoutes = require('./routes/recipeRoutes');
const path = require('path');

app.use(bodyParser.json());
app.use(cors({

    origin:['http://localhost:3000'],
    credentials:true
}
))

// Multer setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });
  
app.use(cookieParser())
app.use('/user', userRoute);
app.use('/recipe', recipeRoute);
// app.render("<p>Happy Coding</p>")

app.listen(9000 , ()=>{
    console.log("server is running on port 9000");
})