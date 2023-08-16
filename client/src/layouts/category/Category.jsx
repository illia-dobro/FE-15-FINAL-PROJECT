import ProductsList from "../productsList/index.js";
import { useParams } from "react-router-dom";
import Filters from "../../components/filters/index.js";
import { useDispatch, useSelector } from "react-redux";
import {
  clearActiveFilters,
  productTypes,
  setCurrentPriceBound,
} from "../../app/slices/filtersSlice.js";
import { useEffect } from "react";
import { useGetFilteredProductsQuery } from "../../app/services/productApi.js";
import { useGetCategoriesQuery } from "../../app/services/catalogApi.js";
import { findMinAndMax } from "../../helpers/findMinAndMax.js";
import { joinFiltersQuery } from "../../helpers/joinFiltersQuery.js";

const Category = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  dispatch(productTypes(categoryName));

  const { data: categories, isSuccess: isCategoriesSuccess } =
    useGetCategoriesQuery();

  const activeFilters = useSelector((state) => state.filters.activeFilters);
  const queryFilters = joinFiltersQuery(activeFilters);
  const { data: productsData, isSuccess: isProductsSuccess } =
    useGetFilteredProductsQuery(`categories=${categoryName}${queryFilters}`);

  const category =
    isCategoriesSuccess &&
    categories.find((category) => category.name === categoryName);

  useEffect(() => {
    return () => {
      dispatch(clearActiveFilters);
    };
  }, [dispatch]);

  return (
    <>
      <h2 className="text-center text-7xl mx-auto my-4">{category.name}</h2>

      <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
        <img
          src={category.imgUrl}
          alt={"banner"}
          className="w-full h-80 object-cover overflow-hidden rounded-md"
        />
      </div>

      <Filters>
        {isProductsSuccess && <ProductsList products={productsData.products} />}
      </Filters>
    </>
  );
};

export default Category;
