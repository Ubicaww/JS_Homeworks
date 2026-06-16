const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');

let todos = JSON.parse(localStorage.getItem('todos')) || [];


function saveToLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
  todosWrapper.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'todo-item';

    if (todo.checked) {
      li.classList.add('todo-item--checked');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.dataset.index = index;
    checkbox.checked = todo.checked;

    const span = document.createElement('span');
    span.className = 'todo-item__description';
    span.textContent = todo.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'todo-item__delete';
    deleteBtn.dataset.index = index;
    deleteBtn.textContent = 'Видалити';

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todosWrapper.appendChild(li);
  });
}

form.addEventListener('submit', function(e) {

  e.preventDefault();

  const todoText = input.value.trim();
  if (todoText === '') return;

  todos.push({
    text: todoText,
    checked: false 
  });

  input.value = '';
  saveToLocalStorage();
  renderTodos();
});

todosWrapper.addEventListener('click', function (e) {
  const index = e.target.dataset.index;
  if (index === undefined) return; 

  if (e.target.classList.contains('todo-item__delete')) {
    todos.splice(index, 1); 
  } 
  else if (e.target.type === 'checkbox') {
    todos[index].checked = e.target.checked; 
  }

  saveToLocalStorage(); 
  renderTodos();        
});
renderTodos();