import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-amber-300 shadow-md">
      <ul className="flex justify-end gap-8 px-10 py-4 text-xl font-semibold">
        <Link to="/" className="hover:underline underline-offset-4">
          Home
        </Link>
        <Link to="/about" className="hover:underline underline-offset-4">
          About
        </Link>
        <Link to="/user" className="hover:underline underline-offset-4">
          User
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
