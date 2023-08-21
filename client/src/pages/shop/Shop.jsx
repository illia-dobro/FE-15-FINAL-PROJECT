import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity } from '../../app/slices/cartSlice';
import FavoriteBtn from '../../components/buttons/favoriteBtn';
import QuantityBtns from '../../components/buttons/quantityBtns/QuantityBtns';
import Button from '../../components/buttons/button';
import { formatCurrency } from '../../helpers/currencyFormatter';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import styles from './shop.module.scss';

function Shop() {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();

	const handleIncrement = (itemId) => {
		const currentItem = cartItems.find((item) => item._id === itemId);
		if (currentItem) {
			dispatch(updateCartItemQuantity({ itemId, quantity: currentItem.cartQuantity + 1 }));
		}
	};

	const handleDecrement = (itemId) => {
		const currentItem = cartItems.find((item) => item._id === itemId);
		if (currentItem && currentItem.cartQuantity > 1) {
			dispatch(updateCartItemQuantity({ itemId, quantity: currentItem.cartQuantity - 1 }));
		} else if (currentItem) {
			dispatch(removeFromCart(itemId));
		}
	};

	const handleRemoveItem = (itemId) => {
		const currentItem = cartItems.find((item) => item._id === itemId);
		if (currentItem) {
			dispatch(removeFromCart(itemId));
		}
	};

	const totalAmount = cartItems.reduce(
		(total, item) => total + item.cartQuantity * item.currentPrice,
		0
	);

	return (
		<div className={styles.shop}>
			<div className={styles.shop__container}>
				<h2 className={styles.shop__title}>Your cart</h2>
				{cartItems.length === 0 ? (
					<p className={styles.shop__empty}>Your cart is empty</p>
				) : (
					<ul className={styles.shop__list}>
						{cartItems.map((item) => (
							<li key={item._id} className={styles.shop__item}>
								<Link
									to={`/product/${item._id}`}
									className={styles.shop__item_img}
								>
									<img
										src={item.imageUrls ? item.imageUrls[0] : ''}
										alt="Image"
									/>
								</Link>
								<div className={styles.shop__item_info}>
									<div className={styles.shop__item_main}>
										<Link to={`/product/${item._id}`}>
											<h3 className={styles.shop__item_title}>{item.name}</h3>
										</Link>
										<FavoriteBtn id={item._id} />
										<QuantityBtns
											handleIncrement={() => handleIncrement(item._id)}
											handleDecrement={() => handleDecrement(item._id)}
											count={item.cartQuantity}
											className={styles.shop__item_quantityBtn}
										/>
									</div>
									<div className={styles.shop__item_adidional}>
										<button
											className={styles.shop__item_close}
											onClick={() => handleRemoveItem(item._id)}
										>
											x
										</button>
										<div className={styles.shop__item_price}>
											<small className={styles.shop__item_count}>
												{item.cartQuantity}x
											</small>
											<span className={styles.shop__item_sum}>
												{formatCurrency(
													item.cartQuantity * item.currentPrice
												)}
											</span>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				)}
				{cartItems.length > 0 && (
					<div className={styles.shop__total}>
						<p className={styles.shop__total_text}>Total</p>
						<p className={styles.shop__total_sum}>
							{formatCurrency(totalAmount)}
						</p>
					</div>
				)}
				{cartItems.length > 0 && (
					<Link to="/checkout" className={styles.shop__order}>
						<span className={styles.shop__order_text}>Place an order</span>
						<AiOutlineArrowRight className={styles.shop__order_arrow} />
					</Link>
				)}
				<div className="product-recommended__slider">
					{/* Додайте вміст вашого слайдера тут */}
				</div>
			</div>
		</div>
	);
}

export default Shop;
