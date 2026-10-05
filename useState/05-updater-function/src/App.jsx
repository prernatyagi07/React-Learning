import { useState } from "react";

function App() {
  const [name, setName] = useState("Prerna");
  const [age, setAge] = useState(21);

  const increaseAge = () => {
    setAge((prev) => prev + 1);
  };

  const decreaseAge = () => {
    setAge((prev) => prev - 1);
  };

  return (
    <>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={decreaseAge}>Decrease Age</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </>
  );
}

export default App;
