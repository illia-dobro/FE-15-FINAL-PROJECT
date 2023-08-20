import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import FavoriteBtn from "../../components/buttons/favoriteBtn";
import QuantityBtns from "../../components/buttons/quantityBtns/QuantityBtns";
import Button from "../../components/buttons/button";
import { formatCurrency } from "../../helpers/currencyFormatter";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useCreateAndUpdateCartMutation } from "../../app/services/cartApi";

import {
  updateCart,
  removeFromCart,
  addToCart,
  calculateTotal,
  removeAllOfProduct,
} from "../../app/slices/cartSlice";

import styles from "./shop.module.scss";

function Shop() {
  const [createOrUpdateCart] = useCreateAndUpdateCartMutation();
  const isAuthenticated = useSelector((state) => state.auth.token);
  const items = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.total);
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  const formattedItems = items.map((item) => ({
    product: item.product._id,
    cartQuantity: item.cartQuantity,
  }));

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartState]);

  
    useEffect(() => {
      if (isAuthenticated) {
      console.log("User is authenticated. Update/Create Cart...");
      createOrUpdateCart({ products: formattedItems })
        .unwrap()
        .then((response) => {
          console.log("Cart Update/Create successfully:", response);
          dispatch(updateCart(response));
        })
        .catch((error) => {
          console.error("Error Update/Create cart:", error);
        }); 
      }
    },[]);
  

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
                      handleIncrement={() =>
                        dispatch(addToCart({ product: item.product }))
                      }
                      handleDecrement={() =>
                        dispatch(removeFromCart({ product: item.product }))
                      }
                      count={item.cartQuantity}
                      className={styles.shop__item_quantityBtn}
                    />
                  </div>
                  <div className={styles.shop__item_adidional}>
                    <Button
                      className={styles.shop__item_close}
                      action={() =>
                        dispatch(removeAllOfProduct({ product: item.product }))
                      }
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
