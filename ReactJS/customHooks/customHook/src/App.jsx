import React from "react";
import useDisplayMessage from "./hooks/useDisplayMessage";
import useCalculateAge from "./hooks/useCalculateAge";
import UserInput from "./components/UserInput";
import ShowLogedInUser from "./components/ShowLogedInUser";

function App() {
  const [displayMessage] = useDisplayMessage();

  const [age, details, setCitizen] = useCalculateAge("Wahid", Number(1991));
  setCitizen(true);

  const message = age();
  const userDetails = details();
  console.log(userDetails);
  displayMessage();
  return (
    <div>
      <h1>Custom Hooks</h1>
      <h1>{message}</h1>
      <div>
        <h1>Name: {userDetails.details.name}</h1>
        <h1>Age: {userDetails.details.age}</h1>
        <h1>Address: {userDetails.details.address}</h1>
        <h1>{userDetails.isMarried ? "Married" : "Not Married"}</h1>
        <h1>Kids</h1>

        {userDetails.kids.map((kid, index) => (
          <li key={index}>{kid}</li>
        ))}
      </div>
      <UserInput />
      <ShowLogedInUser />
    </div>
  );
}

export default App;
