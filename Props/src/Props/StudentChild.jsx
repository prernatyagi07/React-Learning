function StudentChild(props) {
  const sendName = () => {
    props.getStudentName("Prerna");
  };

  return <button onClick={sendName}>Send Student Name</button>;
}

export default StudentChild;
