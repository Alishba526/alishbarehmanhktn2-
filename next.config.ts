// "@type {import('next').NextConfig}"
// const nextConfig= {
//   images: {
//     domains: ['cdn.sanity.io'], // Add external domains here
//   },
// };
// module.exports = nextConfig;
// // Replace 'your-image-domain.com' with the actual domain of your images









// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       "th.bing.com", // Add your external domains here
//     ],
//   },
// };

// module.exports = nextConfig;
// module.exports = {
//   images: {
//     domains: ['cdn.sanity.io'], // Add other domains if needed
//   },
// };
    // next.config.js
module.exports = {
    images: {
      domains: ['cdn.sanity.io'],  // Allow images from Sanity's CDN
    },
  }
  