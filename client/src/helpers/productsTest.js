/* Test */
import ProductTest1Img from "../assets/img/product-test1.jpg"
import ProductTest2Img from "../assets/img/product-test2.jpg"
const products = [
  {
    id: '1',
    name: 'Luxury Moisturizing Cream',
    price: 100,
    description: 'Indulge in the Luxury Moisturizing Cream, enriched with natural ingredients to provide ultimate hydration for your skin.',
    specifications: {
      volume: '50ml',
      ingredients: 'Aqua, Glycerin, Shea Butter, Vitamin E',
      scent: 'Unscented',
    },
    img: ProductTest1Img
  },
  {
    id: '2',
    name: 'Advanced Rejuvenating Serum',
    price: 200,
    description: 'Experience the Advanced Rejuvenating Serum, a powerful formula that diminishes fine lines and wrinkles for a youthful complexion.',
    specifications: {
      volume: '30ml',
      ingredients: 'Aqua, Hyaluronic Acid, Retinol, Peptides',
      scent: 'Light Floral',
    },
    img: ProductTest2Img
  },
];
export default products;