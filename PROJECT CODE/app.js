var experss = require("express");
var app = experss();

// "/" -> "HI THERE!"
app.get("/", function(req, res){
    console.log("someone requested for the home");
    res.send("HI THERE!");
});
// "/bye" -> "GOODBYE!"
app.get("/bye", function(req, res){
    console.log("someone requested for the bye");
    res.send("GOODBYE!");
});
// "/cat" -> "MEOW!"
app.get("/cat", function(req, res){
    console.log("someone requested for the cat");
    res.send("MEOW!");
});
// Tell Express to listen for request (start server)
app.listen(3000, function(){
    console.log("Server has started!");  
});