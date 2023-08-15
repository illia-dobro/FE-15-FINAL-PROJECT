import ProductCard from "../../components/productCard/index.js";
import styles from "../../components/productCard/ProductCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPriceRangeBounds } from "../../app/slices/filtersSlice.js";
import PropTypes from "prop-types";

const ProductsList = ({ products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const priceRange = products.reduce(
      (accum, product) => {
        if (product.currentPrice < accum.min) accum.min = product.currentPrice;
        if (product.currentPrice > accum.max) accum.max = product.currentPrice;
        return accum;
      },
      {
        min: Infinity,
        max: -Infinity,
      }
    );

    const priceRangeBounds = () =>
      dispatch(
        setPriceRangeBounds({
          min: Math.trunc(priceRange.min),
          max: Math.ceil(priceRange.max),
        })
      );

    priceRangeBounds();
  }, [dispatch, products]);

  const { currentMin, currentMax } = useSelector(
    (state) => state.filters.priceRange
  );

  return (
    <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products
          .filter(
            (product) =>
              product.currentPrice > currentMin &&
              product.currentPrice < currentMax
          )
          .map((product) => (
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
