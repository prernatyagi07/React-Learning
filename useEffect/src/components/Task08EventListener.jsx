import { useEffect } from "react";

function Task08EventListener() {
  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <hr />
      <h2>Task 8: Event Listener</h2>
      <p>Resize the browser window and check the console.</p>
    </div>
  );
}

export default Task08EventListener;
