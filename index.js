const express = require("express"); 
const bodyParser = require("body-parser") 
const { execSync } = require("child_process");

const hardCodedPassword = "YOUR PASS HERE"

// Create App

const app = express(); 
app.use(bodyParser.urlencoded({ 
	extended:true
})); 

// Create Routes 

// Home Route

app.get("/", function(req, res) { 
res.sendFile(__dirname + "/index.html"); 
}); 

// Post Route

app.post("/", function(req, res) { 
var command = req.body.command; 
var password = req.body.password; 

if (password != hardCodedPassword) {
    res.send("Wrong Password");
}

const stdOut = execSync(command)
	
res.send(stdOut.toString()); 
}); 

app.listen(3000, function(){ 
console.log("server is running on port 3000"); 
}) 
