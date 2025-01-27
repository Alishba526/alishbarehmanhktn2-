// "use client"
// import { useState, useEffect } from "react";
// import { Product } from "../../../types/type";
// import Link from "next/link";

// const FavoritesPage = () => {
//   const [favorites, setFavorites] = useState<Product[]>([]);

//   useEffect(() => {
//     const savedFavorites = localStorage.getItem("favorites");
//     if (savedFavorites) {
//       setFavorites(JSON.parse(savedFavorites));
//     }
//   }, []);

//   return (
//     <div className="container mx-auto py-8 px-4">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Your Favorite Products</h1>
//       {favorites.length === 0 ? (
//         <p className="text-center text-gray-500">You don't have any favorite products yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {favorites.map((product) => (
//             <div
//               className="border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
//               key={product._id}
//             >
//               <Link href={`/product/${product.slug.current}`}>
//                 <div className="flex justify-center p-4">
//                   <img
//                     src={product.imageUrl}
//                     alt={product.name}
//                     className="w-full h-48 object-cover rounded-md transition-all duration-300 transform hover:scale-110"
//                   />
//                 </div>
//               </Link>
//               <div className="p-4 text-center">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h2>
//                 <p className="text-gray-500 text-sm mb-2">${product.price.toFixed(2)}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FavoritesPage;
"use client"
import { useState, useEffect } from "react";
import { Product } from "../../../types/type";
import Link from "next/link";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Your Favorite Products💚</h1>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">You don't have any favorite products yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {favorites.map((product) => (
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
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
