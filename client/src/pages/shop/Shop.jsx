import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import QuantityBtns from "../../components/buttons/quantityBtns/QuantityBtns";
import Button from "../../components/buttons/button";
import { formatCurrency } from "../../helpers/currencyFormatter";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  useAddProductToCartMutation,
  useDeleteProductFromTheCartMutation,
  useDecreaseProductQuantityMutation,
  useGetCartQuery,
} from "../../app/services/cartApi";

import {
  decreaseQty,
  addToCart,
  removeProduct,
  initializeCart,
} from "../../app/slices/cartSlice";

import styles from "./shop.module.scss";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Shop() {
  const [addProductToDb] = useAddProductToCartMutation();
  const [removeProductFromDb] = useDeleteProductFromTheCartMutation();
  const [decreaseProductFromDb] = useDecreaseProductQuantityMutation();

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const { isSuccess: isServerCartSuccess, refetch: refetchServerCart } =
    useGetCartQuery();

  const items = useSelector((state) => state.cart.products);
  const totalPrice = items.reduce((total, product) => {
    return total + product.product.currentPrice * product.cartQuantity;
  }, 0);

  useEffect(() => {
    const refetchOnMount = async () => {
      const { data: updatedCart } = await refetchServerCart();
      if (isServerCartSuccess) {
        dispatch(initializeCart(updatedCart.products));
      }
    };
    if (isLoggedIn) refetchOnMount();
  }, []);

  const handleDecreaseQty = async (product) => {
    if (isLoggedIn) {
      const { data: responseCart } = await decreaseProductFromDb(product._id);
      dispatch(initializeCart(responseCart.products));
      return;
    }
    dispatch(decreaseQty({ product: product }));
  };
  const handleIncreaseQty = async ({ product, cartQuantity }) => {
    if (isLoggedIn) {
      if (product.quantity > cartQuantity) {
        const { data: responseCart } = await addProductToDb(product._id);
        dispatch(initializeCart(responseCart.products));
      } else {
        toast("We dont have more");
      }
      return;
    }
    dispatch(addToCart({ product: product, cartQuantity: 1 }));
  };
  const handleRemove = async (product) => {
    if (isLoggedIn) {
      const { data: responseCart } = await removeProductFromDb(product._id);
      dispatch(initializeCart(responseCart.products));
      return;
    }
    dispatch(removeProduct({ product: product }));
  };

  console.log(items);

  return (
    items && (
      <>
        <div className={`${styles.shop} ${!items.length && 'flex'} `}>
          <div className="px-4 mx-auto w-full self-center pb-2 md:w-4/5 lg:w-3/4 xl:w-2/3">
            <h2 className={styles.shop__title}>
              {items.length
                ? "Nice choice! Lets place an order"
                : "Your cart is empty. Add some products to place an order"}
            </h2>
            <ul className={styles.shop__list}>
              {items.map((item) => (
                <li key={item.product._id} className={styles.shop__item}>
                  <Link
                    to={`/product/${item.product.itemNo}`}
                    className={styles.shop__item_img}
                  >
                    <img
                      src={item.product.imageUrls[0]}
                      alt="Image"
                      className={styles.shop__item_img_object}
                    ></img>
                  </Link>
                  <div className={styles.shop__item_info}>
                    <div className={styles.shop__item_main}>
                      <Link to={`/product/${item.product.itemNo}`}>
                        <h3 className={styles.shop__item_title}>
                          {item.product.name}
                        </h3>
                      </Link>
                      <QuantityBtns
                        handleIncrement={() => handleIncreaseQty(item)}
                        handleDecrement={() => handleDecreaseQty(item.product)}
                        count={item.cartQuantity}
                        className={styles.shop__item_quantityBtn}
                      />
                    </div>
                    <div className={styles.shop__item_adidional}>
                      <Button
                        className={styles.shop__item_close}
                        action={() => handleRemove(item.product)}
                      >
                        x
                      </Button>
                      <div className={styles.shop__item_price}>
                        {item.cartQuantity > 1 && (
                          <small className={styles.shop__item_count}>
                            {`${formatCurrency(
                              item.product.currentPrice
                            )} for 1 item`}
                          </small>
                        )}
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
              <Link
                to="/checkout"
                state={{
                  total: formatCurrency(totalPrice),
                  number: items.length,
                }}
                className={styles.shop__order}
              >
                <span>Place an order</span>
                <AiOutlineArrowRight className={styles.shop__order_arrow} />
              </Link>
            )}
          </div>
        </div>
      </>
    )
  );
}
export default Shop;
