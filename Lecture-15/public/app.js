var socket = io();
var dat = [];
var result = document.getElementById('result');
var name = window.prompt("Please enter your name");


function send(){
    var val = document.getElementById('inp').value;
    socket.emit('message', {msg: val})
}

socket.emit('user', {name: name})
socket.on('al', (data)=>{
  console.log(data.user)  
  dat.push(data.msg)
  let li = document.createElement('li');
  let text = document.createTextNode(data.msg);
  li.appendChild(text);
  result.appendChild(li);
})

socket.on('everyone', (data)=>{
  console.log(data);
})

