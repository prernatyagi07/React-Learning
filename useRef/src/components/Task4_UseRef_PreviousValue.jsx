import { useState, useRef, useEffect } from "react";

function Task4_UseRef_PreviousValue() {
  const [count, setCount] = useState(0);
  const [previousCount, setPreviousCount] = useState(0);

  const prevCountRef = useRef(0);

  useEffect(() => {
    setPreviousCount(prevCountRef.current);
    prevCountRef.current = count;
  }, [count]);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>Task4_UseRef_PreviousValue</h2>

      <h2>Count: {count}</h2>
      <h2>Previous Count: {previousCount}</h2>

      <button onClick={increaseCount}>Increase Count</button>
    </>
  );
}

export default Task4_UseRef_PreviousValue;
