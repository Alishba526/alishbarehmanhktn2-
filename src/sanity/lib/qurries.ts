// import { defineQuery } from "next-sanity";




// // export const allproducts1 =(`*[_type == "product"]{
// //   _id,
// //   name,
// //   description,
// //   price,
// //   discountPercentage,
// //   "imageUrl": productImage.asset->url 
// // }`);
// export const allproducts =(`*[_type == 'product'][0..7]{
//     _id,
//     name,
//     description,
//     price,
//     discountPercentage,
//     "imageUrl": productImage.asset->url 
//   }`);












export const allproducts = `
 *[_type == "product"]{
  _id,
  name,
  title,
  price,
  description,
  "imageUrl": productImage.asset->url,
  slug
}

`;
// export const allproducts = `
// *[_type == "product"][0]{
//   _id,
//   name,
//   title,
//   price,
//   description,
//   "imageUrl": productImage.asset->url,
//   slug
// }`
