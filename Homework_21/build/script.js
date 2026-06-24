let todos = JSON.parse(localStorage.getItem('todos')) || [];
function saveToLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(todos));
}
function renderTodos() {
  const $wrapper = $('.js--todos-wrapper');
  $wrapper.empty();
  todos.forEach((todo, index) => {
    const $li = $('<li>').addClass('todo-item');
    if (todo.checked) {
      $li.addClass('todo-item--checked');
    }
    const $checkbox = $('<input>').attr('type', 'checkbox').attr('data-index', index).prop('checked', todo.checked);
    const $span = $('<span>').addClass('todo-item__description').text(todo.text);
    const $deleteBtn = $('<button>').addClass('todo-item__delete').attr('data-index', index).text('Видалити');
    $li.append($checkbox, $span, $deleteBtn);
    $wrapper.append($li);
  });
}
$('.js--form').on('submit', function (e) {
  e.preventDefault();
  const $input = $('.js--form__input');
  const todoText = $input.val().trim();
  if (todoText === '') return;
  todos.push({
    text: todoText,
    checked: false
  });
  $input.val('');
  saveToLocalStorage();
  renderTodos();
});
$('.js--todos-wrapper').on('click', function (e) {
  const $target = $(e.target);
  if ($target.hasClass('todo-item__delete')) {
    const index = $target.attr('data-index');
    todos.splice(index, 1);
    saveToLocalStorage();
    renderTodos();
  } else if ($target.is('input[type="checkbox"]')) {
    const index = $target.attr('data-index');
    todos[index].checked = $target.prop('checked');
    saveToLocalStorage();
    renderTodos();
  } else if ($target.hasClass('todo-item__description')) {
    const taskText = $target.text();
    $('#modal-task-text').text(taskText);
    $('#taskModal').modal('show');
  }
});
renderTodos();