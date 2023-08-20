
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../app/slices/cartSlice';
import FavoriteBtn from "../../components/buttons/favoriteBtn";
import QuantityBtns from "../../components/buttons/quantityBtns/QuantityBtns";
import Button from "../../components/buttons/button";
import { formatCurrency } from "../../helpers/currencyFormatter";
import { AiOutlineArrowRight } from "react-icons/ai";

import styles from "./shop.module.scss";

function Shop() {
	const items = useSelector((state) => state.cart.cartItems);
	const handleIncrement = (itemId) => {
		// Збільшити кількість товару в корзині за заданим ID
		// Викличте Redux дію для збільшення кількості товару
		dispatch(addToCart({ itemId, cartQuantity: 1 }));
	};

	const handleDecrement = (itemId) => {
		// Зменшити кількість товару в корзині за заданим ID
		// Викличте Redux дію для зменшення кількості товару
		dispatch(removeFromCart(itemId));
	};
	const dispatch = useDispatch();


	const handleRemoveItem = (itemId) => {
		dispatch(removeFromCart(itemId));
	};

	const totalAmount = items.reduce(
		(total, item) => total + item.cartQuantity * item.currentPrice,
		0
	);

	return (
		<div className={styles.shop}>
			<div className={styles.shop__container}>
				<h2 className={styles.shop__title}>Your cart</h2>
				<ul className={styles.shop__list}>
					{items.map((item) => (
						<li key={item._id} className={styles.shop__item}>
							<a className={styles.shop__item_img}>
								<img src={item.imageUrls} alt="Image" />
							</a>
							<div className={styles.shop__item_info}>
								<div className={styles.shop__item_main}>
									<a href="#">
										<h3 className={styles.shop__item_title}>{item.name}</h3>
									</a>
									<FavoriteBtn />
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
											{formatCurrency(item.cartQuantity * item.currentPrice)}
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
							{formatCurrency(totalAmount)}
						</p>
					</div>
				)}
				{items.length > 0 && (
					<Button className={styles.shop__order}>
						<span className={styles.shop__order_text}>Place an order</span>
						<AiOutlineArrowRight className={styles.shop__order_arrow} />
					</Button>
				)}
				<div className="product-recommended__slider">
					{/* Додайте вміст вашого слайдера тут */}
				</div>
			</div>
		</div>
	);
}

export default Shop;
