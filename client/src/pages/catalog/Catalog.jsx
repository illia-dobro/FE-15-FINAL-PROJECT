import { Link, Outlet, useLocation } from "react-router-dom";

import styles from "./Catalog.module.scss";
import Unique from "../../components/unique";

import { useGetCategoriesQuery } from "../../app/services/catalogApi.js";
import uniqueMainImgUrl2 from "../../assets/unique_main2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  clearFilters,
  setPriceRangeBounds,
} from "../../app/slices/filtersSlice.js";
import { useGetAllProductsQuery } from "../../app/services/productApi.js";
import { findMinAndMax } from "../../helpers/findMinAndMax.js";
import HeartsLoader from "../../components/heartsLoader/heartsLoader.jsx";

const Catalog = () => {
  const { data: categories, isSuccess: isCategoriesSuccess } = useGetCategoriesQuery();
  const { data: allProducts, isSuccess: isAllProductsSuccess } =
    useGetAllProductsQuery();

  const dispatch = useDispatch();

  const activeCategory = useLocation().pathname.split("/").pop();

  useEffect(() => {
    if (isAllProductsSuccess) {
      const priceRange = findMinAndMax(allProducts);

      dispatch(
        setPriceRangeBounds({
          min: Math.trunc(priceRange.min),
          max: Math.ceil(priceRange.max),
        })
      );
    }

    return () => {
      dispatch(clearFilters());
    };
  }, [allProducts, dispatch, isAllProductsSuccess]);

  return (
    <div className={styles.catalog_page}>
      <ul
        className={
          styles.catalog_subnav +
          " mx-auto flex grow justify-center text-center"
        }
      >
        {isCategoriesSuccess &&
          categories.map((category) => (
            <li key={category.name} className="grow-[0.1]">
              {/*@TODO add 'active' status*/}
              <Link
                to={category.name}
                className={activeCategory === category.name ?"flex justify-center text-[#555555] opacity-90 hover:opacity-100 transition-all py-4 px-2" : "flex justify-center text-[#555555] opacity-40 hover:opacity-100 transition-all py-4 px-2"
                }>
                {category.name}
              </Link>
            </li>
          ))}
      </ul>

      <Outlet />

      <Unique
        className={styles.unique}
        imageUrl={uniqueMainImgUrl2}
        flexDirection="row-reverse"
        content="Each Boltaeva brand product is truly unique - everything is thought out to the smallest detail."
      />
    </div>
  );
};

export default Catalog;
