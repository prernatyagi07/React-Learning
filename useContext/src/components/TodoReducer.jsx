
function todoReducer(state, action) {
  switch (action.type) {
    case "Add_Todo":
      return [...state, action.payload];

    case "Delete_Todo":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}

export default todoReducer;
