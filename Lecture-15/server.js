const express = require('express');
const app = express();
var users = [];
const http = require('http');
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server);
app.use('/', express.static('public'));

io.on('connection', function(socket){
    console.log(socket.id);
    socket.on('user', (data)=>{
        let user = {
            name: data.name,
            id: socket.id
        }
        users.push(user);
        io.emit('everyone', {user: users});
    })
    socket.on('message', (data)=>{
        io.emit('al', {msg: data.msg});
    })

    socket.on('disconnect', (data)=>{
        console.log("User disconnected is " + socket.id);
        
    })
})
server.listen(5000, ()=>{
    console.log('Server running')
})