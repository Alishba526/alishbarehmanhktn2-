
"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/type";
import { getCartItems, removefromcart, unupdateCartQuantity } from "../action/actions";
import Swal from "sweetalert2";
import Image from "next/image";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa"; 
import Link from "next/link";

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false); 

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removefromcart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "The item has been removed from your cart.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, action: "increment" | "decrement") => {
    unupdateCartQuantity(id, action);
    setCartItems(getCartItems());
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">Your Cart</h1>

      {/* Cart Items */}
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-xl rounded-lg p-6 transition-transform hover:scale-105 transform"
            >
              <div className="flex justify-center mb-4">
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-32 h-32 object-cover rounded-lg shadow-md"
                    width={128}
                    height={128}
                  />
                )}
              </div>

              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                <p className="text-lg text-gray-600 mb-4">₹{item.price}</p>

                <div className="flex justify-center items-center space-x-3 mb-6">
                  <button
                    onClick={() => handleQuantityChange(item._id, "decrement")}
                    className="bg-gray-300 text-gray-700 p-3 rounded-full hover:bg-gray-400 transition-all"
                  >
                    <FaMinus className="text-xl" />
                  </button>
                  <span className="text-xl font-bold text-gray-800">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item._id, "increment")}
                    className="bg-gray-300 text-gray-700 p-3 rounded-full hover:bg-gray-400 transition-all"
                  >
                    <FaPlus className="text-xl" />
                  </button>
                </div>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="bg-red-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-red-700 flex items-center space-x-2"
                  >
                    <FaTrashAlt />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}

      {/* Total Price Section */}
      <div className="mt-12 flex justify-center items-center">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg shadow-xl text-white flex justify-between items-center w-full max-w-lg">
          <h2 className="text-2xl font-semibold">Total Price</h2>
          <p className="text-3xl font-bold">₹{calculateTotalPrice().toFixed(2)}</p>
        </div>
      </div>

      {/* Checkout Button */}
      <Link href={"/checkout"}>
      <div className="mt-6 flex justify-center">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all"
        >
          Proceed to Checkout
        </button>
      </div>        </Link>

    </div>
  );
};

export default Cart;

