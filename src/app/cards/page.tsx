
import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/qurries";
import Link from "next/link";
import { Product } from "../../../types/type";

export default async function Home() {
  const products: Product[] = await sanityFetch({ query: allproducts });

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => {
          // Skip products without a valid slug
          if (!product.slug || !product.slug.current) return null;

          return (
            <div
              className="border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
              key={product._id}
            >
              <Link href={`/product/${product.slug.current}`}>
                <div className="flex justify-center p-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md transition-all duration-300 transform hover:scale-110"
                  />
                </div>
              </Link>
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h2>
                <p className="text-gray-500 text-sm mb-2">${product.price.toFixed(2)}</p>
                <div className="mt-2 flex justify-center items-center space-x-2">
                  <span className="text-red-500 line-through text-sm">$16.40</span>
                  <span className="text-green-500 font-bold text-lg">${product.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-center mt-3 space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
                <Link href={`/product/${product.slug.current}`}>
                  <button
                    className="mt-6 w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-md shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

