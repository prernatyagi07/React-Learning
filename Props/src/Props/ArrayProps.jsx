function Skills(props) {
  return (
    <div>
      <hr />
      <h2>My Skills</h2>

      {props.skills.map((skill) => (
        <p>{skill}</p>
      ))}
    </div>
  );
}
export default Skills;
