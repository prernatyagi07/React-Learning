import EventHandling from "./EventHandling";
import FormSubmit from "./FormSubmit";

function App() {
  const students = ["Bhumi", "Sonal", "Prerna"];

  return (
    <>
      <h1>Student List</h1>

      {students.map((student) => (
        <h2 key={student}>{student}</h2>
      ))}

      <EventHandling />
      <FormSubmit />
    </>
  );
}

export default App;
