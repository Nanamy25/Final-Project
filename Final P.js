document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todoForm');
    const newTodoInput = document.getElementById('newTodo');
    const todoList = document.getElementById('todoList');
    const titleForm = document.getElementById('titleForm');
    const todos = [];

    titleForm.style.color= 'green';

    todoForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const newTodoValue = newTodoInput.value.trim();

        if (newTodoValue !== '') {
            todos.push({ text: newTodoValue, complete: false });
            renderTodos();
            newTodoInput.value = '';
        }
    });

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const todoItem = document.createElement('li');
            todoItem.textContent = todo.text;

            const completedButton = document.createElement('button');
            completedButton.textContent = 'Completed';
            completedButton.addEventListener('click', function () {
                toggleTodoComplete(index);
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                deleteTodo(index);
            });

            if (todo.complete) {
                todoItem.style.textDecoration = 'line-through';
            }

            completedButton.style.marginLeft = '5px';
            

            todoItem.appendChild(completedButton);
            todoItem.appendChild(deleteButton);


            todoList.appendChild(todoItem);
        });
    }

    function toggleTodoComplete(index) {
        todos[index].complete = !todos[index].complete;
        renderTodos();
    }

    function deleteTodo(index) {
        todos.splice(index, 1);
        renderTodos();
    }

    renderTodos();
});
