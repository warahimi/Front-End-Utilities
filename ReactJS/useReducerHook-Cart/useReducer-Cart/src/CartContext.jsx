import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const ACTIONS = {
  ADD_ITEM: "add-item",
  REMOVE_ITEM: "remove-item",
  UPDATE_QUANTITY: "update-quantity",
  CLEAR_CART: "clear-cart",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM: {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }


    case ACTIONS.REMOVE_ITEM:
      return state.filter(item => item.id !== action.payload);

    case ACTIONS.UPDATE_QUANTITY:
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    case ACTIONS.CLEAR_CART:
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { ACTIONS };
