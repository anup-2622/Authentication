const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db/db");
const userRoute = require("./routes/user");
const recipeRoute = require("./routes/recipe");
var cookieParser = require("cookie-parser");
require("dotenv").config();
const multer = require("multer");
const Recipe = require("./models/recipe");
const path = require("path");
const { setPriority } = require("os");

app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10000000,
  },
});

app.use(cookieParser());
app.use("/user", userRoute);
app.use("/recipe", recipeRoute);
app.get("/" ,(req , res)=>{
      res.send("Hello Backend");  
})
app.use(express.static('uploads'));
// app.use('/images', express.static('uploads'));
app.use("/recipe/createRecipe", upload.array("file", 10), async (req, res) => {
  const { recipeName, ingredients, description, steps } = JSON.parse(
    JSON.stringify(req.body)
  );
  const files = req.files;
  const imageArray = [];
  files.forEach((file) => {
    imageArray.push({ file: file.filename });
  });
  const stepsDet = steps.map((item, index) => ({
    stepDetails: item.stepDetails,
    ...imageArray[index],
  }));

  const recipe = new Recipe({
    recipeName,
    ingredients,
    description,
    stepsDet,
  });
 await recipe.save();
  res.status(201).json({ success: true, data: recipe });
});
app.get('/image/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    res.sendFile(path.join(__dirname, 'uploads', imageName));
});
app.listen(9000, () => {
  console.log("server is running on port 9000");
});
