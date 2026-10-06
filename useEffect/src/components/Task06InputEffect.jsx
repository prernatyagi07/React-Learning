import { useState, useEffect } from "react";

function Task06InputEffect() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Name changed:", name);
  }, [name]);

  return (
    <div>
      <hr />
      <h2>Task 6: Input Tracker</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>You typed: {name}</h3>
    </div>
  );
}

export default Task06InputEffect;
