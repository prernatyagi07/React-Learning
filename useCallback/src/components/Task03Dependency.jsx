import { useCallback, useState } from "react";

function Task03Dependency() {
  const [count, setCount] = useState(0);

  const showCount = useCallback(() => {
    console.log("Count is:", count);
  }, [count]);

  return (
    <>
      <div>
        <hr />
        <h2>Count is: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <br />
        <button onClick={showCount}>Show Count</button>
      </div>
    </>
  );
}

export default Task03Dependency;
