import ProductsList from "../productsList/index.js";
import { useParams } from "react-router-dom";
import Filters from "../../components/filters/index.js";
import { useCategoriesQuery } from "../../app/services/api.js";
import { useDispatch, useSelector } from "react-redux";
import { productTypes } from "../../app/slices/filtersSlice.js";
import { useEffect } from "react";
import { useGetCategoryProductsQuery } from "../../app/services/productApi.js";

const Category = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const activeFilters = useSelector((state) => state.filters.activeFilters);

  function createFilterQuery(filters) {
    let query = "";

    for (const property in filters) {
      query += `&${property}=${filters[property]}`;
    }
    return query;
  }

  const queryFilters = createFilterQuery(activeFilters);

  console.log(queryFilters);

  // @TODO: rewrite using useQueryState
  const { data: categories, isSuccess: isCategoriesSuccess } =
    useCategoriesQuery();

  const { data: productsData, isSuccess: isProductsSuccess } =
    useGetCategoryProductsQuery(
      `filter?categories=${categoryName}${queryFilters}`
    );

  const category =
    isCategoriesSuccess &&
    categories.find((category) => category.name === categoryName);

  useEffect(() => {
    if (isProductsSuccess) {
      dispatch(productTypes(productsData.products));
    }
  }, [dispatch, isProductsSuccess, productsData]);

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
