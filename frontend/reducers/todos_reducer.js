


// reducer accepts state and action
// the default just returns the state it was passed in




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



const todosReducer = (state = initialState, action) => {
  
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default todosReducer;