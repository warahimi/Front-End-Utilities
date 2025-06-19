import React from "react";

function FoodItem({ food }) {
  return (
    <div>
      <h1>{food.title}</h1>
      <img src={food.image} alt="Food Image" />
      <button className="border p-2 rounded-2xl bg-purple-9s00">
        Show Reciepe
      </button>
    </div>
  );
}

export default FoodItem;
