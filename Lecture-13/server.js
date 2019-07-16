const express = require('express');
const Mongoclient = require('mongodb').MongoClient;
var app = express();
var port = process.env.PORT || 5000;


const url = "mongodb://localhost:27017";

const dbName = 'todoList';
const task= 'tasks';
var database = '';
var collection = '';
// Making the connection with the server
function connect() {
    Mongoclient.connect(url, (err, client)=>{
        if(err) throw err;
        database = client.db(dbName);
        collection = database.collection(task);
    });
}



app.use('/', express.static('public'));
app.get('/student', (req, res)=>{
    var data = [{name: 'Aayush'}, {name: 'Ravi'}, {rollNo: '113002'}]
    insert(data,function(){
        //res.send(d);
        update({name:'Ravi'}, function(){
            find(function(d){
                res.send(d)
            })
        })
       
    })
})

function insert(data, cb){
  
    collection.insertMany(data, function(err, result){
        if(err) throw err;
        cb();
    })
}

function find(cb){
    collection.find({}).toArray(function(err, data){
      cb(data);
    })
}

function update(data, cb){
    collection.updateMany(data,{$set: {name: 'Kiwi'}}, function(err, d){
        cb();
    })
}
app.listen(port, ()=>{
    console.log(`Server running on ${port}`);
    connect();
})