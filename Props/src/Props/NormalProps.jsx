function Student(props) {
  return (
    <div>
      <hr />
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
      <h2>Course: {props.course}</h2>
    </div>
  );
}

export default Student;
