import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  // Add item
  const addItem = () => {
    if (item.trim() === "") return;

    setItems([...items, item]);
    setItem("");
  };

  // Delete item
  const deleteItem = (deleteIndex) => {
    setItems(items.filter((item, index) => index !== deleteIndex));
  };

  // Clear all items
  const clearItems = () => {
    setItems([]);
  };

  return (
    <>
      <h2>Array State</h2>

      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter item"
      />

      <button onClick={addItem}>Add Item</button>

      <button onClick={clearItems}>Clear All</button>

      {items.map((item, index) => (
        <div key={index}>
          <span>{item}</span>

          <button onClick={() => deleteItem(index)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
