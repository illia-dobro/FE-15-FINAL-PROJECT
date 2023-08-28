import styles from "./ProductCard.module.scss";
import { Link, Outlet } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.itemNo}`} className="group">
      <div
        className={
          styles.product_card +
          " aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md xl:aspect-h-8 xl:aspect-w-7 relative"
        }
      >
        {product?.cartQuantity && (
          <div className="absolute top-0 right-0 w-1/5 aspect-square bg-[#555555] rounded-md flex flex-col justify-center text-center">
            <span className="text-[#eee4da]">{product?.cartQuantity}</span>
          </div>
        )}
        <img
          src={product.imageUrls[0]}
          alt={product.imageAlt}
          className="aspect-square h-full w-full object-cover object-center group-hover:opacity-75 "
        />
        <div className="lg:h-[80px] lg:p-4 p-6 flex justify-between items-center gap-2  text-[#555555] group-hover:bg-[#d6cdc4]">
          <h3 className="capitalize line-clamp-3 text-xl md:text-lg lg:text-sm">
            {product.name}
          </h3>
          <p className="text-lg font-semibold">{`$${product.currentPrice}`}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
