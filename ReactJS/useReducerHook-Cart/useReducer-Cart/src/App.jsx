import React from "react";
import { CartProvider } from "./CartContext";
import ProductList from "./ProductList";
import Cart from "./Cart";

const App = () => {
  return (
    <CartProvider>
      <div className="p-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          🛒 Shopping Cart
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProductList />
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
