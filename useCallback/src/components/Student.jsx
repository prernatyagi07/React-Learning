import { memo } from "react";

const Student = memo(function Student({ onClick }) {
  console.log("Student rendered");
  return (
    <>
      <div>
        <button onClick={onClick}>Say Hello</button>
      </div>
    </>
  );
});

export default Student;
