import { useState, useEffect } from "react";

function Task07MultipleDependencies() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(21);

  useEffect(() => {
    console.log("Name:", name);
    console.log("Age:", age);
  }, [name, age]);

  return (
    <>
      <div>
        <hr />
        <h2>Task 07: Multiple Dependencies</h2>
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter your Age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
      </div>
    </>
  );
}

export default Task07MultipleDependencies;
