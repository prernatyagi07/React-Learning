import { useEffect, useState } from "react";

function Task03DocumentTitle() {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = name;
  }, [name]);

  return (
    <div>
        <hr></hr>
      <h2>Task 3: Document Title</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Hello {name}</h3>
    </div>
  );
}

export default Task03DocumentTitle;
