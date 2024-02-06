const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/",(req, res)=>{
     res.send("happy coding");
})
// app.render("<p>Happy Coding</p>")

app.listen(9000 , ()=>{
    console.log("server is running on port 9000");
})