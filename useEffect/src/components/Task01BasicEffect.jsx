import { useEffect } from "react";

function Task01BasicEffect() {
  useEffect(() => {
    console.log("hello from useEffect");
  }, []);

  return (
    <div>
      <hr></hr>

      <h2>Task 1: Basic useEffect</h2>
    </div>
  );
}

export default Task01BasicEffect;
