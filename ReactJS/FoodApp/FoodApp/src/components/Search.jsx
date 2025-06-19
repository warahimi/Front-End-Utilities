// https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=a2a5ca6f544d462c92565a181cf6ffb9
import React, { useEffect, useState } from "react";

const Search = ({ setFoodData }) => {
  const [query, setQuery] = useState("pasta");
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "a2a5ca6f544d462c92565a181cf6ffb9";

  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data.results);
      setFoodData(data.results);
    };
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter food name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 m-2"
      />
    </div>
  );
};

export default Search;
