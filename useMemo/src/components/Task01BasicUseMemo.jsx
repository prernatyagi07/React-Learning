import { useMemo, useState } from "react";

function Task01BasicUseMemo() {
  const [number, setNumber] = useState(5);

  const square = useMemo(() => {
    console.log("Calculation running...");
    return number * number;
  }, [number]);

  return (
    <>
      <h2>Number: {number}</h2>
      <h2>Square: {square}</h2>

      <button onClick={() => setNumber(number + 1)}>Increase</button>

      <button onClick={() => setNumber(number - 1)}>Decrease</button>
    </>
  );
}

export default Task01BasicUseMemo;
