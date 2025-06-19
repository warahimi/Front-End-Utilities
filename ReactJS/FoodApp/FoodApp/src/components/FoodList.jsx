import React from "react";
import FoodItem from "./FoodItem";

function FoodList({ foodData }) {
  return (
    <div>
      {foodData.map((food, index) => (
        <FoodItem key={index} food={food} />
      ))}
    </div>
  );
}

export default FoodList;
