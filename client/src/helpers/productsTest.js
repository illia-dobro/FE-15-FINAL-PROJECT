/* Test */
import ProductTest1Img from "../assets/img/product-test1.jpg"
import ProductTest2Img from "../assets/img/product-test2.jpg"
import ProductTest3Img from "../assets/img/product-test3.jpg"
import ProductTest4Img from "../assets/img/product-test4.jpg"
const productsTest = [
  {
    _id: '1',
    name: 'Luxury Moisturizing Cream',
    currentPrice: 100,
    myCustomParam: 'Indulge in the Luxury Moisturizing Cream, enriched with natural ingredients to provide ultimate hydration for your skin.',
    categories:"cream",
    imageUrl:[
      {
        original: ProductTest3Img,
        thumbnail: ProductTest3Img,
      },
      {
        original:  ProductTest4Img,
        thumbnail:  ProductTest4Img
      },
    ],
    quantity:22,
    enabled:true,
    productUrl:"testcream2",
    brand:"Lancome"
  },
  {
    _id: '2',
    name: 'Advanced Rejuvenating Serum',
    currentPrice: 200,
    myCustomParam: 'Experience the Advanced Rejuvenating Serum, a powerful formula that diminishes fine lines and wrinkles for a youthful complexion.',
    categories:"cream",
    imageUrl:[
      {
        original: ProductTest2Img,
        thumbnail: ProductTest2Img,
      },
      {
        original:  ProductTest1Img,
        thumbnail:  ProductTest1Img
      },
    ],
    quantity:5,
    enabled:true,
    productUrl:"testcream1",
    brand:"Vichy"
  },
];
export default productsTest;

