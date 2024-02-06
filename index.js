const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user")
const app = express();

app.get("/",(req, res)=>{
     res.send("happy coding");
})

app.use("/user" ,userRoute)
// app.render("<p>Happy Coding</p>")

app.listen(9000 , ()=>{
    console.log("server is running on port 9000");
})