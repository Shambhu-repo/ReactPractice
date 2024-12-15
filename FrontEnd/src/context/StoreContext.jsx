import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { food_list } from "../food-del-assets/assets/frontend_assets/assets.js";
import PropTypes from "prop-types";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  console.log("food_list in provider:", food_list); // Debugging statement

  const [cartItems, setCartItems] = useState({}); //useState initialization with curly braces {}

  // add to cart functionality
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      //it no item in the cart (or 0, or undefined is false) so here statement is false and ! operator making it ture
      setCartItems((prev) => ({ ...prev, [itemId]: 1 })); // this line add the whatever cutomer chose , chosen items id wil be itemId and its first quantity will be 1 .
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })); // if already the cart is with same id then it will add by +1 on each click
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  
{/*   
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  */}

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
return totalAmount;

  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = { children: PropTypes.node.isRequired };

export default StoreContextProvider;
