import { useParams } from "react-router-dom";
import products from "../helpers/productsTest";

const Product = () => {
  const { id: productId } = useParams();

  const product = products.find((product) => product.id === productId);
  !product && <div>Product not found</div>;

  return (
    <section className="product">
      <div className="product__flex">
        <div className="product__left">
          {/* slider */}
          <img src={product.img} alt={product.name} />
        </div>
        <div className="product__right">
          
        </div>
      </div>
    </section>
  );
};

export default Product;
