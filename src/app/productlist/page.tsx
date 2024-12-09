
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import React from 'react';
import Image from 'next/image';
import Footer from "../components/Footer";
const products = [
  { id: 1, name: 'Product 1', price: 10.99, image: '/card-item (1).png' },
  { id: 2, name: 'Product 2', price: 20.99, image: '/card-item (2).png' },
  { id: 3, name: 'Product 3', price: 30.99, image: '/card-item (3).png' },
  { id: 4, name: 'Product 4', price: 40.99, image: '/col-md-4 (1).png' },
  { id: 5, name: 'Product 5', price: 50.99, image: '/col-md-4 (2).png' },
  { id: 6, name: 'Product 6', price: 60.99, image: '/card-item.png' },
  { id: 7, name: 'Product 7', price: 70.99, image: '/a.png' },
  { id: 8, name: 'Product 8', price: 80.99, image: '/b.png' },
  { id: 9, name: 'Product 9', price: 90.99, image: '/c.png' },
  { id: 10, name: 'Product 10', price: 100.99, image: '/d.png' },
  { id: 11, name: 'Product 11', price: 110.99, image: '/e.png' },
  { id: 12, name: 'Product 12', price: 120.99, image: '/f.png' }
];

const Products = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold ml-8 mt-10">Shop</h1>

      <div className="flex justify-center mt-8 space-x-4 flex-wrap">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="w-60 h-80 bg-white shadow-lg rounded-lg mb-8">
            <Image
              src={product.image} // Dynamic image path
              alt={product.name}
              className="h-full w-full object-cover rounded-t-lg"
              width={240}
              height={240}
            />
          </div>
        ))}
      </div>

      {/* Showing results and buttons */}
      <div className="flex items-center justify-between mb-14">
        <div className="flex items-center gap-8">
          <h1 className="font-semibold text-2xl mt-0 ml-12">Showing all 12 results</h1>
          <h2 className="font-semibold text-2xl mt-0 text-center">Views</h2>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/btn-sm-24.png" alt="Button 1" 
          height={24} width={24} 
          className="h-8 w-8"/>
          
          <Image src="/btn-sm-24 (1).png" alt="Button 2"
          height={70}
          width={50} />
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">Popularity</button>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">Filter</button>
        </div>
      </div>

      {/* Bandage and social icons */}
      <div>
        <Image src="/desktop-clients-1 (1).png" alt="Bandage" className="mb-8 h-auto"
        height={500}
        width={300}
         />
        <h1 className="font-semibold text-2xl mt-0 ml-12 h-auto">Bandage</h1>

        {/* Social Media Icons on the right */}
        <div className="flex justify-end gap-4 mt-4">
          <FaFacebookF className="text-blue-500" />
          <FaTwitter className="text-blue-400" />
          <FaInstagram className="text-pink-500" />
        </div>
      </div>

      <Footer />

      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center mb-6">More Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={product.image} // Dynamic image path
                alt={product.name}
                className="w-full h-48 object-cover"
                width={240}
                height={240}
              />
              <footer className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 mt-2">${product.price}</p>
                <div className="flex justify-center gap-2 mt-2">
                  <button className="w-6 h-6 bg-red-500 rounded-full border border-gray-300 focus:ring-2 ring-red-400" title="Red"></button>
                  <button className="w-6 h-6 bg-blue-500 rounded-full border border-gray-300 focus:ring-2 ring-blue-400" title="Blue"></button>
                  <button className="w-6 h-6 bg-green-500 rounded-full border border-gray-300 focus:ring-2 ring-green-400" title="Green"></button>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
