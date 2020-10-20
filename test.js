var express = require('express'); // it will import express module in our app

var app = express(); // intilize exrpess 


app.get("api name/url/enpoint/api route");



//First paramter api URL/Enpoint
//call back funcation 
app.get("/api/hello", function(req,res){

//res.send("<h1>Hello World</h1>");

var name ="Manjeet";
var age = 28
var email   = "abc@ac.com";

var jsonObject = { "key1":name,"key2":age , "key3":email}
 //res.json(jsonObject);//200

 
    //res.status(404).json(jsonObject);

} );




//1. /api/student/info -> return json object of name,age,number,class,rollnumber
//2. /api/student/list -> return json array of multiple students




app.get('/abc', function(req, res){
   res.send("Hello world!");
});



app.listen(3000); // app.listnen will start node app server on port 3000



//decalration of apis
//API = application proggraming interface
// communication b/w client and server.
// XML API , JSON API/ Rest API
//
//Get it predefind method of express which response to handle client request

//XML
//JSON

//Txt 