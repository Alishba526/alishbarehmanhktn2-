

import React from "react";
import Image from "next/image";
const products = [
  { id: 1, name: "Product 1", image: "/1.png", price: "$58.00", reviews: 4 },
  { id: 2, name: "Product 2", image: "/alish.png", price: "$45.00", reviews: 5 },
  { id: 3, name: "Product 3", image: "/alish1.png", price: "$60.00", reviews: 3 },
  { id: 4, name: "Product 4", image: "/alishba4.png", price: "$40.00", reviews: 4 },
  { id: 5, name: "Product 5", image: "/alishba5.png", price: "$75.00", reviews: 5 },
  { id: 6, name: "Product 6", image: "/alishba6.png", price: "$50.00", reviews: 3 },
  { id: 7, name: "Product 7", image: "/alishba7.png", price: "$55.00", reviews: 2 },
  { id: 8, name: "Product 8", image: "/alishba77.png", price: "$65.00", reviews: 4 },
];

const Details = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {/* Main Product Details */}
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
                      src="/sofa1.png"
            alt="ecommerce"
            width={400}
            height={400}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY...
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </div>
          </div>
        </div>

        {/* Image Below Product Details */}
        <div className="flex mt-12 items-center">
          <Image
            alt="detail"
            className="w-full lg:w-1/2 h-64 object-cover object-center rounded"
            src="/col-md-4 (3).png"
            width={500}
            height={500}
          
          />
          <div className="lg:w-1/2 w-full lg:pl-10 py-6">
            <h2 className="text-2xl text-gray-900">Detailed Product Information</h2>
            <p className="leading-relaxed mt-4">
              Additional detailed description about the product goes here. You can add more information regarding the features, specifications, or any other details about the product.
            </p>
          </div>
        </div>

        {/* Product Cards */}
        <div className="flex flex-wrap justify-center mt-10">
          {products.map((product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="border-2 border-gray-200 p-6 rounded-lg">
                <Image
                  alt="product"
                  className="w-full h-64 object-cover object-center mb-4 rounded"
                  src={product.image}
                  width={500}
                  height={500}
                />
                <h2 className="text-xl text-gray-900 font-medium title-font">{product.name}</h2>
                <p className="leading-relaxed mb-3">This is a short description of the product.</p>
                <div className="flex items-center">
                  <span className="text-indigo-500 mr-3">{product.reviews} Reviews</span>
                  <span className="text-gray-900 font-medium">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Image */}
        <div className="mt-12">
          <Image
            alt="footer"
            className="w-full lg:w-1/2 h-64 object-cover object-center rounded"
            src="/alishbarehman.jpg"
            height={500}
            width={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Details;