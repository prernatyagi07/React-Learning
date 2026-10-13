import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "changeName":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
}

function ObjectReducer() {
  const [state, dispatch] = useReducer(reducer, {
    name: "Prerna",
    age: 21,
    city: "Ahmedabad",
  });

  return (
    <>
      <h2>Name: {state.name}</h2>
      <h2>Age: {state.age}</h2>
      <h2>City: {state.city}</h2>

      <button
        onClick={() => dispatch({ type: "changeName", payload: "Priya" })}
      >
        Change Name
      </button>
    </>
  );
}

export default ObjectReducer;
