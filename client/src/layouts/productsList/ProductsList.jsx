import ProductCard from "../../components/productCard/index.js";
import PropTypes from "prop-types";

const ProductsList = ({
  products,
  cols = 1,
  colsSm = 2,
  colsLg = 3,
  colsXl = 4,
}) => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
      <div
        className={`grid grid-cols-${cols} gap-x-6 gap-y-10 sm:grid-cols-${colsSm} lg:grid-${colsLg} xl:grid-cols-${colsXl} xl:gap-x-8`}
      >
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
