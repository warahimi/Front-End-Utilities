import React from "react";

function FoodItem({ food, setFoodId }) {
  const handleShowRecipe = (id) => {
    setFoodId(id);
  };
  return (
    <div className="w-180 h-180 shadow-2xl flex flex-col justify-center p-4 rounded-2xl m-6">
      <h1 className="text-3xl font-bold mb-2 text-center">{food.title}</h1>
      <img src={food.image} alt="Food Image" className="rounded-2xl mb-2 " />
      <button
        className="border p-2 rounded-2xl bg-purple-300 hover:bg-purple-500 text-2xl font-bold cursor-pointer"
        onClick={() => {
          handleShowRecipe(food.id);
        }}
      >
        Show Reciepe
      </button>
    </div>
  );
}

export default FoodItem;
