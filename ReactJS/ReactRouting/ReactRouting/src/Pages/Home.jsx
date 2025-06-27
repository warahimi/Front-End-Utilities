// Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  const valuesToPass = {
    name: "Wahid",
    userId: userId,
    age: 33,
    isMarried: true,
  };
  const handleClick = () => {
    navigate(`/user/userprofile/${userId}`, { state: valuesToPass });
  };
  return (
    <div className="text-center mt-20 text-3xl text-blue-700 font-bold space-y-15">
      <h1>🏠 Welcome to the Home Page</h1>
      <h1>Navigate to UserProfile Programmatically</h1>
      <label htmlFor="useId">User ID:</label>
      <input
        type="text"
        placeholder="Enter Uer ID"
        onChange={(e) => setUserId(e.target.value)}
        className="border p-3 rounded-2xl ml-5"
      />
      <div>
        <button
          onClick={handleClick}
          disabled={userId == null}
          className="border p-3 rounded-2xl bg-blue-400 w-2xs"
        >
          Navigate
        </button>
      </div>
    </div>
  );
}

export default Home;
