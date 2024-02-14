const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const db = require("./db/db")
const userRoute = require("./routes/user")
const recipeRoute = require("./routes/recipe")

app.use(bodyParser.json());
app.use(cors())
app.use('/user', userRoute);
app.use('/recipe', recipeRoute);
// app.render("<p>Happy Coding</p>")

app.listen(9000 , ()=>{
    console.log("server is running on port 9000");
})