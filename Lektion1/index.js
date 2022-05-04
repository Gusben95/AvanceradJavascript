//localStorage.setItem('name','ada'); 
// Sätter värde (Nyckel, värde)
//localStorage.getItem('name');
// Hämtar med hjälp av (nyckel). 

const todosElem = document.querySelector('#todos');
const todosFromStorage = localStorage.getItem('myTodos')
function createTodoItem(todo){
    const todoElem = document.createElement('li');
    todoElem.innerHTML = todo.task; 
    todosElem.append(todoElem);
    

}

function saveToLocalStorage(todos){
localStorage.setItem('myTodos', JSON.stringify(todos));

}


function displayTodos(todos){
for(const todo of todos ){
    console.log(todo)
    createTodoItem(todo);
}

}
async function getTodos(){
const response = await fetch('http://awesome-todo-api.herokuapp.com/tasks')
const data = await response.json(); 
console.log(data);
displayTodos(data.todos)
saveToLocalStorage(data.todos)

}

if (todosFromStorage) {
    displayTodos(JSON.parse(todosFromStorage));

}
else{
    getTodos();
}

