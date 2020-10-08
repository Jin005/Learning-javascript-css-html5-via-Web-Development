
var todos = ["Buy New turtle"]; //start as empty

var input = prompt("What would you like to do?");

while(input !== "Quit"){
  if(input==="list"){
    listTodos();
  }else if(input==="new"){
      addTodo();
    }else if(input==="delete"){
      deleteTodo();
    }
  input=prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP;");

function listTodos(){
  console.log("**********");
  todos.forEach(function(todo, i){
    console.log(i + ": "+todo);
  });
  console.log("**********");
}

function addTodo(){
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
  console.log("Added todo");
}

function deleteTodo(){
  var index=prompt("Enter the index of todo to delete");
  todos.splice(index,1);
  console.log("Deleted todo");
}
