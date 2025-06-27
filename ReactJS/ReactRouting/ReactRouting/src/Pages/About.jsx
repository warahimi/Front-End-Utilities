// About.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="text-center mt-20 text-3xl text-purple-700 font-bold">
      <h1>📘 About Us Page</h1>
      <button
        onClick={() => navigate(-1)}
        className="border p-4 bg-blue-400 mt-5"
      >
        Go back
      </button>
    </div>
  );
}

export default About;
