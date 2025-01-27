"use client";
import React, { useState } from "react";
import { Product } from "../../../types/type";
import { getCartItems } from "../action/actions";
import Image from "next/image";
import { FaCreditCard, FaTruck, FaDollarSign } from "react-icons/fa";

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>(getCartItems());
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingDetails({
      ...shippingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentChange = (method: string) => {
    setPaymentMethod(method);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleSubmit = () => {
    // Handle form submission
    alert("Order placed successfully!");
  };

  return (
    <div className="container mx-auto p-8 max-w-4xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl shadow-xl">
      <h1 className="text-5xl font-extrabold text-center text-white mb-10">Checkout</h1>

      {/* Cart Summary */}
      <div className="mb-10 p-8 bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Your Cart Summary</h2>
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center justify-between py-4 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-xl shadow-md"
                    width={80}
                    height={80}
                  />
                )}
                <span className="font-semibold text-gray-800 text-lg">{item.title}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 text-sm">x{item.quantity}</span>
                <span className="font-semibold text-gray-800 text-lg">₹{item.price * item.quantity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping Information */}
      <div className="mb-10 p-8 bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Shipping Information</h2>
        <div className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={shippingDetails.name}
            onChange={handleInputChange}
            className="w-full p-5 border border-gray-300 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-500"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shippingDetails.address}
            onChange={handleInputChange}
            className="w-full p-5 border border-gray-300 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-500"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={shippingDetails.city}
            onChange={handleInputChange}
            className="w-full p-5 border border-gray-300 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-500"
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={shippingDetails.postalCode}
            onChange={handleInputChange}
            className="w-full p-5 border border-gray-300 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-500"
          />
        </div>
      </div>

      {/* Payment Method */}
      <div className="mb-10 p-8 bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Payment Method</h2>
        <div className="space-y-6">
          <div
            className={`flex items-center space-x-4 p-5 border border-gray-300 rounded-2xl shadow-md cursor-pointer transition-all duration-300 ease-in-out ${
              paymentMethod === "creditCard" ? "bg-indigo-50" : "bg-white"
            }`}
            onClick={() => handlePaymentChange("creditCard")}
          >
            <FaCreditCard className="text-3xl text-indigo-600" />
            <span className="text-xl font-semibold text-gray-800">Credit/Debit Card</span>
          </div>
          <div
            className={`flex items-center space-x-4 p-5 border border-gray-300 rounded-2xl shadow-md cursor-pointer transition-all duration-300 ease-in-out ${
              paymentMethod === "cod" ? "bg-indigo-50" : "bg-white"
            }`}
            onClick={() => handlePaymentChange("cod")}
          >
            <FaTruck className="text-3xl text-indigo-600" />
            <span className="text-xl font-semibold text-gray-800">Cash on Delivery</span>
          </div>
        </div>
      </div>

      {/* Total Price Section */}
      <div className="flex justify-between items-center bg-gradient-to-r from-indigo-600 to-purple-700 p-6 rounded-3xl shadow-xl text-white mb-10">
        <h2 className="text-3xl font-semibold">Total Price</h2>
        <p className="text-4xl font-bold">₹{calculateTotalPrice().toFixed(2)}</p>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-5 px-10 rounded-2xl shadow-xl hover:bg-gradient-to-l transform transition-all duration-300"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
