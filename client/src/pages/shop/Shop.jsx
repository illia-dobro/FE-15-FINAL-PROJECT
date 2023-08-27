/* Need to be completed: /

/1. +++Send Cart to the database if the user had items in the cart before logging in. /
/2. +++If the user logs in, retrieve the Cart from the database. /
/3. +++Product Detail Page, quantity buttons . /
/4. For the Server only: Fix the issue where buttons send more quantities than available in the product's quantity. */
/*5. Fix styles */
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import QuantityBtns from '../../components/buttons/quantityBtns/QuantityBtns';
import Button from '../../components/buttons/button';
import { formatCurrency } from '../../helpers/currencyFormatter';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {
  useAddProductToCartMutation,
  useDeleteProductFromTheCartMutation,
  useDecreaseProductQuantityMutation,
  useGetCartQuery,
} from '../../app/services/cartApi';

import {
  decreaseQty,
  addToCart,
  removeProduct,
  initializeCart,
} from '../../app/slices/cartSlice';

import styles from './shop.module.scss';
import { useEffect } from 'react';
import { toast } from "react-toastify";

function Shop() {
  const [addProductToDb] = useAddProductToCartMutation();
  const [removeProductFromDb] = useDeleteProductFromTheCartMutation();
  const [decreaseProductFromDb] = useDecreaseProductQuantityMutation();

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const { isSuccess: isServerCartSuccess, refetch: refetchServerCart } =
    useGetCartQuery();

  const stateCart = useSelector((state) => state.cart);
  const items = stateCart.products;
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

  return (
    items && (
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
              <Button
                className={styles.shop__order}
              >
                <Link to='/checkout' state={{total: formatCurrency(totalPrice), number: items.length }} className={styles.shop__order_text}>Place an order</Link>
                <AiOutlineArrowRight className={styles.shop__order_arrow} />
              </Button>
            )}
          </div>
        </div>
      </>
    )
  );
}
export default Shop;
