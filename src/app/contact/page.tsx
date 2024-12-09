// Importing required icons from react-icons
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
export default function StatsSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {/* Stats Section */}
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className='font-bold text-6xl'>MY CONTACT</h1>
            <h1 className="title-font font-medium text-xl  classmb-2 text-gray-900">
              Moon hashtag pop-up try-hard offal truffaut
            </h1>

            <div className="leading-relaxed">
              Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.
            </div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
            <p className="leading-relaxed">Users</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
            <p className="leading-relaxed">Subscribes</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
            <p className="leading-relaxed">Downloads</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
            <p className="leading-relaxed">Products</p>
          </div>
        </div>

        {/* Image on the Right */}
        <div className="lg:w-1/2 sm:w-1/3 w-full mt-6 sm:mt-0">
          <Image 
            src="/alishbarehman.jpg" // Replace this with your image URL
            alt="Example"
            className="w-full h-auto rounded-lg"
            width="500"
            height="400"
          />
        </div>

        {/* Contact Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <FaMapMarkerAlt size={48} className="mb-4 mx-auto" />
            <h3 className="font-medium text-xl text-blue-900">Location</h3>
            <p className="leading-relaxed">KARACHI.</p>
          </div>
          <div className="bg-black-100 p-6 rounded-lg text-center">
            <FaPhoneAlt size={48} className="mb-4 mx-auto" />
            <h3 className="font-medium text-xl text-blue-900">Phone</h3>
            <p className="leading-relaxed">03320405516.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <FaEnvelope size={48} className="mb-4 mx-auto" />
            <h3 className="font-medium text-xl text-blue-900">Email</h3>
            <p className="leading-relaxed">alishbarehman526@gmail.com</p>
          </div>
        </div>

        {/* Button at the Bottom */}
        <div className="w-full mt-6 text-center">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-all">
            <p>FIGMA WEBITE COMPLETE </p>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}