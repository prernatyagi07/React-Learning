import { useEffect, useState } from "react";

function Task02StateEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <hr></hr>

      <h2>Task 2: useState + useEffect</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <br></br>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Task02StateEffect;
