import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      if (state > 0) {
        return state - 1;
      } else {
        return 0;
      }

    case "incrementBy5":
      return state + 5;

    case "reset":
      return 0;

    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>Count:{state}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "incrementBy5" })}>
        Increment By 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default Counter;
