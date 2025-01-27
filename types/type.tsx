
export interface Product {
    quantity: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    inventory: number;
    image: any;
    productName: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    _id: string; // Unique ID
    name: string; // Product name
    title: string; // Title of the product
    price: number; // Product price
    description: string; // Description of the product
    imageUrl: string; // URL of the product image
    slug: {
      _type: "slug"; // Sanity slug type
      current: string; // Current slug value
    };


    

  }
