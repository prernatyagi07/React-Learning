import { useState } from "react";

function App() {
  const [profile, setProfile] = useState({
    username: "Prerna",
    email: "prerna@gmail.com",
    role: "Student",
  });

  const changeUsername = (e) => {
    setProfile({
      ...profile,
      username: e.target.value,
    });
  };

  const changeEmail = (e) => {
    setProfile({
      ...profile,
      email: e.target.value,
    });
  };

  const changeRole = () => {
    setProfile({
      ...profile,
      role: "Developer",
    });
  };

  return (
    <>
      <h2>Profile</h2>

      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
      <p>Role: {profile.role}</p>

      <input
        value={profile.username}
        onChange={changeUsername}
        placeholder="Enter username"
      />

      <br />
      <br />

      <input
        value={profile.email}
        onChange={changeEmail}
        placeholder="Enter email"
      />

      <br />
      <br />

      <button onClick={changeRole}>Change Role</button>
    </>
  );
}

export default App;
