import { useCallback } from "react";

function Task01BasicUseCallback() {
  const sayHello = useCallback(() => {
    console.log("Hello");
  }, []);

return (
  <>
    <div>
      <hr />
      <button onClick={sayHello}>Say Hello</button>
    </div>
  </>
);
}

export default Task01BasicUseCallback;
