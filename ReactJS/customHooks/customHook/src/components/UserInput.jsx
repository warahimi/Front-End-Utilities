import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function UserInput() {
  const [usernamevalue, setUsernamevalue] = useState("");
  const [username, setUser] = useLocalStorage();
  const handleLogin = () => {
    setUser(usernamevalue);
  };
  return (
    <div className="flex items-center justify-center text-2xl pt-20">
      <form
        action=""
        className="bg-white shadow-2xl p-5 border min-w-md flex flex-col gap-4"
      >
        <label htmlFor="usrname" className="font-bold">
          Enter Username:
        </label>
        <input
          type="text"
          placeholder="Enter username"
          value={usernamevalue}
          onChange={(e) => setUsernamevalue(e.target.value)}
          className="w-full border p-3"
        />
        <button
          className="border p-3 bg-blue-400 hover:bg-blue-500 hover:scale-104 transition-all ease-in-out font-bold text-white"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
      {username}
    </div>
  );
}

export default UserInput;
