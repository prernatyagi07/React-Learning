import { useRef } from "react";

function Task5() {
  const buttonRef = useRef(null);

  const toggleVisible = () => {
    if (buttonRef.current) {
      if (buttonRef.current.style.display === "none") {
        buttonRef.current.style.display = "block";
      } else {
        buttonRef.current.style.display = "none";
      }
    }
  };

  return (
    <>
      <div>
        <button onClick={toggleVisible}>Show/Hide</button>
        <div ref={buttonRef} style={{ display: "block", marginTop: "10px" }}>
          <h1>Button</h1>
        </div>
      </div>
    </>
  );
}

export default Task5;
