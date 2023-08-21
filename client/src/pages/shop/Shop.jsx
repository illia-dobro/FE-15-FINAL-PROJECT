/* Need to be completed: /

/1. Send Cart to the database if the user had items in the cart before logging in. /
/2. If the user logs in, retrieve the Cart from the database. /
/3. Product Detail Page, quantity buttons . /
/4. For the Server only: Fix the issue where buttons send more quantities than available in the product's quantity. */
/*5. Fix styles */

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import FavoriteBtn from "../../components/buttons/favoriteBtn";
import QuantityBtns from "../../components/buttons/quantityBtns/QuantityBtns";
import Button from "../../components/buttons/button";
import { formatCurrency } from "../../helpers/currencyFormatter";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  useGetCartQuery,
  useAddProductToCartMutation,
  useDeleteProductFromTheCartMutation,
  useDecreaseProductQuantityMutation,
  useCreateAndUpdateCartMutation
} from "../../app/services/cartApi";

import {
  removeFromCart,
  addToCart,
  calculateTotal,
  removeAllOfProduct,
  updateCart,
} from "../../app/slices/cartSlice";

import styles from "./shop.module.scss";

function Shop() {
  const [addProductToDb] = useAddProductToCartMutation();
  const [removeProductFromDb] = useDeleteProductFromTheCartMutation();
  const [decreaseProductFromDb] = useDecreaseProductQuantityMutation();
  const isAuthenticated = useSelector((state) => state.auth.token);
  const items = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const stateCart = useSelector((state) => state.cart);
/* 
  const [createAndUpdateCartMutation] = useCreateAndUpdateCartMutation();
  const { data: cardFromDb, isSuccess } = useGetCartQuery();  */

  /*const formattedItems = items.map((item) => ({
    product: item.product._id,
    cartQuantity: item.cartQuantity,
  }));  */

 useEffect(()=>{
    dispatch(calculateTotal());
  },  [stateCart])

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart({ product: product }));
    if (isAuthenticated) {
      decreaseProductFromDb(product._id)
        .unwrap()
        .then((response) => {
          console.log("Cart Removed Successfully:", response);
        });
    }
  };
  const handleAddTocart = (product) => {
    dispatch(addToCart({ product: product }));
    if (isAuthenticated) {
      addProductToDb(product._id)
        .unwrap()
        .then((response) => {
          console.log("Cart Update Successfully:", response);
        });
    }
  };
  const handleRemoveAllOfProduct = (product) => {
    dispatch(removeAllOfProduct({ product: product }));
    if (isAuthenticated) {
      removeProductFromDb(product._id)
        .unwrap()
        .then((response) => {
          console.log("Cart Removed Successfully:", response);
        })
        .catch((error) => {
          console.log("Cart Failure:", error);
        });
    }
  };

  return (
    <>
      <div className={styles.shop}>
        <div className={styles.shop__container}>
          <h2 className={styles.shop__title}>Your cart</h2>
          <ul className={styles.shop__list}>
            {items.map((item) => (
              <li key={item.product._id} className={styles.shop__item}>
                <a className={styles.shop__item_img}>
                  <img src={item.product.imageUrls[0]} alt="Image"></img>
                </a>
                <div className={styles.shop__item_info}>
                  <div className={styles.shop__item_main}>
                    <a href="#">
                      <h3 className={styles.shop__item_title}>
                        {item.product.name}
                      </h3>
                    </a>
                    <FavoriteBtn></FavoriteBtn>
                    <QuantityBtns
                      handleIncrement={() => handleAddTocart(item.product)}
                      handleDecrement={() => handleRemoveFromCart(item.product)}
                      count={item.cartQuantity}
                      className={styles.shop__item_quantityBtn}
                    />
                  </div>
                  <div className={styles.shop__item_adidional}>
                    <Button
                      className={styles.shop__item_close}
                      action={() => handleRemoveAllOfProduct(item.product)}
                    >
                      x
                    </Button>
                    <div className={styles.shop__item_price}>
                      <small className={styles.shop__item_count}>
                        {item.cartQuantity}x
                      </small>
                      <span className={styles.shop__item_sum}>
                        {formatCurrency(
                          item.cartQuantity * item.product.currentPrice
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {items.length > 0 && (
            <div className={styles.shop__total}>
              <p className={styles.shop__total_text}>Total</p>
              <p className={styles.shop__total_sum}>
                {formatCurrency(totalPrice)}
              </p>
            </div>
          )}
          {items.length > 0 && (
            <Button className={styles.shop__order}>
              <span className={styles.shop__order_text}>Place an order</span>
              <AiOutlineArrowRight className={styles.shop__order_arrow} />
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
export default Shop;
