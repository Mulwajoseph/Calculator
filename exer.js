const express = require('express');
const app = express();
/*app.get("/", function(req,res) {res.send("hello world")})
app.get("/about",function(req,res){res.send("my details")});
app.get("/contact",function(req,res){res.send("contact me anytime via email")});
app.listen(3000 , function(){console.log("server started on port 3000")};*/

//arrow functions
app.get("/", (req,res) => res.send("hello world"))
app.get("/about",(req,res)=> req.send("my details"))
 //sending file i.e index.html
 app.get("/", (req,res) => res.sendFile(__dirname + "/index.html"));
// app.listen(3000 , function(){console.log("server started on port 3000")};