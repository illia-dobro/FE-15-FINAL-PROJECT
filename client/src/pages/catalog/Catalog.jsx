import { Link, Outlet } from "react-router-dom";

import styles from "./Catalog.module.scss";
import Unique from "../../components/unique";

import { useGetCategoriesQuery } from "../../app/services/catalogApi.js";
import uniqueMainImgUrl2 from "../../assets/unique_main2.jpg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearUserPriceRange } from "../../app/slices/filtersSlice.js";

const Catalog = () => {
  const { data: categories, isSuccess } = useGetCategoriesQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearUserPriceRange());
    };
  }, [dispatch]);

  return (
    <div className={styles.catalog_page}>
      <ul
        className={
          styles.catalog_subnav +
          " mx-auto flex grow justify-center text-center"
        }
      >
        {isSuccess &&
          categories.map((category) => (
            <li key={category.name} className="grow-[0.1]">
              {/*@TODO add 'active' status*/}
              <Link
                to={category.name}
                className="flex justify-center text-[#555555] opacity-40 hover:opacity-100 transition-all py-4 px-2"
              >
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
