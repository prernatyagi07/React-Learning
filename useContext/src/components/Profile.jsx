import { useContext } from "react";
import UserContext from "./UserContext";

function Profile() {
  const user = useContext(UserContext);
  return (
    <>
      <h2>{user}</h2>
      <h2>Profile Component</h2>
    </>
  );
}

export default Profile;
