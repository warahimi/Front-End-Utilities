import React, { useContext, useState } from "react";
import AuthContext from "../contexes/AuthContext";

function LoginLogout() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      setMessage(login(username, password));
    } else {
      logout();
      setMessage("");
    }

    setUsername("");
    setPassword("");
  };
  return (
    <div className={`flex justify-center items-center`}>
      <form
        action=""
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col justify-center items-center gap-4"
      >
        <h1 className={`${isLoggedIn ? "text-blue-600" : "text-red-500"} mt-5`}>
          {message}
        </h1>
        <div className="w-full">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className={`border-2 p-3 w-full`}
          />
        </div>
        <div className="w-full">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className={`border-2 p-3 w-full`}
          />
        </div>
        <button className="border bg-blue-500 hover:bg-blue-600 hover:scale-105 w-full p-3">
          {!isLoggedIn ? "Login" : "Logout"}
        </button>
      </form>
    </div>
  );
}

export default LoginLogout;
