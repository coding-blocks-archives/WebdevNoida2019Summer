var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./db');
var port = process.env.PORT || 5000;
var taskList = [];
app.use('/',express.static('public'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
app.use(bodyParser.text());

app.get('/numbers', function(req, res){
    res.send("Your lucky number is 7");
 })
// It listens to /task endpoint of POST type
app.post('/task', function(req,res){
    // You get data from req.body
    let body = JSON.parse(req.body);
    // The val is same as the value which was entered into the input box
    let val = body.q;
    // You call a function that inserts that value into the database
    db.InsertintoDb(val,function(){
        // When data is entered into database
        res.sendStatus(200);
    })
})
app.get('/display', function(req,res){
    db.getfromDb(function(results){
        res.send(results);
    })
   
})

app.listen(port, function(){
    console.log("Server running on " + port);
    //coonection 
    db.connection.connect();
})