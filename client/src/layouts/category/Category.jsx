import ProductsList from "../productsList/index.js";
import { useParams } from "react-router-dom";
import Filters from "../../components/filters/index.js";
import { useDispatch, useSelector } from "react-redux";
import {
  productTypes,
  setProductsAndPagesQty,
} from "../../app/slices/filtersSlice.js";
import { useGetFilteredProductsQuery } from "../../app/services/productApi.js";
import { useGetCategoriesQuery } from "../../app/services/catalogApi.js";
import Pagination from "../../components/pagination/index.js";
import HeartsLoader from "../../components/heartsLoader/heartsLoader.jsx";
import { useEffect } from "react";

const Category = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();

  const { data: categories, isSuccess: isCategoriesSuccess } =
    useGetCategoriesQuery();

  const filtersQuery = useSelector((state) => state.filters.filtersQuery);
  const { data: productsData, isSuccess: isProductsSuccess } =
    useGetFilteredProductsQuery(`categories=${categoryName}${filtersQuery}`);

  const perPage = useSelector((state) => state.filters.pagination.perPage);
  const startPage = useSelector((state) => state.filters.pagination.startPage);

  const { data: paginatedProductsData, isSuccess: isPaginatedProductsSuccess } =
    useGetFilteredProductsQuery(
      `categories=${categoryName}${filtersQuery}&perPage=${perPage}&startPage=${startPage}`
    );

  const category =
    isCategoriesSuccess &&
    categories.find((category) => category.name === categoryName);

  useEffect(() => {
    dispatch(productTypes(categoryName));
    dispatch(setProductsAndPagesQty(productsData?.productsQuantity));
  }, [dispatch, categoryName, isProductsSuccess, productsData]);

  return isPaginatedProductsSuccess ? (
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
        {isPaginatedProductsSuccess ? (
          <ProductsList products={paginatedProductsData.products} />
        ) : (
          <HeartsLoader wrapperClass="hearts" />
        )}
        <Pagination />
      </Filters>
    </>
  ) : (
    <HeartsLoader wrapperClass="hearts" />
  );
};

export default Category;
