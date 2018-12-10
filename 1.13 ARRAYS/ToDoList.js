var todos = [];

window.setTimeout(function(){
    while(answer !== 'quit'){
        var answer = prompt('What would you like to do?');
        if(answer === 'list'){
           listTodos();
        }else if(answer === 'new'){
           newTodo();
        }else if( answer === 'delete'){
           deleteTodo();
        }
    }
    console.log('OK, YOU QUIT THE APP!!!');
}, 1000)

function listTodos(){
    console.log('***********');
    todos.forEach(function(todo, i){
        console.log(i + ': ' + todo);
    })
    console.log('***********');
}

function newTodo(){
    var newTodo = prompt('Enter new todo');
    todos.push(newTodo);
    console.log('New todo added to list!');
}

function deleteTodo(){
    var index = prompt('Select index!');
    // delete todos[index];
    todos.splice(index, 1);
    console.log('Todo removed!');
}