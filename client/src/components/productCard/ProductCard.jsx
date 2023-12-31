import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../helpers/currencyFormatter.js";
import { useState } from "react";
import FavoriteBtn from "../buttons/favoriteBtn/index.js";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, initializeCart } from "../../app/slices/cartSlice.js";
import { useAddProductToCartMutation } from "../../app/services/cartApi.js";

import { BsCartCheck, BsCartPlus } from "react-icons/bs";
import productApi from "../../app/services/productApi.js";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isActionsShown, setActionsShown] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [addProductToDb] = useAddProductToCartMutation();

  const cart = useSelector((state) => state.cart.products);
  const inCart = cart.find((item) => item.product._id === product._id);

  const handleAddToCart = async (event, product) => {
    if (isLoggedIn) {
      const { data: responseCart } = await addProductToDb(product._id);
      dispatch(initializeCart(responseCart.products));

      return;
    }
    dispatch(addToCart({ product: product, cartQuantity: 1 }));
  };

  return (
    <div
      className="group relative overflow-hidden"
      onMouseEnter={() => setActionsShown(true)}
      onMouseLeave={() => setActionsShown(false)}
    >
      {!product?.cartQuantity && (isActionsShown || inCart) && (
        <div className="absolute top-0 rounded-t-md w-full p-2 flex justify-between bg-gray-50/[0.5]">
          {inCart ? (
            <Link to={`/shop`}>
              <BsCartCheck size={36} />
            </Link>
          ) : (
            <BsCartPlus
              onClick={(e) => handleAddToCart(e, product)}
              size={36}
              className="cursor-pointer"
            />
          )}
          {isLoggedIn && !inCart && (
            <FavoriteBtn id={product._id} isText={false} size={36} />
          )}
        </div>
      )}
      <Link
        to={`/product/${product.itemNo}`}
        className={!product.quantity && "grayscale"}
      >
        {product?.cartQuantity > 1 && (
          <div className="absolute top-0 right-0 w-1/5 aspect-square bg-[#555555] rounded-md flex flex-col justify-center text-center">
            <span className="text-[#eee4da]">{product?.cartQuantity}</span>
          </div>
        )}{" "}
        <div
          className={
            styles.product_card +
            " aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md xl:aspect-h-8 xl:aspect-w-7"
          }
        >
          <img
            src={product.imageUrls[0]}
            alt={product.imageAlt}
            className="aspect-square h-full w-full object-cover object-center"
          />
          <div className="lg:h-[80px] lg:p-4 p-6 flex justify-between items-center gap-2  text-[#555555] group-hover:bg-[#d6cdc4]">
            <h3 className="capitalize line-clamp-3 text-xl md:text-lg lg:text-sm">
              {product.name}
            </h3>
            <p className="text-lg font-semibold text-center">
              {product.quantity
                ? formatCurrency(product.currentPrice)
                : "Out of stock"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
