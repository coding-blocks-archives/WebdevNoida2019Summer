// Extract All DOM Elements

var input = document.getElementById('inp');
var btn = document.getElementById('btn');
var list = document.getElementById('result');

var todoList = [];
refresh();

function addTodo() {
  var val = input.value;
  var li = document.createElement('li');
  // Button creation
  var button = document.createElement('button');
  var text = document.createTextNode('Update');
  var span = document.createElement('span');
  var inp = document.createElement('input');
  inp.setAttribute('type', 'hidden');
  button.appendChild(text);
  todoList.push(val);
  //localStorage.setItem('taskList', JSON.stringify(todoList));
  span.innerText = val;
  li.appendChild(span);
  li.appendChild(inp);
  li.appendChild(button);
  list.appendChild(li);

  // Adding EventListeners
  span.addEventListener('click', function(){
    let tex = this.innerText;
    // Magic
    this.nextSibling.setAttribute('type', 'text');
    this.innerText = '';
    this.nextSibling.value = tex;
  })

  button.addEventListener('click', function(){
    let texFinal = this.previousSibling.value;
    this.previousSibling.previousSibling.innerText = texFinal;
    this.previousSibling.setAttribute('type', 'hidden');
  })
}

btn.onclick = addTodo;

function refresh() {
  //  todoList= JSON.parse(localStorage.getItem('taskList')) || [];

    todoList.forEach(function(val){
        var li = document.createElement('li');
        li.innerText = val;
        list.appendChild(li);
    })
}