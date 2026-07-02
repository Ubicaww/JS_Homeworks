import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider } from './context/ThemeContext';

describe('<App />', () => {
  beforeEach(() => {
    cy.mount(
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    );

    cy.get('.form__btn', { timeout: 10000 }).should('not.be.disabled');
  });

  it('1. Сторінка має заголовок ToDo List', () => {
    cy.get('h1').should(($h1) => {
      expect($h1).to.have.text('ToDo List');
    });
  });

  it('2. У поле для тексту можна ввести букви та цифри', () => {
    const testText = 'Task 123 ABC';
    cy.get('.form__input')
      .type(testText)
      .should('have.value', testText);
  });

  it('3. Помилка при натисканні "Додати" без тексту', () => {
    cy.get('.form__btn').click();
    cy.get('.error-msg')
      .should('be.visible')
      .and(($error) => {
        expect($error).to.have.text('Введіть текст задачі!');
      });
  });

  it('4. Після додавання задачі вона з\'являється у списку', () => {
    const newTask = 'Test Task for Adding';
    
    cy.get('.form__input').type(newTask);
    cy.get('.form__btn').click();
    
    cy.get('.todo-list', { timeout: 10000 }).should('contain.text', newTask);
  });

  it('5. Задачу можна видалити зі списку', () => {
    const taskForDelete = 'Test Task for Deletion';
    
    cy.get('.form__input').type(taskForDelete);
    cy.get('.form__btn').click();

    cy.contains('.todo-item', taskForDelete, { timeout: 10000 })
      .find('.todo-item__delete')
      .should('not.be.disabled')
      .click();

    cy.get('.todo-list', { timeout: 10000 }).should('not.contain.text', taskForDelete);
  });

  it('6. Задачу можна відредагувати через модальне вікно', () => {
    const originalTask = 'Task to Edit';
    const editedTask = 'Edited Task Successfully';

    cy.get('.form__input').type(originalTask);
    cy.get('.form__btn').click();

    cy.contains('.todo-item', originalTask, { timeout: 10000 })
      .find('[data-bs-toggle="modal"]')
      .should('not.be.disabled')
      .invoke('attr', 'data-bs-target')
      .then((modalId) => {
        
        cy.contains('.todo-item', originalTask).find('[data-bs-toggle="modal"]').click();

        cy.get(modalId).find('input.form-control')
          .clear({ force: true })
          .type(editedTask, { force: true });

        cy.get(modalId).contains('button', 'Зберегти').click({ force: true });
      });

    cy.get('.todo-list', { timeout: 10000 }).should('contain.text', editedTask);
    cy.get('.todo-list').should('not.contain.text', originalTask);
  });

  it('7. Кнопка "Очистити всі" успішно видаляє всі задачі', () => {
    cy.get('.form__input').type('First task for clearing');
    cy.get('.form__btn').click();
    cy.get('.form__input').type('Second task for clearing');
    cy.get('.form__btn').click();

    cy.get('.btn-clear', { timeout: 10000 }).should('be.visible').and('not.be.disabled');

    cy.get('.btn-clear').click();

    cy.get('.todo-list .todo-item', { timeout: 15000 }).should('have.length', 0);
    
    cy.get('.btn-clear').should('not.exist');
  });
});