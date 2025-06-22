import React, { useEffect, useState } from "react";

function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "a2a5ca6f544d462c92565a181cf6ffb9";
  useEffect(() => {
    const fetchFoodRecipe = async () => {
      try {
        const response = await fetch(`${URL}?apiKey=${API_KEY}`);
        if (!response.ok) throw new Error("Failed to fetch recipe information");
        const data = await response.json();
        console.log("Fetched Data", data);
        setFood(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (foodId) fetchFoodRecipe(); // ✅ Only fetch if foodId exists
  }, [foodId]); // ✅ react to changes in foodId

  return (
    <div className="">
      <h1>Food Details container</h1>
      <h1>{food.id}</h1>
      <h1>{food.title}</h1>
      <img src={food.image} alt="" />
      {food.instructions}
    </div>
  );
}

export default FoodDetails;
