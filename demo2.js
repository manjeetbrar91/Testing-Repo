var express = require('express'); // it will import express module in our app
var bodyParser = require('body-parser');
console.log("Test");
//Form Data
//Json Data

var app = express(); // intilize exrpess 
app.use(bodyParser.json());//


//parameter
app.get('/api/student/:id/:name/:age', function(req, res){
 var id =   req.params.id
    var name = req.params.name
    var age = req.params.age
    //404 not found
    //400 is used for bad request
    if (name.length<3){
        res.status(400).send("Enter valid name. Name must greater 3 charss..");
    }else{
        res.send("value enterd by user.. "+id+"  "+name+" "+age);
    }


    
 });
 

  
app.listen(3000); // app.listnen will start node app server on port 3000

 