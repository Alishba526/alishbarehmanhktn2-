// import { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: ['your-image-domain.com'], // Add external domains here
//   },
// };
// export default nextConfig;
// // Replace 'your-image-domain.com' with the actual domain of your images









/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "th.bing.com", // Add your external domains here
    ],
  },
};

module.exports = nextConfig;
