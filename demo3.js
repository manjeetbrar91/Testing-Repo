var express = require('express');
var bodyParser = require('body-parser');



var app = express(); // intilize exrpess 
app.use(bodyParser.json());
//Handling request AND response


//parameter
app.post('/api/student/', function(req, res){

    var b = req.body;
   var name=  b.name;
   var age = b.age;
    var num = b.number;
    var sid = b.std_id;
// null
   if( name == undefined || age == undefined || num == undefined || sid == undefined){
       res.status(400).send("All data is required..");
   }
    else{
        res.status(200).json({"result":"ok", "data":b});
    }

    
});


// Requirement
// Client End Requirment ->  uclient send username and passord server send response wheter details are correct or not

//we check all required data is present in request body or not
//body data is in correct format or not
// validate data
// return response

// Most Imp. -> In all cases response body must be in same format 
 
app.post("/api/v1/login",function(req,res){

    var username  = req.body.username;
    var password  = req.body.password;
    
    if(username == undefined || password == undefined){
        res.status(400).json({"result":"FAILED", "message":"All data is required"});
    }else if(username == "" || password == ""  ){
        res.status(400).json({"result":"FAILED", "message":"Username or password is not correct format"});
    }else{
        if(username == "admin" && password == "admin"){
            res.status(200).json({"result":"OK", "data":{}, "message":""});
        }else{
            res.status(200).json({"result":"FAILED", "message":"Invalid username or password"});
        }
    }

} )
 

  
app.listen(3000); // app.listnen will start node app server on port 3000

 
