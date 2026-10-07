import Student from "./Student";
import { useState, useCallback } from "react";

function Task02FunctionProp() {
  const [count, setCount] = useState(0);
  const sayHello = useCallback(() => {
    console.log("Hello from Parent");
  }, []);

  return (
    <>
      <div>
        <hr />
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <Student onClick={sayHello} />
      </div>
    </>
  );
}

export default Task02FunctionProp;
