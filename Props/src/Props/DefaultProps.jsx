function Employee({ name, salary = 15000, designation = "Intern" }) {
  return (
    <div>
      <hr />
      <h2>{name}</h2>
      <h2>{salary}</h2>
      <h2>{designation}</h2>
    </div>
  );
}

export default Employee;
