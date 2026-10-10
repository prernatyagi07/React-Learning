import { useState } from "react";

function FormSubmit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      setError("Please enter your name");
    } else if (email.trim() === "") {
      setError("Please enter your email");
    } else if (password.trim() === "") {
      setError("Please Enter your password");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters");
    } else if (!isAgreed) {
      setError("Please accept Terms & Conditions");
    } else {
      setError("Registration Successful!");

      setName("");
      setEmail("");
      setPassword("");
      setIsAgreed(false);
    }
  };

  return (
    <>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            setError("");
          }}
          placeholder="Enter your name"
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setError("");
          }}
          placeholder="Enter your Email"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            setError("");
          }}
          placeholder="Enter your Password"
        />
        <h5 style={{ color: "red" }}>{error}</h5>

        <label>
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={(event) => {
              setIsAgreed(event.target.checked);
              setError("");
            }}
          />
          I accept terms and condition
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormSubmit;
