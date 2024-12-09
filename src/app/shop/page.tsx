// components/ProductsPageList.tsx
"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function ProductsPageList() {
  const [selectedColor1, setSelectedColor1] = useState('red');
  const [selectedColor2, setSelectedColor2] = useState('blue');
  const [selectedColor3, setSelectedColor3] = useState('green');
  const [selectedColor4, setSelectedColor4] = useState('yellow');
  const [selectedColor5, setSelectedColor5] = useState('red');

  return (
    <div className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <p className="text-xl text-center mb-8">Explore our best-selling products</p>

      {/* Grid of Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Product 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/images/product1.jpg" // Replace with your product image path
            alt="Product 1"
            className="w-full h-64 object-cover"
            height={300}
            width={400}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Product 1</h3>
            <p className="text-gray-600 mt-2">$19.99</p>
            <div className="flex mt-4 justify-start gap-4">
              <button
                className={`w-8 h-8 rounded-full ${selectedColor1 === 'red' ? 'border-4 border-black' : ''}`}
                style={{ backgroundColor: 'red' }}
                onClick={() => setSelectedColor1('red')}
              />
              <button
                className={`w-8 h-8 rounded-full ${selectedColor1 === 'blue' ? 'border-4 border-black' : ''}`}
                style={{ backgroundColor: 'blue' }}
                onClick={() => setSelectedColor1('blue')}
              />
              <button
                className={`w-8 h-8 rounded-full ${selectedColor1 === 'green' ? 'border-4 border-black' : ''}`}
                style={{ backgroundColor: 'green' }}
                onClick={() => setSelectedColor1('green')}
              />
              <button
                className={`w-8 h-8 rounded-full ${selectedColor1 === 'yellow' ? 'border-4 border-black' : ''}`}
                style={{ backgroundColor: 'yellow' }}
                onClick={() => setSelectedColor1('yellow')}
              />
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/images/product2.jpg" // Replace with your product image path
            alt="Product 2"
            className="w-full h-64 object-cover"
            width={300}
            height={300}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Product 2</h3>
            <p className="text-gray-600 mt-2">$29.99</p>
            <div className="flex mt-4 justify-start gap-4">
              <button
                className={`w-8 h-8 rounded-full ${selectedColor2 === 'red' ? 'border-4 border-black' : ''}`}
                style={{ backgroundColor: 'red' }}
                onClick={() => setSelectedColor2('red')}
              />
              <button
                className={`w-8 h-8 rounded-full ${selectedColor2 === 'blue' ? 'border-4 border-black' : ''}`}
                style={{ backgroundColor: 'blue' }}
                onClick={() => setSelectedColor2('blue')}
              />
              <button
                className={`w-8 h-8 rounded-full ${selectedColor2 === 'green' ? 'border-4 border-black' : ''}`}
                style={{ backgroundColor: 'green' }}
                onClick={() => setSelectedColor2('green')}
              />
              <button
                className={`w-8 h-8 rounded-full ${selectedColor2 === 'yellow' ? 'border-4 border-black' : ''}`}
                style={{ backgroundColor: 'yellow' }}
                onClick={() => setSelectedColor2('yellow')}
              />
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/images/product3.jpg" // Replace with your product image path
            alt="Product 3"
            className="w-full h-64 object-cover"
            height={300}
            width={300}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Product 3</h3>
            <p className="text-gray-600 mt-2">$39.99</p>
            <div className="flex mt-4 justify-start gap-4">
              <button
                className={`w-8 h-8 rounded-full ${selectedColor3 === 'red' ? 'border-4 border-black' : ''}`}
                style={{ backgroundColor: 'red' }}
                onClick={() => setSelectedColor3('red')}
              />
              <button
                className={`w-8 h-8 rounded-full ${selectedColor3 === 'blue' ? 'border-4 border-black' : ''}`}
                style={{ backgroundColor: 'blue' }}
                onClick={() => setSelectedColor3('blue')}
              />
              <button
                className={`w-8 h-8 rounded-full ${selectedColor3 === 'green' ? 'border-4 border-black' : ''}`}
                style={{ backgroundColor: 'green' }}
                onClick={() => setSelectedColor3('green')}
              />
              <button
                className={`w-8 h-8 rounded-full ${selectedColor3 === 'yellow' ? 'border-4 border-black' : ''}`}
                style={{ backgroundColor: 'yellow' }}
                onClick={() => setSelectedColor3('yellow')}
              />
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/images/product4.jpg" // Replace with your product image path
            alt="Product 4"
            className="w-full h-64 object-cover"
            height={200}
            width={200}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Product 4</h3>
            <p className="text-gray-600 mt-2">$49.99</p>
            <div className="flex mt-4 justify-start gap-4">
              <button
                className={`w-8 h-8 rounded-full ${selectedColor4 === 'red' ? 'border-4 border-black' : ''}`}
                style={{ backgroundColor: 'red' }}
                onClick={() => setSelectedColor4('red')}
              />
              <button
                className={`w-8 h-8 rounded-full ${selectedColor4 === 'blue' ? 'border-4 border-black' : ''}`}
                style={{ backgroundColor: 'blue' }}
                onClick={() => setSelectedColor4('blue')}
              />
              <button
                className={`w-8 h-8 rounded-full ${selectedColor4 === 'green' ? 'border-4 border-black' : ''}`}
                style={{ backgroundColor: 'green' }}
                onClick={() => setSelectedColor4('green')}
              />
              <button
                className={`w-8 h-8 rounded-full ${selectedColor4 === 'yellow' ? 'border-4 border-black' : ''}`}
                style={{ backgroundColor: 'yellow' }}
                onClick={() => setSelectedColor4('yellow')}
              />
            </div>
          </div>
        </div>

        {/* Product 5 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/images/product5.jpg" // Replace with your product image path
            alt="Product 5"
            className="w-full h-64 object-cover"
            height={300}
            width={300}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Product 5</h3>
            <p className="text-gray-600 mt-2">$59.99</p>
            <div className="flex mt-4 justify-start gap-4">
              <button
                className={`w-8 h-8 rounded-full ${selectedColor5 === 'red' ? 'border-4 border-black' : ''}`}
                style={{ backgroundColor: 'red' }}
                onClick={() => setSelectedColor5('red')}
              />
              <button
                className={`w-8 h-8 rounded-full ${selectedColor5 === 'blue' ? 'border-4 border-black' : ''}`}
                style={{ backgroundColor: 'blue' }}
                onClick={() => setSelectedColor5('blue')}
              />
              <button
                className={`w-8 h-8 rounded-full ${selectedColor5 === 'green' ? 'border-4 border-black' : ''}`}
                style={{ backgroundColor: 'green' }}
                onClick={() => setSelectedColor5('green')}
              />
              <button
                className={`w-8 h-8 rounded-full ${selectedColor5 === 'yellow' ? 'border-4 border-black' : ''}`}
                style={{ backgroundColor: 'yellow' }}
                onClick={() => setSelectedColor5('yellow')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
