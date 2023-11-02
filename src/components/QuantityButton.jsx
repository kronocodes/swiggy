import React from "react";
import { addItem, reduceItem } from "../utils/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import useQuantity from "../utils/useQuantity";

const QuantityButton = ({ data, restInfo }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const index = useQuantity(cartItems, data.name);

  const addItemsToCart = (data, quantity) => {
    let newItem = { data };
    if (restInfo) {
      newItem = {
        ...data,
        restaurantName: restInfo,
      };
    }
    dispatch(addItem({ item: newItem, quantity: quantity }));
  };

  const reduceItemsToCart = (data, quantity) => {
    dispatch(reduceItem({ item: data, quantity: quantity }));
  };
  return cartItems.length <= 0 || index < 0 ? (
    <button
      className="flex items-center justify-center font-semibold text-lg border-2 border-gray-300 rounded hover:bg-gray-300 shadow-lg w-24"
      onClick={() => {
        addItemsToCart(data, 1);
      }}
    >
      Add
    </button>
  ) : (
    <div className="flex shadow-lg items-center justify-center border-2 w-24">
      <button
        className="text-lg w-1/3 hover:bg-gray-300"
        onClick={() => reduceItemsToCart(data, 1)}
      >
        -
      </button>
      <h1 className="flex justify-center w-1/3">
        {index > -1 ? cartItems[index] && cartItems[index].quantity : 0}
      </h1>
      <button
        className="text-lg w-1/3 hover:bg-gray-300"
        onClick={() => addItemsToCart(data, 1)}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
