import React, { useContext } from "react";
import { CartContext, ACTIONS } from "./CartContext";

const products = [
  { id: 1, name: "Apple", price: 1.5 },
  { id: 2, name: "Banana", price: 0.8 },
  { id: 3, name: "Orange", price: 1.2 },
];

const ProductList = () => {
  const { dispatch } = useContext(CartContext);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      {products.map((product) => (
        <div key={product.id} className="flex justify-between border-b p-2">
          <span>
            {product.name} - ${product.price}
          </span>
          <button
            onClick={() =>
              dispatch({ type: ACTIONS.ADD_ITEM, payload: product })
            }
            className="bg-green-300 px-4 py-1 rounded"
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
