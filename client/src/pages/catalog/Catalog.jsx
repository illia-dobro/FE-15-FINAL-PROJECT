import { Link, Outlet } from "react-router-dom";

import styles from "./Catalog.module.scss";
import Unique from "../../components/unique/Unique.jsx";
import { useCategoriesQuery } from "../../app/services/api.js";

const Catalog = () => {
  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useCategoriesQuery();

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

      {/*<Unique image={{src: 'https://w.forfun.com/fetch/61/6157e4be3da6483d461345e990a47026.jpeg'}}/>*/}
      <Unique />
    </div>
  );
};

export default Catalog;
