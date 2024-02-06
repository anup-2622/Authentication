const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user")
const app = express();
const bodyParser = require('body-parser');
// app.use(bodyParser.json());
const db = require("./db/db")


// mongoose.connect('mongodb://localhost:27017/auth_example', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// // const db = mongoose.connection;


// app.get("/",(req, res)=>{
//      res.send("happy coding");
// })

app.use(bodyParser.json());

app.use('/user', userRoute);
// app.render("<p>Happy Coding</p>")

app.listen(9000 , ()=>{
    console.log("server is running on port 9000");
})