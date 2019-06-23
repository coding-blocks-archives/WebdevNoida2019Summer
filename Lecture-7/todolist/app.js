// Extract All DOM Elements

var input = document.getElementById('inp');
var btn = document.getElementById('btn');
var list = document.getElementById('result');

var todoList = [];
refresh();

function addTodo() {
  var val = input.value;
  var li = document.createElement('li');
  todoList.push(val);
  localStorage.setItem('taskList', JSON.stringify(todoList));
  li.innerText = val;
  list.appendChild(li);
}

btn.onclick = addTodo;

function refresh() {
    todoList= JSON.parse(localStorage.getItem('taskList')) || [];

    todoList.forEach(function(val){
        var li = document.createElement('li');
        li.innerText = val;
        list.appendChild(li);
    })
}