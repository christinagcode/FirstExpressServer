let express = require("express");

let PORT = 8000;

let app = express();

app.get("/hi", function(req, res){
    console.log("GET /hi");

    let blob = {};
    blob.message = "Hi";
    blob.time = new Date();

    res.json(blob)
});

/**
 * This endpoint reads the query params "name", and responds back with
 * "Hello $(name), how are you?"
 * if no name is available on the query param, then responds back with
 * "Hello there, how are you?"
 * 
 * /hello -> "Hello there, how are you?"
 * /hello?name=Bob -> "Hello Bob, how are you?"
 * /hello?x=Mac -> "Hello there, how are you"
 *  */ 
app.get("/hello", function(req, res){
    console.log("GET /hello");

     let q = req.query;
     let name = q.name;
     let greeting;
     // if query params contains name
     if(name){
       greeting =  `Hello ${name}, how are you?`;  
     } else {
        greeting = "Hello there, how are you";
     }
     res.send(greeting);
});

app.get("/sup", function(req, res){
    console.log("GET /sup");

    res.sendStatus(204);
});

app.get("/hey", function(req,res){
    console.log("GET /hey")
    res.status(400).send("hey is for horses");
});

app.get("/echo", function(req,res){
    console.log("GET /echo")
    console.log("query params = ", req.query);
    res.json(req.query);
});


app.listen(PORT, function(){
    console.log("Application started listening on port", PORT);
})