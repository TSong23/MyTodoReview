import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component{

  render(){
    const {todos, receiveTodo} = this.props;
    const todoItems = todos.map(todo => (
        <TodoListItem
          key={`todo-list-item${todo.id}`}
          todo={todo}
          receiveTodo={receiveTodo} 
        />
      )
    );

    return(
      <ul>
        <h2>Todo List</h2>
          {todoItems}
        <h2>New Todo</h2>
          <TodoForm receiveTodo={receiveTodo}/>
      </ul>
    )
  }
}

export default TodoList;