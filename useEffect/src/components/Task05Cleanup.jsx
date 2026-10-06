import { useEffect } from "react";

function Task05Cleanup() {
    useEffect(() => {
    console.log("Effect Started");

return() => {
    console.log("Cleanup");
};
}, []);

return(
    <>
    <div>
        <hr />
        <h2>Task 5: Cleanup</h2>
    </div>
    </>
);
}

export default Task05Cleanup;