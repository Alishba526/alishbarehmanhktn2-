import React from "react";
import Image from "next/image";
export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-gray-800 leading-tight">
            Welcome to <span className="text-blue-500">ABOUT US</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover a world of quality products tailored for your everyday
            needs. From fashion to electronics, we bring you the best at
            unbeatable prices. Experience seamless shopping with fast delivery
            and excellent customer service.
          </p>
          <button className="bg-blue-500 text-white py-3 px-8 text-lg rounded-lg hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-12 md:mt-0">
          <Image
            src="/alishbarehman.jpg"
            alt="About Us"
            className="w-full h-auto"
            height={500}
            width={500}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 text-center">
        <div className="mb-8">
          <Image
            src="/2h.jpg"
            alt="Additional Image 1"
            className="w-3/4 md:w-full h-auto rounded-lg shadow-md mx-auto"
            height={500}
            width={500}
          />
        </div>
        <div>
          <Image
            src="/0h.jpg"
            alt="Additional Image 2"
            className="w-3/4 md:w-full h-auto rounded-lg shadow-md mx-auto"
            height={500}
            width={500}
          />
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-8">
          Watch Our Story
        </h3>
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/sample-video-id" // Replace with actual video URL
            title="Our Story"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div>
          <Image
            src="/6.jpg"
            alt="Product 1"
            className="w-full h-auto rounded-lg shadow-md"
            height={300}
            width={300}
          />
        </div>
        <div>
          <Image
            src="/5.jpg"
            alt="Product 2"
            className="w-full h-auto rounded-lg shadow-md"
            height={300}
            width={300}
          />
        </div>
        <div>
          <Image
            src="/4.jpg"
            alt="Product 3"
            className="w-full h-auto rounded-lg shadow-md"
            height={300}
            width={300}
          />
        </div>
      </div>

      {/* Icon Section */}
      <div className="max-w-4xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
        <div>
          <Image
            src="https://th.bing.com/th/id/OIP.3KZ2Q_2tqV9CVbUHOw3VngHaHa?w=512&h=512&rs=1&pid=ImageDetMain"
            alt="Icon 1"
            className="w-12 h-12 mx-auto"
            height={48}
            width={48}
          />
          <p className="mt-2 text-sm text-gray-600">Free Shipping</p>
        </div>
        <div>
          <Image
            src="https://th.bing.com/th/id/OIP.9JaBoTDr5QihPHSzIfK_XAHaHa?rs=1&pid=ImageDetMain"
            height={48}
            width={48}
            alt="Icon 2"
            className="w-12 h-12 mx-auto"
          />
          <p className="mt-2 text-sm text-gray-600">24/7 Support</p>
        </div>
        <div>
          <Image
            src="https://th.bing.com/th/id/OIP.S-bX3pJxNwAn4yJXarFdZQHaHa?rs=1&pid=ImageDetMain"
            alt="Icon 3"
            className="w-12 h-12 mx-auto"
            height={48}
            width={48}
          />
          <p className="mt-2 text-sm text-gray-600">Secure Payments</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 text-center">
        <div className="mb-8">
          <Image
            src="/ye.jpg"
            alt="Bottom Image 1"
            className="w-3/4 md:w-full h-auto rounded-lg shadow-md mx-auto"
            height={300}
            width={300}
          />
        </div>
        <div>
          <Image
            src="/girl.jpg"
            alt="Bottom Image 2"
            className="w-3/4 md:w-full h-auto rounded-lg shadow-md mx-auto"
            height={300}
            width={300}
          />
        </div>
      </div>
    </section>
  );
}
