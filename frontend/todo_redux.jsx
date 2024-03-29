import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import {receiveTodo, receiveTodos} from './actions/todo_actions';
import Root from './components/root';
import {allTodos} from './reducers/selectors'


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  let todoStore = configureStore();
  window.store = todoStore;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;


  ReactDOM.render(<Root store={todoStore}/>, root);

});
