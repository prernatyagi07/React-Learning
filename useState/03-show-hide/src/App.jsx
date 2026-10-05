import { useState } from "react";

function App() {
  const [showName, setShowName] = useState(true);

  const toggleName = () => {
    setShowName((prev) => !prev);
  };

  return (
    <>
      {showName && <h2>Prerna</h2>}

      <button onClick={toggleName}>
        {showName ? "Hide Name" : "Show Name"}
      </button>
    </>
  );
}

export default App;