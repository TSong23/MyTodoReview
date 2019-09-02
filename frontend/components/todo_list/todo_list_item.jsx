import React from 'react';


class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render (){
    const { todo, updateTodo } = this.props;
    const { title} = todo;
    // given the prop, take out todo
    // title should be a property of todo
    // todo_list.jsx iterates todoAll array and passes in 1 at a tiem
    // 
    return (
      <li className="todo-list-item">
        {title}
      </li>
    );
  }
}

export default TodoListItem;