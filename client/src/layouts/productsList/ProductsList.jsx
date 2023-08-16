import ProductCard from "../../components/productCard/index.js";
import styles from "../../components/productCard/ProductCard.module.scss";
import PropTypes from "prop-types";

const ProductsList = ({ products }) => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductCard
            key={product.itemNo}
            product={product}
            className="group"
          />
        ))}
      </div>
    </div>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array,
};

export default ProductsList;
