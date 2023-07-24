import { Link, Outlet } from "react-router-dom";

import styles from "./Catalog.module.scss";
import Unique from "../../components/unique/Unique.jsx";

export const categories = [
  {
    id: "1",
    path: "care",
    name: "Care cosmetics",
    img: "https://e0.pxfuel.com/wallpapers/951/581/desktop-wallpaper-mountains-river-valley-landscape-iceland-dual-wide-background-iceland-dual-monitor.jpg",
  },
  {
    id: "2",
    path: "decorative",
    name: "Decorative cosmetics ",
    img: "https://e0.pxfuel.com/wallpapers/647/161/desktop-wallpaper-aurora-borealis-nature-iceland-dual-wide-widescreen-16-9-widescreen.jpg",
  },
  {
    id: "3",
    path: "eyebrow",
    name: "Eyebrow cosmetics",
    img: "https://e1.pxfuel.com/desktop-wallpaper/46/973/desktop-wallpaper-aldeyjarfoss-waterfall-iceland-winter-ultra-backgrounds-for-u-tv-widescreen-ultrawide-laptop-tablet-smartphone-ultra-wide-winter.jpg",
  },
  {
    id: "4",
    path: "accessories",
    name: "Accessories",
    img: "https://e0.pxfuel.com/wallpapers/776/168/desktop-wallpaper-shore-iceland-%E2%9D%A4-for-ultra-tv-%E2%80%A2-wide.jpg",
  },
];

const Catalog = () => {
  return (
    <div className={styles.catalog_page}>
      <ul className={styles.catalog_subnav + " mx-auto flex grow justify-evenly text-center text-gray-500"}>
        {categories.map((category) => (
            <li key={category.name}>
              <Link
                  to={category.path}
                  className="flex justify-center border-b-4 border-transparent hover:text-[#AC8F78] py-4"
              >
                {category.name}
              </Link>
            </li>
        ))}
      </ul>

      <Outlet/>

      {/*<Unique image={{src: 'https://w.forfun.com/fetch/61/6157e4be3da6483d461345e990a47026.jpeg'}}/>*/}
      <Unique/>

      {/*<Footer/>*/}
    </div>
  );
};

export default Catalog;
