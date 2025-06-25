import React from "react";

function Item({ item }) {
  return (
    <div>
      <div>
        <img
          src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
          alt=""
        />
        <h1>{item.name}</h1>
        <h1>
          {item.amount} {item.unit}
        </h1>
      </div>
      ;
    </div>
  );
}

export default Item;
