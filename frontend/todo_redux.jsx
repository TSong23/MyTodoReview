import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  let todoStore = configureStore();
  window.store = todoStore;
  
  ReactDOM.render(<h1>React is working</h1>, root);

});
