import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid place-content-center place-items-center bg-red-600 p-5 w-full">
        <h1 className="text-5xl font-bold text-white">404 Page Not Found!</h1>
      </div>
      <Link
        to="/user"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded transition mt-20"
      >
        Go to Back to User Page
      </Link>
    </div>
  );
}

export default PageNotFound;
