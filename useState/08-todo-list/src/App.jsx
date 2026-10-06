
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (deleteIndex) => {
    setTodos(todos.filter((todo, index) => index !== deleteIndex));
  };

  return (
    <>
      <h1>Todo List</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTodo}>Add Todo</button>

      {todos.map((todo, index) => (
        <div key={index}>
          <h2>{todo}</h2>

          <button onClick={() => deleteTodo(index)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default App;

