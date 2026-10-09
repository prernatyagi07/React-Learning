import NormalProps from "./Props/NormalProps";
import DestructingProps from "./Props/DestructuringProps";
import DefaultProps from "./Props/DefaultProps";
import ArrayProps from "./Props/ArrayProps";
import StudentChild from "./Props/StudentChild";

function App() {
  const handleStudentName = (name) => {
    alert("Student Name:" + name);
  };
  return (
    <>
      <NormalProps name="Prerna" age={21} course="MCA" />
      <NormalProps name="Priya" age={23} course="BBA" />

      <DestructingProps name="Laptop" price={55000} category="Electronics" />
      <DestructingProps name="Shoes" price={2000} category="Fashion" />
      <DestructingProps name="Watch" price={1500} category="Accessories" />

      <DefaultProps
        name="Bhumi"
        salary={56000}
        designation="Software Engineer"
      />
      <DefaultProps name="Shreya" />

      <ArrayProps skills={["HTML", "CSS", "React"]} />

      <StudentChild getStudentName={handleStudentName} />
    </>
  );
}

export default App;
