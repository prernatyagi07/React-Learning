import { useState, useEffect } from "react";

function Task04Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div>
      <hr />
      <h2>Task 4: Timer</h2>
      <h3>Seconds: {seconds}</h3>
      <button onClick={() => setIsRunning(true)}>Start Timer</button>
      <br />
      <button onClick={() => setIsRunning(false)}>Stop Timer</button>
      <br />
      <button onClick={() => setSeconds(0)}>Reset Timer</button>
    </div>
  );
}

export default Task04Timer;
