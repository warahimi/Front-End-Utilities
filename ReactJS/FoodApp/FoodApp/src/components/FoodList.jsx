import React from "react";
import FoodItem from "./FoodItem";

function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((food, index) => (
        <FoodItem key={index} food={food} setFoodId={setFoodId} />
      ))}
    </div>
  );
}

export default FoodList;
