import {connect} from 'react-redux';
import TodoList from './todo_list';

import {allTodos} from '../../reducers/selectors';
import { receiveTodo } from '../../actions/todo_actions';

//first arg to connect: mapStateToProps
// tells connect how to map the state into my component's props
//mapStateToProps(state, ownProps)
const mapStateToProps = state => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);