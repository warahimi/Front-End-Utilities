import React from "react";
import foodImage from "../images/food-restaurant-icon.png";

function Nav() {
  return (
    <div className="text-4xl font-bold p-4 m-3 flex justify-center items-center shadow-2xl mt-5 h-30">
      <img src={foodImage} alt="" className="max-w-12 mr-10" />
      Food Application
    </div>
  );
}

export default Nav;
