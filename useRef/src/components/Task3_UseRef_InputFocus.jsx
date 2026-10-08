import { useRef } from "react";

function Task3_UseRef_InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
    console.log(inputRef.current.focus);
  };

  return (
    <>
      <h2>Task3_UseRef_InputFocus</h2>
      <input ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}

export default Task3_UseRef_InputFocus;
