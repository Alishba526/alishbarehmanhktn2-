// import { Product } from "../../../types/type"
// import Products from "../productlist/page"




// export const addtocart= (product :Product) =>{
//     const  cart = JSON.parse(localStorage.getItem("cart") || "[]")



//     const exitingindex = cart.findIndex((item: { _id: string }) => item._id === product._id)

// if(exitingindex > -1){
//     cart[exitingindex]
// }
// else{
//     cart.push(product)
// }

//     localStorage.setItem("cart", JSON.stringify(cart))
// }

// export const removefromcart = (productId :string) =>{
//     let cart :Product[]=JSON.parse(localStorage.getItem("cart") || "[]")
//     cart=cart.filter((item) => item._id !== productId)
// localStorage.setItem("cart", JSON.stringify(cart))
// }


// export const unupdateCartQuantity = (productId :string,quantity:number) =>{
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]")
//     const productIndex = cart.findIndex((item: { _id: string }) => item._id === productId)
// if(productIndex > -1){
//     cart[productIndex].quantity = 1

// }

// }
// export const getCartItems = () =>{
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]")
//     return cart  
// }































import { Product } from "../../../types/type";

export const addtocart = (product: Product) => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const existingIndex = cart.findIndex((item: { _id: string }) => item._id === product._id);

  if (existingIndex > -1) {
    // If the item already exists, do nothing or increase quantity if needed
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 }); // Add product with initial quantity 1
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removefromcart = (productId: string) => {
  let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  cart = cart.filter((item) => item._id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const unupdateCartQuantity = (productId: string, action: "increment" | "decrement") => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const productIndex = cart.findIndex((item: { _id: string }) => item._id === productId);

  if (productIndex > -1) {
    if (action === "increment") {
      cart[productIndex].quantity += 1;  // Increment quantity
    } else if (action === "decrement") {
      // Ensure quantity does not go below 1
      if (cart[productIndex].quantity > 1) {
        cart[productIndex].quantity -= 1;  // Decrement quantity
      }
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));  // Save updated cart to localStorage
};

export const getCartItems = () => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  return cart;
};


