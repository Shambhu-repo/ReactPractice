import React, {  useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../food-del-assets/assets/frontend_assets/assets";
import PropTypes from "prop-types";
import { StoreContext } from "../../context/StoreContext";

  const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext); // Get data from context API

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        
        {/* The given below code is being used for all the items by a single useState is not good practice,
            so I have created a context API and a function to add and remove the item. I will use it instead. */}
        
        {/*
        {
          !itemCount 
          ? <img className="add" onClick={() => setItemCount(prev => prev + 1)} src={assets.add_icon_white} alt="Add" />
          : <div className="food-item-counter">
              <img onClick={() => setItemCount(prev => prev - 1)} src={assets.remove_icon_red} alt="Remove" />
              <p>{itemCount}</p> 
              <img onClick={() => setItemCount(prev => prev + 1)} src={assets.add_icon_green} alt="Add" />
            </div>
        }
        */}

        {
          !cartItems[id] 
          ? <img className="add" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add" /> 
          : <div className="food-item-counter">
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove" /> 
              <p>{cartItems[id]}</p> 
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add" />
            </div>
        }
        
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating Stars" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

FoodItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired, // image path will be as image URL
};

export default FoodItem;
