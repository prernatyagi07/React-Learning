import { useState } from "react";

function App() {
  const [name, setName] = useState("Prerna");
  const [age, setAge] = useState(21);
  const [city, setCity] = useState("Ahmedabad");

  const changeName = () => {
    setName("Priya");
  };
  const increaseAge = () => {
    setAge(age + 1);
  };

  const decreaseAge = () => {
    setAge(age - 1);
  };

  const changeCity = () => {
    setCity("Gwalior");
  };

  return (
    <>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>City: {city}</h2>
      <button onClick={changeName}>Change Name</button>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={decreaseAge}>Decrease Age</button>
      <button onClick={changeCity}>Change City</button>
    </>
  );
}

export default App;
