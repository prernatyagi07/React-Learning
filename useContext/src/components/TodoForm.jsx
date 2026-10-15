
import { useState, useContext } from "react";
import TodoContext from "./TodoContext";

function TodoForm() {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(TodoContext);

  function handleSubmit(e) {
    e.preventDefault();

    const text = value.trim();

    if (!text) return;

    const todoObject = {
      id: Date.now(),
      text: text,
    };

    dispatch({
      type: "Add_Todo",
      payload: todoObject,
    });

    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
