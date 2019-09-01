export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";


// let todosArr = [
//   {
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false
//   },
//   {
//     id: 2,
//     title: "wash dog",
//     body: "with shampoo",
//     done: true
//   }
// ];


export const receiveTodos = todosArr => ({
  type: RECEIVE_TODOS,
  todos: todosArr,
  //let the reducer take care of turning Arr in to obj
});

export const receiveTodo = singleTodo => ({
  type: RECEIVE_TODO,
  todo: singleTodo,
});