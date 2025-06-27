import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function ShowLogedInUser() {
  const [user] = useLocalStorage();
  return (
    <div>
      <h1>The signedin user is: {user}</h1>
    </div>
  );
}

export default ShowLogedInUser;
