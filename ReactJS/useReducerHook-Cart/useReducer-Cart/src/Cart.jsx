import React, { useContext } from "react";
import { CartContext, ACTIONS } from "./CartContext";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch({ type: ACTIONS.UPDATE_QUANTITY, payload: { id, quantity } });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between border-b p-2">
              <span>
                {item.name} - ${item.price} ×{" "}
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  className="w-16 ml-2"
                />
              </span>
              <button
                onClick={() =>
                  dispatch({ type: ACTIONS.REMOVE_ITEM, payload: item.id })
                }
                className="bg-red-300 px-4 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => dispatch({ type: ACTIONS.CLEAR_CART })}
            className="mt-4 bg-yellow-300 px-6 py-2 rounded"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
