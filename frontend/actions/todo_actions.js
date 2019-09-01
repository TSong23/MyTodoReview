export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

const receiveTodos = (todosArr) = {
  type: RECEIVE_TODOS,
  todos: todoArr
  //let the reducer take care of turning Arr in to obj
}

const receiveTodo = (singleTodo) = {
  type: RECEIVE_TODO,
  todo: singleTodo
}