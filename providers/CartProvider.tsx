import React, { useMemo, useReducer } from 'react'
import { createContext } from 'react';
import CartItemsInterface from'../global.types';

export interface CartContextInterface {
  cartState: CartItemsInterface[] ,
  cartDispatch: React.Dispatch<any>
  getTotalCount: () => number;
}
export const CartContext = createContext<CartContextInterface>({
  cartState: [],
  cartDispatch: () => null,
  getTotalCount: () => 0,
})
export default function CartProvider({ children } : {children : React.ReactNode} ) {
  type CartAction =
  | { type: "ADD_TO_CART"; item: CartItemsInterface }
  | { type: "REMOVE_FROM_CART"; item: { product_name: string } }
  | { type: "UPDATE_CART"; item: CartItemsInterface; qty: number 
};
  
const cartReducer = (state : CartItemsInterface[], action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const duplicateIndex = state.findIndex(
        (cartItem: CartItemsInterface) => cartItem.product_name === action.item.product_name);
      if (duplicateIndex > -1) {
        const newState = [...state];
        newState[duplicateIndex] = {
          ...newState[duplicateIndex],
          qty: newState[duplicateIndex].qty + action.item.qty,
        };
        return newState;
      } else {
        return [...state, action.item];
      }
    case "REMOVE_FROM_CART":
      return state.filter((item: CartItemsInterface) => item.product_name !== action.item.product_name)
    case "UPDATE_CART" :
      const cartItemIndex = state.findIndex(
        (cartItem: CartItemsInterface) => cartItem.product_name === action.item.product_name
      );
      if (cartItemIndex > -1) {
        const newState = [...state];
        newState[cartItemIndex] = {
          ...newState[cartItemIndex],
          qty: newState[cartItemIndex].qty = action.qty,
        };
        return newState;
      } else {
        return [...state, action.item];
      }
    default:
      return state;
  }
};

  const [cartState, cartDispatch] = useReducer(cartReducer, []);

  const getTotalCount = useMemo(() => {
    return () => cartState.reduce((totalCount, item) => totalCount + (item.qty || 0), 0);
  }, [cartState]);
  
  return (
    <CartContext.Provider value={{
      cartState,
      cartDispatch,
      getTotalCount
    }}>
        {children}
    </CartContext.Provider>
  )
}
