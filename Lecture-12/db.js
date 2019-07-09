var mysql = require('mysql');

var obj = {
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'Tasks'
}

var connection = mysql.createConnection(obj);

function InsertintoDb(val, cb){
    // To insert data into the database => the data is val => which is the same as the data in input box
    connection.query(`Insert into courses (name) Values('${val}')`, function(error, results){
        if(error) throw error;
        cb();
    })
}

function getfromDb(cb){
    connection.query(`Select * from courses`, function(error, results){
        if(error) throw error;
        cb(results);
    })
}
//connection.connect()
module.exports = {
    connection: connection,
    InsertintoDb: InsertintoDb,
    getfromDb: getfromDb
}