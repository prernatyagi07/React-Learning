
import { TodoProvider } from "./components/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoProvider>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
