var express = require("express");
var app = express();

app.get("/", function(req, res){
    console.log("Someone requested for the home page");
    res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "oink",
        cow: "hamba",
        cat: "i hate you hooman",
        chicken: "kuk kuru ku",
        goldfish: "..."
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    // if(animal == "cow"){
    //     sound = "hamba"
    // }
    // else if(animal == "pig"){
    //     sound = "oink";
    // }
    // else if(animal == "chicken"){
    //     sound = "kuk kuru ku";
    // }
    console.log("Someone requested for " + animal + " speak page")
    res.send("this " + animal + " speaks " + sound);
});

app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    for(i=0; i<times; i++){
        result += message + " ";
    }

    console.log("Someone requested for repeat " + message + " for " + times + " times ");
    res.send(result);
});

app.get("*", function(req, res){
    console.log("someone made a wrong request");
    res.send("sorry, page not found ... what are you doing with your life");
});

app.listen(3000, function(){
    console.log("Server is connected");
});