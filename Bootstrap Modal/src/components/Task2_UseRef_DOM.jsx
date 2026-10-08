import { useRef } from "react";

function Task2_UseRef_DOM() {
  const buttonRef = useRef(null);

  const changeColor = () => {
    buttonRef.current.style.backgroundColor = "red";
  };

  return (
    <>
      <button ref={buttonRef} className="btn btn-primary" onClick={changeColor}>
        Click Me
      </button>
    </>
  );
}

export default Task2_UseRef_DOM;
