import {RECEIVE_TODOS} from '../actions/todo_actions';
import { RECEIVE_TODO } from '../actions/todo_actions';



const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};


// reducer accepts state and action
// the default just returns the state it was passed in


const todosReducer = (state = initialState, action) => {

  Object.freeze(state);
  let newState = {};
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_TODOS:
      //action,todos is todos array of all
      action.todos.forEach(el => {
        newState[el.id] = el;
      });
      return newState;
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;
    default:
      return state;
  }
};

export default todosReducer;