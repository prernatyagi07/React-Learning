import { useRef } from "react";

function Task1_UseRef() {
  const countRef = useRef(0);

  const increase = () => {
    countRef.current = countRef.current + 1;

    console.log(countRef.current);
  };

  const decrease = () => {
    countRef.current = countRef.current - 1;

    console.log(countRef.current);
  };

  return (
    <>
      <h2>UseRef Counter</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}

export default Task1_UseRef;
