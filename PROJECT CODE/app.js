var express = require("express")
var app = express();

app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("landing.ejs");
});

app.get("/playgrounds", function(req,res){
    res.render("playgrounds.ejs");
});

app.get("/contactus", function(req,res){
    res.render("contact us.ejs");
});

app.get("/about", function(req,res){
    res.render("about.ejs");
});

app.get("/login", function(req,res){
    res.render("login.ejs");
});

app.get("/signup", function(req,res){
    res.render("sign up.ejs");
});

app.get("/*", function(req,res){
    res.send("404 ERROR! NOT FOUND");
});

// Tell Express to listen for request (start server)
app.listen(3000, function(){
    console.log("Server has started!");  
});