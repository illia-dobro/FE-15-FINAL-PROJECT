import styles from "./ProductCard.module.scss";
import { Link, Outlet } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.itemNo}`} className="group">
      <div
        className={
          styles.product_card +
          " aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md xl:aspect-h-8 xl:aspect-w-7"
        }
      >
        <img
          src={product.imageUrls[0]}
          alt={product.imageAlt}
          className="aspect-square h-full w-full object-cover object-center group-hover:opacity-75 "
        />
        <div className="m-6 flex justify-between items-center gap-2 group-hover:bg-[#AC8F78]">
          <h3 className="capitalize truncate text-sm text-gray-700">
            {product.name}
          </h3>
          <p className="text-lg font-medium text-gray-900">
            {product.currentPrice}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
