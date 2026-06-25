const API_URL = 'http://localhost:8080/todos';

$(document).ready(function() {
    loadTodos();

    function loadTodos() {
        $('.js--todos-wrapper').empty();
        $.get(API_URL, function(todos) {
            todos.forEach(todo => {
                renderTodoItem(todo);
            });
        });
    }

    function renderTodoItem(todo) {
        const $wrapper = $('.js--todos-wrapper');
        const $li = $('<li>').addClass('todo-item').attr('data-id', todo._id);
        
        if (todo.checked) {
            $li.addClass('todo-item--checked');
        }

        const $checkbox = $('<input>')
            .attr('type', 'checkbox')
            .prop('checked', todo.checked);

        const $span = $('<span>')
            .addClass('todo-item__description')
            .text(todo.text);

        const $deleteBtn = $('<button>')
            .addClass('todo-item__delete')
            .text('Видалити');

        $li.append($checkbox, $span, $deleteBtn);
        $wrapper.append($li);
    }

    $('.js--form').on('submit', function(e) {
        e.preventDefault();

        const $input = $('.js--form__input');
        const todoText = $input.val().trim();

        if (todoText === '') return;

        $.ajax({
            url: API_URL,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ text: todoText }),
            success: function(newTodo) {
                renderTodoItem(newTodo);
                $input.val('');
            }
        });
    });

    $('.js--todos-wrapper').on('click', function (e) {
        const $target = $(e.target);
        const $li = $target.closest('.todo-item');
        const todoId = $li.attr('data-id');

        if ($target.hasClass('todo-item__delete')) {
            $.ajax({
                url: `${API_URL}/${todoId}`,
                method: 'DELETE',
                success: function() {
                    $li.remove();
                }
            });
        } 
      
        else if ($target.is('input[type="checkbox"]')) {
            const isChecked = $target.prop('checked');
            
            $.ajax({
                url: `${API_URL}/${todoId}`,
                method: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify({ checked: isChecked }),
                success: function() {
                    $li.toggleClass('todo-item--checked', isChecked);
                }
            });
        }

        else if ($target.hasClass('todo-item__description')) {
            const taskText = $target.text(); 
            $('#modal-task-text').text(taskText); 
            $('#taskModal').modal('show'); 
        }
    });
});