
import { createContext, useReducer } from "react";
import todoReducer from "./TodoReducer";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoProvider };
export default TodoContext;
