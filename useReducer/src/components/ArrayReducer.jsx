import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "edit":
      return state.map((todo, index) => {
        if (index === action.payload.index) {
          return action.payload.text;
        }
        return todo;
      });

    case "delete":
      return state.filter((todo, index) => index !== action.payload);

    default:
      return state;
  }
}

function ArrayReducer() {
  const [state, dispatch] = useReducer(reducer, [
    "Learn React",
    "Practice useReducer",
  ]);

  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function handleAdd() {
    if (input.trim() === "") return;

    dispatch({
      type: "add",
      payload: input.trim(),
    });

    setInput("");
  }

  function handleEdit(index, todo) {
    setInput(todo);
    setEditIndex(index);
  }

  function handleUpdate() {
    if (input.trim() === "") return;

    dispatch({
      type: "edit",
      payload: {
        index: editIndex,
        text: input.trim(),
      },
    });

    setInput("");
    setEditIndex(null);
  }

  function handleDelete(index) {
    dispatch({
      type: "delete",
      payload: index,
    });

    if (editIndex === index) {
      setInput("");
      setEditIndex(null);
    } else if (editIndex !== null && editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  }

  return (
    <>
      <h2>Todo List</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a todo"
      />

      {editIndex === null ? (
        <button onClick={handleAdd}>Add Todo</button>
      ) : (
        <button onClick={handleUpdate}>Save Update</button>
      )}

      {state.map((todo, index) => (
        <p key={index}>
          {todo} <button onClick={() => handleEdit(index, todo)}>Edit</button>{" "}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </p>
      ))}
    </>
  );
}

export default ArrayReducer;
