import { useState, useRef } from "react";

function Task2_UseRef_vs_UseState() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  };

  const decreaseRef = () => {
    countRef.current = countRef.current - 1;
    console.log(countRef.current);
  };

  const increaseState = () => {
    setCount(count + 1);
  };

  const decreaseState = () => {
    setCount(count - 1);
  };
  return (
    <>
      <hr />
      <h2>Task UseRef_vs_UseState</h2>
      <h2>Count State: {count}</h2>
      <button onClick={increaseRef}>Increase Ref</button>
      <button onClick={decreaseRef}>Decrease Ref</button>
      <button onClick={increaseState}>Increase State</button>
      <button onClick={decreaseState}>Decrease State</button>
    </>
  );
}

export default Task2_UseRef_vs_UseState;
