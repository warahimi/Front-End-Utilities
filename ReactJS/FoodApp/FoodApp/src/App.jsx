import React, { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";

const App = () => {
  const [foodData, setFoodData] = useState([]);
  return (
    <div>
      <Nav />
      <Search setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </div>
  );
};

export default App;
