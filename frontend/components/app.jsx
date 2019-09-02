import React from 'react';
import TodoList from './todo_list/todo_list_container';


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default App