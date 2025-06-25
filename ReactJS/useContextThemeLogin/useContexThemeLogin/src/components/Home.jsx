import React, { useContext } from "react";
import ThemeContext from "../contexes/ThemeContex";
import AuthContext from "../contexes/AuthContext";

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, login, logout } = useContext(AuthContext);
  return (
    <div
      className={`h-screen flex flex-col items-center justify-center ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <h1 className="text-4xl font-bold mb-4">
        Welcome {user ? user.name : "Guest"}
      </h1>

      {user ? (
        <button
          onClick={logout}
          className="mb-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => login("Hosna")}
          className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          Login as Hosna
        </button>
      )}

      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Home;
