import { useState } from "react";

function App() {
  const [name, setName] = useState("Prerna");

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello, {name}!</h2>
    </>
  );
}

export default App;