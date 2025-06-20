import React, { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

const App = () => {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState();
  return (
    <div className="ml-50 mr-50 mt-15">
      <Nav />
      <Search setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          {/** Left Side of the Screen */}
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          {/** Right Side of the Screen */}
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
};

export default App;
