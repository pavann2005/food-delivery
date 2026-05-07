import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../utilis/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  // Clear Cart
  const handleclearCart = () => {
    dispatch(clearCart());
  };

  // Place Order
  const handleOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert("🎉 Order Placed Successfully!");
  };

  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-3xl font-bold mb-5">
        Cart
      </h1>

      <div className="w-6/12 m-auto bg-gray-100 shadow-lg rounded-lg p-5">
        
        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-5">
          <button
            className="p-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-700"
            onClick={handleclearCart}
          >
            Empty Cart
          </button>

          <button
            className="p-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-800"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>

        {/* Cart Count */}
        <h2 className="font-bold text-lg mb-4">
          Total Items: {cartItems.length}
        </h2>

        {/* Empty Cart */}
        {cartItems.length === 0 && (
          <h1 className="text-xl text-gray-600">
            Cart is empty now. Add items to cart.
          </h1>
        )}

        {/* Cart Items */}
        <Itemlist items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;