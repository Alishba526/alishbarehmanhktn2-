"use client";
import { useState, useEffect } from "react";
import { Product } from "../../../../types/type";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { addtocart } from "@/app/action/actions";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
interface ProductPageProps {
  params: { slug: string };
}

// Fetch product data from Sanity
async function fetchProduct(slug: string): Promise<Product | null> {
  // Assume client.fetch is defined elsewhere to fetch data from Sanity
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      title,
      description,
      price,
      "imageUrl": productImage.asset->url,
      slug
    }`,
    { slug }
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [isFavorited, setIsFavorited] = useState(false); // State for favorites

  // Fetch product on component mount
  useEffect(() => {
    fetchProduct(slug).then((data) => {
      setProduct(data);

      // Check if the product is already in the favorites
      const savedFavorites = localStorage.getItem("favorites");
      if (savedFavorites) {
        const favorites: Product[] = JSON.parse(savedFavorites);
        const isFavorite = favorites.some((fav) => fav._id === data?._id);
        setIsFavorited(isFavorite);
      }
    });
  }, [slug]);

  // Handle add to cart
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      title: `${product.title} added to cart`,
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
    });
    addtocart(product);
  };

  // Handle toggle favorite
  const handleFavoriteToggle = () => {
    setIsFavorited((prev) => !prev);

    // Get current favorites from localStorage
    const savedFavorites = localStorage.getItem("favorites");
    let favorites: Product[] = savedFavorites ? JSON.parse(savedFavorites) : [];

    if (isFavorited) {
      // Remove product from favorites
      favorites = favorites.filter((fav) => fav._id !== product?._id);
    } else {
      // Add product to favorites
      if (product) favorites.push(product);
    }

    // Save the updated favorites list to localStorage
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold text-gray-600">Product not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square flex items-center justify-center bg-gray-100 rounded-lg shadow-lg">
          (
          <Image
            src={product.imageUrl}
            alt={product.title}
            height={500}
            width={500}
          />
          )
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            <p className="mt-4 text-2xl font-semibold text-blue-600">
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button
            className="mt-6 w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-md shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={(e) => handleAddToCart(e, product)}
          >
            Add to Cart
          </button>

          {/* Favorite Heart Icon */}
          <div className="mt-4">
            <HeartIcon
              className={`w-6 h-6 cursor-pointer ${isFavorited ? "text-red-500" : "text-gray-500"}`}
              onClick={handleFavoriteToggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


