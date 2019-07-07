var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var taskList = [];
app.use('/',express.static('public'));

app.get('/numbers', function(req, res){
    res.send("Your lucky number is 7");
 })

app.get('/task', function(req,res){
    taskList.push(req.query.q);
    res.send(req.query.q);
})
app.get('/display', function(req,res){
    res.send(taskList);
})

app.listen(port, function(){
    console.log("Server running on " + port);
})