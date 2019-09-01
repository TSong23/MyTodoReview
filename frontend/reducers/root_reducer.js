import {combineReducers} from 'redux';
import todosReducer from './todos_reducer';

// create new reducer using combineReducers
// we want our reducers handling actions limited to specific goal
// we can make todosReducer only interact with todos of state
// createStore() only takes in single reducer
const rootReducer = combineReducers({
  todos: todosReducer
});



export default rootReducer