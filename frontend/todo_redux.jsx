import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import {receiveTodo, receiveTodos} from './actions/todo_actions';
import App from './components/app';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  let todoStore = configureStore();
  window.store = todoStore;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;

  ReactDOM.render(<App/>, root);

});
