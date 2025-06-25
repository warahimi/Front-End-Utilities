import React, { useEffect, useState } from "react";
import time from "../svgs/time.svg";
import ItemList from "./ItemList";

function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (foodId) fetchFoodRecipe(); // ✅ Only fetch if foodId exists
  }, [foodId]); // ✅ react to changes in foodId

  return (
    <div className="">
      <div className="sticky top-5">
        <h1 className="text-2xl font-bold text-center">{food.title}</h1>
        <img src={food.image} alt="" className="rounded-2xl" />
        <div className="flex flex-row justify-start items-center gap-2 text-2xl font-bold mt-4">
          <img src={time} alt="" className="h-6 w-6 inline" />
          <h1 className=" inline-block">{food.readyInMinutes} Minutes</h1>
          <h1>{food.vegetarian ? "🥕 Vegetarian" : "🥩 Not Vegetarian"}</h1>
          <span>
            <strong>👪Serves: {food.servings}</strong>
          </span>
          <span>{food.vegan ? "🥗Vegan" : "🐄Not Vegan "}</span>
          <span>💲{food.pricePerServing}</span>
        </div>
        <h1>Ingredients</h1>
        <ItemList food={food} isLoading={isLoading} />

        {/* {food.instructions} */}
        <div>
          <ol>
            <h2>Instructions</h2>
            {isLoading ? (
              <p>Loading food instructions...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
            {/* food.analyzedInstructions[0].steps : this is an array of objects or array of steps, each step is an object */}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
