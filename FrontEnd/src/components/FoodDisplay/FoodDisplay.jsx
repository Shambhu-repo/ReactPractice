import React from 'react';
import  { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {         // we are distructing this category here from home.jsx 
  console.log('FoodDisplay category:', category); // Debugging statement
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes near you </h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if(category==="All" || category===item.category){
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          
        })}
      </div>
    </div>
  );
};

// Validate the category prop };

export default FoodDisplay;
