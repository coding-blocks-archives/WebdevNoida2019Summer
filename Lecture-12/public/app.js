// Extract All DOM Elements

var input = document.getElementById('inp');
var btn = document.getElementById('btn');
var list = document.getElementById('result');

var todoList = [];
refresh();

/**
 * Triggers when => You click the button
 */
function addTodo() {
  // Get value from input box
  var val = input.value;
  var li = document.createElement('li');
  todoList.push(val);
  localStorage.setItem('taskList', JSON.stringify(todoList));
  li.innerText = val;
  // Make a Network call
  // To end point /task
  // Type => POST
  // body => You send the value that you get from input box
  // The call goes to the Server 
  fetch('/task', {
      method: 'POST',
      body: JSON.stringify({'q': val})
  })
    .then(function(data){
       if(data.status != 200)  return;
       data.text().then(function(d){
         console.log(d);
        // Append the li element on the page
         list.appendChild(li);
       })
    })

  //fetch
  // task?name=
}

btn.onclick = addTodo;

function refresh() {
  //  todoList= JSON.parse(localStorage.getItem('taskList')) || [];
   fetch('/display')
    .then((data)=>{
      if(data.status != 200) return;
      data.json().then((todoList)=> { 
       console.log(todoList);
        todoList.forEach(function(val){
        var li = document.createElement('li');
        li.innerText = val.name;
        list.appendChild(li);
      })
    })
  })
}