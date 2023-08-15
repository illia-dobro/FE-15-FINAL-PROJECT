import ProductCard from "../../components/productCard/index.js";
import styles from "../../components/productCard/ProductCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPriceRangeBounds } from "../../app/slices/filtersSlice.js";

const ProductsList = ({ products }) => {
    const dispatch = useDispatch();
    const { currentMin, currentMax } = useSelector(
      (state) => state.filters.priceRange
    );

    useEffect(() => {
      const priceRange = products.reduce(
        (accum, product) => {
          if (product.currentPrice < accum.min)
            accum.min = product.currentPrice;
          if (product.currentPrice > accum.max)
            accum.max = product.currentPrice;
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
            min: priceRange.min,
            max: priceRange.max,
          })
        );

      priceRangeBounds();
    }, [dispatch, prod, ucts]);

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
      ,        <ProductCard
                key={product.itemNo}
                product={product}
                className="group"
              />
            ))}
        </div>
      </div>
    );
};

export default ProductsList;
