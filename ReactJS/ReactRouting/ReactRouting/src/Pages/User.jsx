import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function User() {
  const [userId, setUserId] = useState("");

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        User Page
      </h1>

      <div className="mb-6">
        <label htmlFor="userid" className="block text-lg font-medium mb-2">
          Enter User ID:
        </label>
        <input
          type="text"
          id="userid"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="e.g. 123"
        />
      </div>

      <Link
        to={`userprofile/${userId}`}
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded transition"
      >
        Go to User Profile
      </Link>

      <Outlet />
    </div>
  );
}

export default User;
