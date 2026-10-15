
import { useContext } from "react";
import TodoContext from "./TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { state, dispatch } = useContext(TodoContext);

  function handleDelete(id) {
    dispatch({
      type: "Delete_Todo",
      payload: id,
    });
  }

  return (
    <ul>
      {state.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
