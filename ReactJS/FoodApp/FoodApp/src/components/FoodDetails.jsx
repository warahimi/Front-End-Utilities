import React, { useEffect } from "react";

function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "a2a5ca6f544d462c92565a181cf6ffb9";
  useEffect(() => {
    const fetchFoodRecipe = async () => {
      try {
        const response = await fetch(`${URL}?apiKey=${API_KEY}`);
        if (!response.ok) throw new Error("Failed to fetch recipe information");
        const data = await response.json();
        console.log("Fetched Data", data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (foodId) fetchFoodRecipe(); // ✅ Only fetch if foodId exists
  }, [foodId]); // ✅ react to changes in foodId

  return (
    <div>
      <h1>Food Details container</h1>
    </div>
  );
}

export default FoodDetails;
