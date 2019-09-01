// reducer accepts state and action
// the default just returns the state it was passed in
const todosReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todosReducer;