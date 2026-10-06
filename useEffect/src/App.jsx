import Task01BasicEffect from "./components/Task01BasicEffect";
import Task02StateEffect from "./components/Task02StateEffect";
import Task03DocumentTitle from "./components/Task03DocumentTitle";
import Task04Timer from "./components/Task04Timer";
import Task05Cleanup from "./components/Task05Cleanup";
import { useState } from "react";
import Task06InputEffect from "./components/Task06InputEffect";
import Task07MultipleDependencies from "./components/Task07MultipleDependencies";
import Task08EventListener from "./components/Task08EventListener";
import Task09ApiData from "./components/Task09ApiData";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>useEffect Practice</h1>
      <Task01BasicEffect />
      <Task02StateEffect />
      <Task03DocumentTitle />
      <Task04Timer />
      {show && <Task05Cleanup />}{" "}
      <button onClick={() => setShow(!show)}>Show / Hide</button>
      <Task06InputEffect />
      <Task07MultipleDependencies />
      <Task08EventListener />
      <Task09ApiData />
    </div>
  );
}

export default App;
