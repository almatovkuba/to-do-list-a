// SELECTORS

let todoInput = document.querySelector('.todo-input');
let todoButton = document.querySelector('.todo-button');
let todoList = document.querySelector('.todo-list');
let filterOption = document.querySelector('.filter-todo');

//EVENT LISTENERS

todoButton.addEventListener('click', addTodo); //Adding with add button
todoList.addEventListener('click', deleteCheck); //Deleting with trash button
filterOption.addEventListener('click', filterTodo); //Filtering between 3 options

//FUNCTIONS

function addTodo(event) {

                //Prevent form from submitting:
    event.preventDefault();

                //Create todo div - (line with text + check mark and delete buttons):
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

                //Create Li div:
    let newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

                //Creating Checked Button:
    let completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class ="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);

                // Creating Trash Button:
    let trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class ="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

                //Append to List - Creating divs (with class 'todo-item') under '.todo-list':
    todoList.appendChild(todoDiv);
    
                //Clear Todo Input Value:
    todoInput.value = '';
}

function deleteCheck(event) {
    let item = event.target;

                //Delete todo:
    if (item.classList[0] === 'trash-btn') {
        let todo = item.parentElement;
                
                //Animation:
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

                // Check mark:
    if (item.classList[0] === 'complete-btn') {
        let todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(event){
    let todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(event.target.value){
            case 'all':
                todo.style.display ='flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else{
                    todo.style.display ='none';
                }
                break;
            case 'uncompleted':
                if (! todo.classList.contains('completed')){
                    todo.style.display = 'flex'; 
                } else{
                    todo.style.display ='none';
                }
                break;   
        }
    });
}
